import { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import CustomInput from "../../components/CustomInput";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log({ email });
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-black-primary mb-1">
        Forgot Password
      </h1>
      <p className="text-text-secondary text-sm mb-8">
        Enter your email and we'll send you a verification code
      </p>

      <div className="flex flex-col gap-5">
        <CustomInput
          label="Email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button type="primary" block onClick={handleSubmit}>
          Send Code
        </Button>
      </div>

      <p className="text-center text-sm text-text-secondary mt-6">
        Remember your password?{" "}
        <Link to="/auth/login" className="text-primary font-medium">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
