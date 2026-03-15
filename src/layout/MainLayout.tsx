import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import OnboardingModal from "../components/OnboardingModal";

const MainLayout = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);

  const handleOnboardingSave = (data: { username: string; avatar: string }) => {
    console.log("Profile setup:", data);
    setShowOnboarding(false);
  };

  return (
    <div className="flex h-screen bg-bg-grey">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>

      <OnboardingModal open={showOnboarding} onSave={handleOnboardingSave} />
    </div>
  );
};

export default MainLayout;
