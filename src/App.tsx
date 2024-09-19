import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Invoice from "./app/invoice/Invoice";
import AppLayout from "./components/layouts/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: "",
      children: [{ path: "invoice", element: <Invoice />, errorElement: "" }],
    },
  ]);

  return (
    <div role="application">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
