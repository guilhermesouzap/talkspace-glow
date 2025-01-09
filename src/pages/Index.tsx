import { ChatSidebar } from "@/components/ChatSidebar";
import { ChatContent } from "@/components/ChatContent";

const Index = () => {
  return (
    <div className="flex h-screen bg-black text-white">
      <ChatSidebar />
      <ChatContent />
    </div>
  );
};

export default Index;