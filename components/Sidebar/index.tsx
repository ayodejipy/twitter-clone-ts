import Image from "next/image"

// component
import SidebarLink from "./Elements/SidebarLink"

import { HomeIcon } from "@heroicons/react/solid";
import {
	HashtagIcon,
	BellIcon,
	InboxIcon,
	BookmarkIcon,
	ClipboardListIcon,
	UserIcon,
	DotsCircleHorizontalIcon,
	DotsHorizontalIcon,
} from "@heroicons/react/outline";

function Sidebar() {
	return (
		<div className="hidden sm:flex flex-col items-center xl:items-start xl:w-96 p-2 fixed h-full xl:ml-24">
			<div className="flex justify-center items-center w-14 h-14 p-0 hoverStyle">
				<Image src="https://rb.gy/ogau5a" width={30} height={30} />
			</div>

			<div className="space-y mt-1 mb-2.5">
				<SidebarLink text="Home" Icon={HomeIcon} active />
				<SidebarLink text="Explore" Icon={HashtagIcon} />
				<SidebarLink text="Notifications" Icon={BellIcon} />
				<SidebarLink text="Messages" Icon={InboxIcon} />
				<SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
				<SidebarLink text="Lists" Icon={ClipboardListIcon} />
				<SidebarLink text="Profile" Icon={UserIcon} />
				<SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
			</div>

			<button className="hidden xl:inline-flex items-center justify-center font-bold text-twitter-gray bg-twitter-button rounded-full w-60 mt-4 py-4 px-8">
				Tweet
			</button>
			
			<div className="text-twitter-gray flex items-center sm:justify-center justify-start hoverStyle xl:-mr-5 mt-auto">
				<img 
					src="https://www.kindpng.com/picc/m/151-1514720_dk-metcalf-headshot-png-transparent-png.png" 
					alt="user"
					className="h-10 w-10 rounded-full xl:mr-2.5"
				/>
				<div className="hidden xl:inline leading-6">
					<h4 className="font-bold">AYO DEJI</h4>
					<p className="text-[#6e767d]">@ayodejipy_</p>
				</div>
				<DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
			</div>
		</div>
	)
}

export default Sidebar
