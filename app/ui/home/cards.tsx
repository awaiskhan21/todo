import {
  FolderIcon,
  CheckCircleIcon,
  ClockIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
// import { fetchCardData } from "@/app/lib/data";

const iconMap = {
  projects: FolderIcon,
  completed_todos: CheckCircleIcon,
  pending: ClockIcon,
  todos: ClipboardIcon,
};

export default async function CardWrapper() {
  // const {
  //   totalPaidtodos,
  //   totalPendingtodos,
  //   numberOftodos,
  //   numberOfcompleted todos,
  // } = await fetchCardData();
  return (
    <>
      <Card
        title="Projects"
        value={10}
        type="projects"
      />
      <Card
        title="Total Todos"
        value={10}
        type="todos"
      />
      <Card
        title="Pending"
        value={10}
        type="pending"
      />
      <Card
        title="Completed Todos"
        value={10}
        type="completed_todos"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "todos" | "completed_todos" | "pending" | "projects";
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
