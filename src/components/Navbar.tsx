import { useState } from "react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import { LuBell, LuSearch } from "react-icons/lu";
import NotificationsDropdown from "./NotificationsDropdown";

const Navbar = () => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

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
        <div className="relative">
          <button
            onClick={() => setShowNotifications((prev) => !prev)}
            className="relative p-2 rounded-lg text-text-secondary hover:bg-bg-grey transition-colors cursor-pointer bg-transparent border-none"
          >
            <LuBell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full" />
          </button>
          <NotificationsDropdown
            open={showNotifications}
            onClose={() => setShowNotifications(false)}
          />
        </div>

        <div className="h-6 w-px bg-lightborder" />

        <div
          onClick={() => navigate("/settings")}
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
        >
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
