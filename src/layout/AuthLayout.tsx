import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
