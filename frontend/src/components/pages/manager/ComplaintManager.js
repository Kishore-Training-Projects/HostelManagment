import React from "react";
import Managerheader from "../../layout/header/managerheader";
import { useState } from "react";
import { useEffect } from "react";

export const ComplaintManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [EditModal, setEditModal] = useState(false);
  const [complaint, setComplaint] = useState([]);
  const [individual, setIndividual] = useState({});
  var datas = JSON.parse(sessionStorage.getItem("student_key"));

  // useeffect to get data
  useEffect(() => {
    fetchData();
  }, []);

  // fetch complaint
  const fetchData = () => {
    fetch("https://localhost:7047/api/Complaint/")
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        alert("Unable to connect Backend");
      })
      .then((data) => {
        setComplaint(data);
        console.log(data);
      });
  };

  // fetch individual complaint
  const fetchComplaintData = (id) => {
    fetch("https://localhost:7047/api/Complaint/" + id)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        alert("Unable to connect Backend");
      })
      .then((data) => {
        setIndividual(data);
        console.log(data);
        setEditModal(true);
      });
  };

  //    end of getch individual complaint

  // submit edit form data

  const submit_edit_form = (event) => {
    event.preventDefault();
    fetch("https://localhost:7047/api/Complaint/" + individual.complaintID, {
      method: "put",
      body: JSON.stringify(individual),
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
        if (data["detail"]) {
          alert("Error Cant update");
        } else {
          setEditModal(false);
          fetchData();
        }
      });
  };

  // end of submit edit form data

  // delete complaint

  const delete_complaint = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Do you want to delete this record !!💀") == true) {
      fetch("https://localhost:7047/api/Complaint/" + id, {
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
          return res.json();
        })

        .then((data) => {
          if (data["detail"]) {
            alert("Error Cant Insert");
          }
        });
    }
  };

  // end of delete complaint

  // render card

  const renderTable = () => {
    if (Array.isArray(complaint)) {
      return complaint.map((com) => {
        return (
          <>
            <div
              onClick={() => fetchComplaintData(com.complaintID)}
              className={
                com.status == "initiated"
                  ? "bg-white hover:shadow-2xl rounded-lg shadow-md p-6 border-2 border-red-500"
                  : "bg-white hover:shadow-2xl rounded-lg shadow-md p-6 border-2 border-green-500"
              }
            >
              <h3 className="font-bold text-xl uppercase mb-2 text-blue-500">
                {com.complaintType}{" "}
              </h3>
              <div className="flex items-center mb-2">
                <div
                  className={
                    com.status == "initiated"
                      ? "px-1 py-1 bg-red-200 text-red-800 text-xs font-semibold rounded-sm uppercase"
                      : "px-1 py-1 bg-green-200 text-green-800 text-xs font-semibold rounded-sm uppercase"
                  }
                >
                  {com.status == "initiated" ? "⚠ Important" : "✔ Completed"}
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">{com.details}</p>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="text-gray-600 text-xs ml-2">
                  {" "}
                  {com.createdDate}
                </span>
              </div>
              <div className="flex items-center mt-2">
                <div
                  className={
                    com.status == "initiated"
                      ? "px-2 py-1 bg-yellow-200 text-yellow-800 text-xs font-semibold rounded-full uppercase mr-2"
                      : "px-2 py-1 bg-green-200 text-green-800 text-xs font-semibold rounded-full uppercase mr-2"
                  }
                >
                  {com.status}
                </div>
                <p className="text-sm">{com.hosteller.name}</p>
              </div>
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
          {renderTable()}
        </div>
        {/* end of card design */}

        {/* Edit Modal  */}
        {EditModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setEditModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="authentication-modal"
                    onClick={() => setEditModal(false)}
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
                      Update status of Complaint
                    </h3>

                    <form className="space-y-6" onSubmit={submit_edit_form}>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Category :
                        </label>
                        <select
                          name="complaintType"
                          value={individual.complaintType}
                          defaultChecked={individual.complaintType}
                          disabled
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        >
                          <option>select Category</option>
                          <option value="electrical Issue">electrical</option>
                          <option value="Water Issue">water</option>
                          <option value="Cleaning Issue">Cleaning</option>
                          <option value="Wifi Issue">wifi</option>
                        </select>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Created Date :
                        </label>
                        <input
                          type="text"
                          name="createdDate"
                          value={individual.createdDate}
                          disabled
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          description :
                        </label>
                        <textarea
                          name="details"
                          value={individual.details}
                          disabled
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Category :
                        </label>
                        <select
                          name="status"
                          value={individual.status}
                          defaultChecked={individual.status}
                          onChange={(e) =>
                            setIndividual({
                              ...individual,
                              [e.target.name]: e.target.value,
                            })
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        >
                          <option>select Category</option>
                          <option value="initiated">initiated</option>
                          <option value="closed">Closed</option>
                          <option value="declined">declined</option>
                        </select>
                      </div>
                      {/* <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button> */}
                      <div className="sm:flex sm:flex-row-reverse ">
                        <button
                          type="submit"
                          className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Update
                        </button>
                        <button
                          className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={() => setEditModal(false)}
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
};
