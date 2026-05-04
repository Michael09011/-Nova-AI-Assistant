# Nova AI Assistant

Cross-platform AI assistant desktop app scaffolding for macOS (Universal) and Windows.

## 폴더 구조

- `design/` - 기존 디자인 화면 HTML 및 디자인 리소스
- `assets/` - 앱 아이콘 및 이미지 리소스
- `main.js` - Electron 메인 프로세스
- `preload.js` - 안전한 프리로드 스크립트
- `package.json` - 앱 실행 및 패키징 설정

## 실행 방법

```bash
cd /Users/michael/Workspace/ai_assistant
npm install
npm run start
```

## 빌드 방법

macOS:

```bash
npm run dist
```

Windows:

```bash
npm run dist
```

빌드 결과는 `dist/` 폴더에 생성됩니다.

## 아이콘 파일

- `assets/icon-1024.png`
- `assets/icon-512.png`
- `assets/icon.png`
- `assets/icon.ico`
- `assets/icon.icns`
- `assets/icon.svg`

macOS 패키징에는 `assets/icon.icns`, Windows에는 `assets/icon.ico`가 사용됩니다.

## 참고

기존 디자인 HTML은 `design/Dashboard.html`, `design/workspace.html`, `design/setting.html`에서 열립니다.
