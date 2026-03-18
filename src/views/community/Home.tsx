import { useState } from "react";
import { Avatar, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { 
  LuSearch, 
  LuImage, 
  LuSmile, 
  LuHeart, 
  LuMessageCircle, 
  LuBookmark,
  LuShare2
} from "react-icons/lu";

import authBg from "../../assets/images/auth_bg.png";
import m1 from "../../assets/images/avatars/m1.jpg";
import f1 from "../../assets/images/avatars/f1.jpg";
import m2 from "../../assets/images/avatars/m2.jpg";
import f2 from "../../assets/images/avatars/f2.jpg";
import m3 from "../../assets/images/avatars/m3.jpg";
import f3 from "../../assets/images/avatars/f3.jpg";
import m4 from "../../assets/images/avatars/m4.jpg";
import f4 from "../../assets/images/avatars/f4.jpg";

interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  timeAgo: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  likedBy: string[]; // array of avatars
}

const DUMMY_POSTS: Post[] = [
  {
    id: "1",
    user: { name: "Bagas Mahpie", avatar: m1 },
    timeAgo: "2 hours ago",
    content: "Just finished redesigning the main dashboard. The new color palette feels so much cleaner and more professional. What do you guys think?",
    image: authBg,
    likes: 24,
    comments: 5,
    likedBy: [f1, m2, f2],
  },
  {
    id: "2",
    user: { name: "Sir Dandy", avatar: f1 },
    timeAgo: "4 hours ago",
    content: "Has anyone tried the new React 19 features yet? The use hook looks incredibly promising for simplifying data fetching in components without useEffect.",
    likes: 156,
    comments: 42,
    likedBy: [m3, f3, m4, f4],
  },
  {
    id: "3",
    user: { name: "Jhon Tosan", avatar: m2 },
    timeAgo: "5 hours ago",
    content: "Looking for recommendations on the best animation libraries for React. Framer Motion is great but I want something lighter for a simple marketing site. Any thoughts?",
    likes: 12,
    comments: 8,
    likedBy: [f1, m1],
  },
  {
    id: "4",
    user: { name: "Alice Wonderland", avatar: f2 },
    timeAgo: "Yesterday",
    content: "Nothing beats a good cup of coffee while debugging a stubborn CSS grid layout. It’s all about finding the right fractions! ☕💻",
    image: authBg,
    likes: 89,
    comments: 11,
    likedBy: [m2, f3, m4],
  },
  {
    id: "5",
    user: { name: "Bob Builder", avatar: m3 },
    timeAgo: "Yesterday",
    content: "Can we talk about how good Tailwind CSS is for rapid prototyping? I used to write raw CSS for everything, but utility classes have completely changed my workflow.",
    likes: 45,
    comments: 23,
    likedBy: [f4, m1, f2],
  },
  {
    id: "6",
    user: { name: "Clara Sparks", avatar: f3 },
    timeAgo: "2 days ago",
    content: "I finally managed to clear my backlog! It’s a great feeling. Ready to tackle some new performance optimization tickets tomorrow.",
    likes: 112,
    comments: 14,
    likedBy: [m4, m2, f1, m1],
  },
  {
    id: "7",
    user: { name: "David Tech", avatar: m4 },
    timeAgo: "3 days ago",
    content: "What is everyone's preferred way to manage global state in 2026? Zustand, Redux Toolkit, or just React Context with useReducer?",
    likes: 67,
    comments: 34,
    likedBy: [f2, m3, f4],
  },
  {
    id: "8",
    user: { name: "Emily Designer", avatar: f4 },
    timeAgo: "3 days ago",
    content: "Design systems are not just about components; they're about the communication between design and engineering. Without that, it’s just a component library.",
    image: authBg,
    likes: 203,
    comments: 18,
    likedBy: [m1, f1, m2, f3],
  },
  {
    id: "9",
    user: { name: "Frank Coder", avatar: m1 },
    timeAgo: "4 days ago",
    content: "Finally got my Neovim config exactly how I want it. It only took me 3 weeks of tweaking Lua scripts! Totally worth it though.",
    likes: 34,
    comments: 7,
    likedBy: [m3, f4],
  },
  {
    id: "10",
    user: { name: "Grace Hopper fan", avatar: f2 },
    timeAgo: "1 week ago",
    content: "Just deployed our new multi-tenant architecture to production. Everything is running smoothly so far. Fingers crossed! 🚀",
    likes: 345,
    comments: 56,
    likedBy: [m2, f1, m4, f3, m1],
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleCreatePost = () => {
    navigate("/community/create-post");
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-bg-grey overflow-hidden">
      {/* Top Header - What's on your mind */}
      <div className="bg-bg-primary px-6 py-3 border-b border-lightborder flex items-center justify-between shrink-0 shadow-sm z-10">
        <div className="flex items-center gap-3 flex-1 max-w-2xl">
          <Avatar src={m1} size={40} className="shrink-0" />
          <div 
            onClick={handleCreatePost}
            className="flex-1 bg-bg-grey hover:bg-bg-secondary transition-colors rounded-full px-4 h-10 flex items-center cursor-text text-text-muted text-sm border border-lightborder/50"
          >
            What's on your mind, Bagas?
          </div>
        </div>
        <div className="flex items-center gap-2 pl-4">
          <button 
            onClick={handleCreatePost}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-bg-grey text-text-secondary text-sm font-medium transition-colors"
          >
            <LuImage className="text-success" size={18} />
            <span className="hidden sm:inline">Photo</span>
          </button>
          <button 
            onClick={handleCreatePost}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-bg-grey text-text-secondary text-sm font-medium transition-colors"
            >
            <LuSmile className="text-warning" size={18} />
            <span className="hidden sm:inline">Feeling</span>
          </button>
          <button 
            onClick={handleCreatePost}
            className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-lg font-medium text-sm transition-colors ml-1"
          >
            Post
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto w-full max-w-3xl mx-auto px-4 py-6 space-y-6">
        
        {/* Search and Filters */}
        <div className="flex items-center gap-3">
          <Input
            prefix={<LuSearch className="text-text-muted" />}
            placeholder="Search communities, posts, or tags..."
            className="rounded-full bg-bg-primary border-none shadow-sm h-11 px-5 text-sm flex-1 placeholder:text-text-muted hover:bg-bg-primary focus-within:ring-1 focus-within:ring-primary/20"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Select
            defaultValue="latest"
            className="w-36 h-11 shadow-sm [&_.ant-select-selector]:rounded-full [&_.ant-select-selector]:border-none [&_.ant-select-selector]:!bg-bg-primary"
            options={[
              { value: 'latest', label: 'Latest Posts' },
              { value: 'top', label: 'Top Posts' },
              { value: 'trending', label: 'Trending' },
            ]}
          />
        </div>

        {/* Feed Posts */}
        {DUMMY_POSTS.map((post) => (
          <div key={post.id} className="bg-bg-primary rounded-xl shadow-sm border border-lightborder overflow-hidden">
            {/* Post Header */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar src={post.user.avatar} size={40} />
                <div>
                  <h3 className="text-sm font-semibold text-text-primary leading-tight">{post.user.name}</h3>
                  <span className="text-[11px] text-text-muted">{post.timeAgo}</span>
                </div>
              </div>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-3">
              <p className="text-sm text-text-primary leading-relaxed whitespace-pre-wrap">{post.content}</p>
            </div>

            {/* Post Image */}
            {post.image && (
              <div className="w-full max-h-80 overflow-hidden bg-bg-grey mt-1">
                <img src={post.image} alt="Post attachment" className="w-full h-full object-cover" />
              </div>
            )}

            {/* Post Stats */}
            <div className="px-4 py-3 flex items-center justify-between border-b border-lightborder">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 mr-1">
                  {post.likedBy.slice(0, 3).map((avatar, idx) => (
                    <img 
                      key={idx} 
                      src={avatar} 
                      alt="Liker" 
                      className="w-6 h-6 rounded-full border-2 border-bg-primary object-cover"
                    />
                  ))}
                  {post.likedBy.length > 3 && (
                    <div className="w-6 h-6 rounded-full border-2 border-bg-primary bg-bg-secondary flex items-center justify-center text-[9px] font-medium text-text-secondary">
                      +{post.likedBy.length - 3}
                    </div>
                  )}
                </div>
                <span className="text-xs text-text-muted">{post.likes} Likes</span>
              </div>
              <span className="text-xs text-text-muted">{post.comments} Comments</span>
            </div>

            {/* Post Actions */}
            <div className="px-2 py-1.5 flex items-center justify-between">
              <div className="flex gap-1">
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-bg-grey text-text-secondary text-sm font-medium transition-colors">
                  <LuHeart size={18} />
                  Like
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-bg-grey text-text-secondary text-sm font-medium transition-colors">
                  <LuMessageCircle size={18} />
                  Comment
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-bg-grey text-text-secondary text-sm font-medium transition-colors">
                  <LuShare2 size={18} />
                  Share
                </button>
              </div>
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-bg-grey text-text-secondary transition-colors">
                <LuBookmark size={18} />
              </button>
            </div>
          </div>
        ))}
        
        <div className="pb-8 text-center text-text-muted text-sm pb-10">
          You've caught up with all posts!
        </div>
      </div>
    </div>
  );
};

export default Home;
