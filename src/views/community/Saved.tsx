import { useState } from "react";
import { Avatar, Input } from "antd";
import { LuSearch, LuBookmark, LuHeart, LuMessageCircle, LuShare2 } from "react-icons/lu";

import f1 from "../../assets/images/avatars/f1.jpg";
import m1 from "../../assets/images/avatars/m1.jpg";
import f2 from "../../assets/images/avatars/f2.jpg";
import m2 from "../../assets/images/avatars/m2.jpg";
import f3 from "../../assets/images/avatars/f3.jpg";
import m3 from "../../assets/images/avatars/m3.jpg";
import f4 from "../../assets/images/avatars/f4.jpg";
import m4 from "../../assets/images/avatars/m4.jpg";

interface SavedPost {
  id: string;
  title: string;
  description: string;
  author: string;
  avatar: string;
  image: string;
  readTime: string;
  savedDate: string;
  likes: number;
  comments: number;
  tags: string[];
}

const SAVED_POSTS: SavedPost[] = [
  {
    id: "s1",
    title: "Building Scalable Design Systems",
    description: "A comprehensive guide to creating and managing design systems that grow with your team.",
    author: "Sarah Chen",
    avatar: f1,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=600",
    readTime: "8 min read",
    savedDate: "2 hours ago",
    likes: 324,
    comments: 45,
    tags: ["Design", "Systems"]
  },
  {
    id: "s2",
    title: "The Psychology of Color in UI",
    description: "How color choices affect user behavior and decision-making in digital products.",
    author: "James Wilson",
    avatar: m1,
    image: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&q=80&w=600",
    readTime: "6 min read",
    savedDate: "Yesterday",
    likes: 218,
    comments: 32,
    tags: ["Psychology", "UI"]
  },
  {
    id: "s3",
    title: "Mastering CSS Grid Layouts",
    description: "Advanced techniques for building complex and responsive layouts with CSS Grid.",
    author: "Emily Park",
    avatar: f2,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
    readTime: "12 min read",
    savedDate: "2 days ago",
    likes: 512,
    comments: 67,
    tags: ["CSS", "Frontend"]
  },
  {
    id: "s4",
    title: "React Performance Optimization",
    description: "Essential tips and patterns for keeping your React applications fast and responsive.",
    author: "Michael Torres",
    avatar: m2,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
    readTime: "10 min read",
    savedDate: "3 days ago",
    likes: 421,
    comments: 53,
    tags: ["React", "Performance"]
  },
  {
    id: "s5",
    title: "Introduction to Motion Design",
    description: "Learn the fundamentals of motion design and create delightful user experiences.",
    author: "Lisa Wang",
    avatar: f3,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
    readTime: "7 min read",
    savedDate: "4 days ago",
    likes: 189,
    comments: 28,
    tags: ["Motion", "UX"]
  },
  {
    id: "s6",
    title: "TypeScript Best Practices 2025",
    description: "Modern patterns and conventions for writing cleaner, safer TypeScript.",
    author: "David Chen",
    avatar: m3,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600",
    readTime: "15 min read",
    savedDate: "5 days ago",
    likes: 637,
    comments: 89,
    tags: ["TypeScript", "Dev"]
  },
  {
    id: "s7",
    title: "Accessibility-First Design Thinking",
    description: "Why starting with accessibility leads to better products for everyone.",
    author: "Anna Miller",
    avatar: f4,
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=600",
    readTime: "9 min read",
    savedDate: "1 week ago",
    likes: 295,
    comments: 41,
    tags: ["A11y", "Design"]
  },
  {
    id: "s8",
    title: "Building APIs with Node.js",
    description: "A pragmatic approach to designing RESTful APIs using modern Node.js tooling.",
    author: "Robert Kim",
    avatar: m4,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
    readTime: "11 min read",
    savedDate: "1 week ago",
    likes: 378,
    comments: 56,
    tags: ["Node.js", "Backend"]
  },
];

const Saved = () => {
  const [search, setSearch] = useState("");

  const filteredPosts = SAVED_POSTS.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex-1 overflow-y-auto bg-bg-grey px-8 py-8 w-full">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold text-text-primary">Saved Posts</h2>
            <p className="text-[13px] text-text-muted mt-1">{SAVED_POSTS.length} articles saved</p>
          </div>
          <div className="w-72">
            <Input
              prefix={<LuSearch className="text-text-muted" />}
              placeholder="Search saved posts..."
              className="rounded-full bg-bg-primary border-none shadow-sm h-10 px-4 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-bg-primary rounded-xl border border-lightborder shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex items-center gap-1.5 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-bg-grey text-text-secondary border border-border/50 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-text-primary leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[12px] text-text-secondary leading-relaxed mb-4 line-clamp-2">
                  {post.description}
                </p>

                {/* Author & Meta */}
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <Avatar src={post.avatar} size={24} className="border border-lightborder/50 shadow-sm" />
                    <div>
                      <p className="text-[12px] font-semibold text-text-primary leading-tight">{post.author}</p>
                      <p className="text-[10px] text-text-muted leading-tight">{post.readTime}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-lightborder/50">
                    <div className="flex items-center gap-3 text-text-muted">
                      <span className="flex items-center gap-1 text-[11px]">
                        <LuHeart size={13} /> {post.likes}
                      </span>
                      <span className="flex items-center gap-1 text-[11px]">
                        <LuMessageCircle size={13} /> {post.comments}
                      </span>
                      <span className="flex items-center gap-1 text-[11px]">
                        <LuShare2 size={13} />
                      </span>
                    </div>
                    <button className="text-primary hover:text-primary-hover transition-colors">
                      <LuBookmark size={14} fill="currentColor" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-text-muted">
            <LuBookmark size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium text-text-primary mb-1">No saved posts found</p>
            <p className="text-sm">Try a different search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Saved;
