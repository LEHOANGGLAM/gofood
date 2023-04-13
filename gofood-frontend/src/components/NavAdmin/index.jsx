
import React from "react";

const NavAdmin = ({ avatar, onClick }) => {
    return (
        <nav>
            <i class="bi bi-list" onClick={onClick} style={{ cursor: 'pointer' }}></i>
            <a href="#" class="nav-link">
                Search stores
            </a>
            <form action="#">
                <div class="form-input">
                    <input type="search" placeholder="Search..." />
                    <button type="submit" class="search-btn">
                        <i class="bi bi-search"></i>
                    </button>
                </div>
            </form>
            <input type="checkbox" id="switch-mode" hidden />
            <label for="switch-mode" class="switch-mode"></label>
            <a href="#" class="notification">
                <i class="bi bi-bell"></i>
                <span class="num">8</span>
            </a>
            <a href="#" class="profile">
                <img src={avatar} />
            </a>
        </nav>
    );
};
export default NavAdmin;
