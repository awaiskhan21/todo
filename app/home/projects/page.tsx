import Pagination from "@/app/ui/projects/pagination";
import Table from "@/app/ui/projects/table";
import { CreateProject } from "@/app/ui/projects/buttons";
import { lusitana } from "@/app/ui/fonts";
import { ProjectTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
// import { fetchInvoicesPages } from "@/app/lib/data";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  // const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Projects</h1>
        <div>
          <CreateProject />
        </div>
      </div>
      <Suspense
        key={query + currentPage}
        fallback={<ProjectTableSkeleton />}
      >
        <Table
          query={query}
          currentPage={currentPage}
        />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={10} />
        //need to change the totalPages
      </div>
    </div>
  );
}
