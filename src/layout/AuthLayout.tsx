import { Outlet } from "react-router-dom";
import authBg from "../assets/images/auth_bg.png";
import Logo from "../components/Logo";

const AuthLayout = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden bg-white relative">
      <div className="absolute top-8 left-8 md:top-8 md:left-8 z-10">
        <Logo />
      </div>
      <div className="hidden lg:block h-full" style={{ width: "65%" }}>
        <img
          src={authBg}
          alt="Auth background"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="w-full h-full overflow-y-auto flex items-center justify-center px-12 py-10"
        style={{ flex: "1 1 35%" }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
