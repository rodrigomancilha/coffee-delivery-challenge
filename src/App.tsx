import { Helmet, HelmetProvider } from "react-helmet-async";
import { queryClient } from "./lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

function App() {


  return (
    <>
      <HelmetProvider>
        <Helmet title="'%s | Coffee Delivery'" />
        <QueryClientProvider client={queryClient} />
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  )
}

export default App
