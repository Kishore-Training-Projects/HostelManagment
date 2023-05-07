import React, { useState } from "react";
import Adminheader from "../../layout/header/adminheader";
import { useEffect } from "react";

export const AdminDashboard = () => {
  const [count, setcount] = useState({});

     const [noticecolor, setnoticecolor] = useState([
    "gray",
    "yellow",
    "red",
    "blue",
    "green",
  ]);
  const [notice, setNotice] = useState([]);

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

  // end of fetch notice data




  
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


  
   // render notice card

  const renderTable = () => {
    if (Array.isArray(notice)) {
      return notice.map((n, i) => {
        return (
          <>
            <div class="max-w-sm rounded hover:shadow-2xl overflow-hidden shadow-lg m-4">
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
      <Adminheader />
      <div className="container items-center lg:mx-20 lg:mt-10 mt-6 ">

{/* counter card */}
      <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
    <div class="flex items-center  bg-white border rounded-sm overflow-hidden shadow hover:shadow-2xl border-2 border-green-400">
        <div class=" p-4 bg-green-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                </path>
            </svg></div>
        <div class="px-4 text-gray-700 text-cente">
            <h3 class="text-md font-bold tracking-wider">Total hosteller</h3>
            <p class="text-3xl ">{count ? count.hosteller : 0}</p>
        </div>
    </div>
    <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow shadow hover:shadow-2xl border-2 border-blue-400">
        <div class="p-4 bg-blue-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2">
                </path>
            </svg></div>
        <div class="px-4 text-gray-700 ">
        <h3 class="text-md font-bold tracking-wider">Total Rooms</h3>
            <p class="text-3xl ">{count ? count.room : 0}</p>
        </div>
    </div>
    <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow hover:shadow-2xl border-2 border-indigo-400">
        <div class="p-4 bg-indigo-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z">
                </path>
            </svg></div>
        <div class="px-4 text-gray-700">
        <h3 class="text-md font-bold tracking-wider">Pending Complaint</h3>
            <p class="text-3xl ">{count ? count.complaint : 0}</p>
        </div>
    </div>
    <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow hover:shadow-2xl border-2 border-red-400">
        <div class="p-4 bg-red-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white w-12 h-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>
</div>
        <div class="px-4 text-gray-700">
        <h3 class="text-md font-bold tracking-wider">Total Users</h3>
            <p class="text-3xl ">{count ? count.user : 0}</p>
        </div>
    </div>
</div>



{/* end of counter card */}




{/*  notice board*/}

  <div class="lg:pt-5 pt-3 flex flex-wrap justify-center">
            {renderTable()}
        </div>







      </div>
    </>
  );
};
