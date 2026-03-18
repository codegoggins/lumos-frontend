import { useState } from "react";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { 
  LuArrowLeft, 
  LuBold, 
  LuItalic, 
  LuHeading, 
  LuLink, 
  LuList, 
  LuListOrdered, 
  LuQuote, 
  LuImage, 
  LuCode 
} from "react-icons/lu";

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleBack = () => {
    navigate(-1);
  };

  const handlePost = () => {
    // In a real app this would submit the data
    navigate("/community");
  };

  const insertFormatting = (prefix: string, suffix = "") => {
    setContent((prev) => prev + prefix + "text" + suffix);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-bg-grey overflow-hidden">
      {/* Header */}
      <div className="bg-bg-primary px-6 py-4 border-b border-lightborder flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleBack}
            className="p-2 hover:bg-bg-grey rounded-full transition-colors text-text-secondary hover:text-text-primary"
          >
            <LuArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-text-primary">Create a Post</h1>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleBack} className="rounded-lg h-9 font-medium text-sm">
            Cancel
          </Button>
          <Button 
            type="primary" 
            onClick={handlePost} 
            disabled={!title.trim() || !content.trim()}
            className="rounded-lg h-9 font-medium text-sm"
          >
            Post Publish
          </Button>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 overflow-y-auto w-full max-w-4xl mx-auto p-6">
        <div className="bg-bg-primary rounded-xl border border-lightborder shadow-sm overflow-hidden flex flex-col min-h-[500px]">
          
          {/* Title Input */}
          <div className="px-6 py-4 border-b border-lightborder">
            <Input
              placeholder="Post Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-xl font-bold text-text-primary !border-none !bg-transparent !shadow-none !ring-0 px-0 h-auto"
            />
          </div>

          {/* Formatting Toolbar */}
          <div className="px-4 py-2 bg-bg-grey border-b border-lightborder flex items-center gap-1 overflow-x-auto shrink-0">
            <button onClick={() => insertFormatting("**", "**")} className="p-2 rounded hover:bg-bg-secondary text-text-secondary transition-colors" title="Bold">
              <LuBold size={16} />
            </button>
            <button onClick={() => insertFormatting("*", "*")} className="p-2 rounded hover:bg-bg-secondary text-text-secondary transition-colors" title="Italic">
              <LuItalic size={16} />
            </button>
            <button onClick={() => insertFormatting("### ")} className="p-2 rounded hover:bg-bg-secondary text-text-secondary transition-colors" title="Heading">
              <LuHeading size={16} />
            </button>
            <div className="w-[1px] h-4 bg-border mx-1"></div>
            <button onClick={() => insertFormatting("[title](url)")} className="p-2 rounded hover:bg-bg-secondary text-text-secondary transition-colors" title="Link">
              <LuLink size={16} />
            </button>
            <button onClick={() => insertFormatting("> ")} className="p-2 rounded hover:bg-bg-secondary text-text-secondary transition-colors" title="Blockquote">
              <LuQuote size={16} />
            </button>
            <button onClick={() => insertFormatting("`", "`")} className="p-2 rounded hover:bg-bg-secondary text-text-secondary transition-colors" title="Inline Code">
              <LuCode size={16} />
            </button>
            <div className="w-[1px] h-4 bg-border mx-1"></div>
            <button onClick={() => insertFormatting("- ")} className="p-2 rounded hover:bg-bg-secondary text-text-secondary transition-colors" title="Bulleted List">
              <LuList size={16} />
            </button>
            <button onClick={() => insertFormatting("1. ")} className="p-2 rounded hover:bg-bg-secondary text-text-secondary transition-colors" title="Numbered List">
              <LuListOrdered size={16} />
            </button>
            <div className="w-[1px] h-4 bg-border mx-1"></div>
            <button className="p-2 rounded hover:bg-bg-secondary text-text-secondary transition-colors" title="Insert Image">
              <LuImage size={16} />
            </button>
          </div>

          {/* Text Area */}
          <div className="flex-1 flex px-6 py-4">
            <Input.TextArea
              placeholder="What do you want to share with the community? (Markdown supported)"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="flex-1 !border-none !bg-transparent !shadow-none !ring-0 text-base resize-none"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
