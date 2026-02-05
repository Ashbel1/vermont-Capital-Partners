import React from 'react';
import { Link } from 'react-router-dom'
import blog3 from '../../images/blog-details/author.jpg'
import blog4 from '../../images/blog-details/comments-author/img-1.jpg'
import blog5 from '../../images/blog-details/comments-author/img-2.jpg'
import blog6 from '../../images/blog-details/comments-author/img-3.jpg'
import blogs from '../../api/blogs';
import { useParams } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar/BlogSidebar.js'

const BlogSingle = (props) => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <section className="blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-9 col-12 ${props.blRight}`}>
                        <div className="blog-content">
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src={BlogDetails.blogSingleImg} alt="" />
                                </div>
                                <ul className="entry-meta">
                                    <li><Link to="/blog-single/Building-resilient-it-supply-chains-in-africa">{BlogDetails.author}</Link></li>
                                    <li><Link to="/blog-single/Building-resilient-it-supply-chains-in-africa">{BlogDetails.create_at}</Link></li>
                                    <li><Link to="/blog-single/Building-resilient-it-supply-chains-in-africa">{BlogDetails.comment} Comments</Link></li>
                                </ul>
                                <h2>{BlogDetails.title}</h2>
                                <p>Strategic investment partnerships are critical for sustainable growth and wealth creation. Vermont Capital Partners ensures comprehensive financial advisory and portfolio management across diverse sectors including automotive, infrastructure, and technology solutions in South African markets.</p>
                                <p>We coordinate strategic planning, investment allocation, risk management, and wealth optimization so clients can build lasting financial success with confidence and security.</p>
                                <blockquote>
                                    Strategic partnerships and diversified portfolios are the foundation of sustainable wealth and growth.
                                    <span className="quoter">- Vermont Capital Partners Advisory Team</span>
                                </blockquote>
                                <h3>Investment Solutions That Drive Growth</h3>
                                <p>From investment management to strategic capital solutions, Vermont Capital Partners delivers the financial expertise and diversified portfolio approach clients need to achieve their goals across South Africa.</p>
                            </div>

                            <div className="tag-share">
                                <div className="tag">
                                    Tags: &nbsp;
                                    <ul>
                                        <li><Link to="/blog-single/Building-resilient-it-supply-chains-in-africa">Investment</Link></li>
                                        <li><Link to="/blog-single/Building-resilient-it-supply-chains-in-africa">Investment Management</Link></li>
                                        <li><Link to="/blog-single/Building-resilient-it-supply-chains-in-africa">Portfolio</Link></li>
                                        <li><Link to="/blog-single/Building-resilient-it-supply-chains-in-africa">Financial Advisory</Link></li>
                                    </ul>
                                </div>
                                <div className="share">
                                    Share: &nbsp;
                                    <ul>
                                        <li><Link to="/coming-soon"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="/coming-soon"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link to="/coming-soon"><i className="ti-linkedin"></i></Link></li>
                                        <li><Link to="/coming-soon"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="author-box">
                                <div className="author-avatar">
                                    <Link to="/blog-single/Building-resilient-it-supply-chains-in-africa" target="_blank"><img src={blog6} alt="" /></Link>
                                </div>
                                <div className="author-content">
                                    <Link to="/blog-single/Building-resilient-it-supply-chains-in-africa" className="author-name">Author: Vermont Capital Partners</Link>
                                    <p>We share practical guidance on investment strategy, investment management, and portfolio optimization for individuals and organizations across South Africa.</p>
                                    <div className="socials">
                                        <ul className="social-link">
                                            <li><Link to="/coming-soon"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="/coming-soon"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link to="/coming-soon"><i className="ti-linkedin"></i></Link></li>
                                            <li><Link to="/coming-soon"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="more-posts">
                                <div className="previous-post">
                                    <Link to="/coming-soon">
                                        <span className="post-control-link"><i className="ti-arrow-circle-left"> </i>Previous post</span>
                                    </Link>
                                </div>
                                <div className="next-post">
                                    <Link to="/coming-soon">
                                        <span className="post-control-link">Next post <i className="ti-arrow-circle-right"></i></span>
                                    </Link>
                                </div>
                            </div>

                            <div className="comments-area">
                                <div className="comments-section">
                                    <h3 className="comments-title">Comments</h3>
                                    <ol className="comments">
                                        <li className="comment even thread-even depth-1" id="comment-1">
                                            <div id="div-comment-1">
                                                <div className="comment-theme">
                                                    <div className="comment-image"><img src={blog3} alt="" /></div>
                                                </div>
                                                <div className="comment-main-area">
                                                    <div className="comment-wrapper">
                                                        <div className="comments-meta">
                                                            <h4>John Abraham <span className="comments-date">January 12,2022
                                                                At 9.00am</span></h4>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>Excellent strategic guidance and comprehensive investment management from Vermont Capital Partners. The investment approach was well-structured and highly professional.</p>
                                                            <div className="comments-reply">
                                                                <Link className="comment-reply-link" to="/blog-single/Building-resilient-it-supply-chains-in-africa"><span>Reply</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="children">
                                                <li className="comment">
                                                    <div>
                                                        <div className="comment-theme">
                                                            <div className="comment-image"><img src={blog4} alt="" /></div>
                                                        </div>
                                                        <div className="comment-main-area">
                                                            <div className="comment-wrapper">
                                                                <div className="comments-meta">
                                                                    <h4>Lily Watson <span className="comments-date">January
                                                                        12,2022 At 9.00am</span></h4>
                                                                </div>
                                                                <div className="comment-area">
                                                                    <p>Professional team and reliable logistics. Our procurement was seamless.</p>
                                                                    <div className="comments-reply">
                                                                        <Link className="comment-reply-link" to="/blog-single/Building-resilient-it-supply-chains-in-africa"><span>Reply</span></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li className="comment">
                                                            <div>
                                                                <div className="comment-theme">
                                                                    <div className="comment-image"><img src={blog5} alt="" /></div>
                                                                </div>
                                                                <div className="comment-main-area">
                                                                    <div className="comment-wrapper">
                                                                        <div className="comments-meta">
                                                                            <h4>John Abraham <span className="comments-date">January
                                                                                12,2022 At 9.00am</span></h4>
                                                                        </div>
                                                                        <div className="comment-area">
                                                                            <p>Strong vendor access and clear communication throughout the deployment.</p>
                                                                            <div className="comments-reply">
                                                                                <Link className="comment-reply-link" to="/blog-single/Building-resilient-it-supply-chains-in-africa"><span>Reply</span></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="comment">
                                            <div>
                                                <div className="comment-theme">
                                                    <div className="comment-image"><img src={blog3} alt="" /></div>
                                                </div>
                                                <div className="comment-main-area">
                                                    <div className="comment-wrapper">
                                                        <div className="comments-meta">
                                                            <h4>John Abraham <span className="comments-date">January 12,2022
                                                                At 9.00am</span></h4>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>Excellent support and warranty handling on our enterprise equipment.</p>
                                                            <div className="comments-reply">
                                                                <Link className="comment-reply-link" to="/blog-single/Building-resilient-it-supply-chains-in-africa"><span>Reply</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Post Comments</h3>
                                    <form onSubmit={submitHandler} id="commentform" className="comment-form">
                                        <div className="form-textarea">
                                            <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                        </div>
                                        <div className="form-inputs">
                                            <input placeholder="Website" type="url" />
                                            <input placeholder="Name" type="text" />
                                            <input placeholder="Email" type="email" />
                                        </div>
                                        <div className="form-submit">
                                            <input id="submit" value="Post Comment" type="submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section>
    )

}

export default BlogSingle;
