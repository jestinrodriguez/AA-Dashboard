import * as React from "react";
import {
  Bell,
  CalendarClock,
  CloudUpload,
  House,
  SettingsIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "../components/ui/sidebar";
import { SidebarTrigger } from "./ui/sidebar";
import useAuthStore from "../store/useAuthStore";
import NavMain from "./NavMain";
import NavUser from "./NavUser";

const data = {
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: House,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Notifications",
      url: "#",
      icon: Bell,
    },
    {
      title: "Tasks",
      url: "#",
      icon: CalendarClock,
    },
    {
      title: "Upload",
      url: "#",
      icon: CloudUpload,
    },
    {
      title: "Settings",
      url: "#",
      icon: SettingsIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuthStore();
  const currentUser = {
    name: user?.displayName ?? "",
    email: user?.email ?? "",
    avatar: user?.photoURL ?? "",
  };
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="hidden h-16 sm:flex flex-start justify-center">
        <SidebarTrigger className="cursor-pointer" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={currentUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
