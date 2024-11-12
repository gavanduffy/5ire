import { IChatContext } from '../types';
import { ProviderType } from '../../providers/types';
import AnthropicChatService from './AnthropicChatService';
import AzureChatService from './AzureChatService';
import OllamaChatService from './OllamaChatService';
import OpenAIChatService from './OpenAIChatService';
import GoogleChatService from './GoogleChatService';
import BaiduChatService from './BaiduChatService';
import ChatBroChatService from './ChatBroChatService';
import MoonshotChatService from './MoonshotChatService';
import FireChatService from './FireChatService';
import DoubaoChatService from './DoubaoChatService';
import GrokChatService from './GrokChatService';

export default function createService(
  providerName: ProviderType,
  chatCtx: IChatContext
) {
  switch (providerName) {
    case 'Anthropic':
      return new AnthropicChatService(chatCtx);
    case 'OpenAI':
      return new OpenAIChatService(chatCtx);
    case 'Azure':
      return new AzureChatService(chatCtx);
    case 'Google':
      return new GoogleChatService(chatCtx);
    case 'Baidu':
      return new BaiduChatService(chatCtx);
    case 'Moonshot':
      return new MoonshotChatService(chatCtx);
    case 'Ollama':
      return new OllamaChatService(chatCtx);
    case 'ChatBro':
      return new ChatBroChatService(chatCtx);
    case '5ire':
      return new FireChatService(chatCtx);
    case 'Doubao':
      return new DoubaoChatService(chatCtx);
    case 'Grok':
      return new GrokChatService(chatCtx);
    default:
      throw new Error(`Invalid provider:${providerName}`);
  }
}
