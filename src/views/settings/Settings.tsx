import { useState } from "react";
import { Avatar, Input, Switch } from "antd";
import {
  LuShield,
  LuSmartphone,
  LuLaptop,
  LuGlobe,
  LuCamera,
  LuMail,
  LuPhone,
  LuMapPin,
  LuCalendar,
  LuLock,
  LuKey,
  LuLogOut,
} from "react-icons/lu";

import m1 from "../../assets/images/avatars/m1.jpg";

const SESSIONS = [
  {
    id: "s1",
    device: "MacBook Pro",
    icon: LuLaptop,
    browser: "Chrome 122",
    ip: "192.168.1.45",
    location: "Mumbai, IN",
    lastActive: "Active now",
    current: true,
  },
  {
    id: "s2",
    device: "iPhone 15 Pro",
    icon: LuSmartphone,
    browser: "Safari 17",
    ip: "10.0.0.12",
    location: "Mumbai, IN",
    lastActive: "2 hours ago",
    current: false,
  },
  {
    id: "s3",
    device: "Windows Desktop",
    icon: LuLaptop,
    browser: "Firefox 124",
    ip: "172.16.0.88",
    location: "Delhi, IN",
    lastActive: "3 days ago",
    current: false,
  },
];

const Settings = () => {
  const [mfaEnabled, setMfaEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");

  const sections = [
    { id: "profile", label: "Profile", icon: LuCamera },
    { id: "security", label: "Security", icon: LuShield },
    { id: "sessions", label: "Sessions", icon: LuGlobe },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-bg-grey">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-xl font-bold text-text-primary mb-8">Settings</h1>

        {/* Section Tabs */}
        <div className="flex gap-2 mb-8">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === s.id
                  ? "bg-primary text-white shadow-sm"
                  : "bg-bg-primary text-text-secondary hover:bg-bg-grey border border-lightborder"
              }`}
            >
              <s.icon size={16} />
              {s.label}
            </button>
          ))}
        </div>

        {/* Profile Section */}
        {activeSection === "profile" && (
          <div className="space-y-6">
            {/* Avatar Card */}
            <div className="bg-bg-primary rounded-xl border border-lightborder p-6 shadow-sm">
              <div className="flex items-center gap-6">
                <div className="relative group">
                  <Avatar src={m1} size={80} className="border-2 border-lightborder shadow-sm" />
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <LuCamera className="text-white" size={20} />
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-text-primary">John Doe</h2>
                  <p className="text-[13px] text-text-muted">Student · Joined March 2024</p>
                  <button className="mt-3 text-primary text-[13px] font-medium hover:text-primary-hover transition-colors">
                    Change avatar
                  </button>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="bg-bg-primary rounded-xl border border-lightborder p-6 shadow-sm">
              <h3 className="text-sm font-bold text-text-primary mb-5">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[12px] font-medium text-text-muted mb-1.5 block">Full Name</label>
                  <Input defaultValue="John Doe" className="h-10 rounded-lg" prefix={<LuCamera size={14} className="text-text-muted" />} />
                </div>
                <div>
                  <label className="text-[12px] font-medium text-text-muted mb-1.5 block">Email Address</label>
                  <Input defaultValue="john.doe@university.edu" className="h-10 rounded-lg" prefix={<LuMail size={14} className="text-text-muted" />} />
                </div>
                <div>
                  <label className="text-[12px] font-medium text-text-muted mb-1.5 block">Phone Number</label>
                  <Input defaultValue="+91 98765 43210" className="h-10 rounded-lg" prefix={<LuPhone size={14} className="text-text-muted" />} />
                </div>
                <div>
                  <label className="text-[12px] font-medium text-text-muted mb-1.5 block">Location</label>
                  <Input defaultValue="Mumbai, India" className="h-10 rounded-lg" prefix={<LuMapPin size={14} className="text-text-muted" />} />
                </div>
              </div>
              <div className="mt-5">
                <label className="text-[12px] font-medium text-text-muted mb-1.5 block">Bio</label>
                <Input.TextArea
                  defaultValue="Passionate about learning and building great products. Currently exploring React and modern web development."
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  className="rounded-lg"
                />
              </div>
              <div className="flex justify-end mt-6">
                <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Account Details */}
            <div className="bg-bg-primary rounded-xl border border-lightborder p-6 shadow-sm">
              <h3 className="text-sm font-bold text-text-primary mb-5">Account Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-lightborder/50">
                  <div className="flex items-center gap-3">
                    <LuCalendar size={16} className="text-text-muted" />
                    <span className="text-[13px] text-text-secondary">Member since</span>
                  </div>
                  <span className="text-[13px] font-medium text-text-primary">March 15, 2024</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-lightborder/50">
                  <div className="flex items-center gap-3">
                    <LuGlobe size={16} className="text-text-muted" />
                    <span className="text-[13px] text-text-secondary">Language</span>
                  </div>
                  <span className="text-[13px] font-medium text-text-primary">English (US)</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <LuShield size={16} className="text-text-muted" />
                    <span className="text-[13px] text-text-secondary">Account Status</span>
                  </div>
                  <span className="text-[11px] bg-success/10 text-success px-2.5 py-1 rounded-full font-semibold">Active</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Security Section */}
        {activeSection === "security" && (
          <div className="space-y-6">
            {/* Change Password */}
            <div className="bg-bg-primary rounded-xl border border-lightborder p-6 shadow-sm">
              <h3 className="text-sm font-bold text-text-primary mb-5 flex items-center gap-2">
                <LuLock size={16} /> Change Password
              </h3>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="text-[12px] font-medium text-text-muted mb-1.5 block">Current Password</label>
                  <Input.Password className="h-10 rounded-lg" placeholder="Enter current password" />
                </div>
                <div>
                  <label className="text-[12px] font-medium text-text-muted mb-1.5 block">New Password</label>
                  <Input.Password className="h-10 rounded-lg" placeholder="Enter new password" />
                </div>
                <div>
                  <label className="text-[12px] font-medium text-text-muted mb-1.5 block">Confirm New Password</label>
                  <Input.Password className="h-10 rounded-lg" placeholder="Confirm new password" />
                </div>
                <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm mt-2">
                  Update Password
                </button>
              </div>
            </div>

            {/* MFA */}
            <div className="bg-bg-primary rounded-xl border border-lightborder p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
                    <LuKey size={16} /> Multi-Factor Authentication
                  </h3>
                  <p className="text-[12px] text-text-muted mt-1">Add an extra layer of security to your account.</p>
                </div>
                <Switch checked={mfaEnabled} onChange={setMfaEnabled} />
              </div>
              {mfaEnabled && (
                <div className="mt-4 p-5 bg-bg-grey rounded-xl border border-lightborder">
                  <p className="text-[13px] text-text-secondary mb-4">
                    Scan this QR code with your authenticator app (Google Authenticator, Authy, etc.)
                  </p>
                  <div className="w-40 h-40 bg-white rounded-xl border border-lightborder flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <div className="grid grid-cols-5 gap-1">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-5 h-5 rounded-sm ${
                            Math.random() > 0.4 ? "bg-text-primary" : "bg-white"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] text-text-muted text-center">
                    Or enter setup key manually: <span className="font-mono font-bold text-text-primary">JBSWY3DPEHPK3PXP</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Sessions Section */}
        {activeSection === "sessions" && (
          <div className="space-y-6">
            <div className="bg-bg-primary rounded-xl border border-lightborder p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-bold text-text-primary">Active Sessions</h3>
                  <p className="text-[12px] text-text-muted mt-1">Devices where your account is currently logged in.</p>
                </div>
                <button className="flex items-center gap-2 text-error text-[13px] font-medium hover:text-error/80 transition-colors">
                  <LuLogOut size={14} />
                  Sign out all
                </button>
              </div>

              <div className="space-y-3">
                {SESSIONS.map((session) => (
                  <div
                    key={session.id}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${
                      session.current ? "bg-primary/5 border-primary/20" : "bg-bg-grey border-lightborder hover:bg-bg-secondary"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        session.current ? "bg-primary/10 text-primary" : "bg-bg-secondary text-text-muted border border-lightborder"
                      }`}>
                        <session.icon size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-[13px] font-semibold text-text-primary">{session.device}</p>
                          {session.current && (
                            <span className="text-[10px] bg-success/10 text-success px-2 py-0.5 rounded-full font-bold">This device</span>
                          )}
                        </div>
                        <p className="text-[11px] text-text-muted mt-0.5">
                          {session.browser} · {session.ip} · {session.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`text-[11px] font-medium ${
                        session.current ? "text-success" : "text-text-muted"
                      }`}>
                        {session.lastActive}
                      </span>
                      {!session.current && (
                        <button className="text-[12px] text-error font-medium hover:text-error/80 transition-colors">
                          Revoke
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
