export default function Page() {
  return (
    <main>
      <h1>redirect to login</h1>
    </main>
  );
}

// import { Card } from "@/app/ui/home/cards";
// import LatestProjects from "@/app/ui/home/latest-projects";
// import { lusitana } from "@/app/ui/fonts";
// import { Suspense } from "react";
// import Table from "./ui/projects/table";
// import Pagination from "./ui/projects/pagination";
// import { ProjectTableSkeleton } from "./ui/skeletons";

// export default async function Page({
//   searchParams,
// }: {
//   searchParams?: {
//     query?: string;
//     page?: string;
//   };
// }) {
//   const query = searchParams?.query || "";
//   const currentPage = Number(searchParams?.page) || 1;

//   // const latestInvoices = await fetchLatestInvoices();
//   // const {
//   //   totalPaidInvoices,
//   //   totalPendingInvoices,
//   //   numberOfInvoices,
//   //   numberOfCustomers,
//   // } = await fetchCardData();
//   return (
//     <main>
//       <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
//         Dashboard
//       </h1>
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         <Card
//           title="Projects"
//           value={10}
//           type="projects"
//         />
//         <Card
//           title="Total Todos"
//           value={10}
//           type="todos"
//         />
//         <Card
//           title="Pending"
//           value={10}
//           type="pending"
//         />
//         <Card
//           title="Completed Todos"
//           value={10}
//           type="completed_todos"
//         />
//       </div>
//       {/* <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8"> */}
//       <Suspense
//         key={query + currentPage}
//         fallback={<ProjectTableSkeleton />}
//       >
//         <Table
//           query={query}
//           currentPage={currentPage}
//         />
//       </Suspense>
//       {/* </div> */}
//     </main>
//   );
// }
