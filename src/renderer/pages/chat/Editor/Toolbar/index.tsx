import { Toolbar } from '@fluentui/react-components';
import useChatContext from 'hooks/useChatContext';
import ModelCtrl from './ModelCtrl';
import PromptCtrl from './PromptCtrl';
import TemperatureCtrl from './TemperatureCtrl';
import MaxTokensCtrl from './MaxTokensCtrl';
import ImgCtrl from './ImgCtrl';
import StreamCtrl from './StreamCtrl';
import KnowledgeCtrl from './KnowledgeCtrl';

export default function EditorToolbar({
  onConfirm,
}: {
  onConfirm: () => void;
}) {
  const ctx = useChatContext();
  const provider = ctx.getProvider();
  const chat = ctx.getActiveChat();

  return (
    <div className="py-1.5 bg-brand-surface-1 relative">
      <Toolbar
        aria-label="Default"
        size="small"
        className="flex items-center gap-3 ml-2 editor-toolbar"
      >
        <ModelCtrl ctx={ctx} chat={chat} />
        <PromptCtrl ctx={ctx} chat={chat} />
        <KnowledgeCtrl ctx={ctx} chat={chat} />
        <MaxTokensCtrl ctx={ctx} chat={chat} onConfirm={onConfirm} />
        <TemperatureCtrl ctx={ctx} chat={chat} />
        <ImgCtrl ctx={ctx} chat={chat} />

        {provider.chat.options.streamCustomizable && (
          <StreamCtrl ctx={ctx} chat={chat} />
        )}
      </Toolbar>
    </div>
  );
}
