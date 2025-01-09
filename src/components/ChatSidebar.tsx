import { useState } from "react";
import { Search, Menu, Plus, UserPlus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
}

interface User {
  id: number;
  name: string;
  status: string;
}

const sampleUsers: User[] = [
  {
    id: 1,
    name: "David Kim",
    status: "online"
  },
  {
    id: 2,
    name: "Sarah Wilson",
    status: "offline"
  },
  {
    id: 3,
    name: "Michael Chen",
    status: "online"
  }
];

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
  const [searchQuery, setSearchQuery] = useState("");
  const [isNewChatOpen, setIsNewChatOpen] = useState(false);
  const [userSearchQuery, setUserSearchQuery] = useState("");

  const filteredChats = sampleChats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredUsers = sampleUsers.filter(user =>
    user.name.toLowerCase().includes(userSearchQuery.toLowerCase())
  );

  const handleStartNewChat = (userId: number) => {
    // Here you would typically create a new chat with the selected user
    console.log(`Starting new chat with user ${userId}`);
    setIsNewChatOpen(false);
  };

  return (
    <div className="w-full md:w-80 bg-muted border-r border-gray-800">
      <div className="p-4 border-b border-gray-800 flex justify-between items-center">
        <h2 className="text-xl font-bold">Chats</h2>
        <div className="flex gap-2">
          <Dialog open={isNewChatOpen} onOpenChange={setIsNewChatOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary">
                <UserPlus size={24} />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New Chat</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="relative">
                  <Input
                    placeholder="Search users..."
                    value={userSearchQuery}
                    onChange={(e) => setUserSearchQuery(e.target.value)}
                    className="w-full"
                  />
                  <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
                </div>
                <ScrollArea className="h-[300px]">
                  {filteredUsers.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-3 hover:bg-secondary rounded-lg cursor-pointer"
                      onClick={() => handleStartNewChat(user.id)}
                    >
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-400">{user.status}</p>
                      </div>
                      <Plus size={20} className="text-primary" />
                    </div>
                  ))}
                </ScrollArea>
              </div>
            </DialogContent>
          </Dialog>
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="p-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search chats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-180px)]">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              className={`p-4 cursor-pointer hover:bg-secondary transition-colors ${
                activeChat === chat.id ? 'bg-secondary' : ''
              }`}
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
        </ScrollArea>
      </div>
    </div>
  );
};