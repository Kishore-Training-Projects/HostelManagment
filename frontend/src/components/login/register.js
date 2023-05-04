import React from "react";
import Userheader from "../layout/header/userheader";
export const Register = () => {
  return (
    <>

    
      <div
        class="bg-cover"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?cs=srgb&dl=pexels-pixabay-235985.jpg&fm=jpg")',
        }}
      >
        <section class="bg-red dark:bg-gray-900 font">
          <div class="flex flex-col items-center justify-center py-10 pb-2">
            <a
              href="#"
              class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                class="w-8 h-8 mr-2"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                alt="logo"
              />
              Flowbite
            </a>
          </div>
          <div class="py-4 px-2 pb-6 md:py-0 md:pb-6 md:px-2 mx-auto max-w-4xl lg:py-18">
            <div className="shadow-md rounded px-5 py-1 bg-white">
              <h2 class="mb-7 mt-5 text-2xl text-center font-bold text-gray-900 dark:text-white">
                Welcome to Hostel 🙏
              </h2>
              <form action="#">
                <div class="grid gap-4 sm:grid-cols-3 sm:gap-6">
                  <div class="sm:col-span-2">
                    <label
                      for="brand"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="brand"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Product brand"
                      required=""
                    />
                  </div>
                  <div class="w-full">
                    <label
                      for="brand"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="name"
                      id="brand"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Product brand"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="price"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Gender
                    </label>
                    <select
                      id="category"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="TV">Male</option>
                      <option value="PC">Female</option>
                    </select>
                  </div>
                  <div class="w-full">
                    <label
                      for="brand"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Age
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="brand"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Product brand"
                      required=""
                    />
                  </div>
                  <div class="w-full">
                    <label
                      for="brand"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Blood Group
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="brand"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Product brand"
                      required=""
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="name"
                      id="name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Type product name"
                      required=""
                    />
                  </div>
                  <div class="w-full">
                    <label
                      for="brand"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mobile
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Product brand"
                      required=""
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Father Name
                    </label>
                    <input
                      type="email"
                      name="name"
                      id="name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Type product name"
                      required=""
                    />
                  </div>
                  <div class="w-full">
                    <label
                      for="brand"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Father Mobile
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Product brand"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="category"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Occupation Type
                    </label>
                    <select
                      id="category"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected="">Select category</option>
                      <option value="">Student</option>
                      <option value="">Working</option>
                      <option value="">Business</option>
                      <option value="">FreeLance</option>
                    </select>
                  </div>
                  <div class="w-full">
                    <label
                      for="price"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Institute Name
                    </label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="$2999"
                      required=""
                    />
                  </div>

                 
                  <div>
                    <label
                      for="item-weight"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      location
                    </label>
                    <input
                      type="text"
                      name="item-weight"
                      id="item-weight"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="12"
                      required=""
                    />
                  </div>
                  <div class="sm:col-span-3">
                    <label
                      for="description"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Address
                    </label>
                    <textarea
                      id="description"
                      rows="8"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your description here"
                    ></textarea>
                  </div>
                </div>
                <div className="pt-5 pb-3">

                <button
                  type="submit"
                  class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                  Register
                </button>
                    </div>
              </form>
            </div>
          </div>

          {/* <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
            

                <div class="flex flex-wrap -mx-4">
                  <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="first-name"
                    >
                      Full Name
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />{" "}
                  </div>
                  <div class="w-full md:w-1/2 px-4">
                    <label
                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="last-name"
                    >
                      Gender
                    </label>
                    <select name="gender"  class="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option>Male</option>
                      <option>Female</option>
                      
                    </select>
                  </div>
                  <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0 pt-3">
                    <label
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="first-name"
                    >
                      Mobile *
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />{" "}
                  </div>
                  <div class="w-full md:w-1/2 px-4 pt-3">
                    <label
                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="last-name"
                    >
                      Blood Group
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      placeholder="O+ve"
                      class="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />{" "}
                  </div>
                  
                  <div class="w-full px-4 pt-3">
                    <label
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      type="Email"
                      name="password"
                      id="password"
                      placeholder="Jon@gmail.com"
                      class="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />{" "}
                  </div>

                  <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0 pt-3">
                    <label
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="first-name"
                    >
                     Father Name
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      placeholder="John"
                      class="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />{" "}
                  </div>
                  <div class="w-full md:w-1/2 px-4 pt-3">
                    <label
                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="last-name"
                    >
                     Father Mobile
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      placeholder="+91 123456789"
                      class="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />{" "}
                  </div>


                  <div class="w-full px-4 pt-4">
                    <label
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="email"
                    >
                      Institute Name
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      placeholder="Chennai Institute of Technology"
                      class="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />{" "}
                  </div>


                  <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0 pt-4">
                    <label
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="first-name"
                    >
                     Program Name
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      placeholder="John"
                      class="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />{" "}
                  </div>
                  <div class="w-full md:w-1/2 px-4 pt-4">
                    <label
                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="last-name"
                    >
                     Batch
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      placeholder="+91 123456789"
                      class="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />{" "}
                  </div>
                  <div class="w-full px-4 pt-4">
                    <label
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="email"
                    >
                      Institute Name
                    </label>
                    <textarea
                      type="text"
                      name="password"
                      id="password"
                      placeholder="Chennai Institute of Technology"
                      class="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-md focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />{" "}
                  </div>

                  <div class="w-full px-4 pt-4">
                  <button>register</button>
                  </div>

                 

                </div>
              </div>
            </div>
          </div> */}
        </section>
      </div>
    </>
  );
};
