import { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import CustomPassword from "../../components/CustomPassword";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    console.log({ password, confirmPassword });
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-black-primary mb-1">
        Reset Password
      </h1>
      <p className="text-text-secondary text-sm mb-8">
        Create a new password for your account
      </p>

      <div className="flex flex-col gap-5">
        <CustomPassword
          label="New Password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <CustomPassword
          label="Confirm Password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button type="primary" block onClick={handleSubmit}>
          Reset Password
        </Button>
      </div>

      <p className="text-center text-sm text-text-secondary mt-6">
        Back to{" "}
        <Link to="/auth/login" className="text-primary font-medium">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default ResetPassword;
