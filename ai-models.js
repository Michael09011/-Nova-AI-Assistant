/**
 * AI 모델 통신 모듈
 * OpenAI, Anthropic, Google Gemini와의 통신을 담당합니다.
 */

class AIModels {
  constructor() {
    this.openai = null;
    this.anthropic = null;
    this.google = null;
  }

  /**
   * OpenAI API를 사용하여 메시지 전송
   */
  async sendToOpenAI(message, model) {
    if (!this.openai) {
      throw new Error('OpenAI 클라이언트가 초기화되지 않았습니다.');
    }

    try {
      const response = await this.openai.chat.completions.create({
        model: model || 'gpt-4o',
        messages: [
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 2048,
        temperature: 0.7
      });

      return {
        success: true,
        response: response.choices[0].message.content,
        model: 'OpenAI'
      };
    } catch (error) {
      throw new Error(`OpenAI 오류: ${error.message}`);
    }
  }

  /**
   * Anthropic Claude API를 사용하여 메시지 전송
   */
  async sendToAnthropic(message, model) {
    if (!this.anthropic) {
      throw new Error('Anthropic 클라이언트가 초기화되지 않았습니다.');
    }

    try {
      const response = await this.anthropic.messages.create({
        model: model || 'claude-3-5-sonnet-20241022',
        max_tokens: 2048,
        messages: [
          {
            role: 'user',
            content: message
          }
        ]
      });

      return {
        success: true,
        response: response.content[0].text,
        model: 'Anthropic Claude'
      };
    } catch (error) {
      throw new Error(`Anthropic 오류: ${error.message}`);
    }
  }

  /**
   * Google Gemini API를 사용하여 메시지 전송
   */
  async sendToGoogle(message, model) {
    if (!this.google) {
      throw new Error('Google Gemini 클라이언트가 초기화되지 않았습니다.');
    }

    try {
      const generativeModel = this.google.getGenerativeModel({ 
        model: model || 'gemini-2.0-flash' 
      });
      
      const result = await generativeModel.generateContent({
        contents: [
          {
            role: 'user',
            parts: [{ text: message }]
          }
        ]
      });

      return {
        success: true,
        response: result.response.text(),
        model: 'Google Gemini'
      };
    } catch (error) {
      throw new Error(`Google Gemini 오류: ${error.message}`);
    }
  }

  /**
   * 클라이언트 초기화
   */
  initializeClients(settings) {
    try {
      // OpenAI 초기화
      if (settings.openai?.key) {
        const { OpenAI } = require('openai');
        this.openai = new OpenAI({ apiKey: settings.openai.key });
      }

      // Anthropic 초기화
      if (settings.anthropic?.key) {
        const Anthropic = require('@anthropic-ai/sdk');
        this.anthropic = new Anthropic({ apiKey: settings.anthropic.key });
      }

      // Google Gemini 초기화
      if (settings.google?.key) {
        const { GoogleGenerativeAI } = require('@google/generative-ai');
        this.google = new GoogleGenerativeAI(settings.google.key);
      }

      return {
        openai: !!this.openai,
        anthropic: !!this.anthropic,
        google: !!this.google
      };
    } catch (error) {
      console.error('AI 클라이언트 초기화 실패:', error);
      throw error;
    }
  }
}

module.exports = AIModels;
