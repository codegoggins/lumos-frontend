import { useState } from "react";
import authBg from "../../../assets/images/auth_bg.png";
import { LuCloudSun } from "react-icons/lu";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return { greeting: "Good Morning", emoji: "☀️" };
  if (hour < 17) return { greeting: "Good Afternoon", emoji: "🌤️" };
  if (hour < 21) return { greeting: "Good Evening", emoji: "🌅" };
  return { greeting: "Burning the Midnight Oil?", emoji: "🌙" };
};

const funMessages = [
  "Ready to crush some lessons today? Your brain called — it's hungry.",
  "Another day, another chance to pretend you understand quantum physics.",
  "Your future self will thank you. Or at least buy you coffee.",
  "Fun fact: You're already smarter than yesterday. Keep going!",
  "The wifi is strong and so are you. Let's do this.",
  "Knowledge is power. And power means extra snacks. Let's learn!",
  "Today's forecast: 100% chance of being awesome.",
  "Your streak is on fire. Don't let it go out like your gym membership.",
];

const WelcomeBanner = () => {
  const { greeting, emoji } = getGreeting();
  const [funMessage] = useState(
    () => funMessages[Math.floor(Math.random() * funMessages.length)],
  );

  return (
    <div
      className="relative h-48 rounded-3xl overflow-hidden flex items-center shrink-0"
      style={{
        backgroundImage: `url(${authBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex items-center justify-between w-full px-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-white">
            {greeting}, Explorer {emoji}
          </h1>
          <p className="text-white/80 text-sm leading-relaxed max-w-md">
            {funMessage}
          </p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <LuCloudSun className="text-white text-xl" />
          <span className="text-white font-semibold text-lg">24°C</span>
          <span className="text-white/60 text-xs">Sunny</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
