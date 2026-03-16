import { LuFlame, LuTrophy } from "react-icons/lu";
import { Table } from "antd";
import type { TableProps } from "antd";

interface LeaderboardEntry {
  key: string;
  name: string;
  streak: number;
}

const leaderboardData: LeaderboardEntry[] = [
  { key: "1", name: "Priya Sharma", streak: 45 },
  { key: "2", name: "Alex Rivera", streak: 38 },
  { key: "3", name: "Sarah Johnson", streak: 32 },
  { key: "4", name: "Mike Chen", streak: 28 },
  { key: "5", name: "You", streak: 13 },
];

const leaderboardColumns: TableProps<LeaderboardEntry>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (name: string) => (
      <span
        className={`text-xs font-medium ${
          name === "You" ? "text-primary font-bold" : "text-text-primary"
        }`}
      >
        {name}
      </span>
    ),
  },
  {
    title: "Streak",
    dataIndex: "streak",
    key: "streak",
    width: 70,
    align: "right" as const,
    render: (streak: number) => (
      <div className="flex items-center justify-end gap-1">
        <LuFlame className="text-orange-500 text-xs" />
        <span className="text-xs font-semibold text-text-primary">
          {streak}
        </span>
      </div>
    ),
  },
];

const Leaderboard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold text-text-primary">Leaderboard</h3>
        <LuTrophy className="text-sm text-warning" />
      </div>
      <Table<LeaderboardEntry>
        columns={leaderboardColumns}
        dataSource={leaderboardData}
        pagination={false}
        size="small"
        className="[&_.ant-table]:!bg-transparent [&_.ant-table-thead_th]:!bg-bg-secondary [&_.ant-table-thead_th]:!text-[10px] [&_.ant-table-thead_th]:!text-text-muted [&_.ant-table-thead_th]:!font-medium [&_.ant-table-thead_th]:!py-1.5 [&_.ant-table-tbody_td]:!py-2 [&_.ant-table-thead_th]:!border-b-border"
      />
    </div>
  );
};

export default Leaderboard;
