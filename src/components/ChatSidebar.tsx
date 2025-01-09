import { useState } from "react";
import { Search, Menu } from "lucide-react";

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
}

const sampleChats: Chat[] = [
  {
    id: 1,
    name: "Alice Johnson",
    lastMessage: "Hey! How's it going?",
    time: "12:30 PM"
  },
  {
    id: 2,
    name: "Bob Smith",
    lastMessage: "Can we meet tomorrow?",
    time: "11:45 AM"
  },
  {
    id: 3,
    name: "Carol White",
    lastMessage: "The project looks great!",
    time: "Yesterday"
  },
];

export const ChatSidebar = () => {
  const [activeChat, setActiveChat] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full md:w-80 bg-muted border-r border-gray-800">
      <div className="p-4 border-b border-gray-800 flex justify-between items-center">
        <h2 className="text-xl font-bold">Chats</h2>
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search chats..."
              className="w-full bg-secondary p-2 pl-10 rounded-lg text-white"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-180px)]">
          {sampleChats.map((chat) => (
            <div
              key={chat.id}
              className={`sidebar-chat ${activeChat === chat.id ? 'active' : ''}`}
              onClick={() => setActiveChat(chat.id)}
            >
              <div className="flex justify-between items-start">
                <h3 className="font-semibold">{chat.name}</h3>
                <span className="text-xs text-gray-400">{chat.time}</span>
              </div>
              <p className="text-sm text-gray-400 mt-1 truncate">
                {chat.lastMessage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};