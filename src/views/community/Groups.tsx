import { useState } from "react";
import { Input, Avatar } from "antd";
import { LuSearch, LuSettings, LuSend, LuUsers, LuHash, LuPlus, LuArrowLeft, LuUserPlus } from "react-icons/lu";

import communityImg from "../../assets/images/community.png";
import f1 from "../../assets/images/avatars/f1.jpg";
import m1 from "../../assets/images/avatars/m1.jpg";
import f2 from "../../assets/images/avatars/f2.jpg";
import m2 from "../../assets/images/avatars/m2.jpg";
import f3 from "../../assets/images/avatars/f3.jpg";
import m3 from "../../assets/images/avatars/m3.jpg";
import f4 from "../../assets/images/avatars/f4.jpg";
import m4 from "../../assets/images/avatars/m4.jpg";

interface Group {
  id: string;
  name: string;
  logo: string;
  members: string;
  lastMessage: string;
  time: string;
  unread?: number;
}

const DUMMY_GROUPS: Group[] = [
  {
    id: "g1",
    name: "React Developers",
    logo: "⚛️",
    members: "1,204 members",
    lastMessage: "David: Has anyone tried React 19 rc?",
    time: "10:30 AM",
    unread: 5,
  },
  {
    id: "g2",
    name: "UI/UX Designers",
    logo: "🎨",
    members: "856 members",
    lastMessage: "Sarah: Loved the new Figma update!",
    time: "9:15 AM",
  },
  {
    id: "g3",
    name: "Frontend Masters",
    logo: "🚀",
    members: "3,402 members",
    lastMessage: "Michael: Check out this CSS trick...",
    time: "Yesterday",
    unread: 12,
  },
  {
    id: "g4",
    name: "Tech Startup Hub",
    logo: "💡",
    members: "512 members",
    lastMessage: "Alice: We just closed our seed round!",
    time: "Yesterday",
  },
  {
    id: "g5",
    name: "Digital Nomads",
    logo: "🌍",
    members: "2,098 members",
    lastMessage: "Bob: Best cafes in Bali?",
    time: "2 days ago",
  },
];

interface Message {
  id: string;
  senderId: "me" | string;
  senderName?: string;
  avatar?: string;
  text: string;
  time: string;
}

const DUMMY_MESSAGES: Record<string, Message[]> = {
  "g1": [
    { id: "m1", senderId: "2", senderName: "Alice Wonderland", avatar: f1, text: "Hey everyone! Does anyone know when React 19 is officially dropping?", time: "10:00 AM" },
    { id: "m2", senderId: "3", senderName: "Bob Builder", avatar: m1, text: "I think it's still in RC phase. I've been testing the new 'use' hook.", time: "10:05 AM" },
    { id: "m3", senderId: "me", text: "Me too! It simplifies data fetching so much.", time: "10:10 AM" },
    { id: "m4", senderId: "4", senderName: "Clara Sparks", avatar: f2, text: "Wait, do we not need useEffect for fetching anymore?", time: "10:12 AM" },
    { id: "m5", senderId: "5", senderName: "David Tech", avatar: m2, text: "Exactly Clara! You can just pass a promise to 'use'. It's magic.", time: "10:15 AM" },
    { id: "m6", senderId: "6", senderName: "Emily Designer", avatar: f3, text: "Is it backwards compatible with older apps?", time: "10:20 AM" },
    { id: "m7", senderId: "7", senderName: "Frank Coder", avatar: m3, text: "Yes, you can incrementally adopt it without rewriting everything.", time: "10:22 AM" },
    { id: "m8", senderId: "8", senderName: "Grace Hopper", avatar: f4, text: "I'm still wrapping my head around server components.", time: "10:25 AM" },
    { id: "m9", senderId: "9", senderName: "Henry Hacker", avatar: m4, text: "Server components are great for SEO and initial load times.", time: "10:28 AM" },
    { id: "m10", senderId: "5", senderName: "David Tech", avatar: m2, text: "David: Has anyone tried React 19 rc?", time: "10:30 AM" },
  ],
};

const Groups = () => {
  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const activeGroup = DUMMY_GROUPS.find((g) => g.id === selectedGroupId);
  // Fallback all chats to g1 to ensure we have messages for demo
  const activeMessages = selectedGroupId ? (DUMMY_MESSAGES[selectedGroupId] || DUMMY_MESSAGES["g1"]) : [];

  const filteredGroups = DUMMY_GROUPS.filter(group => 
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-full w-full overflow-hidden bg-bg-grey">
      {/* Sidebar: Groups List */}
      <div className="w-96 flex-shrink-0 border-r border-lightborder flex flex-col bg-bg-primary">
        <div className="p-4 border-b border-lightborder shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-text-primary">Groups</h2>
            <button className="p-1.5 hover:bg-bg-grey rounded-lg transition-colors text-text-secondary hover:text-primary" title="Create Group">
              <LuPlus size={20} />
            </button>
          </div>
          <Input 
            prefix={<LuSearch className="text-text-muted" />} 
            placeholder="Search groups..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-lg bg-bg-secondary border-none h-10"
          />
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              onClick={() => {
                setSelectedGroupId(group.id);
                setShowDetails(false);
              }}
              className={`flex items-center gap-3 p-4 cursor-pointer transition-colors border-b border-lightborder/50
                ${selectedGroupId === group.id ? "bg-primary-light" : "hover:bg-bg-grey"}`}
            >
              <div className="w-12 h-12 rounded-xl bg-bg-secondary flex items-center justify-center text-2xl shrink-0 border border-lightborder">
                {group.logo}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-sm font-medium text-text-primary truncate">{group.name}</h3>
                  <span className="text-[11px] text-text-muted whitespace-nowrap ml-2">{group.time}</span>
                </div>
                <div className="flex items-center gap-1 mb-0.5">
                  <LuUsers className="text-text-muted" size={10} />
                  <span className="text-[10px] text-text-muted">{group.members}</span>
                </div>
                <p className="text-xs text-text-secondary truncate">{group.lastMessage}</p>
              </div>
              {group.unread && (
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-[10px] text-white font-medium">{group.unread}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content: Chat Window */}
      <div className="flex-1 flex flex-col bg-bg-grey">
        {!activeGroup ? (
          // Empty State
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-text-muted">
            <img src={communityImg} alt="No group selected" className="max-w-[400px] mb-6 opacity-90 object-contain drop-shadow-sm" />
            <h3 className="text-xl font-medium text-text-primary mb-2">Community Groups</h3>
            <p>Select a group from the left menu to jump into the conversation.</p>
          </div>
        ) : showDetails ? (
          // Group Details View
          <div className="flex-1 flex flex-col bg-bg-primary overflow-y-auto border-l border-lightborder">
            {/* Details Header */}
            <div className="h-16 border-b border-lightborder flex items-center px-6 shrink-0 sticky top-0 bg-bg-primary z-10">
              <button 
                onClick={() => setShowDetails(false)}
                className="p-2 -ml-2 hover:bg-bg-grey rounded-full transition-colors text-text-secondary mr-2"
              >
                <LuArrowLeft size={20} />
              </button>
              <h3 className="font-semibold text-text-primary text-lg">Group Details</h3>
            </div>
            
            <div className="p-8 pb-10 flex-1 flex flex-col max-w-3xl mx-auto w-full">
              <div className="flex flex-col items-center mb-10">
                <div className="w-24 h-24 rounded-3xl bg-bg-secondary flex items-center justify-center text-5xl border border-lightborder mb-5 shadow-sm">
                  {activeGroup.logo}
                </div>
                <h2 className="text-2xl font-bold text-text-primary mb-2">{activeGroup.name}</h2>
                <div className="flex items-center gap-3 text-sm text-text-secondary font-medium bg-bg-grey px-4 py-1.5 rounded-full border border-lightborder">
                  <span>{activeGroup.members} Total</span>
                  <span className="w-1 h-1 rounded-full bg-border"></span>
                  <span className="text-success flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-success"></span>245 Online</span>
                </div>
                <p className="text-sm text-text-muted mt-5 text-center max-w-md leading-relaxed">
                  A community dedicated to discussions, resources, and networking for {activeGroup.name}. Join us to learn and grow together.
                </p>
                <button className="mt-6 flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-colors shadow-sm">
                  <LuUserPlus size={18} />
                  Invite Members
                </button>
              </div>

              <div className="border border-lightborder rounded-2xl p-6 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <h3 className="font-medium text-text-primary mb-4 flex items-center justify-between">
                  Members List
                  <span className="text-xs bg-bg-grey px-2.5 py-1 rounded-md text-text-muted font-medium border border-border/50">10 shown</span>
                </h3>
                <div className="flex flex-col gap-1">
                  {DUMMY_MESSAGES["g1"].slice(0, 10).map((msg, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 hover:bg-bg-grey rounded-xl transition-colors cursor-pointer group border border-transparent hover:border-lightborder/50">
                      <div className="flex items-center gap-3">
                        <Avatar src={msg.avatar || m1} size={40} className="border border-lightborder/50 shadow-sm" />
                        <div>
                          <div className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">{msg.senderName || 'Me'}</div>
                          <div className="text-[11px] text-text-muted font-medium">{idx === 0 ? 'Admin' : 'Member'}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Active Group Chat View
          <>
            {/* Chat Header */}
            <div className="h-16 border-b border-lightborder bg-bg-primary flex items-center justify-between px-6 flex-shrink-0 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-bg-secondary flex items-center justify-center text-xl border border-lightborder">
                  {activeGroup.logo}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-primary">{activeGroup.name}</h3>
                  <div className="flex items-center gap-1">
                    <LuHash size={12} className="text-text-muted" />
                    <span className="text-[11px] text-text-muted">{activeGroup.members} Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-text-secondary">
                <button 
                  onClick={() => setShowDetails(true)}
                  className="p-2 hover:bg-bg-grey hover:text-primary rounded-full transition-colors"
                >
                  <LuSettings size={20} />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {activeMessages.map((msg) => {
                const isMe = msg.senderId === "me";
                return (
                  <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                    <div className={`flex gap-3 max-w-[75%] ${isMe ? "flex-row-reverse" : "flex-row"}`}>
                      {!isMe && msg.avatar && (
                        <Avatar src={msg.avatar} size={32} className="flex-shrink-0 shrink-0 mt-1" />
                      )}
                      <div className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
                        {!isMe && (
                          <span className="text-[11px] font-medium text-text-secondary mb-1 ml-1">{msg.senderName}</span>
                        )}
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
              })}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-bg-primary border-t border-lightborder min-h-[76px] shrink-0">
              <div className="flex items-end gap-3 bg-bg-secondary rounded-xl border border-border focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all p-2">
                <Input.TextArea
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder={`Message ${activeGroup.name}...`}
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

export default Groups;
