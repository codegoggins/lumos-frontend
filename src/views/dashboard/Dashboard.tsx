import WelcomeBanner from "./components/WelcomeBanner";
import StatsCards from "./components/StatsCards";
import TopSkills from "./components/TopSkills";
import ContinueWatching from "./components/ContinueWatching";
import TasksTable from "./components/TasksTable";
import ProfileCard from "./components/ProfileCard";
import StreakCalendar from "./components/StreakCalendar";
import LearningActivityChart from "./components/LearningActivityChart";
import Leaderboard from "./components/Leaderboard";

const Dashboard = () => {
  return (
    <div className="h-full w-full flex gap-6">
      <div className="flex-[4.5] h-full flex flex-col gap-6 overflow-y-auto overflow-x-hidden">
        <WelcomeBanner />
        <StatsCards />
        <TopSkills />
        <ContinueWatching />
        <TasksTable />
      </div>

      <div className="flex-[1.5] h-full overflow-y-auto flex flex-col gap-5">
        <ProfileCard />
        <StreakCalendar />
        <LearningActivityChart />
        <Leaderboard />
      </div>
    </div>
  );
};

export default Dashboard;
