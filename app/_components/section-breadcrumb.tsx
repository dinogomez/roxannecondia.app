"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

function BreadCrumb() {
  const pathname = usePathname();

  const Badge = ({ count }: { count: number }) => {
    if (pathname !== "/projects") {
      return (
        <div className="absolute right-[-0.78rem] top-[-0.2rem] animate-pulse flex items-center justify-center w-3 h-3 bg-red-500 p-0 text-white rounded-full text-[0.6rem]">
          <span className="mr-[0px] ">{count}</span>
        </div>
      );
    }
  };

  return (
    <>
      <Breadcrumb className="border-t pt-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            {pathname === "/" ? (
              <BreadcrumbPage>Experience</BreadcrumbPage>
            ) : (
              <BreadcrumbLink href="/#list">Experience</BreadcrumbLink>
            )}
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}

export default BreadCrumb;
