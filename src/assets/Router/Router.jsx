import ErrorPage from "../../page/ErrorPage";
import Home from "../../page/Home";
import Login from "../../page/Login";
import Main from "../../page/Main";
import { createBrowserRouter } from "react-router-dom";
import Registration from "../../page/Registration";
import DashboardLayout from "../../Dashboard/DashboardLayout";
import AdminHome from "../../Dashboard/AdminHome";
import ManageUsers from "../../Dashboard/ManageUsers";
import Managetask from "../../Dashboard/Managetask";
import TaskCreatorHome from "../../Dashboard/TaskCreatorHome";
import AddNewtask from "../../Dashboard/AddNewtask";
import Mytasks from "../../Dashboard/Mytasks";
import PurchaseCoin from "../../Dashboard/PurchaseCoin";
import PaymentHistory from "../../Dashboard/PaymentHistory";
import WorkerHome from "../../Dashboard/WorkerHome";
import TaskList from "../../Dashboard/TaskList";

import MySubmission from "../../Dashboard/MySubmission";
import WithDrawals from "../../Dashboard/WithDrawals";
import PrivetRoute from "./PrivetRoute";
import TaskDetails from "../../Dashboard/TaskDetails";
import UserprofilePage from "../../page/UserprofilePage";
import AdminRouter from "./AdminRouter";
import PaymentRoute from "../../Dashboard/PaymentRoute";
import TaskcreatorUpdate from "../../Dashboard/TaskcreatorUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "profile",
        element: <UserprofilePage></UserprofilePage>,
      },
    ],
  },
  { path: "login", element: <Login></Login> },
  {
    path: "register",
    element: <Registration></Registration>,
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manageuser",
        element: (
          <PrivetRoute>
            <AdminRouter>
             
              <ManageUsers></ManageUsers>
            </AdminRouter>
          </PrivetRoute>
        ),
      },

      {
        path: "managetask",
        element: (
          <PrivetRoute>
            <AdminRouter>
              <Managetask></Managetask>
            </AdminRouter>
          </PrivetRoute>
        ),
      },
      {
        path: "creatorhome",
        element: <TaskCreatorHome></TaskCreatorHome>,
      },
      {
        path: "addnewtask",
        element: (
          <PrivetRoute>
            <AddNewtask></AddNewtask>
          </PrivetRoute>
        ),
      },
      {
        path: "mytask",
        element: (
          <PrivetRoute>
            <Mytasks></Mytasks>
          </PrivetRoute>
        ),
      },
      {
        path: "purchasecoin",
        element: <PurchaseCoin></PurchaseCoin>,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "workerhome",
        element: <WorkerHome></WorkerHome>,
      },
      {
        path: "tasklist",
        element: <TaskList></TaskList>,
      },
      {
        path: "taskdetails/:id",
        element: <TaskDetails></TaskDetails>,
        loader: ({ params }) =>
          fetch(
            `https://server-side-nu-sooty.vercel.app/taskcreatorsall/${params.id}`
          ),
      },
      {
        path: "mysubmission",
        element: <MySubmission></MySubmission>,
      },
      {
        path: "withdraw",
        element: <WithDrawals></WithDrawals>,
      },
      {
        path: "paymentroute",
        element: <PaymentRoute></PaymentRoute>,
      },
      {
        path: "taskupdate/:id",
        element: <TaskcreatorUpdate></TaskcreatorUpdate>,
        loader: ({ params }) =>
          fetch(
            `https://server-side-nu-sooty.vercel.app/taskcreatorsall/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
