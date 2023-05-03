import React from "react";
import Adminheader from "../../layout/header/adminheader";
import { useState } from "react";

export const RoomAdmin = () => {
  const [showModal, setShowModal] = useState(false);

  return (
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
                <a class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                  Rooms
                </a>
              </div>
            </li>
          </ol>
        </nav>

        {/* end of breadcrumb */}

        {/* data card */}

        <div class="h-full mt-6 w-full bg-white rounded-md border border-gray-300 border-1 shadow-2xl overflow-hidden ">
          {/* table */}

          <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
            <div class="mx-auto max-w-screen-x">
              <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                  <div class="w-full md:w-1/2">
                    <form class="flex items-center">
                      <label for="simple-search" class="sr-only">
                        Search
                      </label>
                      <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewbox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="simple-search"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search"
                          required=""
                        />
                      </div>
                    </form>
                  </div>
                  <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <button
                        onClick={() => setShowModal(true)}
                      class="flex items-center justify-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-4 h-4 mr-2"
                      >
                        <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                      </svg>
                      Add Rooms
                    </button>
                    <div class="flex items-center space-x-3 w-full md:w-auto">
                      <button
                        id="filterDropdownButton"
                        data-dropdown-toggle="filterDropdown"
                        class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          class="h-4 w-4 mr-2 text-gray-400"
                          viewbox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Filter
                        <svg
                          class="-mr-1 ml-1.5 w-5 h-5"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="overflow-x-auto ">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-collapse">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="p-4">
                          <div class="flex items-center">
                            <input
                              id="checkbox-all"
                              type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-all" class="sr-only">
                              checkbox
                            </label>
                          </div>
                        </th>
                        <th scope="col" class="px-4 py-3 border">
                          Room No
                        </th>
                        <th scope="col" class="px-4 py-3 border">
                          Room Type
                        </th>
                        <th scope="col" class="px-4 py-3 border">
                          Room Capacity
                        </th>
                        <th scope="col" class="px-4 py-3 border">
                          Room Occupied
                        </th>
                        <th scope="col" class="px-4 py-3 border">
                          Rent
                        </th>
                        <th scope="col" class="px-4 py-3 border">
                          Description
                        </th>

                        <th scope="col" class="px-4 py-3 border">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b dark:border-gray-700">
                        <td class="w-4 p-4 border">
                          <div class="flex items-center">
                            <input
                              id="checkbox-table-1"
                              type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-table-1" class="sr-only">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <th
                          scope="row"
                          class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          1
                        </th>
                        <td class="px-4 py-3 border">A/C</td>
                        <td class="px-4 py-3 border">4</td>
                        <td class="px-4 py-3 border">3</td>
                        <td class="px-4 py-3 border">300</td>
                        <td class="px-4 py-3 border">
                          Room is faciliated with AC
                        </td>

                        <td class="px-4 py-3 flex items-center justify-end">
                          <button
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="w-4 h-4"
                            >
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                              <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                            </svg>

                            <span class="sr-only">Icon description</span>
                          </button>

                          <button
                            type="button"
                            class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="w-4 h-4"
                            >
                              <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                              <path
                                fill-rule="evenodd"
                                d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z"
                                clip-rule="evenodd"
                              />
                            </svg>

                            <span class="sr-only">Icon description</span>
                          </button>
                        </td>
                      </tr>
                      <tr class="border-b dark:border-gray-700">
                        <td class="w-4 p-4">
                          <div class="flex items-center">
                            <input
                              id="checkbox-table-1"
                              type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-table-1" class="sr-only">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td
                          scope="row"
                          class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Apple iMac 20&#34;
                        </td>
                        <td class="px-4 py-3">PC</td>
                        <td class="px-4 py-3">Apple</td>
                        <td class="px-4 py-3">200</td>
                        <td class="px-4 py-3">$1499</td>
                        <td class="px-4 py-3 flex items-center justify-end">
                          <button
                            id="apple-imac-20-dropdown-button"
                            data-dropdown-toggle="apple-imac-20-dropdown"
                            class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                            type="button"
                          >
                            <svg
                              class="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewbox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                          </button>
                          <div
                            id="apple-imac-20-dropdown"
                            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                          >
                            <ul
                              class="py-1 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="apple-imac-20-dropdown-button"
                            >
                              <li>
                                <a
                                  href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Show
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Edit
                                </a>
                              </li>
                            </ul>
                            <div class="py-1">
                              <a
                                href="#"
                                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b dark:border-gray-700">
                        <td class="w-4 p-4">
                          <div class="flex items-center">
                            <input
                              id="checkbox-table-1"
                              type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-table-1" class="sr-only">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <th
                          scope="row"
                          class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Apple iPhone 14
                        </th>
                        <td class="px-4 py-3">Phone</td>
                        <td class="px-4 py-3">Apple</td>
                        <td class="px-4 py-3">1237</td>
                        <td class="px-4 py-3">$999</td>
                        <td class="px-4 py-3 flex items-center justify-end">
                          <button
                            id="apple-iphone-14-dropdown-button"
                            data-dropdown-toggle="apple-iphone-14-dropdown"
                            class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                            type="button"
                          >
                            <svg
                              class="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewbox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                          </button>
                          <div
                            id="apple-iphone-14-dropdown"
                            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                          >
                            <ul
                              class="py-1 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="apple-iphone-14-dropdown-button"
                            >
                              <li>
                                <a
                                  href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Show
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Edit
                                </a>
                              </li>
                            </ul>
                            <div class="py-1">
                              <a
                                href="#"
                                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="border-b dark:border-gray-700">
                        <td class="w-4 p-4">
                          <div class="flex items-center">
                            <input
                              id="checkbox-table-1"
                              type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-table-1" class="sr-only">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <th
                          scope="row"
                          class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Apple iPad Air
                        </th>
                        <td class="px-4 py-3">Tablet</td>
                        <td class="px-4 py-3">Apple</td>
                        <td class="px-4 py-3">4578</td>
                        <td class="px-4 py-3">$1199</td>
                        <td class="px-4 py-3 flex items-center justify-end">
                          <button
                            id="apple-ipad-air-dropdown-button"
                            data-dropdown-toggle="apple-ipad-air-dropdown"
                            class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                            type="button"
                          >
                            <svg
                              class="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewbox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                          </button>
                          <div
                            id="apple-ipad-air-dropdown"
                            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                          >
                            <ul
                              class="py-1 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="apple-ipad-air-dropdown-button"
                            >
                              <li>
                                <a
                                  href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Show
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Edit
                                </a>
                              </li>
                            </ul>
                            <div class="py-1">
                              <a
                                href="#"
                                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* end table */}


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
                      New Room
                    </h3>

                    <form className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Category :
                        </label>
                        <select
                          name="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                        >
                          <option>A/C</option>
                          <option>Non A/C</option>
                          <option>A/C with TV</option>
                          <option>A/C heater</option>
                        </select>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Room Capacity :
                        </label>
                        <input
                          type="number"
                          name="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Room rent :
                        </label>
                        <input
                          type="number"
                          name="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          description :
                        </label>
                        <textarea                         
                          name="desciption"
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
      </div>
    </>
  );
};
