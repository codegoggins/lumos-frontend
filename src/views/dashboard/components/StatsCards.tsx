import { motion } from "framer-motion";
import { LuTrophy, LuFlame, LuBookOpen } from "react-icons/lu";

const statsCards = [
  { icon: LuTrophy, label: "Courses", value: "28", iconColor: "text-warning", iconBg: "bg-warning-bg" },
  { icon: LuFlame, label: "Day Streak", value: "7", iconColor: "text-orange-500", iconBg: "bg-orange-50" },
  { icon: LuBookOpen, label: "In Progress", value: "3", iconColor: "text-pending", iconBg: "bg-pending-bg" },
  { icon: LuTrophy, label: "Completed", value: "12", iconColor: "text-warning", iconBg: "bg-warning-bg" },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-4 gap-4 shrink-0">
      {statsCards.map((card, i) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.03, y: -2 }}
          className="bg-primary rounded-xl p-5 flex items-center gap-4 shadow-sm cursor-pointer"
        >
          <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center`}>
            <card.icon className={`text-xl ${card.iconColor}`} />
          </div>
          <div>
            <p className="text-xl font-bold text-white">{card.value}</p>
            <p className="text-xs text-white">{card.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCards;
