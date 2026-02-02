// images
import blogImg1 from "../images/slider/one.jpg";
import blogImg2 from "../images/slider/one.jpg";
import blogImg3 from "../images/slider/one.jpg";

import blogSingleImg1 from "../images/slider/one.jpg";
import blogSingleImg2 from "../images/slider/one.jpg";
import blogSingleImg3 from "../images/slider/one.jpg";



const blogs = [ 
    {
        id: '1',
        title: 'Building resilient investment portfolios in South Africa',
        slug: 'Building-resilient-investment-portfolios-in-south-africa',
        screens: blogImg1,
        description: 'How Vermont Capital Partners ensures strategic investment solutions and comprehensive wealth management for clients across the region.',
        author: 'Vermont Capital Partners',
        authorTitle:'Investment Strategy',
        create_at: 'Feb 16, 2024',
        create_day: '16',
        create_month: 'Feb',
        create_year: '2024',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Choosing the right wealth management strategy',
        slug: 'Choosing-the-right-wealth-management-strategy',
        screens: blogImg2,
        description: 'Key considerations for portfolio diversification, risk management, and wealth growth in modern investment environments.',
        author: 'Vermont Capital Partners',
        authorTitle:'Wealth Advisory',
        create_at: 'March 17, 2024',
        create_day: '17',
        create_month: 'March',
        create_year: '2024',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'Strategic asset allocation for long-term growth',
        slug: 'Strategic-asset-allocation-for-long-term-growth',
        screens: blogImg3,
        description: 'A practical guide to portfolio optimization, investment diversification, and capital allocation strategies for sustainable wealth creation.',
        author: 'Vermont Capital Partners',
        authorTitle:'Portfolio Management',
        create_at: 'Jan 18, 2024',
        create_day: '18',
        create_month: 'Jan',
        create_year: '2024',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
];
export default blogs;