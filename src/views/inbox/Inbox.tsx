import { useState } from "react";
import { Input, Avatar } from "antd";
import { LuSearch, LuSend } from "react-icons/lu";

import chatImg from "../../assets/images/chat.png";
import f1 from "../../assets/images/avatars/f1.jpg";
import m1 from "../../assets/images/avatars/m1.jpg";
import f2 from "../../assets/images/avatars/f2.jpg";
import m2 from "../../assets/images/avatars/m2.jpg";

interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: number;
}

const DUMMY_CHATS: Chat[] = [
  {
    id: "1",
    name: "Alice Johnson",
    avatar: f1,
    lastMessage: "Are we still on for the meeting later?",
    time: "10:30 AM",
    unread: 2,
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: m1,
    lastMessage: "I've sent the updated designs.",
    time: "9:15 AM",
  },
  {
    id: "3",
    name: "Sarah Williams",
    avatar: f2,
    lastMessage: "Thanks for your help yesterday!",
    time: "Yesterday",
  },
  {
    id: "4",
    name: "David Smith",
    avatar: m2,
    lastMessage: "Let me know when you're available to chat.",
    time: "Yesterday",
  },
];

interface Message {
  id: string;
  senderId: "me" | string;
  text: string;
  time: string;
}

const DUMMY_MESSAGES: Record<string, Message[]> = {
  "1": [
    { id: "m1", senderId: "1", text: "Hey! How are things going?", time: "10:00 AM" },
    { id: "m2", senderId: "me", text: "Going well! Just working on the new UI.", time: "10:15 AM" },
    { id: "m3", senderId: "1", text: "Awesome. Are we still on for the meeting later?", time: "10:30 AM" },
  ],
  "2": [
    { id: "m1", senderId: "me", text: "Did you manage to finish the designs?", time: "9:00 AM" },
    { id: "m2", senderId: "2", text: "Yes, I'll send them over shortly.", time: "9:05 AM" },
    { id: "m3", senderId: "2", text: "I've sent the updated designs.", time: "9:15 AM" },
  ]
};

const Inbox = () => {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const activeChat = DUMMY_CHATS.find((c) => c.id === selectedChatId);
  const activeMessages = selectedChatId ? DUMMY_MESSAGES[selectedChatId] || [] : [];

  const filteredChats = DUMMY_CHATS.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex bg-bg-primary overflow-hidden h-full">
      {/* Sidebar: Chat List */}
      <div className="w-80 flex-shrink-0 border-r border-lightborder flex flex-col bg-bg-primary">
        <div className="p-4 border-b border-lightborder">
          <h2 className="text-xl font-semibold text-text-primary mb-4">Messages</h2>
          <Input 
            prefix={<LuSearch className="text-text-muted" />} 
            placeholder="Search messages..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-lg bg-bg-secondary border-none h-10"
          />
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChatId(chat.id)}
              className={`flex items-center gap-3 p-4 cursor-pointer transition-colors border-b border-lightborder/50
                ${selectedChatId === chat.id ? "bg-primary-light" : "hover:bg-bg-grey"}`}
            >
              <Avatar src={chat.avatar} size={48} />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-sm font-medium text-text-primary truncate">{chat.name}</h3>
                  <span className="text-[11px] text-text-muted whitespace-nowrap ml-2">{chat.time}</span>
                </div>
                <p className="text-xs text-text-secondary truncate">{chat.lastMessage}</p>
              </div>
              {chat.unread && (
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-[10px] text-white font-medium">{chat.unread}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content: Chat Window */}
      <div className="flex-1 flex flex-col bg-bg-grey">
        {!activeChat ? (
          // Empty State
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-text-muted">
            <img src={chatImg} alt="No chat selected" className="max-w-[400px] mb-6 opacity-90 object-contain drop-shadow-sm" />
            <h3 className="text-xl font-medium text-text-primary mb-2">Your Messages</h3>
            <p>Select a conversation from the left menu or start a new one to begin chatting.</p>
          </div>
        ) : (
          // Active Chat View
          <>
            {/* Chat Header */}
            <div className="h-16 border-b border-lightborder bg-bg-primary flex items-center justify-between px-6 flex-shrink-0 shrink-0">
              <div className="flex items-center gap-3">
                <Avatar src={activeChat.avatar} size={40} />
                <div>
                  <h3 className="text-sm font-medium text-text-primary">{activeChat.name}</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-success"></span>
                    <span className="text-[11px] text-text-muted">Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {activeMessages.length > 0 ? (
                activeMessages.map((msg) => {
                  const isMe = msg.senderId === "me";
                  return (
                    <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                      <div className={`flex gap-3 max-w-[75%] ${isMe ? "flex-row-reverse" : "flex-row"}`}>
                        {!isMe && <Avatar src={activeChat.avatar} size={32} className="flex-shrink-0 shrink-0 mt-1" />}
                        <div className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
                          <div
                            className={`px-4 py-2.5 rounded-2xl ${
                              isMe
                                ? "bg-primary text-white rounded-tr-sm shadow-sm"
                                : "bg-bg-primary text-text-primary border border-lightborder rounded-tl-sm shadow-sm"
                            }`}
                          >
                            <p className="text-sm leading-relaxed break-words">{msg.text}</p>
                          </div>
                          <span className="text-[11px] text-text-muted mt-1.5 font-medium">{msg.time}</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="h-full flex items-center justify-center text-text-muted">
                  No messages yet. Send a message to start the conversation!
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-bg-primary border-t border-lightborder min-h-[76px] shrink-0">
              <div className="flex items-end gap-3 bg-bg-secondary rounded-xl border border-border focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all p-2">
                <Input.TextArea
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type a message..."
                  autoSize={{ minRows: 1, maxRows: 5 }}
                  className="!border-none !bg-transparent !shadow-none !ring-0 text-base"
                />
                <button 
                  className={`p-2.5 rounded-lg flex-shrink-0 transition-colors flex items-center justify-center mb-0.5
                    ${messageInput.trim() ? "bg-primary text-white hover:bg-primary/90 shadow-sm" : "bg-border/50 text-text-muted cursor-not-allowed"}`}
                  disabled={!messageInput.trim()}
                >
                  <LuSend size={18} className={messageInput.trim() ? "translate-x-0.5 -translate-y-0.5" : ""} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Inbox;
