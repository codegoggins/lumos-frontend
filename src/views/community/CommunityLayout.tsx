import { NavLink, Outlet } from "react-router-dom";
import { 
  LuCompass, 
  LuUsers, 
  LuUser, 
  LuTrendingUp, 
  LuBookmark 
} from "react-icons/lu";

const sidebarLinks = [
  { label: "Home", path: "/community", icon: LuCompass, exact: true },
  { label: "Groups", path: "/community/groups", icon: LuUsers },
  { label: "Profile", path: "/community/profile", icon: LuUser },
  { label: "Trending", path: "/community/trending", icon: LuTrendingUp },
  { label: "Saved", path: "/community/saved", icon: LuBookmark },
];

const CommunityLayout = () => {
  return (
    <div className="flex bg-bg-primary overflow-hidden h-full">
      {/* Community Sidebar */}
      <div className="w-48 flex-shrink-0 border-r border-lightborder flex flex-col bg-bg-primary">
        <nav className="flex-1 px-4 py-4 space-y-1">
          {sidebarLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.exact}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors font-medium ${
                  isActive
                    ? "bg-primary-light text-primary"
                    : "text-text-secondary hover:bg-bg-grey hover:text-text-primary"
                }`
              }
            >
              <link.icon className="text-lg shrink-0" />
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden bg-bg-grey">
        <Outlet />
      </div>
    </div>
  );
};

export default CommunityLayout;
