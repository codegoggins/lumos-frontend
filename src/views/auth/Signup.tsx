import { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import type { Dayjs } from "dayjs";
import CustomInput from "../../components/CustomInput";
import CustomSelect from "../../components/CustomSelect";
import CustomDatePicker from "../../components/CustomDatePicker";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [dob, setDob] = useState<Dayjs | null>(null);
  const [gender, setGender] = useState<string | undefined>(undefined);

  const handleSubmit = () => {
    console.log({ name, email, phone, country, dob, gender });
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-black-primary mb-1">
        Create Account
      </h1>
      <p className="text-text-secondary text-sm mb-8">
        Fill in your details to get started
      </p>

      <div className="flex flex-col gap-5">
        <CustomInput
          label="Full Name"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <CustomInput
          label="Email"
          placeholder="john@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <CustomInput
          label="Phone Number"
          placeholder="+1 234 567 890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <CustomSelect
          label="Country"
          placeholder="Select country"
          value={country}
          onChange={(val) => setCountry(val)}
          options={[
            { value: "us", label: "United States" },
            { value: "uk", label: "United Kingdom" },
            { value: "in", label: "India" },
            { value: "ca", label: "Canada" },
            { value: "au", label: "Australia" },
            { value: "de", label: "Germany" },
            { value: "fr", label: "France" },
          ]}
        />

        <div className="flex gap-4">
          <CustomDatePicker
            label="Date of Birth"
            containerClass="flex-1"
            className="w-full"
            placeholder="Select date"
            value={dob}
            onChange={(date) => setDob(date)}
          />

          <CustomSelect
            label="Gender"
            containerClass="flex-1"
            placeholder="Select"
            value={gender}
            onChange={(val) => setGender(val)}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
            ]}
          />
        </div>

        <Button type="primary" block onClick={handleSubmit} className="mt-1">
          Sign Up
        </Button>
      </div>

      <p className="text-center text-sm text-text-secondary mt-6">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-primary font-medium">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Signup;
