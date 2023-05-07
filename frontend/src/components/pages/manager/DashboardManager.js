import React, { useState } from "react";
import Managerheader from "../../layout/header/managerheader";
import { useEffect } from "react";

export const DashboardManager = () => {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    noticeId: 0,
    noticeDetails: "",
    noticeDate: new Date().toISOString(),
  });

  // new notice board add

  const submit_form = (event) => {
    event.preventDefault();
    fetch("/api/noticeboard", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/JSON",
      },
    })
      .catch((error) => {
        alert("Unable to connect Backend");
      })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Server responds with error!");
        }
        return res.json();
      })
      .then((data) => {
        if (data["detail"]) {
          alert("Error Cant Insert");
        } else {
          setShowModal(false);
          fetchData();
        }
      });
  };

  const [noticecolor, setnoticecolor] = useState([
    "gray",
    "yellow",
    "red",
    "blue",
    "green",
    "gray",
    "yellow",
    "red",
    "blue",
  ]);
  const [notice, setNotice] = useState([]);
  const [count, setcount] = useState({});

  useEffect(() => {
    fetchData();
    fetchcountData();
  }, []);

  // fet notice data

  const fetchData = () => {
    fetch("/api/NoticeBoard")
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        alert("Unable to connect Backend");
      })
      .then((data) => {
        setNotice(data);
        console.log(data);
      });
  };

  // fetch count data

  const fetchcountData = () => {
    fetch("/api/user/count")
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        alert("Unable to connect Backend");
      })
      .then((data) => {
        setcount(data);
        console.log(data);
      });
  };

  // end of fetch notice data


// delete notice

  const delete_notice = (id) => {

    // eslint-disable-next-line no-restricted-globals
    if (confirm("Do you want to delete this noticeboard !!💀") == true) {
      
      fetch("/api/noticeboard/" + id, {
        method: "delete",
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
          if (res.status == 204) {
            fetchData();
          }
          if (res.status == 200) {
            fetchData();
          }
          return;
        })
  
        .then((data) => {
          if (data) {
            alert("Error Cant Delete");
          }
        });
    };
    }

  // render notice card

  const renderTable = () => {
    if (Array.isArray(notice)) {
      return notice.map((n, i) => {
        return (
          <>
            <div class="max-w-sm rounded overflow-hidden hover:shadow-2xl shadow-lg m-4"
            onClick={()=>{delete_notice(n.noticeId)}}
            >
              <div
                class={`bg-${noticecolor[i]}-200 text-gray-700 text-lg font-bold p-4`}
              >
                <h3>🔔 Notice {i + 1}</h3>
              </div>
              <div class="px-6 py-4">
                <p class="text-gray-700 text-base">{n.noticeDetails}</p>
              </div>
              <p class="px-4 py-3 text-gray-400 text-right text-sm ">
                {n.noticeDate}
              </p>
            </div>
          </>
        );
      });
    }
  };

  return (
    <>
      <Managerheader />
      <div className="container items-center lg:mx-20 lg:mt-10 mt-6 ">
        {/* counter card */}
        <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
          <div class="flex items-center  bg-white border rounded-sm overflow-hidden shadow hover:shadow-2xl border-2 border-green-400">
            <div class=" p-4 bg-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </div>
            <div class="px-4 text-gray-700 text-cente">
              <h3 class="text-md font-bold tracking-wider">Total hosteller</h3>
              <p class="text-3xl ">{count ? count.hosteller : 0}</p>
            </div>
          </div>
          <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow shadow hover:shadow-2xl border-2 border-blue-400">
            <div class="p-4 bg-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                ></path>
              </svg>
            </div>
            <div class="px-4 text-gray-700 ">
              <h3 class="text-md font-bold tracking-wider">Total Rooms</h3>
              <p class="text-3xl ">{count ? count.room : 0}</p>
            </div>
          </div>
          <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow hover:shadow-2xl border-2 border-indigo-400">
            <div class="p-4 bg-indigo-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                ></path>
              </svg>
            </div>
            <div class="px-4 text-gray-700">
              <h3 class="text-md font-bold tracking-wider">
                Pending Complaint
              </h3>
              <p class="text-3xl ">{count ? count.complaint : 0}</p>
            </div>
          </div>
          <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow hover:shadow-2xl border-2 border-red-400">
            <div class="p-4 bg-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                ></path>
              </svg>
            </div>
            <div class="px-4 text-gray-700">
              <h3 class="text-md font-bold tracking-wider">Total users</h3>
              <p class="text-3xl ">{count ? count.user : 0}</p>
            </div>
          </div>
        </div>

        {/* end of counter card */}

        <div class="flex justify-end mt-10">
          <button
            onClick={() => setShowModal(true)}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add notice
          </button>
        </div>

        {/*  notice board*/}

        <div class="lg:pt-5 pt-2 flex flex-wrap justify-center">
          {renderTable()}
        </div>

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
                      New notice
                    </h3>

                    <form className="space-y-6" onSubmit={submit_form}>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Detailed Notice :
                        </label>
                        <textarea
                          type="text"
                          name="noticeDetails"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [e.target.name]: e.target.value,
                            })
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
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
      </div>
    </>
  );
};
