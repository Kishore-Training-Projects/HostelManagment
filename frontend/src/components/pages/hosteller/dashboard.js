import React from "react";
import Userheader from "../../layout/header/userheader";
export const Dashboard = () => {
  return (
    <>
      <Userheader />

      <div className="container items-center lg:mx-20 lg:mt-10 mt-6 ">

        <h2 class="mb-4 text-2xl text-center font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
          Welcome Back{" "}
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Kishore
          </span>
          👋
        </h2>


        <div class="lg:pt-5 pt-3 flex flex-wrap justify-center">

  <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <div class="bg-gray-200 text-gray-700 text-lg font-bold p-4">
      <h3>🔔 Notice 1</h3>
    </div>
    <div class="px-6 py-4">
      <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet,  Donec interdum dui a diam sagittis ultricies.
        Lorem ipsum dolor sit amet,

      </p>
      
    </div>
    <p class="px-4 py-3 text-gray-400 text-right text-sm ">
        27-09-2001
      </p>
    
  </div>

  <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <div class="bg-yellow-200 text-yellow-800 text-lg font-bold p-4">
      <h3>🔔 Notice 2</h3>
    </div>
    <div class="px-6 py-4">
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dui a diam sagittis ultricies.
      </p>
      <p class="text-gray-400 text-right text-sm ">
        27-09-2001
      </p>
    </div>
  </div>

  <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <div class="bg-red-200 text-red-800 text-lg font-bold p-4">
      <h3>🔔 Notice 3</h3>
    </div>
    <div class="px-6 py-4">
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dui a diam sagittis ultricies.
      </p>
    </div>
  </div>

  <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <div class="bg-blue-200 text-blue-800 text-lg font-bold p-4">
      <h3>Notice 4</h3>
    </div>
    <div class="px-6 py-4">
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dui a diam sagittis ultricies.
      </p>
    </div>
  </div>

  <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <div class="bg-green-200 text-green-800 text-lg font-bold p-4">
      <h3>Notice 5</h3>
    </div>
    <div class="px-6 py-4">
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum dui a diam sagittis ultricies.
      </p>
    </div>
  </div>
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
