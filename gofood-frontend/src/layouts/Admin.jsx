import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import img from "../assets/img/people.png";
import React, {  useState } from "react";
import NavAdmin from '../components/NavAdmin';
import "../assets/css/admin-style.css";

const Admin = () => {
    const [openSidebar, setOpenSidebar] = useState(true);

    const onClickMenu = () => {
        setOpenSidebar(!openSidebar);
    }

    return (
        <div className="admin-container">
            <SideBar isOpen={openSidebar} />
            <section id="content">
                <NavAdmin avatar={img} onClick={onClickMenu} />
                <Outlet />
            </section>
        </div>

    );
};

export default Admin;