import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import MainLayouts from "../layouts/MainLayouts";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', 
            element: <MainLayouts>
                <Home /> 
            </MainLayouts>
        },
    ],
},
]);

export default router;