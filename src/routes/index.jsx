
import {createBrowserRouter} from "react-router-dom"
import Main from "../layouts/main/Main"
import Dashboard from "../pages/Dashboard/Dashboard"
import Support from "../pages/Support/Support"

export const routes = createBrowserRouter([
    {
        path : "/",
        Component : Main,
        children : [
            {
                path : "/",
                Component : Dashboard
            },
            {
                path : "/support",
                Component : Support
            }
        ]
    }


])