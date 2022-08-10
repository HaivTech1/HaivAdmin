import { useState } from 'react';
import { useAdmin } from '../lib/provider/context';
import { GlobeAltIcon, SearchIcon, TrashIcon } from '@heroicons/react/solid';
import Dropdown from './Dropdown';
import { DropdownButton } from './DropdownLink';
import Link from './Link';
import { navigation } from '../utils/nav';
import ThemeSwitch from './ThemeSwitch';
import CommandPalette from './CommandPalette';
import headerNavLinks from '../utils/headerNavLinks';
import Image from 'next/image';
import { signout } from '../lib/user';
import Swal from 'sweetalert2';

const AppNavigation = () => {
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState('');

  const { handleSearch, resetSearch, user } = useAdmin();

  const sideBarHandler = () => {
    setOpen((open = !open));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    handleSearch(query);
  };

  const handleReset = (e) => {
    resetSearch();
    setQuery('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setQuery('');
      resetSearch();
    }
  };

  const handleSignout = async () => {
    const isConfirm = await Swal.fire({
      title: 'Hello!',
      text: 'Are you sure you want to end your session?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#F9A01B',
      confirmButtonText: 'Yes, please!',
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      return;
    }

    signout();
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={sideBarHandler}
                id="toggleSidebarMobile"
                aria-expanded="true"
                aria-controls="sidebar"
                className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
              >
                <svg
                  id="toggleSidebarMobileHamburger"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  id="toggleSidebarMobileClose"
                  className="w-6 h-6 hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <div className=" flex items-center lg:ml-2.5">
                <Image src="/logo.svg" width={250} height={70} alt="logo" />
              </div>

              <form
                className="hidden lg:block lg:pl-32"
                onSubmit={handleSubmit}
              >
                <div className="mt-1 relative lg:w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="w-5 h-5 text-primary-500" />
                  </div>
                  <input
                    value={query}
                    type="text"
                    id="topbar-search"
                    onChange={({ target }) => setQuery(target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-gray-50 border border-gray-300 text-primary-500 font-bold sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                    placeholder="Search"
                  />
                  <div className="absolute inset-y-0 right-3 pl-3 flex items-center pointer-events-none">
                    <TrashIcon
                      onClick={handleReset}
                      className="w-5 h-5 text-primary-500 cursor-pointer"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="flex items-center text-base leading-5">
              <CommandPalette navigation={navigation} />
              <ThemeSwitch />
              <div className="sm:flex sm:items-center sm:ml-6 ml-3 items-end">
                {user ? (
                  <Dropdown
                    align="right"
                    width="48"
                    trigger={
                      <div className="flex justify-between items-center gap-2">
                        <h1 className="font-bold uppercase">{user.role}</h1>
                        <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                          <div className="flex justify-between items-center">
                            <div className="flex-shrink-0">
                              <div className="shrink-0 flex items-center justify-center rounded-full overflow-hidden relative bg-gray-200 w-9 h-9">
                                <svg
                                  className="h-10 w-10 fill-current text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div className="">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                    }
                  >
                    {/* Authentication */}
                    <DropdownButton onClick={handleSignout}>
                      Logout
                    </DropdownButton>
                  </Dropdown>
                ) : (
                  <div>
                    <Link
                      href="/auth/signin"
                      className="inline-block py-2 px-4 text-secondary bg-primary-500 text-white hover:text-primary-700 ml-1 text-bold hover:bg-gray-100 rounded-lg"
                    >
                      Signin
                    </Link>
                    <Link
                      href="/auth/signup"
                      className="inline-block py-2 px-4 text-secondary bg-primary-500 text-white hover:text-primary-700 ml-1 text-bold hover:bg-gray-100 rounded-lg"
                    >
                      Signup
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {open && (
        <aside
          id="sidebar"
          className="fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
          aria-label="Sidebar"
        >
          <div className="relative flex-1 flex flex-col min-h-0 border-r-4 border-primary-200 bg-white  pt-0">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex-1 px-3   divide-y space-y-1">
                <ul className="space-y-2 pb-2">
                  <li>
                    <form onSubmit={handleSubmit} className="lg:hidden">
                      <label htmlFor="mobile-search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <TrashIcon
                            onClick={handleReset}
                            className="w-5 h-5 text-primary-500 cursor-pointer"
                          />
                        </div>
                        <input
                          value={query}
                          type="text"
                          id="topbar-search"
                          onChange={({ target }) => setQuery(target.value)}
                          onKeyDown={handleKeyDown}
                          className="bg-gray-50 border border-gray-300 text-primary-500 font-bold sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                          placeholder="Search"
                        />
                      </div>
                    </form>
                  </li>
                </ul>
                <div className="space-y-2 pt-2">
                  {headerNavLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="rounded-lg bg-primary-500 text-white hover:bg-primary-700 group transition duration-75 flex items-center p-2"
                    >
                      <span className=" font-bold text-md ml-3">
                        {link.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default AppNavigation;
