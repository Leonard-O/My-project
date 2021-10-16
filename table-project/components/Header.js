import Button from './Button';
import {
	PlusCircleIcon,
	HeartIcon,
	UserGroupIcon,
	PaperAirplaneIcon,
	MenuIcon,
	SearchCircleIcon,
	SearchIcon,
} from '@heroicons/react/outline';

function Header() {
	return (
		<div>
			<div className="flex justify-between bg-gray-200 max-w-6xl cursor-pointer">
				{/* Left */}
				<div className="hidden lg:inline-grid">
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
				<div className="relative mt-1 p-3 rounded-md">
					<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
						<SearchIcon className="h-5 w-5 text-gray-500" />
					</div>
					<input
						className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray focus:ring-black focus:border-black rounded-md"
						type="text"
						placeholder="Search"
					/>
				</div>

				{/* Right */}
				<div>
					<Button />
				</div>
			</div>
		</div>
	);
}

export default Header;
