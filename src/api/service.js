import simg from '../images/slider/one.jpg'
import simg2 from '../images/slider/one.jpg'
import simg3 from '../images/slider/one.jpg'


const Services = [
    {
        Id: '1',
        sImg:simg,
        sTitle:'Automotive Trading',
        slug:'Automotive-Trading',
        description:'Leading automotive solutions provider with two specialized divisions serving South Africa\'s automotive and industrial sectors.',
        des2:'Through TRES Equipment and TRES AUTO GROUP, we deliver comprehensive automotive products, equipment, and services across the region.',
        des3:'From quality lubricants and spare parts to new and used vehicles and heavy machinery, we are your trusted automotive partner.',
        icon:'flaticon-car',
        subBranches: [
            {
                name: 'TRES Equipment',
                slug: 'TRES-Equipment',
                description: 'Premium automotive supplies and maintenance solutions',
                services: ['Lubricants (PUMA)', 'Spare Parts', 'Batteries'],
                icon: 'flaticon-tools'
            },
            {
                name: 'TRES AUTO GROUP',
                slug: 'TRES-AUTO-GROUP',
                description: 'Comprehensive vehicle and heavy equipment solutions',
                services: ['New Vehicles', 'Used Vehicles', 'Yellow Machines'],
                icon: 'flaticon-truck'
            }
        ]
    },
    {
        Id: '2',
        sImg:simg2,
        sTitle:'Toughrock Investments',
        slug:'Toughrock-Investments',
        description:'Diversified investment company specializing in infrastructure development and financial services across South Africa.',
        des2:'Our dual-focus approach combines robust construction and infrastructure solutions with accessible financial services for individuals and businesses.',
        des3:'Building South Africa\'s future through solid infrastructure and empowering communities with flexible financial solutions.',
        icon:'flaticon-stats',
        subBranches: [
            {
                name: 'Infrastructure & Construction',
                slug: 'Infrastructure-Construction',
                description: 'Building the foundation for growth and development',
                services: ['Infrastructure Development', 'Civil Works', 'Construction Projects', 'Brick Making'],
                icon: 'flaticon-building'
            },
            {
                name: 'Financial Services',
                slug: 'Financial-Services',
                description: 'Accessible financial solutions for every need',
                services: ['Microfinance', 'Personal & Business Loans', 'Payroll Services', 'Finance Solutions'],
                icon: 'flaticon-money'
            }
        ]
    },
    {
        Id: '3',
        sImg:simg3,
        sTitle: 'Vermont Capital Partners',
        slug:'Vermont-Capital-Partners',
        description:'Leading investment holding company with Digiroc Technologies as our technology solutions division, delivering cutting-edge IT infrastructure, data management, and business intelligence services.',
        des2:'Through Digiroc Technologies, we provide enterprise IT distribution and advanced data analytics, empowering businesses with technology solutions that drive digital transformation and operational excellence across South Africa.',
        des3:'Your trusted partner for comprehensive technology solutions, storage infrastructure, and data-driven insights through our Digiroc Technologies division.',
        icon:'flaticon-chip',
        subBranches: [
            {
                name: 'IT & Enterprise Solutions',
                slug: 'IT-Enterprise-Solutions',
                description: 'Complete technology infrastructure and enterprise systems',
                services: ['IT Distribution', 'Enterprise Solutions', 'Data Storage Solutions'],
                icon: 'flaticon-server'
            },
            {
                name: 'Data & Analytics',
                slug: 'Data-Analytics',
                description: 'Intelligence-driven insights for strategic decision making',
                services: ['Market Research', 'Data Analytics', 'Business Intelligence'],
                icon: 'flaticon-analytics'
            }
        ]
    },
]    

export default Services;
