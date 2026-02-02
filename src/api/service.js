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
        fullDescription: 'Vermont Capital Partners\' Automotive Trading division comprises two powerhouse brands: TRES Equipment and TRES AUTO GROUP. Together, we provide comprehensive automotive solutions from premium lubricants and genuine spare parts to new and used vehicles, heavy machinery, and industrial equipment across South Africa.',
        fullDescription2: 'Our automotive expertise spans retail and wholesale distribution, fleet solutions, and industrial equipment supply. We partner with leading brands like PUMA lubricants to deliver quality products and reliable service that keep South Africa moving.',
        mainTitle: 'Comprehensive Automotive Solutions',
        serviceFeatures: [
            'Premium PUMA lubricants distribution',
            'Genuine OEM spare parts supply',
            'New and certified used vehicles',
            'Heavy machinery and yellow equipment',
            'Fleet management solutions',
            'Industrial equipment supply'
        ],
        capabilities: [
            'Authorized distributor network',
            'Quality assurance & warranties',
            'Nationwide logistics & delivery',
            'Expert technical support',
            'Competitive pricing & financing',
            'After-sales service & maintenance'
        ],
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
        fullDescription: 'Toughrock Investments drives economic growth through strategic infrastructure development and accessible financial services. Our construction division delivers civil engineering projects, brick manufacturing, and infrastructure development, while our financial services arm provides microfinance, business loans, and payroll solutions to empower communities.',
        fullDescription2: 'From building roads and structures to financing dreams, Toughrock Investments creates tangible value across South Africa. We combine solid construction expertise with flexible financial products designed for the unique needs of African markets.',
        mainTitle: 'Infrastructure Development & Financial Services',
        serviceFeatures: [
            'Civil engineering & construction',
            'Infrastructure development projects',
            'Brick making & building materials',
            'Microfinance & lending solutions',
            'Business & personal loans',
            'Payroll & financial services'
        ],
        capabilities: [
            'Licensed construction & engineering',
            'Registered financial services provider',
            'Project management expertise',
            'Flexible financing options',
            'Community-focused approach',
            'Regulatory compliance & governance'
        ],
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
        sTitle: 'Digiroc Technologies',
        slug:'Digiroc-Technologies',
        description:'Enterprise IT distribution and technology solutions provider delivering cutting-edge infrastructure, data management, and business intelligence services across Africa.',
        des2:'Digiroc Technologies provides enterprise IT distribution, cloud enablement, and advanced data analytics, empowering businesses with technology solutions that drive digital transformation and operational excellence.',
        des3:'Your trusted partner for comprehensive technology solutions, storage infrastructure, and data-driven insights.',
        icon:'flaticon-chip',
        fullDescription: 'Digiroc Technologies is Vermont Capital Partners\' technology powerhouse, delivering enterprise IT distribution, cloud solutions, data analytics, and business intelligence services across Africa. We are authorized distributors for leading global technology brands, providing comprehensive hardware infrastructure, enterprise software solutions, and data storage systems to businesses of all sizes.',
        fullDescription2: 'Beyond distribution, we deliver value-added services including cloud platform deployment, secure data center solutions, backup and disaster recovery systems, and advanced business intelligence tools. Our market research division provides strategic insights and data analytics that help businesses make informed decisions and gain competitive advantage in African markets.',
        mainTitle: 'Enterprise Technology Distribution & Intelligence Solutions',
        serviceFeatures: [
            'Enterprise hardware & software distribution',
            'Cloud infrastructure & platform services',
            'Data storage, backup & disaster recovery',
            'Business intelligence & data analytics',
            'Market research & competitive insights',
            'IT infrastructure consulting & deployment'
        ],
        capabilities: [
            'Authorized global technology vendor partnerships',
            'ISO-certified secure deployment & integration',
            'Scalable cloud architecture design',
            'Advanced data analytics & visualization tools',
            'Regulatory compliance & data security expertise',
            '24/7 enterprise technical support & SLA management'
        ],
        subBranches: [
            {
                name: 'IT Distribution & Enterprise Solutions',
                slug: 'IT-Enterprise-Solutions',
                description: 'Complete technology infrastructure and enterprise systems',
                services: ['Hardware Distribution', 'Enterprise Solutions', 'Cloud Platforms', 'Data Storage Solutions'],
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
