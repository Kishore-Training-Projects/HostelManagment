import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Headers } from "../layout/header/header";
export const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Name: "",
    gender: "",
    DOB: "",
    Age: "",
    BloodGroup: "",
    Mobile: "",
    Email: "",
    FatherName: "",
    FatherMobile: "",
    Occupation: "",
    OccupationName: "",
    OccupationLocation: "",
    Address:"",
    Room:null
  });


  const submit_form = (event) => {
    event.preventDefault();
    fetch("/api/Hosteller", {
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
        if (res.status == 400) {
          throw new Error("Server responds with error!");
        }
        if (res.status == 500) {
            alert("done");
        }
      })
      .then((data) => {
        if(data["detail"]) {
          alert("Error Cant Insert");
        }
        else {          
         navigate("/login");
        } 
         
      });
  };




  return (

    <>
    <Headers />
      <div
        className="mt-20 bg-cover bg-white" >
        
        <section className="bg-red dark:bg-gray-900 font">
          <div className="flex flex-col items-center justify-center py-10 pb-2">
           
          </div>
          <div className="py-4 px-2 pb-6 md:py-0 md:pb-6 md:px-2 mx-auto max-w-4xl lg:py-18">
            <div className="shadow-2xl border-2 border-gray-400  rounded px-5 py-1 bg-white">
              <h2 className="mb-7 mt-5 text-2xl text-center font-bold text-gray-900 dark:text-white">
                Welcome to Hostel 🙏
              </h2>
              <form onSubmit={submit_form}>
                <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                  <div className="sm:col-span-2">
                    <label
                      for="brand"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      id="brand"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Full Name"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      for="brand"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="DOB"
                      id="brand"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Date of Birth"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for=""
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Gender
                    </label>
                    <select
                      id="category"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      name="gender"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label
                      for="brand"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Age
                    </label>
                    <input
                      type="number"
                      name="Age"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      id="brand"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Age"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      for="brand"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Blood Group
                    </label>
                    <input
                      type="text"
                      name="BloodGroup"
                      id="brand"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=" Blood Group"
                      required=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      for="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="Email"
                      id="name"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Email Address"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      for="brand"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mobile
                    </label>
                    <input
                      type="text"
                      name="Mobile"
                      id="brand"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Mobile"
                      required=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      for="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Father Name
                    </label>
                    <input
                      type="text"
                      name="FatherName"
                      id="name"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Father Name"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      for="brand"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Father Mobile
                    </label>
                    <input
                      type="text"
                      name="FatherMobile"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      id="brand"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Father Mobile"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Occupation Type
                    </label>
                    <select
                      id="category"
                      name="Occupation"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected="">Select category</option>
                      <option value="student">Student</option>
                      <option value="working">Working</option>
                      <option value="business">Business</option>
                      <option value="freelance">FreeLance</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label
                      for="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Occupation Name
                    </label>
                    <input
                      type="text"
                      name="OccupationName"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      id="price"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Occupation Name"
                      required=""
                    />
                  </div>

                 
                  <div>
                    <label
                      for="item-weight"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      location
                    </label>
                    <input
                      type="text"
                      name="OccupationLocation"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      id="item-weight"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="location"
                      required=""
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label
                      for="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Address
                    </label>
                    <textarea
                      id="description"
                      rows="8"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [e.target.name]: e.target.value,
                        })
                      }
                      name="Address"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Address"
                    ></textarea>
                  </div>
                </div>
                <div className="pt-5 pb-3">

                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                  Register
                </button>
                    </div>
              </form>
            </div>
          </div>

         
        </section>
      </div>
    </>
  );
};
