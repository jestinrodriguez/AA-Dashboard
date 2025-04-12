import { History, Upload, Zap } from "lucide-react";
import { AppSidebar } from "../components/AppSidebar";
import DashboardAccordion from "../components/DashboardAccordion";
import DashboardCards from "../components/DashboardCards";
import DashboardChart from "../components/DashboardChart";
import DashboardSheet from "../components/DashboardSheet";
import { Button } from "../components/ui/button";
import { SidebarInset, SidebarProvider } from "../components/ui/sidebar";
import SearchBar from "../components/SearchBar";

const DashboardPage = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col h-screen sm:min-h-0 sm:overflow-hidden">
        <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <div>Charging Stations</div>
            <div>Fleet Sizing</div>
            <div>Parking</div>
            <div>
              <SearchBar />
            </div>
          </div>
        </header>
        <main className="flex-1 bg-dashboard p-7 flex flex-col sm:min-h-0 sm:overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2">
            <span className="flex items-center">
              <Zap size={30} className="mr-3" />
              <h1>Charging Station</h1>
            </span>
            <div className="flex items-center gap-2">
              <Button variant="primary">
                <History />
              </Button>
              <DashboardSheet />
              <Button variant="primary">
                <Upload />
              </Button>
            </div>
          </div>
          <DashboardAccordion title={"Best Scenario Results"} />
          <div className="grid grid-cols-1 sm:grid-cols-12 px-4 pt-5 gap-4 flex-1 h-full min-h-0">
            <div className="col-span-12 md:col-span-8 sm:col-span-7 flex flex-col h-full min-h-0">
              <h2 className="text-lg font-semibold mb-2">Graphs</h2>
              <div className="rounded-xl flex-1 h-full min-h-0 flex flex-col">
                <DashboardChart />
                {/* <div className="bg-amber-200 flex-1 h-full">1</div> TESTING */}
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 sm:col-span-5 flex flex-col h-full">
              <h2 className="text-lg font-semibold mb-2">
                Key Performance Indicators
              </h2>
              <div className="gap-3 flex-1 h-full">
                <DashboardCards />
                {/* <div className="bg-amber-200 flex-1 h-full">1</div> TESTING */}
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardPage;
