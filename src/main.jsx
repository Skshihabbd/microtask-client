import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./assets/Router/Router";
import AuthProvider from "./AuthInfo/AuthProvider";
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <div className="max-w-5xl   mx-auto  h-svh  ">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
      
    </AuthProvider>
  </React.StrictMode>
);
