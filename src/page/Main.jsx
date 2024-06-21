import { Outlet } from "react-router-dom";
import Navber from "../Section/Navber";
import Footer from "../Section/Footer";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;