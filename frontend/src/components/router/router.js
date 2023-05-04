import React from "react";
import { Login } from "../login/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Register } from "../login/register";
import { Dashboard } from "../pages/hosteller/dashboard";
import { Profile } from "../pages/hosteller/profile";
import { Room } from "../pages/hosteller/room";
import { Complaint } from "../pages/hosteller/complaint";

import { AdminDashboard } from "../pages/admin/DashboardAdmin";
import { HostellerAdmin } from "../pages/admin/HostellerAdmin";
import { RoomAdmin } from "../pages/admin/RoomAdmin";
import { ComplaintAdmin } from "../pages/admin/ComplaintAdmin";
import { UserAdmin } from "../pages/admin/UserAdmin";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routerList.map((route, i) => (
          <Route exact key={i} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

const routerList = [
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/user/complaint",
    element: <Complaint />,
  },
  {
    path: "/user/room",
    element: <Room />,
  },
  {
    path: "/user/profile",
    element: <Profile />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/hosteller",
    element: <HostellerAdmin />,
  },
  {
    path: "/admin/complaint",
    element: <ComplaintAdmin />,
  },
  {
    path: "/admin/room",
    element: <RoomAdmin />,
  },
  {
    path: "/admin/users",
    element: <UserAdmin />,
  },
];

export default Router;
