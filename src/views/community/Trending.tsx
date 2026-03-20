import { useState } from "react";
import { Avatar } from "antd";

import f1 from "../../assets/images/avatars/f1.jpg";
import m1 from "../../assets/images/avatars/m1.jpg";
import f2 from "../../assets/images/avatars/f2.jpg";
import m2 from "../../assets/images/avatars/m2.jpg";

interface Post {
  id: string;
  title: string;
  description?: string;
  author: string;
  avatar: string;
  readTime: string;
  image: string;
  tags: string[];
}

const TOP_POSTS: Post[] = [
  {
    id: "t1",
    title: "Stunned, stuck, overwhelmed? Here's how to turn chaos into clarity and growth",
    description: "Learn practical strategies for building resilience in your life. From a growth mindset to strong support networks, bounce back from setbacks with these tips.",
    author: "Olivia Brooks",
    avatar: f1,
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=1200",
    tags: ["Growth", "Resilience", "Mindset"]
  },
  {
    id: "t2",
    title: "Shrink your digital footprint, step by step",
    description: "Reduce your environmental impact with practical tips for eco-friendly living.",
    author: "Daniel Foster",
    avatar: m1,
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=800",
    tags: ["Minimalism", "Impact"]
  },
  {
    id: "t3",
    title: "Stronger relationships start with empathy",
    description: "Learn to develop your empathic skills and build better relationships in your personal life.",
    author: "Benjamin Cole",
    avatar: m2,
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800",
    tags: ["Communication", "Growth"]
  }
];

const FEED_POSTS: Post[] = [
  {
    id: "f1",
    title: "Breaking the cycle of negative self-talk",
    description: "Negative self-talk can hold us back and prevent us from reaching our full potential. In this article, we'll explore the concept of a growth mindset.",
    author: "Dr. Sophia Nguyen",
    avatar: f2,
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
    tags: ["Psychology", "Growth", "Mindset"]
  },
  {
    id: "f2",
    title: "The art of sustainable focus in a distracted world",
    description: "How to regain your attention span and do deep work when everything around you is designed to steal it.",
    author: "Nathan Reid",
    avatar: m1,
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600",
    tags: ["Productivity", "Focus"]
  }
];

const WRITERS = [
  { id: "w1", name: "Michelle Rodriguez", title: "Social Psychologist", avatar: f1 },
  { id: "w2", name: "Dave Kim", title: "Environmental Scientist", avatar: m1 },
  { id: "w3", name: "Dr. Sophia Nguyen", title: "Psychologist", avatar: f2 },
  { id: "w4", name: "Ethan Parker", title: "Behavioral Scientist", avatar: m2 },
];

const TABS = ["View all", "Editor's pick", "Most discussed", "Deep dives", "Short reads", "For you"];

const Trending = () => {
  const [activeTab, setActiveTab] = useState("View all");

  return (
    <div className="flex-1 overflow-y-auto bg-bg-primary px-8 py-10 w-full">
      <div className="max-w-[1200px] mx-auto space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 lg:gap-8 lg:max-h-[600px]">
          <div className="lg:col-span-2 lg:row-span-2 group cursor-pointer flex flex-col h-full overflow-hidden">
            <div className="rounded-xl overflow-hidden mb-4 flex-1 shadow-sm shrink-0 min-h-[240px]">
              <img src={TOP_POSTS[0].image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="shrink-0 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <Avatar src={TOP_POSTS[0].avatar} size={32} className="border border-lightborder/50 shadow-sm" />
                <div>
                  <p className="text-sm font-semibold text-text-primary">{TOP_POSTS[0].author}</p>
                  <p className="text-[11px] text-text-muted">{TOP_POSTS[0].readTime}</p>
                </div>
              </div>
              <h1 className="text-[22px] font-bold text-text-primary mb-2 leading-tight group-hover:text-primary transition-colors">{TOP_POSTS[0].title}</h1>
              <p className="text-text-secondary text-[13px] leading-relaxed mb-4 line-clamp-2">{TOP_POSTS[0].description}</p>
              <div className="flex items-center gap-2">
                {TOP_POSTS[0].tags.map(tag => (
                  <span key={tag} className={`text-[11px] px-2.5 py-1 rounded-md border ${tag === TOP_POSTS[0].tags[0] ? 'bg-text-primary text-white border-text-primary' : 'bg-bg-grey text-text-secondary border-border/50'} font-medium`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {TOP_POSTS.slice(1).map((post) => (
            <div key={post.id} className="lg:col-span-1 lg:row-span-1 group cursor-pointer flex flex-col h-full overflow-hidden">
              <div className="rounded-xl overflow-hidden mb-3 h-[140px] shadow-sm shrink-0">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="shrink-0 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <Avatar src={post.avatar} size={24} className="border border-lightborder/50 shadow-sm shrink-0" />
                  <div>
                    <p className="text-[13px] font-semibold text-text-primary leading-tight">{post.author}</p>
                    <p className="text-[10px] text-text-muted leading-tight">{post.readTime}</p>
                  </div>
                </div>
                <h3 className="text-[15px] font-bold text-text-primary mb-1.5 leading-tight group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-text-secondary text-[12px] leading-relaxed mb-2 line-clamp-1">{post.description}</p>
                <div className="flex items-center gap-2 mt-auto">
                  {post.tags.map((tag, i) => (
                    <span key={tag} className={`text-[10px] px-1.5 py-0.5 rounded-md border ${i === 0 ? 'bg-text-primary text-white border-text-primary' : 'bg-transparent text-text-secondary border-border/70'} font-medium`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-b border-lightborder flex overflow-x-auto hide-scrollbar">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 text-sm font-medium whitespace-nowrap mr-6 transition-colors border-b-2
                ${activeTab === tab ? "border-text-primary text-text-primary" : "border-transparent text-text-muted hover:text-text-secondary"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Lower Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Feed */}
          <div className="lg:col-span-2 space-y-10">
            {FEED_POSTS.map((post) => (
              <div key={post.id} className="flex flex-col sm:flex-row gap-6 group cursor-pointer border-b border-lightborder/50 pb-8 last:border-0 last:pb-0">
                <div className="sm:w-64 h-40 rounded-xl overflow-hidden shrink-0 shadow-sm">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar src={post.avatar} size={28} className="border border-lightborder/50 shadow-sm shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-text-primary">{post.author}</p>
                      <p className="text-[11px] text-text-muted">{post.readTime}</p>
                    </div>
                  </div>
                  <h3 className="text-[17px] font-bold text-text-primary mb-2 leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-text-secondary text-[13px] leading-relaxed mb-4">{post.description}</p>
                  <div className="flex items-center gap-2 mt-auto">
                    {post.tags.map((tag, i) => (
                      <span key={tag} className={`text-[11px] px-2 py-0.5 rounded-md border ${i === 0 ? 'bg-text-primary text-white border-text-primary' : 'bg-transparent text-text-secondary border-border/70 '} font-medium`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar (Trending Writers) */}
          <div className="lg:pl-8 lg:border-l border-lightborder h-max sticky top-0 pb-10">
            <h3 className="text-lg font-bold text-text-primary mb-6">Trending writers</h3>
            <div className="space-y-6">
              {WRITERS.map(writer => (
                <div key={writer.id} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3 items-center w-full min-w-0 pr-3">
                    <Avatar src={writer.avatar} size={42} className="border border-lightborder/50 shadow-sm shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-text-primary truncate cursor-pointer group-hover:text-primary transition-colors">{writer.name}</p>
                      <p className="text-[12px] text-text-secondary truncate">{writer.title}</p>
                    </div>
                  </div>
                  <button className="shrink-0 bg-text-primary hover:bg-black text-white px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors shadow-sm">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Trending;
