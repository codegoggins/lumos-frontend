import { useState, useRef, useEffect } from "react";
import { Avatar } from "antd";
import { LuCheck, LuCheckCheck } from "react-icons/lu";

import f1 from "../assets/images/avatars/f1.jpg";
import m1 from "../assets/images/avatars/m1.jpg";
import f2 from "../assets/images/avatars/f2.jpg";
import m2 from "../assets/images/avatars/m2.jpg";
import f3 from "../assets/images/avatars/f3.jpg";

interface Notification {
  id: string;
  avatar: string;
  name: string;
  verified?: boolean;
  action: string;
  highlight?: string;
  time: string;
  unread?: boolean;
  buttons?: { label: string; variant: "primary" | "outline" }[];
  attachment?: { name: string; size: string };
}

const NOTIFICATIONS: Notification[] = [
  {
    id: "n1",
    avatar: f1,
    name: "Tina Hernandez",
    verified: true,
    action: "replied to your comment in",
    highlight: "Design",
    time: "3 min ago",
    unread: true,
    buttons: [
      { label: "Reply", variant: "primary" },
      { label: "View", variant: "outline" },
    ],
  },
  {
    id: "n2",
    avatar: f2,
    name: "Alyssa Sherman",
    action: "followed you",
    time: "5 min ago",
    buttons: [{ label: "Follow Back", variant: "primary" }],
  },
  {
    id: "n3",
    avatar: m1,
    name: "Kelvin Hill",
    verified: true,
    action: "assigned you a task",
    highlight: "#BE3627",
    time: "25 March, 2024 5:42 PM",
  },
  {
    id: "n4",
    avatar: f3,
    name: "Vanessa Lee",
    action: "liked your comment",
    time: "25 March, 2024 5:40 PM",
  },
  {
    id: "n5",
    avatar: m2,
    name: "Blanche Phillips",
    verified: true,
    action: "added file to",
    highlight: "Beyond UI",
    time: "22 March, 2024 7:20 AM",
    attachment: { name: "FinalFinalFinal123.psd", size: "1.7 MB" },
  },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

const NotificationsDropdown = ({ open, onClose }: Props) => {
  const [tab, setTab] = useState<"all" | "unread">("all");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose]);

  if (!open) return null;

  const filtered = tab === "unread" ? NOTIFICATIONS.filter((n) => n.unread) : NOTIFICATIONS;

  return (
    <div
      ref={ref}
      className="absolute top-14 right-0 w-[420px] bg-bg-primary rounded-2xl shadow-xl border border-lightborder z-50 overflow-hidden"
    >
      {/* Header */}
      <div className="px-5 pt-4 pb-2 flex items-center justify-between">
        <h3 className="text-sm font-bold text-text-primary">Notifications</h3>
        <button className="flex items-center gap-1 text-primary text-[11px] font-medium hover:text-primary-hover transition-colors">
          <LuCheckCheck size={13} />
          Mark all as read
        </button>
      </div>

      {/* Tabs */}
      <div className="px-5 flex gap-5 border-b border-lightborder">
        <button
          onClick={() => setTab("all")}
          className={`pb-2.5 text-[12px] font-medium border-b-2 transition-colors ${
            tab === "all" ? "border-text-primary text-text-primary" : "border-transparent text-text-muted"
          }`}
        >
          All Notifications
        </button>
        <button
          onClick={() => setTab("unread")}
          className={`pb-2.5 text-[12px] font-medium border-b-2 transition-colors ${
            tab === "unread" ? "border-text-primary text-text-primary" : "border-transparent text-text-muted"
          }`}
        >
          Unread
        </button>
      </div>

      {/* List */}
      <div className="max-h-[420px] overflow-y-auto">
        {filtered.map((n) => (
          <div
            key={n.id}
            className="px-5 py-4 hover:bg-bg-grey transition-colors border-b border-lightborder/50 last:border-0"
          >
            <div className="flex gap-3">
              <div className="relative shrink-0">
                <Avatar src={n.avatar} size={36} className="border border-lightborder/50 shadow-sm" />
                {n.unread && (
                  <span className="absolute bottom-0 left-0 w-2 h-2 bg-success rounded-full border-2 border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[11px] text-text-primary leading-relaxed">
                    <span className="font-bold">{n.name}</span>
                    {n.verified && (
                      <LuCheck className="inline mx-0.5 text-primary bg-primary/10 rounded-full p-0.5" size={12} />
                    )}
                    <span className="text-text-secondary"> {n.action} </span>
                    {n.highlight && <span className="font-bold">{n.highlight}</span>}
                  </p>
                  {n.unread && <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />}
                </div>
                <p className="text-[10px] text-text-muted mt-0.5">{n.time}</p>

                {n.buttons && (
                  <div className="flex gap-2 mt-3">
                    {n.buttons.map((btn) => (
                      <button
                        key={btn.label}
                        className={`px-3 py-1 rounded-md text-[10px] font-semibold transition-colors ${
                          btn.variant === "primary"
                            ? "bg-text-primary text-white hover:bg-black"
                            : "bg-transparent text-text-primary border border-border hover:bg-bg-grey"
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                )}

                {n.attachment && (
                  <div className="mt-2 flex items-center gap-2.5 bg-bg-grey rounded-lg p-2.5 border border-lightborder/50">
                    <div className="w-8 h-8 bg-bg-secondary rounded-md flex items-center justify-center shrink-0">
                      <span className="text-[9px] font-bold text-text-muted">.psd</span>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-text-primary leading-tight">{n.attachment.name}</p>
                      <p className="text-[9px] text-text-muted">{n.attachment.size}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="py-12 text-center text-text-muted text-sm">No unread notifications</div>
        )}
      </div>
    </div>
  );
};

export default NotificationsDropdown;
