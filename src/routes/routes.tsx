import { AppLayout } from "@/pages/_layout/app";
import { Home } from "@/pages/app/home/home";
import { Orders } from "@/pages/app/orders/orders";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/orders", element: <Orders /> }
        ]
    }
]);