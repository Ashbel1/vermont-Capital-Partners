import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
    },
    {
        id: 2,
        title: 'About',
        link: '/about',
    },
    {
        id: 3,
        title: 'Services',
        link: '/services',
        submenu: [
            {
                id: 31,
                title: 'All Services',
                link: '/services',
            },
            {
                id: 32,
                title: 'Automotive Trading',
                link: '/service-single/Automotive-Trading'
            },
            {
                id: 33,
                title: 'Toughrock Investments',
                link: '/service-single/Toughrock-Investments'
            },
            {
                id: 34,
                title: 'Digiroc Technologies',
                link: '/service-single/Digiroc-Technologies'
            },
        ]
    },
    {
        id: 4,
        title: 'Projects',
        link: '/projects',
        submenu: [
            {
                id: 41,
                title: 'All Projects',
                link: '/projects'
            },
            {
                id: 42,
                title: 'Automotive Excellence Initiative',
                link: '/project-single/Automotive-Excellence-Initiative'
            },
            {
                id: 43,
                title: 'Digital Transformation Suite',
                link: '/project-single/Digital-Transformation-Suite'
            },
        ]
    },
        id: 5,
        title: 'Team',
        link: '/team',
    },
    // ...removed Team nav item...
    {
        id: 6,
        title: 'Insights',
        link: '/blog',
    },
    {
        id: 7,
        title: 'Contact',
        link: '/contact',
    },
]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    to={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        to={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;