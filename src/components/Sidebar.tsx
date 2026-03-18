import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import {
  LuLayoutDashboard,
  LuInbox,
  LuGraduationCap,
  LuSquareCheck,
  LuUsers,
  LuSettings,
  LuLogOut,
} from "react-icons/lu";
import m1 from "../assets/images/avatars/m1.jpg";
import f1 from "../assets/images/avatars/f1.jpg";
import m2 from "../assets/images/avatars/m2.jpg";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: LuLayoutDashboard },
  { label: "Inbox", path: "/inbox", icon: LuInbox },
  { label: "Lesson", path: "/lesson", icon: LuGraduationCap },
  { label: "Task", path: "/tasks", icon: LuSquareCheck },
  { label: "Community", path: "/community", icon: LuUsers },
];

const friends = [
  { name: "Bagas Mahpie", avatar: m1 },
  { name: "Sir Dandy", avatar: f1 },
  { name: "Jhon Tosan", avatar: m2 },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logout");
    navigate("/auth/login");
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
      isActive
        ? "text-black-primary font-semibold [&>svg]:text-primary"
        : "text-text-secondary font-medium hover:text-black-primary"
    }`;

  return (
    <aside className="w-60 h-screen bg-white flex flex-col border-r border-lightborder">
      <div className="px-6 py-5">
        <Logo />
      </div>

      <nav className="flex-1 flex flex-col px-3 overflow-y-auto">
        <p className="px-3 text-[10px] font-semibold text-text-muted tracking-widest uppercase mb-2">
          Overview
        </p>
        <div className="flex flex-col gap-0.5">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
        </div>

        <p className="px-3 text-[10px] font-semibold text-text-muted tracking-widest uppercase mt-6 mb-2">
          Friends
        </p>
        <div className="flex flex-col gap-0.5">
          {friends.map((friend) => (
            <div
              key={friend.name}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-text-secondary font-medium cursor-pointer hover:text-black-primary transition-colors"
            >
              <img
                src={friend.avatar}
                alt={friend.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              {friend.name}
            </div>
          ))}
        </div>
      </nav>

      <div className="flex flex-col px-3 pb-5">
        <p className="px-3 text-[10px] font-semibold text-text-muted tracking-widest uppercase mb-2">
          Settings
        </p>
        <div className="flex flex-col gap-0.5">
          <NavLink to="/settings" className={linkClass}>
            <LuSettings size={18} />
            Settings
          </NavLink>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-error hover:bg-error-bg transition-colors cursor-pointer bg-transparent border-none w-full text-left"
          >
            <LuLogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
