import { AdminSidebar } from "@/components/admin-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import FeaturedPhotoList from "./_components/FeaturedPhotoList";
import FeaturedPhotoForm from "./_components/FeaturedPhotoForm";
import {
  redirectIfNotAuthenticated,
  redirectIfRoleNotAuthorized,
} from "@/lib/page-guard";

export default async function page() {
  await redirectIfNotAuthenticated("/");
  await redirectIfRoleNotAuthorized(["super-admin"], "/");
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset className="h-screen overflow-hidden flex flex-col">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbPage>Homepage</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Featured Photo</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-col gap-4 p-4 pt-0 grow overflow-hidden">
          <div>
            <FeaturedPhotoForm />
          </div>
          <div className="grow overflow-auto">
            <FeaturedPhotoList />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
