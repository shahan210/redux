import { Outlet } from "react-router-dom";
import Navbar from "../sub/Navbar";

export default function Layout() {
  return (
    <>
    <Navbar/>
    < Outlet/>
    </>
  )
}
