import React from "react";
import Userheader from "../../layout/header/userheader";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Room = () => {
  const navigate = useNavigate();
  const [room, setRoom] = useState();
  const [profile, setProfile] = useState([]);

  const [hosteller, setHosteller] = useState([]);
  const [backuphosteller, setbackupHosteller] = useState([]);


  const fetchData = (id) => {
    fetch("/api/room/hosteller/" + id)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        alert("Unable to connect Backend");
      })
      .then((data) => {
        if (data) {
          setRoom(data);
        }
      });
  };

  // get room details
  useEffect(() => {
    var item_value = JSON.parse(sessionStorage.getItem("student_key"));
    fetchData(item_value.userid);
    setProfile(item_value);
    fetchhostellerData(item_value.userid);
  }, []);

  // get userdetails of that room

  const fetchhostellerData = (id) => {
    fetch("/api/Hosteller/roommates/" + id)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        alert("Unable to connect Backend");
      })
      .then((data) => {
        setHosteller(data);
        setbackupHosteller(data);
      });
  };

  // render roomates details
  const renderTable = () => {
    if (Array.isArray(hosteller)) {
      return hosteller.map((com) => {
        return (
          <>
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

              <td class="px-4 py-3 border">{com.name}</td>
              <td class="px-4 py-3 border">{com.gender}</td>
              <td class="px-4 py-3 border">{com.age}</td>
              <td class="px-4 py-3 border">{com.mobile}</td>

              <td class="px-4 py-3 border">{com.occupation}</td>
              <td class="px-4 py-3 border"> <button
              onClick={()=>{navigate("/user/hosteller/details?id="+com.hostellerId)}}
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          View
                        </button></td>
            </tr>
          </>
        );
      });
    }
  };

  const renderroomtable = () => {
    if (room) {
      return (
        <>
          <tbody className="">
            <tr>
              <th className="border ">Room Type:</th>
              <td class="px-4 py-3 border text-center">
                {room.roomType ? room.roomType : ""}
              </td>
            </tr>
            <tr>
              <th className="border ">Room Seats:</th>
              <td class="px-4 py-3 border text-center">{room.seater}</td>
            </tr>
            <tr>
              <th className="border ">Room Occupied:</th>
              <td class="px-4 py-3 border text-center">{room.occupied}</td>
            </tr>
            <tr>
              <th className="border ">Room Rent:</th>
              <td class="px-4 py-3 border text-center">
                {room.rent ? room.rent : ""}
              </td>
            </tr>
          </tbody>
        </>
      );
    }
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    searchfunction(value);
  };

  const searchfunction = (search) => {
    let filteredData = backuphosteller;

    if (search !== "") {
      filteredData = filteredData.filter(
        (item) => item.name.includes(search) || item.occupation.includes(search)
      );
      console.log(search);
    }

    setHosteller(filteredData);
    if (search == "") {
      fetchData(profile.userid);
    }
  };

  return (
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
                href="/user/dashboard"
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
                <div className="mb-4 px-3 py-3 bg-green-200 text-center text-red-800 text-md font-semibold rounded-sm uppercase">
                  📂 Room Details
                </div>

                <table className="w-full text-sm text-left text-gray-800 dark:text-gray-400 border border-collapse">
                  {renderroomtable()}
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* end of room details */}

        <h3 className="mt-3 font-bold text-xl mb-2  text-gray-800 ">
          Room Mates
        </h3>

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
                          onChange={(e) => {
                            handleSearch(e);
                          }}
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search"
                        />
                      </div>
                    </form>
                  </div>
                  <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"></div>
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
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>{renderTable()}</tbody>
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
};
