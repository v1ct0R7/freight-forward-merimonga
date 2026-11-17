// app/router.jsx
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Done from "../pages/Done/Done";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/done",
        element: <Done />,
    },
]);

export default router;
