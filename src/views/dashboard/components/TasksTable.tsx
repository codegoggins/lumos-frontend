import { LuPlus } from "react-icons/lu";
import { Button, Table, Tag } from "antd";
import type { TableProps } from "antd";

interface TaskEntry {
  key: string;
  task: string;
  course: string;
  due: string;
  status: "Completed" | "In Progress" | "Pending" | "Overdue";
}

const tasksData: TaskEntry[] = [
  {
    key: "1",
    task: "Complete UI wireframes",
    course: "UI Design Fundamentals",
    due: "Mar 10",
    status: "Completed",
  },
  {
    key: "2",
    task: "Build navigation component",
    course: "Advanced React Patterns",
    due: "Mar 12",
    status: "Completed",
  },
  {
    key: "3",
    task: "Set up Express server",
    course: "Node.js Masterclass",
    due: "Mar 13",
    status: "In Progress",
  },
  {
    key: "4",
    task: "Create bar chart component",
    course: "Data Visualization",
    due: "Mar 14",
    status: "In Progress",
  },
  {
    key: "5",
    task: "Train first ML model",
    course: "Machine Learning Basics",
    due: "Mar 15",
    status: "Pending",
  },
  {
    key: "6",
    task: "Design color palette",
    course: "UI Design Fundamentals",
    due: "Mar 16",
    status: "Pending",
  },
  {
    key: "7",
    task: "Implement context API",
    course: "Advanced React Patterns",
    due: "Mar 17",
    status: "Pending",
  },
  {
    key: "8",
    task: "Build REST API endpoints",
    course: "Node.js Masterclass",
    due: "Mar 18",
    status: "Pending",
  },
  {
    key: "9",
    task: "Create scatter plot",
    course: "Data Visualization",
    due: "Mar 19",
    status: "Overdue",
  },
  {
    key: "10",
    task: "Data preprocessing lab",
    course: "Machine Learning Basics",
    due: "Mar 08",
    status: "Overdue",
  },
  {
    key: "11",
    task: "Responsive layout exercise",
    course: "UI Design Fundamentals",
    due: "Mar 20",
    status: "Pending",
  },
  {
    key: "12",
    task: "Custom hooks workshop",
    course: "Advanced React Patterns",
    due: "Mar 21",
    status: "Pending",
  },
  {
    key: "13",
    task: "Database integration",
    course: "Node.js Masterclass",
    due: "Mar 22",
    status: "Pending",
  },
  {
    key: "14",
    task: "Interactive dashboard",
    course: "Data Visualization",
    due: "Mar 23",
    status: "Pending",
  },
  {
    key: "15",
    task: "Neural network basics",
    course: "Machine Learning Basics",
    due: "Mar 24",
    status: "Pending",
  },
  {
    key: "16",
    task: "Typography assignment",
    course: "UI Design Fundamentals",
    due: "Mar 25",
    status: "Pending",
  },
  {
    key: "17",
    task: "State management patterns",
    course: "Advanced React Patterns",
    due: "Mar 26",
    status: "Pending",
  },
  {
    key: "18",
    task: "Authentication system",
    course: "Node.js Masterclass",
    due: "Mar 27",
    status: "In Progress",
  },
  {
    key: "19",
    task: "Heatmap visualization",
    course: "Data Visualization",
    due: "Mar 28",
    status: "Pending",
  },
  {
    key: "20",
    task: "Model evaluation report",
    course: "Machine Learning Basics",
    due: "Mar 30",
    status: "Pending",
  },
];

const statusColorMap: Record<TaskEntry["status"], string> = {
  Completed: "success",
  "In Progress": "processing",
  Pending: "warning",
  Overdue: "error",
};

const taskColumns: TableProps<TaskEntry>["columns"] = [
  {
    title: "Task",
    dataIndex: "task",
    key: "task",
    render: (task: string) => (
      <span className="text-xs font-medium text-text-primary">{task}</span>
    ),
  },
  {
    title: "Course",
    dataIndex: "course",
    key: "course",
    render: (course: string) => (
      <span className="text-xs text-text-secondary">{course}</span>
    ),
  },
  {
    title: "Due",
    dataIndex: "due",
    key: "due",
    width: 90,
    render: (due: string) => (
      <span className="text-xs text-text-muted">{due}</span>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 110,
    render: (status: TaskEntry["status"]) => (
      <Tag color={statusColorMap[status]} className="!text-[11px] !m-0">
        {status}
      </Tag>
    ),
  },
];

const TasksTable = () => {
  return (
    <div className="flex flex-col gap-4 shrink-0">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-text-primary">My Tasks</h2>
        <Button
          type="primary"
          size="small"
          icon={<LuPlus />}
          className="!flex !items-center !gap-1 !text-xs !rounded-lg"
        >
          Add Task
        </Button>
      </div>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <Table<TaskEntry>
          columns={taskColumns}
          dataSource={tasksData}
          size="small"
          pagination={{
            pageSize: 5,
            size: "small",
            showSizeChanger: false,
          }}
          className="[&_.ant-table]:!bg-transparent [&_.ant-table-thead_th]:!bg-bg-secondary [&_.ant-table-thead_th]:!text-[10px] [&_.ant-table-thead_th]:!text-text-muted [&_.ant-table-thead_th]:!font-medium [&_.ant-table-thead_th]:!py-2 [&_.ant-table-tbody_td]:!py-2.5 [&_.ant-table-thead_th]:!border-b-border"
        />
      </div>
    </div>
  );
};

export default TasksTable;
