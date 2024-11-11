import { Outlet } from "react-router-dom";
import NavBar from "./components/global/NavBar";
import Footer from "./components/global/Footer";

export const Layout = () => (
    <>
        <NavBar />
        <Outlet />
        <Footer />
    </>
);

{/* Outlet renders nested routes within the layout, 
    enabling NavBar and Footer to show on most routes. */}