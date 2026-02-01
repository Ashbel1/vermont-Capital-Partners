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
        submenu: [
            {
                id: 11,
                title: 'Home Default',
                link: '/home'
            },
            {
                id: 12,
                title: 'Home style 2',
                link: '/home-2'
            },
            {
                id: 13,
                title: 'Home style 3',
                link: '/home-3'
            },
            {
                id: 14,
                title: 'Home static hero',
                link: '/home-4'
            },
            {
                id: 15,
                title: 'Home static hero box',
                link: '/home-5'
            },
        ]
    },

    {
        id: 3,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 31,
                title: 'About',
                link: '/about'
            },
            {
                id: 3222,
                title: 'Contact',
                link: '/contact'
            },
            {
                id: 322,
                title: 'Testimonials',
                link: '/testimonials'
            },
            {
                id: 34,
                title: 'Team',
                link: '/team'
            },
            {
                id: 3454,
                title: 'Team Single',
                link: '/team-single/Morkal-Akunda'
            },
            {
                id: 36,
                title: '404',
                link: '/404'
            }
        ]
    },
    {
        id: 4,
        title: 'Shop',
        link: '/shop',
        submenu: [
            {
                id: 41,
                title: 'Shop',
                link: '/shop',
            },
            {
                id: 42,
                title: 'Shop Single',
                link: '/product-single/Blue-Striped-Shoes'
            },
            {
                id: 43,
                title: 'Cart',
                link: '/cart'
            },
            {
                id: 44,
                title: 'Checkout',
                link: '/checkout'
            },
        ]
    },

    {
        id: 6,
        title: 'Services',
        link: '/services',
        submenu: [
            {
                id: 61,
                title: 'All Services',
                link: '/services',
            },
            {
                id: 62,
                title: 'Solutions Grid',
                link: '/services-s2'
            },
            {
                id: 625,
                title: 'Service Highlights',
                link: '/service-s3'
            },
            {
                id: 63,
                title: 'IT Distribution & Supply Chain',
                link: '/service-single/IT-Distribution'
            },
            {
                id: 64,
                title: 'Enterprise Cloud & Productivity',
                link: '/service-single/Enterprise-Cloud'
            },
            {
                id: 64,
                title: 'Data Storage & Infrastructure',
                link: '/service-single/Data-Storage-Infrastructure'
            },
        ]
    },
    {
        id: 7,
        title: 'Projects',
        link: '/projects',
        submenu: [
            {
                id: 71,
                title: 'Deployments',
                link: '/projects'
            },
            {
                id: 72,
                title: 'Deployment Grid',
                link: '/projects-s2'
            },
            {
                id: 74,
                title: 'Featured Deployment',
                link: '/project-single/Enterprise-Hardware-Rollout'
            },
        ]
    },

    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Insights',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Insights (Left)',
                link: '/blog-left-sidebar'
            },
            {
                id: 53,
                title: 'Insights (Full)',
                link: '/blog-fullwidth'
            },
            {
                id: 54,
                title: 'Featured Insight',
                link: '/blog-single/Building-resilient-it-supply-chains-in-africa'
            },
            {
                id: 55,
                title: 'Featured Insight (Left)',
                link: '/blog-single-left-sidebar/Building-resilient-it-supply-chains-in-africa'
            },
            {
                id: 56,
                title: 'Featured Insight (Full)',
                link: '/blog-single-fullwidth/Building-resilient-it-supply-chains-in-africa'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


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