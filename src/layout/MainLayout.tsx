import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import OnboardingModal from "../components/OnboardingModal";
import { CartProvider } from "../context/CartContext";

const MainLayout = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const location = useLocation();
  const isNoPadding = ["/inbox", "/community"].some(path => location.pathname.includes(path));

  const handleOnboardingSave = (data: { username: string; avatar: string }) => {
    console.log("Profile setup:", data);
    setShowOnboarding(false);
  };

  return (
    <CartProvider>
      <div className="flex h-screen bg-bg-grey">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />

          <main className={`flex-1 overflow-y-auto ${isNoPadding ? "" : "p-6"}`}>
            <Outlet />
          </main>
        </div>

        <OnboardingModal open={showOnboarding} onSave={handleOnboardingSave} />
      </div>
    </CartProvider>
  );
};

export default MainLayout;

