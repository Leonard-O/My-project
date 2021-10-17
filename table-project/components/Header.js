import Button from './Button';
import {
	PlusCircleIcon,
	HeartIcon,
	UserGroupIcon,
	PaperAirplaneIcon,
	MenuIcon,
	SearchCircleIcon,
	SearchIcon,
	HomeIcon,
} from '@heroicons/react/outline';
// import { HomeIcon } from '@heroicons/react/solid';

function Header() {
	return (
		<div>
			<div className="items-center flex justify-between  max-w-6xl mx-5 lg:mx-auto">
				{/* Left */}
				<div className="hidden lg:inline-grid cursor-pointer">
					<h1 className="">STUDY TIME TABLE</h1>
				</div>

				<div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
					<img
						src="https://cdn-icons-png.flaticon.com/512/1253/1253979.png"
						layout="fill"
						objectFit="contain"
					/>
				</div>

				{/* Middle */}
				<div className="max-w-xs">
					<div className="relative mt-1 p-3 rounded-md ">
						<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
							<SearchIcon className="h-5 w-5 text-gray-500" />
						</div>
						<input
							className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray focus:ring-black focus:border-black rounded-md"
							type="text"
							placeholder="Search"
						/>
					</div>
				</div>

				{/* Right */}
				<div className="flex items-center justify-end space-x-4">
					<HomeIcon className="navBar" />
					<Button className="navBar" />
					<PlusCircleIcon className="navBar" />
					<MenuIcon className="h-6 md:hidden cursor-pointer" />
				</div>
			</div>
		</div>
	);
}

export default Header;
