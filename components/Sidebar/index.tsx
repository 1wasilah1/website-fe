import {
  Clock,
  Compass,
  List,
  Heart,
  Home,
  Menu,
  PlaySquare,
  Video,
} from "lucide-react";
import { useState } from "react";
// import { cookies } from "next/headers";

const Sidebar = () => {
  // const cookieStore = await cookies();
  // const id = cookieStore.get("u_id")?.value;
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const responseData = {
    _id: "68070515ed7f15f1d2854897",
    username: "testcoba2",
    role: "admin",
    authmenu: [
      {
        _id: "67f519df256398a13e64e4e7",
        nama: "Dashboard",
        path: "/organisasi",
        icon: "Users",
        parentId: null,
        urutan: 0,
        aktif: true,
        createdAt: "2025-04-08T12:43:11.468Z",
        updatedAt: "2025-04-24T07:06:17.706Z",
        __v: 0,
        name: "Organisasi",
        children: [],
      },
      {
        _id: "67f51a77256398a13e64e4e9",
        nama: "Profil",
        path: "/profil",
        icon: "BuildingIcon",
        parentId: null,
        urutan: 0,
        aktif: true,
        createdAt: "2025-04-08T12:45:43.765Z",
        updatedAt: "2025-04-08T12:45:43.765Z",
        __v: 0,
        children: [],
      },
      {
        _id: "6809de7eed7f15f1d2854940",
        name: "PPID",
        path: "/ppid",
        icon: "DashboardIcon",
        parentId: null,
        createdAt: "2025-04-24T06:47:26.460Z",
        updatedAt: "2025-04-24T06:47:26.460Z",
        __v: 0,
        children: [],
      },
    ],
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div
      className={`h-screen bg-black text-white flex flex-col p-4 ${
        isSidebarExpanded ? "w-80" : "w-[68px]"
      }`}
    >
      <div className="flex mb-6 ml-2">
        <div className="my-2 mr-2">
          <Menu size={20} onClick={toggleSidebar} />
        </div>
        <span
          className={`text-red-600 text-2xl font-bold ${
            isSidebarExpanded ? "" : "hidden"
          }`}
        >
          DPRKP
        </span>
        <span className={`my-1 mx-1 ${isSidebarExpanded ? "" : "hidden"}`}>
          DKI Jakarta
        </span>
      </div>

      <div className="space-y-2 flex flex-col">
        {responseData && responseData.authmenu.length > 0 ? (
          <>
            {responseData.authmenu.map((row, index) => (
              <SidebarItem
                key={index}
                isSidebarExpanded={isSidebarExpanded}
                icon={row.icon}
                label={row.nama || row.name}
                active={index === 0}
              />
            ))}
          </>
        ) : (
          <></>
        )}
        {/* 
        <SidebarItem
          key={2}
          icon={<Compass size={20} />}
          label="Explore"
          active={""}
          isSidebarExpanded={isSidebarExpanded}
        />
        <SidebarItem
          key={3}
          icon={<Video size={20} />}
          label="Shorts"
          active={""}
          isSidebarExpanded={isSidebarExpanded}
        />
        <SidebarItem
          icon={<PlaySquare size={20} />}
          label="Subscriptions"
          active={""}
          isSidebarExpanded={isSidebarExpanded}
        /> */}
      </div>

      {/* <hr className="my-4 border-gray-700" />

      {isSidebarExpanded ? (
        <div className="text-sm text-gray-400 mb-2">Library</div>
      ) : (
        <></>
      )} */}
      {/* <div className="space-y-2 flex flex-col">
        <SidebarItem
          key={4}
          icon={<Clock size={20} />}
          label="History"
          active={""}
          isSidebarExpanded={isSidebarExpanded}
        />
        <SidebarItem
          key={5}
          icon={<Clock size={20} />}
          label="Watch Later"
          active={""}
          isSidebarExpanded={isSidebarExpanded}
        />
        <SidebarItem
          key={6}
          icon={<List size={20} />}
          label="Playlists"
          active={""}
          isSidebarExpanded={isSidebarExpanded}
        />
        <SidebarItem
          key={7}
          icon={<Heart size={20} />}
          label="Liked Videos"
          active={""}
          isSidebarExpanded={isSidebarExpanded}
        />
      </div> */}

      <div className="mt-auto pt-4 border-t border-gray-700 flex items-center gap-2">
        {/* <Image
            src="/profile.jpg"
            alt="Profile"
            width={36}
            height={36}
            className="rounded-full"
          /> */}
        <div>
          {isSidebarExpanded ? (
            <>
              <div className="font-semibold text-sm">
                Content Management System
              </div>
              <div className="text-xs text-gray-400">DPRKP DKI Jakarta</div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, active, isSidebarExpanded }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-800 ${
      active ? "bg-gray-800" : ""
    }`}
  >
    <Home size={20} />
    <span className={`text-sm ${isSidebarExpanded ? "" : "hidden"}`}>
      {label}
    </span>
  </div>
);

export default Sidebar;
