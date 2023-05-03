import React from "react";
import Adminheader from "../../layout/header/adminheader";
import { useState } from "react";

export const ComplaintAdmin = () => {
  const [showModal, setShowModal] = useState(false);

    return(
        <>
        <Adminheader />
      <div className="container items-center lg:mx-20 lg:mt-10 mt-6 ">


      {/* breadcrumb */}

      <nav
          class="flex px-3 py-2 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Breadcrumb"
        >
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a
                href="#"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <a
                  href="#"
                  class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Complaint
                </a>
              </div>
            </li>
          </ol>
        </nav>

        {/* end of breadcrumb */}

        {/* search bar */}

        <div class="w-full pt-2 lg:pt-10 ">
          <select class="lg:hidden block w-full mb-3 mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected="">Select the option</option>
            <option>hi</option>
          </select>

          <div class="flex items-center">
            <select class="hidden lg:block mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected="">Select the option</option>
              <option>hi</option>
            </select>

            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="voice-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos, Design Templates..."
                required
              />
            </div>
            <button
              type="submit"
              class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 mr-2 -ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              Search
            </button>
           
          </div>
        </div>

        {/*  end of search bar */}

        {/* card listing */}

        <div class="pt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div class="bg-white rounded-lg shadow-md p-6 border-2 border-blue-500">
            <h3 class="font-semibold text-lg mb-2 text-blue-500">
              Wifi Not Working{" "}
            </h3>
            <div class="flex items-center mb-2">
              <div class="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs font-semibold rounded-full uppercase mr-2">
                Pending
              </div>
              <div class="px-2 py-1 bg-red-200 text-red-800 text-xs font-semibold rounded-full uppercase">
                Urgent
              </div>
            </div>
            <p class="text-gray-600 text-sm mb-4">
              Complaint description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer vitae justo non ex lobortis
              mollis eu in mi.
            </p>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                <path
                  fill-rule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="text-gray-600 text-sm ml-2">May 1, 2023</span>
            </div>
            <div class="flex items-center mt-2">
              <div class="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs font-semibold rounded-full uppercase mr-2">
                Pending
              </div>
              <button
                type="button"
                class="mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 ml-auto focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs p-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
              <button
                type="button"
                class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs p-2 text-center inline-flex items-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:red-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Add more cards here --> */}

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="font-semibold text-lg mb-2">Complaint Title</h3>
            <p class="text-gray-600 text-sm mb-4">
              Complaint description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer vitae justo non ex lobortis
              mollis eu in mi.
            </p>
            <div class="flex items-center">
              <svg
                class="h-4 w-4 fill-current text-gray-500 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.707 6.707a2 2 0 012.828 0l4.586 4.586a2 2 0 010 2.828l-4.586 4.586a2 2 0 01-2.828-2.828l.146-.146-.146-.146a2 2 0 010-2.828l4.586-4.586a2 2 0 010-2.828l-4.586-4.586a2 2 0 010-2.828l.707-.707a2 2 0 012.828 0l4.586 4.586a2 2 0 010 2.828l-4.586 4.586a2 2 0 01-2.828-2.828l.146-.146-.146-.146a2 2 0 010-2.828l4.586-4.586a2 2 0 010-2.828l-4.586-4.586a2 2 0 010-2.828z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-gray-600 text-sm">May 1, 2023</span>
            </div>
            <div class="flex items-center mt-2">
              <div class="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full uppercase mr-2">
                Pending
              </div>
              <button class="text-gray-600 hover:text-gray-800 text-sm focus:outline-none">
                View Details
              </button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="font-semibold text-lg mb-2">Complaint Title</h3>
            <p class="text-gray-600 text-sm mb-4">
              Complaint description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer vitae justo non ex lobortis
              mollis eu in mi.
            </p>
            <div class="flex items-center">
              <svg
                class="h-4 w-4 fill-current text-gray-500 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.707 6.707a2 2 0 012.828 0l4.586 4.586a2 2 0 010 2.828l-4.586 4.586a2 2 0 01-2.828-2.828l.146-.146-.146-.146a2 2 0 010-2.828l4.586-4.586a2 2 0 010-2.828l-4.586-4.586a2 2 0 010-2.828l.707-.707a2 2 0 012.828 0l4.586 4.586a2 2 0 010 2.828l-4.586 4.586a2 2 0 01-2.828-2.828l.146-.146-.146-.146a2 2 0 010-2.828l4.586-4.586a2 2 0 010-2.828l-4.586-4.586a2 2 0 010-2.828z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-gray-600 text-sm">May 1, 2023</span>
            </div>
            <div class="flex items-center mt-2">
              <div class="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full uppercase mr-2">
                Pending
              </div>
              <button class="text-gray-600 hover:text-gray-800 text-sm focus:outline-none">
                View Details
              </button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="font-semibold text-lg mb-2">Complaint Title</h3>
            <p class="text-gray-600 text-sm mb-4">
              Complaint description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer vitae justo non ex lobortis
              mollis eu in mi.
            </p>
            <div class="flex items-center">
              <svg
                class="h-4 w-4 fill-current text-gray-500 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.707 6.707a2 2 0 012.828 0l4.586 4.586a2 2 0 010 2.828l-4.586 4.586a2 2 0 01-2.828-2.828l.146-.146-.146-.146a2 2 0 010-2.828l4.586-4.586a2 2 0 010-2.828l-4.586-4.586a2 2 0 010-2.828l.707-.707a2 2 0 012.828 0l4.586 4.586a2 2 0 010 2.828l-4.586 4.586a2 2 0 01-2.828-2.828l.146-.146-.146-.146a2 2 0 010-2.828l4.586-4.586a2 2 0 010-2.828l-4.586-4.586a2 2 0 010-2.828z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-gray-600 text-sm">May 1, 2023</span>
            </div>
            <div class="flex items-center mt-2">
              <div class="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full uppercase mr-2">
                Pending
              </div>
              <button class="text-gray-600 hover:text-gray-800 text-sm focus:outline-none">
                View Details
              </button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="font-semibold text-lg mb-2">Complaint Title</h3>
            <p class="text-gray-600 text-sm mb-4">
              Complaint description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer vitae justo non ex lobortis
              mollis eu in mi.
            </p>
            <div class="flex items-center">
              <svg
                class="h-4 w-4 fill-current text-gray-500 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.707 6.707a2 2 0 012.828 0l4.586 4.586a2 2 0 010 2.828l-4.586 4.586a2 2 0 01-2.828-2.828l.146-.146-.146-.146a2 2 0 010-2.828l4.586-4.586a2 2 0 010-2.828l-4.586-4.586a2 2 0 010-2.828l.707-.707a2 2 0 012.828 0l4.586 4.586a2 2 0 010 2.828l-4.586 4.586a2 2 0 01-2.828-2.828l.146-.146-.146-.146a2 2 0 010-2.828l4.586-4.586a2 2 0 010-2.828l-4.586-4.586a2 2 0 010-2.828z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-gray-600 text-sm">May 1, 2023</span>
            </div>
            <div class="flex items-center mt-2">
              <div class="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-full uppercase mr-2">
                Pending
              </div>
              <button class="text-gray-600 hover:text-gray-800 text-sm focus:outline-none">
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* end of card design */}

        {/* modal  */}
        {showModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="authentication-modal"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="px-6 py-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                      New Complaint
                    </h3>

                    <form className="space-y-6">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Title :
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Category :
                        </label>
                        <select
                          name="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                        >
                          <option>electrical</option>
                          <option>water</option>
                          <option>Cleaning</option>
                          <option>wifi</option>
                        </select>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          description :
                        </label>
                        <textarea                         
                          name="password"
                          required
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                      </div>

                      {/* <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button> */}
                      <div className="sm:flex sm:flex-row-reverse ">
                        <button
                          type="submit"
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          create
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}

        {/* end of modal  */}


        
      </div>
        </>
    );
}