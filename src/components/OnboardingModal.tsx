import { useState } from "react";
import { Modal, Button } from "antd";
import CustomInput from "./CustomInput";

import m1 from "../assets/images/avatars/m1.jpg";
import m2 from "../assets/images/avatars/m2.jpg";
import m3 from "../assets/images/avatars/m3.jpg";
import m4 from "../assets/images/avatars/m4.jpg";
import f1 from "../assets/images/avatars/f1.jpg";
import f2 from "../assets/images/avatars/f2.jpg";
import f3 from "../assets/images/avatars/f3.jpg";
import f4 from "../assets/images/avatars/f4.jpg";

const avatars = [m1, m2, m3, m4, f1, f2, f3, f4];

const OnboardingModal = ({
  open,
  onSave,
}: {
  open: boolean;
  onSave: (data: { username: string; avatar: string }) => void;
}) => {
  const [username, setUsername] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

  const handleSave = () => {
    if (!username.trim() || !selectedAvatar) return;
    onSave({ username: username.trim(), avatar: selectedAvatar });
  };

  return (
    <Modal
      open={open}
      closable={false}
      maskClosable={false}
      keyboard={false}
      footer={null}
      centered
      width={520}
    >
      <div className="py-2">
        <h2 className="text-lg font-bold text-black-primary mb-1">
          Welcome to Lumos!
        </h2>
        <p className="text-text-secondary text-sm mb-6">
          First things first — pick a face and a name. No pressure, but everyone
          will judge you.
        </p>
        <div className="grid grid-cols-4 gap-3 mb-6">
          {avatars.map((avatar) => (
            <button
              key={avatar}
              onClick={() => setSelectedAvatar(avatar)}
              className={`rounded-full overflow-hidden cursor-pointer border-3 p-0 bg-transparent transition-all ${
                selectedAvatar === avatar
                  ? "border-primary scale-105"
                  : "border-transparent hover:border-lightborder"
              }`}
            >
              <img
                src={avatar}
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
            </button>
          ))}
        </div>

        <div className="mb-6">
          <CustomInput
            label="Username"
            placeholder="something cooler than xX_darkLord_Xx"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <Button
          type="primary"
          block
          onClick={handleSave}
          disabled={!username.trim() || !selectedAvatar}
        >
          Let's go
        </Button>
      </div>
    </Modal>
  );
};

export default OnboardingModal;
