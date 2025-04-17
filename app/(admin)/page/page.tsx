import { Home, Compass, Video, PlaySquare, Clock, List, Heart } from 'lucide-react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-black text-white flex flex-col p-4">
      <div className="text-2xl font-bold mb-6">
        <span className="text-red-600">DPRKP</span>DKI Jakarta
      </div>

      <div className="space-y-2 flex flex-col">
        <SidebarItem icon={<Home size={20} />} label="Home" active />
        <SidebarItem icon={<Compass size={20} />} label="Explore" active={''} />
        <SidebarItem icon={<Video size={20} />} label="Shorts" active={''}/>
        <SidebarItem icon={<PlaySquare size={20} />} label="Subscriptions" active={''} />
      </div>

      <hr className="my-4 border-gray-700" />

      <div className="text-sm text-gray-400 mb-2">Library</div>
      <div className="space-y-2 flex flex-col">
        <SidebarItem icon={<Clock size={20} />} label="History" active={''} />
        <SidebarItem icon={<Clock size={20} />} label="Watch Later" active={''} />
        <SidebarItem icon={<List size={20} />} label="Playlists" active={''} />
        <SidebarItem icon={<Heart size={20} />} label="Liked Videos" active={''} />
      </div>

      <div className="mt-auto pt-4 border-t border-gray-700 flex items-center gap-2">
        {/* <Image
          src="/profile.jpg"
          alt="Profile"
          width={36}
          height={36}
          className="rounded-full"
        /> */}
        <div>
          <div className="font-semibold text-sm">Content Management System</div>
          <div className="text-xs text-gray-400">DPRKP DKI Jakarta</div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-800 ${
      active ? 'bg-gray-800' : ''
    }`}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

export default Sidebar;
