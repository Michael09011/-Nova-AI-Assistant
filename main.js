const { app, BrowserWindow, Menu, ipcMain, clipboard } = require('electron');
const path = require('path');
const Store = require('electron-store');
const AIModels = require('./ai-models');

const isMac = process.platform === 'darwin';
const store = new Store();
const aiModels = new AIModels();

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1150,
    minHeight: 720,
    title: 'Nova AI Assistant',
    icon: path.join(__dirname, 'assets', 'icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'design', 'Dashboard.html'));

  const menuTemplate = [
    {
      label: 'File',
      submenu: [
        { role: 'quit' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectAll' }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Dashboard',
          click: () => {
            const win = BrowserWindow.getAllWindows()[0];
            if (win) win.loadFile(path.join(__dirname, 'design', 'Dashboard.html'));
          }
        },
        {
          label: 'Workspace',
          click: () => {
            const win = BrowserWindow.getAllWindows()[0];
            if (win) win.loadFile(path.join(__dirname, 'design', 'workspace.html'));
          }
        },
        {
          label: 'Settings',
          click: () => {
            const win = BrowserWindow.getAllWindows()[0];
            if (win) win.loadFile(path.join(__dirname, 'design', 'setting.html'));
          }
        },
        { type: 'separator' },
        { role: 'reload' },
        { role: 'toggledevtools' }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}

// IPC 핸들러 등록
ipcMain.handle('load-settings', async () => {
  const defaultSettings = {
    openai: { key: '', model: 'gpt-4o' },
    anthropic: { key: '', model: 'claude-3-5-sonnet-20241022' },
    google: { key: '', model: 'gemini-2.0-flash' },
    defaultModel: '',
    autoLaunch: false,
    voiceRecognition: false
  };

  const savedSettings = store.get('settings', defaultSettings);
  return savedSettings;
});

ipcMain.handle('save-settings', async (event, settings) => {
  store.set('settings', settings);
  try {
    aiModels.initializeClients(settings);
    return { success: true, message: '설정이 저장되었습니다.' };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

// AI 모델로 메시지 전송
ipcMain.handle('send-message', async (event, { message, model }) => {
  try {
    const settings = store.get('settings');
    let result;

    if (model === 'openai' || model === 'default-openai') {
      result = await aiModels.sendToOpenAI(message, settings.openai?.model);
    } else if (model === 'anthropic' || model === 'default-anthropic') {
      result = await aiModels.sendToAnthropic(message, settings.anthropic?.model);
    } else if (model === 'google' || model === 'default-google') {
      result = await aiModels.sendToGoogle(message, settings.google?.model);
    } else {
      return { error: '유효하지 않은 모델입니다.' };
    }

    return { success: true, response: result.response };
  } catch (error) {
    console.error('메시지 전송 실패:', error);
    return { error: error.message };
  }
});

// 클립보드 기능 IPC 핸들러
ipcMain.handle('clipboard-read-text', async () => {
  try {
    return clipboard.readText();
  } catch (error) {
    console.error('클립보드 읽기 실패:', error);
    return '';
  }
});

ipcMain.handle('clipboard-write-text', async (event, text) => {
  try {
    clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('클립보드 쓰기 실패:', error);
    return false;
  }
});

app.whenReady().then(() => {
  // 저장된 설정 로드 및 AI 클라이언트 초기화
  const savedSettings = store.get('settings');
  if (savedSettings) {
    try {
      aiModels.initializeClients(savedSettings);
    } catch (error) {
      console.error('AI 클라이언트 초기화 실패:', error);
    }
  }
  
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit();
  }
});
