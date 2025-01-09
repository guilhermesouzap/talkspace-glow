import { useState } from "react";
import { Send, Smile } from "lucide-react";

interface Message {
  id: number;
  content: string;
  sent: boolean;
  timestamp: string;
}

const sampleMessages: Message[] = [
  {
    id: 1,
    content: "Hey! How are you?",
    sent: false,
    timestamp: "12:30 PM"
  },
  {
    id: 2,
    content: "I'm good, thanks! Just checking out this new chat app. The design looks amazing! 😊",
    sent: true,
    timestamp: "12:31 PM"
  },
  {
    id: 3,
    content: "Yeah, I love the turquoise accents!",
    sent: false,
    timestamp: "12:32 PM"
  },
];

export const ChatContent = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(sampleMessages);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        content: message,
        sent: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <div className="flex-1 flex flex-col h-screen">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-xl font-bold">Alice Johnson</h2>
        <p className="text-sm text-gray-400">Online</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}>
            <div className={`message-bubble ${msg.sent ? 'sent' : 'received'}`}>
              <p>{msg.content}</p>
              <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-2">
          <button className="text-primary p-2 hover:bg-muted rounded-full transition-colors">
            <Smile size={24} />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 bg-secondary p-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button 
            onClick={handleSend}
            className="bg-primary text-primary-foreground p-2 rounded-full hover:opacity-90 transition-opacity"
          >
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};