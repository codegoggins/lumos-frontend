import { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import CustomOtpInput from "../../components/CustomOtpInput";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");

  const handleSubmit = () => {
    console.log({ otp });
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-black-primary mb-1">Verify OTP</h1>
      <p className="text-text-secondary text-sm mb-8">
        Enter the 6-digit code sent to your email
      </p>

      <div className="flex flex-col gap-5">
        <CustomOtpInput
          label="Verification Code"
          length={6}
          value={otp}
          onChange={(val) => setOtp(val)}
        />

        <Button type="primary" block onClick={handleSubmit}>
          Verify
        </Button>
      </div>

      <p className="text-center text-sm text-text-secondary mt-6">
        Didn't receive the code?{" "}
        <Link to="/auth/forgot-password" className="text-primary font-medium">
          Resend
        </Link>
      </p>
    </div>
  );
};

export default VerifyOtp;
