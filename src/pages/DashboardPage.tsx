// import { AppSidebar } from "../components/AppSidebar";
// import DashboardChart from "../components/DashboardChart";
// import DashboardSheet from "../components/DashboardSheet";
// import { SidebarInset, SidebarProvider } from "../components/ui/sidebar";
// const DashboardPage = () => {
//   return (
//     <SidebarProvider>
//       <AppSidebar/>
//       <SidebarInset>
//         <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
//           <div className="flex items-center gap-2 px-4">
//             <div>Charging Stations</div>
//             <div>Fleet Sizing</div>
//             <div>Parking</div>
//             <div>Search Bar</div>
//           </div>
//         </header>
//         <div className="flex items-center justify-between px-4 py-2">
//           <div>Charging Station</div>
//           <div>
//             <DashboardSheet/>
//           </div>
//         </div>
//         <div>Best Scenario Results</div>
//         <div className="grid grid-cols-12 gap-4 p-4 pt-0">
//           <div className="col-span-8 aspect-video rounded-xl bg-muted/50">
//             <DashboardChart/>
//           </div>
//           <div className="col-span-4 grid grid-cols-2 gap-4">
//             <div className="rounded-xl bg-muted/50" />
//             <div className="rounded-xl bg-muted/50" />
//             <div className="rounded-xl bg-muted/50" />
//             <div className="rounded-xl bg-muted/50" />
//           </div>
//         </div>
//       </SidebarInset>
//     </SidebarProvider>
//   );
// };

// export default DashboardPage;



// src/pages/DashboardPage.tsx

import { AppSidebar } from "../components/AppSidebar"
import DashboardChart from "../components/DashboardChart"
import DashboardSheet from "../components/DashboardSheet"
import { SidebarInset, SidebarProvider } from "../components/ui/sidebar"
import CategorySelector from "../components/CategorySelector"

const DashboardPage = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <div>Charging Stations</div>
            <div>Fleet Sizing</div>
            <div>Parking</div>
            <div>Search Bar</div>
          </div>
        </header>
        <div className="flex items-center justify-between px-4 py-2">
          <div>Charging Station</div>
          <div>
            <DashboardSheet />
          </div>
        </div>
        <div>Best Scenario Results</div>
        <div className="grid grid-cols-12 gap-4 p-4 pt-0">
          <div className="col-span-8 aspect-video rounded-xl bg-muted/50">
            <DashboardChart />
          </div>
          <div className="col-span-4 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-muted/50" />
            <div className="rounded-xl bg-muted/50" />
            <div className="rounded-xl bg-muted/50" />
            <div className="rounded-xl bg-muted/50" />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardPage
