
import './Header.css';

const navigation = [
    { name: "Главная", href: "#", active: true },
    { name: "Новости", href: "#", active: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Header() {
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 lg:px-8 sm:px-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between gap-5 py-5">
                        <img
                            className="h-8"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                            alt="Your Company"
                        />
                        <ul className="flex justify-between gap-3 text-white">
                            {navigation.map((item) => (
                                <li
                                    key={item.name}
                                >
                                    <a
                                        href={item.href}
                                        className={classNames(
                                            item.active ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                            "px-3 py-2 rounded-md text-sm font-medium"
                                        )}
                                        key={item.name}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="user flex gap-3 items-center">
                        <a href='#'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 curs hover:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </a>

                        <a href='#'>
                            <img
                                className="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="#"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;