import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  // tokendata
  const userprofile = {
    userid: "",
    email: "",
    name: "",
    picture: "",
    acc_type: "",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //  User Login  request

  const UserLogin = (event) => {
    fetch(
      "https://localhost:7047/api/Hosteller/user/login?email=" + event.email,
      {
        method: "get",

        headers: {
          "Content-type": "application/JSON",
        },
      }
    )
      .then((res) => {
        if (res.status === 400) {
          throw new Error("Server responds with error!");
        }
        return res.json();
      })
      .then((data) => {
        if (data["detail"]) {
          alert(data["detail"]);
        } else {
          userprofile.userid = data["hostellerId"];
          userprofile.email = data["email"];
          userprofile.name = data["name"];
          userprofile.picture = event.picture;
          userprofile.acc_type = "student";

          sessionStorage.setItem("student_key", JSON.stringify(userprofile));
          navigate("/user/dashboard");
        }
      });
  };

  // Admin login request

  const AdminLogin = (event) => {
    event.preventDefault();

    fetch("https://localhost:7047/api/User/login", {
      method: "post",
      body: JSON.stringify({
        UserName: "",
        UserEmail: email,
        Password: password,
        UserType: "",
      }),
      headers: {
        "Content-type": "application/JSON",
      },
    })
      .catch((error) => {
        alert("Unable to connect Backendsss");
      })
      .then((res) => {
        if (res.status == 400) {
          alert("Server responds with error!");
        }

        return res.json();
      })
      .then((data) => {
        if (data["detail"]) {
          alert("Invalid Login");
        } else {
          userprofile.userid = data["userID"];
          userprofile.email = data["userEmail"];
          userprofile.name = data["userName"];
          userprofile.acc_type = data["userType"];

          if (data["userType"] === "admin") {
            sessionStorage.setItem("admin_key", JSON.stringify(userprofile));
            navigate("/admin/dashboard");
          } else {
            sessionStorage.setItem("manager_key", JSON.stringify(userprofile));
            navigate("/manager/dashboard");
          }
        }
        console.log(data);
      });
  };

  // login using button
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      // console.log(response);
      try {
        const data = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        UserLogin(data.data);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  });

  // One Tap Login

  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      // console.log(credentialResponse);
      var decoded = jwt_decode(credentialResponse.credential);
      console.log(decoded);
      UserLogin(decoded);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  if (sessionStorage.getItem("admin_key"))
    return <Navigate to="/admin/dashboard" />;

  if (sessionStorage.getItem("student_key"))
    return <Navigate to="/user/dashboard" />;
  if (sessionStorage.getItem("manager_key"))
    return <Navigate to="/manager/dashboard" />;

  return (
    <>
      <div
        className="bg-cover"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?cs=srgb&dl=pexels-pixabay-235985.jpg&fm=jpg")',
        }}
      >
        <section className="font-sans">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                className="w-8 h-8 mr-2"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                alt="logo"
              />
              Flowbite
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white font-sans">
                  Sign in to your account
                </h1>
                <div className="space-y-4 md:space-y-6">
                  <form onSubmit={AdminLogin}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        className="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="mt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-600 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-4 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Sign in
                    </button>
                  </form>
                  <button
                    onClick={login}
                    className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blredue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    Sign In with Google
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <a
                      onClick={() => navigate("/register")}
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
