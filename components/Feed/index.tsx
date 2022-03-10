import { SparklesIcon } from "@heroicons/react/outline"

// components
import AddTweet from "./AddTweet"


function Feed() {
	return (
		<div
			className="text-twitter-gray flex-grow max-w-2xl sm:ml-[70px] ml-20 xl:ml-96 border-l border-r border-gray-700"
		>
			<div className="flex items-center sm:justify-between py-2 px-3 text-twitter-gray sticky top-0 z-50">
				<h2 className="font-bold text-lg sm:text-xl">Home</h2>

				<div className="flex items-center justify-center hover:bg-gray-700 hover:bg-hover-20 transition duration-200 ease-out p-2 cursor-pointer rounded-full">
					<SparklesIcon className="h-5 text-white" />
				</div>
			</div>
			
			
			{/* Add create tweet input */}
			<AddTweet />
		</div>
	)
}

export default Feed
