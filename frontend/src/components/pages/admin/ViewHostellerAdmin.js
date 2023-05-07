import { useState } from "react";
import React from "react";
import Adminheader from "../../layout/header/adminheader";
import { User } from "heroicons-react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
   

export const ViewHostellerAdmin = () => {
  const [profile, setProfile] = useState("");
  const [hosteller, setHosteller] = useState({});

  const [queryParameters] = useSearchParams()

  useEffect(() => {
    const fetchData = (id) => {
        fetch("/api/Hosteller/" + id)
          .then((response) => {
            return response.json();
          })
          .catch((error) => {
            alert("Unable to connect Backend");
          })
          .then((data) => {
            setHosteller(data);
            console.log(hosteller);
          });
      };

    fetchData(queryParameters.get("id"));

  }, []);

  // fetch user details

  




  // update submit request


  const submit_form = (event) => {
    event.preventDefault();
    fetch("/api/Hosteller/"+hosteller.hostellerId, {
      method: "put",
      body: JSON.stringify(hosteller),
      headers: {
        "Content-type": "application/JSON",
      },
    })
      .catch((error) => {
        alert("Unable to connect Backend");
      })
      .then((res) => {
        if (res.status == 400) {
          throw new Error("Server responds with error!");
        }
        return res.json();
      })
      .then((data) => {
        if(data["detail"]) {
          alert("Error Cant update");
        }
        else {          
          setHosteller(data);
        } 
         
      });
  };



  // end of update submit request

  if (hosteller) {
    return (
      <>
        <Adminheader />
        <div className="h-full items-center lg:mx-8 lg:mb-10  lg:mt-8 mt-6 mx-2 ">
          {/* breadcrumb */}

          <nav
            class="flex px-3 py-2 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Breadcrumb"
          >
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
              <li class="inline-flex items-center">
                <a
                  href="/admin/dashboard"
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
                    profile
                  </a>
                </div>
              </li>
            </ol>
          </nav>

          {/* end of breadcrumb */}

          {/* left card */}

          <div class="flex flex-col md:flex-row pt-5">
            <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0">
              <div class="bg-white rounded-lg shadow-xl border-2 border-gray-200 p-3">
                <div class="flex items-center justify-center mb-6">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Userimage.png"
                    alt="Profile Image"
                    class="w-32 h-32 rounded-full object-cover "
                  />
                </div>
                <h3 class="font-semibold text-3xl mb-2 text-center mb-6">
              {hosteller.name}
                </h3>
                <div class="flex items-center justify-center mb-4">
                  <div class="flex items-center bg-blue-500 text-white hover:text-blue-500 rounded-lg shadow-md p-2 border-2 hover:bg-white border-blue-500 mb-2 w-">
                    <h3 class="font-semibold text-lg text-center flex-grow-0">
                      <span class="flex items-center">
                        <span class="hidden md:inline-block mr-3 text-2xl">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                          >
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                          </svg>
                        </span>
                        <a class="text-lg md:text-xl font-semibold">
                          {hosteller.email}
                        </a>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* right side card */}

            <div class="w-full md:w-2/3 px-1 lg:px-4">
              <div class="bg-white rounded-lg shadow-xl border-2 border-gray-200 p-3">
                <form class="grid lg:grid-cols-3 grid-cols-2 lg:gap-3 gap-2" onSubmit={submit_form}>
                  
                  <div class="col-span-3">
                    <h3 class="font-semibold text-lg mb-2 text-blue-500">
                      Personal Information
                    </h3>
                  </div>
                  <div class="col-span-3 lg:col-span-1 ">
                    <label for="dob" class="text-gray-600 text-sm mb-2 block">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      value={hosteller.dob?hosteller.dob.slice(0,10):""}
                      onChange={(e) =>
                        setHosteller({
                          ...hosteller,
                          [e.target.name]: e.target.value,
                        })
                      }
                      class="w-full p-2 border-2 border-gray-300 rounded-md mb-4"
                    />
                  </div>
                  <div class="col-span-3 lg:col-span-1 ">
                    <label
                      for="bloodgroup"
                      class="text-gray-600 text-sm mb-2 block"
                    >
                      Blood Group
                    </label>
                    <input
                      type="text"
                      id="bloodgroup"
                      value={hosteller.bloodGroup}
                      onChange={(e) =>
                        setHosteller({
                          ...hosteller,
                          [e.target.name]: e.target.value,
                        })
                      }
                      name="bloodGroup"
                      class="w-full p-2 border-2 border-gray-300 rounded-md mb-4"
                    />
                  </div>
                  <div class="col-span-3 lg:col-span-1 ">
                    <label
                      for="bloodgroup"
                      class="text-gray-600 text-sm mb-2 block"
                    >
                      Age
                    </label>
                    <input
                      type="number"
                      id="bloodgroup"
                      name="age"
                      value={hosteller.age}
                      onChange={(e) =>
                        setHosteller({
                          ...hosteller,
                          [e.target.name]: e.target.value,
                        })
                      }
                      class="w-full p-2 border-2 border-gray-300 rounded-md mb-4"
                    />
                  </div>
                  <div class="col-span-3 lg:col-span-1 ">
                    <label
                      for="fathercontact"
                      class="text-gray-600 text-sm mb-2 block"
                    >
                      Contact
                    </label>
                    <input
                      type="tel"
                      id="fathercontact"
                      name="mobile"
                      value={hosteller.mobile}
                      onChange={(e) =>
                        setHosteller({
                          ...hosteller,
                          [e.target.name]: e.target.value,
                        })
                      }
                      class="w-full p-2 border-2 border-gray-300 rounded-md mb-4"
                    />
                  </div>
                  <div class="col-span-3 lg:col-span-1 ">
                    <label
                      for="fathername"
                      class="text-gray-600 text-sm mb-2 block"
                    >
                      Father's Name
                    </label>
                    <input
                      type="text"
                      id="fathername"
                      name="fatherName"
                      value={hosteller.fatherName}
                      onChange={(e) =>
                        setHosteller({
                          ...hosteller,
                          [e.target.name]: e.target.value,
                        })
                      }
                      class="w-full p-2 border-2 border-gray-300 rounded-md mb-4"
                    />
                  </div>
                  <div class="col-span-3 lg:col-span-1 ">
                    <label
                      for="fathercontact"
                      class="text-gray-600 text-sm mb-2 block"
                    >
                      Father's Contact
                    </label>
                    <input
                      type="tel"
                      id="fathercontact"
                      name="fatherMobile"
                      value={hosteller.fatherMobile}
                      onChange={(e) =>
                        setHosteller({
                          ...hosteller,
                          [e.target.name]: e.target.value,
                        })
                      }
                      class="w-full p-2 border-2 border-gray-300 rounded-md mb-4"
                    />
                  </div>
                  <div class="col-span-3 lg:col-span-1 ">
                    <label
                      for="institute"
                      class="text-gray-600 text-sm mb-2 block"
                    >
                      Category
                    </label>
                    <select
                      id="institute"
                      value={hosteller.occupation}
                      name="occupation"
                      onChange={(e) =>
                        setHosteller({
                          ...hosteller,
                          [e.target.name]: e.target.value,
                        })
                      }
                      defaultChecked={hosteller.occupation}
                      class="w-full p-2 border-2 border-gray-300 rounded-md mb-4"
                    >
                      <option value="student">student</option>
                      <option value="working">working</option>
                      <option value="traveller">traveller</option>
                    </select>
                  </div>
                  <div class="col-span-3 lg:col-span-2 ">
                    <label
                      for="institute"
                      class="text-gray-600 text-sm mb-2 block"
                    >
                      Occupation Name
                    </label>
                    <input
                      type="text"
                      id="institute"
                      name="occupationName"
                      onChange={(e) =>
                        setHosteller({
                          ...hosteller,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={hosteller.occupationName}
                      class="w-full p-2 border-2 border-gray-300 rounded-md mb-4"
                    />
                  </div>
                  <div class="col-span-3 lg:col-span-1 ">
                    <label
                      for="institute"
                      class="text-gray-600 text-sm mb-2 block"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="institute"
                      name="occupationLocation"
                      onChange={(e) =>
                        setHosteller({
                          ...hosteller,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={hosteller.occupationLocation}
                      class="w-full p-2 border-2 border-gray-300 rounded-md mb-4"
                    />
                  </div>
                  <div class="col-span-3 lg:col-span-2 ">
                    <label
                      for="institute"
                      class="text-gray-600 text-sm mb-2 block"
                    >
                      Address
                    </label>
                    <textarea
                      value={hosteller.address}
                      onChange={(e) =>
                        setHosteller({
                          ...hosteller,
                          [e.target.name]: e.target.value,
                        })
                      }
                      id="institute"
                      name="address"
                      class="w-full p-2 border-2 border-gray-300 rounded-md mb-4"
                    />
                  </div>

                  <div class="col-span-3 lg:col-span-1 ">
                    <button
                      type="submit"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      update
                    </button>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
