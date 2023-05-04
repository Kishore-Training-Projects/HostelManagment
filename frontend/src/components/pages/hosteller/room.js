import React from "react";
import Userheader from "../../layout/header/userheader";

export const Room = () => {

    return(
        <>
        <Userheader />
        <div className="h-full items-center lg:mx-8 lg:mb-10  lg:mt-10 mt-6 mx-2 ">
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
                
                  class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Room
                </a>
              </div>
            </li>
          </ol>
        </nav>

        {/* end of breadcrumb */}

        {/* room details */}


        <div className="flex flex-wrap -mx-4">

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
      <div className="bg-white rounded-lg shadow-lg border border-1 border-gray-300 overflow-hidden">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center text-blue-500 underline">
            Room Details</div>
            
          <table className="w-full text-sm text-left text-gray-800 dark:text-gray-400 border border-collapse">
            <tbody className="">
                <tr>

                <th className="border ">Room Type:</th>
                <td class="px-4 py-3 border text-center">A/C</td>
                </tr>
                <tr>

                <th className="border ">Room Seats:</th>
                <td class="px-4 py-3 border text-center">4</td>
                </tr>
                <tr>

                <th className="border ">Room Occupied:</th>
                <td class="px-4 py-3 border text-center">3</td>
                </tr>
                <tr>

                <th className="border ">Room Rent:</th>
                <td class="px-4 py-3 border text-center">250</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
        </div>
        {/* end of room details */}

        <h3 className="mt-3 font-bold text-xl mb-2  text-gray-800 ">Room Mates</h3>

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
                         Name
                        </th>
                        <th scope="col" class="px-4 py-3 border">
                          Gender
                        </th>
                        <th scope="col" class="px-4 py-3 border">
                          Age
                        </th>
                        <th scope="col" class="px-4 py-3 border">
                          Contact
                        </th>
                       
                        <th scope="col" class="px-4 py-3 border">
                          occupation
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
                        <td class="px-4 py-3 border">
                          Room is faciliated with AC
                        </td>

                        <td class="px-4 py-3 flex items-center justify-center">
                          <button
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm p-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>


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


        



        </div>
        </div>
        </>
    );
}