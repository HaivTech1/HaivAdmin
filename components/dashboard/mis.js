const mis = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
        <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
          <div className="rounded-t mb-0 px-0 border-0">
            <div className="flex flex-wrap items-center px-4 py-2">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                  Social Traffic
                </h3>
              </div>
              <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-primary-500 dark:bg-gray-100 text-white active:bg-primary-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  See all
                </button>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Referral
                    </th>
                    <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Visitors
                    </th>
                    <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-gray-700 dark:text-gray-100">
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      Facebook
                    </th>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      5,480
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">70%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-primary-200">
                            <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-600 w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-700 dark:text-gray-100">
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      Twitter
                    </th>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      3,380
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">40%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-primary-200">
                            <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500 w-2/5"></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-700 dark:text-gray-100">
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      Instagram
                    </th>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      4,105
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">45%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                            <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500 w-2/5"></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-700 dark:text-gray-100">
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      Google
                    </th>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      4,985
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">60%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                            <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500 w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-700 dark:text-gray-100">
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      Linkedin
                    </th>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      2,250
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">30%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-primary-200">
                            <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-700 w-1/2"></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
          <div className="rounded-t mb-0 px-0 border-0">
            <div className="flex flex-wrap items-center px-4 py-2">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                  Recent Activities
                </h3>
              </div>
              <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-primary-500 dark:bg-gray-100 text-white active:bg-primary-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  See all
                </button>
              </div>
            </div>
            <div className="block w-full">
              <div className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Today
              </div>
              <ul className="my-1">
                <li className="flex px-4">
                  <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                    <svg
                      className="w-9 h-9 fill-current text-indigo-50"
                      viewBox="0 0 36 36"
                    >
                      <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
                    <div className="flex-grow flex justify-between items-center">
                      <div className="self-center">
                        <a
                          className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100 outline-none"
                          href="#0"
                        >
                          Nick Mark
                        </a>{' '}
                        mentioned{' '}
                        <a
                          className="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100 outline-none"
                          href="#0"
                        >
                          Sara Smith
                        </a>{' '}
                        in a new post
                      </div>
                      <div className="flex-shrink-0 ml-2">
                        <a
                          className="flex items-center font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500 outline-none"
                          href="#0"
                        >
                          View
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="transform transition-transform duration-500 ease-in-out"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex px-4">
                  <div className="w-9 h-9 rounded-full flex-shrink-0 bg-red-500 my-2 mr-3">
                    <svg
                      className="w-9 h-9 fill-current text-red-50"
                      viewBox="0 0 36 36"
                    >
                      <path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow flex items-center border-gray-100 text-sm text-gray-600 dark:text-gray-50 py-2">
                    <div className="flex-grow flex justify-between items-center">
                      <div className="self-center">
                        The post{' '}
                        <a
                          className="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100 outline-none"
                          href="#0"
                        >
                          Post Name
                        </a>{' '}
                        was removed by{' '}
                        <a
                          className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100 outline-none"
                          href="#0"
                        >
                          Nick Mark
                        </a>
                      </div>
                      <div className="flex-shrink-0 ml-2">
                        <a
                          className="flex items-center font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500 outline-none"
                          href="#0"
                        >
                          View
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="transform transition-transform duration-500 ease-in-out"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Yesterday
              </div>
              <ul className="my-1">
                <li className="flex px-4">
                  <div className="w-9 h-9 rounded-full flex-shrink-0 bg-green-500 my-2 mr-3">
                    <svg
                      className="w-9 h-9 fill-current text-light-primary-50"
                      viewBox="0 0 36 36"
                    >
                      <path d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow flex items-center border-gray-100 text-sm text-gray-600 dark:text-gray-50 py-2">
                    <div className="flex-grow flex justify-between items-center">
                      <div className="self-center">
                        <a
                          className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100 outline-none"
                          href="#0"
                        >
                          240+
                        </a>{' '}
                        users have subscribed to{' '}
                        <a
                          className="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100 outline-none"
                          href="#0"
                        >
                          Newsletter #1
                        </a>
                      </div>
                      <div className="flex-shrink-0 ml-2">
                        <a
                          className="flex items-center font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500 outline-none"
                          href="#0"
                        >
                          View
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="transform transition-transform duration-500 ease-in-out"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-4 text-black dark:text-white">
        <div className="md:col-span-2 xl:col-span-3">
          <h3 className="text-lg font-semibold">
            Task summaries of recent sprints
          </h3>
        </div>
        <div className="md:col-span-2 xl:col-span-1">
          <div className="rounded bg-gray-200 dark:bg-gray-800 p-3">
            <div className="flex justify-between py-1 text-black dark:text-white">
              <h3 className="text-sm font-semibold">Tasks in TO DO</h3>
              <svg
                className="h-4 fill-current text-gray-600 dark:text-gray-500 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
              </svg>
            </div>
            <div className="text-sm text-black dark:text-gray-50 mt-2">
              <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                Delete all references from the wiki
              </div>
              <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                Remove analytics code
              </div>
              <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                Do a mobile first layout
                <div className="text-gray-500 dark:text-gray-200 mt-2 ml-2 flex justify-between items-start">
                  <span className="text-xs flex items-center">
                    <svg
                      className="h-4 fill-current mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                    >
                      <path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" />
                    </svg>
                    3/5
                  </span>
                  <img
                    src="https://i.imgur.com/OZaT7jl.png"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                Check the meta tags
              </div>
              <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                Think more tasks for this example
                <div className="text-gray-500 dark:text-gray-200 mt-2 ml-2 flex justify-between items-start">
                  <span className="text-xs flex items-center">
                    <svg
                      className="h-4 fill-current mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                    >
                      <path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" />
                    </svg>
                    0/3
                  </span>
                </div>
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Add a card...
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded bg-gray-200 dark:bg-gray-800 p-3">
            <div className="flex justify-between py-1 text-black dark:text-white">
              <h3 className="text-sm font-semibold">Tasks in DEVELOPMENT</h3>
              <svg
                className="h-4 fill-current text-gray-600 dark:text-gray-500 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
              </svg>
            </div>
            <div className="text-sm text-black dark:text-gray-50 mt-2">
              <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                Delete all references from the wiki
              </div>
              <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                Remove analytics code
              </div>
              <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                Do a mobile first layout
                <div className="flex justify-between items-start mt-2 ml-2 text-white text-xs">
                  <span className="bg-pink-600 rounded p-1 text-xs flex items-center">
                    <svg
                      className="h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c-.8 0-1.5.7-1.5 1.5v.688C7.344 4.87 5 7.62 5 11v4.5l-2 2.313V19h18v-1.188L19 15.5V11c0-3.379-2.344-6.129-5.5-6.813V3.5c0-.8-.7-1.5-1.5-1.5zm-2 18c0 1.102.898 2 2 2 1.102 0 2-.898 2-2z" />
                    </svg>
                    2
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                Check the meta tags
              </div>
              <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                Think more tasks for this example
                <div className="text-gray-500 mt-2 ml-2 flex justify-between items-start">
                  <span className="text-xs flex items-center">
                    <svg
                      className="h-4 fill-current mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                    >
                      <path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" />
                    </svg>
                    0/3
                  </span>
                </div>
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Add a card...
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded bg-gray-200 dark:bg-gray-800 p-3">
            <div className="flex justify-between py-1 text-black dark:text-white">
              <h3 className="text-sm font-semibold">Tasks in QA</h3>
              <svg
                className="h-4 fill-current text-gray-600 dark:text-gray-500 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
              </svg>
            </div>
            <div className="text-sm text-black dark:text-gray-50 mt-2">
              <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                Delete all references from the wiki
              </div>
              <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                Remove analytics code
              </div>
              <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                Do a mobile first layout
              </div>
              <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                Check the meta tags
              </div>
              <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                Think more tasks for this example
                <div className="text-gray-500 dark:text-gray-200 mt-2 ml-2 flex justify-between items-start">
                  <span className="text-xs flex items-center">
                    <svg
                      className="h-4 fill-current mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                    >
                      <path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" />
                    </svg>
                    0/3
                  </span>
                </div>
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Add a card...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mis;
