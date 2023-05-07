import React, { useState } from "react";
import Userheader from "../../layout/header/userheader";
import { useEffect } from "react";

export const Dashboard = () => {
  const [noticecolor, setnoticecolor] = useState([
    "gray",
    "yellow",
    "red",
    "blue",
    "green",
  ]);
  const [notice, setNotice] = useState([]);
  const [name, setname] = useState("");
  useEffect(() => {
    const profile = () => {
      var item_value = JSON.parse(sessionStorage.getItem("student_key"));
      // console.log(item_value.picture)
      setname(item_value.name);
    };

    profile();
    fetchData();
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

  // end of fetch notice data

  // render notice card

  const renderTable = () => {
    if (Array.isArray(notice)) {
      return notice.map((n, i) => {
        return (
          <>
            <div class={`max-w-sm rounded hover:shadow-2xl  overflow-hidden shadow-lg m-4`}>
              <div class={`bg-${noticecolor[i]}-200 text-gray-700 text-lg font-bold p-4`}>
                <h3>🔔 Notice {i+1}</h3>
              </div>
              <div class="px-6 py-4">
                <p class="text-gray-700 text-base">
                  {n.noticeDetails}
                </p>
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
      <Userheader />

      <div className="container items-center lg:mx-20 lg:mt-10 mt-6 ">
        <h2 class="mb-4 text-2xl text-center font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
          Welcome Back{" "}
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {name}
          </span>
          👋
        </h2>

        <div class="lg:pt-5 pt-3 flex flex-wrap justify-center">
            {renderTable()}
        </div>

        {/* <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div class="bg-white border border-red-200 rounded-lg shadow-md p-4">
    <div class="text-gray-500 text-sm uppercase font-bold mb-2">Total Users</div>
    <div class="text-3xl font-bold">1000</div>
  </div>
  <div class="bg-white rounded-lg shadow-md p-4">
    <div class="text-gray-500 text-sm uppercase font-bold mb-2">Total Orders</div>
    <div class="text-3xl font-bold">2000</div>
  </div>
  <div class="bg-white rounded-lg shadow-md p-4">
    <div class="text-gray-500 text-sm uppercase font-bold mb-2">Total Sales</div>
    <div class="text-3xl font-bold">$50,000</div>
  </div>
  <div class="bg-white rounded-lg shadow-md p-4">
    <div class="text-gray-500 text-sm uppercase font-bold mb-2">New Users</div>
    <div class="text-3xl font-bold">100</div>
  </div>
</div> */}
      </div>
    </>
  );
};
