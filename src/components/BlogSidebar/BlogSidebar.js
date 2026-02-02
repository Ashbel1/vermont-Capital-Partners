import React from 'react';
import { Link } from 'react-router-dom'
import Services from '../../api/service';
import about from '../../images/slider/one.jpg'
import blogs from '../../api/blogs'

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className={`col col-lg-3 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget about-widget">
                    <h3>About us</h3>
                    <div className="img-holder">
                        <img src={about} alt="" />
                    </div>
                    <p>Vermont Capital Partners delivers strategic investment solutions and comprehensive business services through our diverse portfolio of companies across automotive, infrastructure, finance, and technology sectors in South Africa.</p>
                    <Link onClick={ClickHandler} to="/about">More about us</Link>
                </div>
                <div className="widget category-widget">
                    <h3>Post Categories</h3>
                    <ul>
                        {Services.slice(0, 6).map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.map((blog, bl) => (
                            <div className="post" key={bl}>
                                <div className="img-holder">
                                    <img src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog">Investment</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Wealth Management</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Portfolio</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Capital Solutions</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Financial Planning</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Market Insights</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Risk Management</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Asset Allocation</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Strategic Advisory</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
