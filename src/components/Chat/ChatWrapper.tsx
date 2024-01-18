import ChatInput from "./ChatInput";
import Messages from "./Messages";

const ChatWrapper = () => {
  return (
    <div className="relative min-h-4 bg-zinc-50 flex divide-y divide-zinc-200 flex-col justify-between">
      <div className="flex-1 justify-between flex flex-col mb-28">
        <Messages />
      </div>

      <ChatInput />
    </div>
  );
};

export default ChatWrapper;
