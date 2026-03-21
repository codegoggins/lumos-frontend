import { useState } from "react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import { LuBell, LuSearch, LuShoppingCart } from "react-icons/lu";
import NotificationsDropdown from "./NotificationsDropdown";
import CartDropdown from "./CartDropdown";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { state } = useCart();

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
            onClick={() => { setShowNotifications((p) => !p); setShowCart(false); }}
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

        <div className="relative">
          <button
            onClick={() => { setShowCart((p) => !p); setShowNotifications(false); }}
            className="relative p-2 rounded-lg text-text-secondary hover:bg-bg-grey transition-colors cursor-pointer bg-transparent border-none"
          >
            <LuShoppingCart size={20} />
            {state.items.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1">
                {state.items.length}
              </span>
            )}
          </button>
          <CartDropdown open={showCart} onClose={() => setShowCart(false)} />
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
