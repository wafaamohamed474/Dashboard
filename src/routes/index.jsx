
import {createBrowserRouter} from "react-router-dom"
import Main from "../layouts/main/Main"
import Dashboard from "../pages/Dashboard/Dashboard"
import About from "../pages/about/About"

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
                path : "/about",
                Component : About
            }
        ]
    }


])