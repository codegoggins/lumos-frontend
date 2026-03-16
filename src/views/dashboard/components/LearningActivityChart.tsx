import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Oct", hours: 12, courses: 2 },
  { month: "Nov", hours: 19, courses: 3 },
  { month: "Dec", hours: 15, courses: 2 },
  { month: "Jan", hours: 28, courses: 5 },
  { month: "Feb", hours: 22, courses: 4 },
  { month: "Mar", hours: 34, courses: 6 },
];

const LearningActivityChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-3">
      <h3 className="text-xs font-semibold text-text-primary">
        Learning Activity
      </h3>
      <ResponsiveContainer width="100%" height={150}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6b66de" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#6b66de" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 10, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
            width={30}
          />
          <Tooltip
            contentStyle={{
              fontSize: 11,
              borderRadius: 8,
              border: "1px solid #edf0ff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
            itemStyle={{ fontSize: 11 }}
          />
          <Area
            type="monotone"
            dataKey="hours"
            stroke="#6b66de"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorHours)"
            name="Hours"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LearningActivityChart;
