import {
  LuPalette,
  LuServer,
  LuCode,
  LuDatabase,
  LuSmartphone,
} from "react-icons/lu";

const skillsCards = [
  {
    icon: LuPalette,
    title: "UI/UX",
    iconColor: "text-primary",
    iconBg: "bg-primary-light",
  },
  {
    icon: LuServer,
    title: "Backend",
    iconColor: "text-success",
    iconBg: "bg-success-bg",
  },
  {
    icon: LuCode,
    title: "Frontend",
    iconColor: "text-info",
    iconBg: "bg-info-bg",
  },
  {
    icon: LuDatabase,
    title: "Database",
    iconColor: "text-warning",
    iconBg: "bg-warning-bg",
  },
  {
    icon: LuSmartphone,
    title: "Mobile",
    iconColor: "text-error",
    iconBg: "bg-error-bg",
  },
];

const TopSkills = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-base font-semibold text-text-primary">
        Your Top Skills
      </h2>
      <div className="grid grid-cols-5 gap-3">
        {skillsCards.map((skill) => (
          <div
            key={skill.title}
            className="bg-white rounded-xl p-3 flex items-center gap-2 shadow-sm"
          >
            <div
              className={`w-8 h-8 rounded-lg ${skill.iconBg} flex items-center justify-center`}
            >
              <skill.icon className={`text-sm ${skill.iconColor}`} />
            </div>
            <p className="text-xs font-semibold text-text-primary">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSkills;
