import { Input } from "antd";
import { LuBell, LuMessageSquare, LuSearch } from "react-icons/lu";

const Navbar = () => {
  return (
    <header className="h-16 bg-white border-b border-lightborder flex items-center justify-between px-6">
      <div className="w-72">
        <Input
          prefix={<LuSearch size={16} className="text-text-muted" />}
          placeholder="Search..."
          variant="filled"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-lg text-text-secondary hover:bg-bg-grey transition-colors cursor-pointer bg-transparent border-none">
          <LuBell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full" />
        </button>

        <button className="p-2 rounded-lg text-text-secondary hover:bg-bg-grey transition-colors cursor-pointer bg-transparent border-none">
          <LuMessageSquare size={20} />
        </button>

        <div className="h-6 w-px bg-lightborder" />

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center">
            <span className="text-primary text-xs font-semibold">JD</span>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-black-primary leading-tight">
              John Doe
            </p>
            <p className="text-xs text-text-muted leading-tight">Student</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
