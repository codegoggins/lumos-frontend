import { motion } from "framer-motion";
import WelcomeBanner from "./components/WelcomeBanner";
import StatsCards from "./components/StatsCards";
import TopSkills from "./components/TopSkills";
import ContinueWatching from "./components/ContinueWatching";
import TasksTable from "./components/TasksTable";
import ProfileCard from "./components/ProfileCard";
import StreakCalendar from "./components/StreakCalendar";
import LearningActivityChart from "./components/LearningActivityChart";
import Leaderboard from "./components/Leaderboard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-full w-full flex gap-6"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-[4.5] h-full flex flex-col gap-6 overflow-y-auto overflow-x-hidden"
      >
        <motion.div variants={itemVariants}>
          <WelcomeBanner />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatsCards />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TopSkills />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ContinueWatching />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TasksTable />
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-[1.5] h-full overflow-y-auto flex flex-col gap-5"
      >
        <motion.div variants={itemVariants}>
          <ProfileCard />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StreakCalendar />
        </motion.div>
        <motion.div variants={itemVariants}>
          <LearningActivityChart />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Leaderboard />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
