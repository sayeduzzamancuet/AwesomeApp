import { PortfolioData } from '../../../core/models/portfolio.models';

export const PORTFOLIO_DATA: PortfolioData = {
  name: 'Sayed Uz Zaman',
  role: 'Senior Full-Stack .NET & Angular Engineer',
  navItems: [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' }
  ],
  hero: {
    heading: 'Building Scalable Enterprise Solutions',
    highlightedHeading: 'Enterprise Solutions',
    description:
      'Tech Lead & Senior Full-Stack Engineer with 7.5+ years specializing in .NET Core, Angular, and Azure Cloud Architecture. Expert in microservices, CQRS, and Clean Architecture.',
    primaryCta: { id: 'projects', label: 'View My Work' },
    secondaryCta: { id: 'contact', label: 'Contact Me' },
    imageUrl:
      'https://image.qwenlm.ai/public_source/41838112-6184-475a-ab01-0da0a092bf15/16a919a5b-cc86-4c48-97ac-2d1ea0115214.png',
    imageAlt: 'Enterprise architecture illustration',
    codeLines: [
      { type: 'keyword', text: 'public class' },
      { type: 'type', text: ' SayedUzZaman' },
      { type: 'plain', text: ' : ' },
      { type: 'type', text: 'ITechLead' },
      { type: 'plain', text: ' {' },
      { type: 'comment', text: '// Microservices + CQRS + Clean Architecture' },
      { type: 'keyword', text: 'public string' },
      { type: 'plain', text: ' Stack => ' },
      { type: 'string', text: '".NET 8 + Angular"' },
      { type: 'plain', text: ';' }
    ]
  },
  about: {
    intro: [
      "Hello! I'm Sayed Uz Zaman, a Tech Lead and Senior Full-Stack Engineer with 7.5+ years of professional experience in building scalable enterprise systems.",
      'I specialize in the .NET and Angular ecosystem, architecting solutions with microservices, CQRS, and Clean Architecture across backend, frontend, and infrastructure.',
      'I lead cross-functional teams, perform architecture reviews, and deliver secure cloud-native solutions using Azure and modern DevOps workflows.'
    ],
    availability: 'Immediately available for opportunities.',
    stats: [
      { value: '7.5+', label: 'Years Experience' },
      { value: '500K+', label: 'Customers Onboarded' },
      { value: '11+', label: 'Banks Served' },
      { value: '50%', label: 'Performance Gain' }
    ]
  },
  skills: [
    {
      title: 'Backend (.NET)',
      icon: '[]',
      tags: ['ASP.NET Core', 'C#', 'Web API', 'EF Core', 'Dapper', 'SignalR', 'Hangfire', 'xUnit']
    },
    {
      title: 'Frontend (Angular)',
      icon: '</>',
      tags: ['Angular', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Bootstrap', 'Highcharts']
    },
    {
      title: 'Database & Cloud',
      icon: 'DB',
      tags: ['MSSQL Server', 'Azure SQL', 'PostgreSQL', 'Oracle', 'MySQL', 'Redis', 'Azure Services']
    },
    {
      title: 'DevOps & Security',
      icon: 'CI',
      tags: ['Azure DevOps', 'CI/CD Pipelines', 'Docker', 'Kubernetes', 'Sonar Cloud', 'Identity Server', 'JWT']
    },
    {
      title: 'Monitoring & Tools',
      icon: 'OBS',
      tags: ['ELK Stack', 'Elastic APM', 'Dynatrace', 'Kibana', 'Jira', 'Git/SVN']
    },
    {
      title: 'Industries',
      icon: 'IND',
      tags: ['IT Services', 'Bank & Finance', 'Oil & Gas', 'E-Commerce', 'Healthcare']
    }
  ],
  experience: [
    {
      dateRange: 'September 2023 - March 2026',
      title: 'Senior Software Engineer (Tech Lead)',
      company: 'Skill Quotient Technologies (Client: PETRONAS)',
      description:
        'Led COMPASS platform development, improved system performance by 50%, enforced secure coding practices, and mentored engineers while driving Agile delivery and CI/CD through Azure DevOps.'
    },
    {
      dateRange: 'February 2021 - August 2023',
      title: 'Senior Software Engineer',
      company: 'Gigatech Ltd',
      description:
        'Delivered EKYC SaaS platform that onboarded 500,000+ users and supported 11+ banks, including security hardening, scaling, and cross-team collaboration in private cloud environments.'
    },
    {
      dateRange: 'May 2018 - February 2021',
      title: 'Software Engineer',
      company: 'Oscillosoft Pty. Ltd',
      description:
        'Built and maintained multi-project enterprise systems, translated offshore requirements into reliable technical implementations, and owned delivery throughout the SDLC lifecycle.'
    }
  ],
  projects: [
    {
      title: 'COMPASS by PETRONAS',
      description:
        'Strategic planning platform unifying enterprise data into scalable services and scenario-driven workflows for business decision support.',
      imageUrl:
        'https://image.qwenlm.ai/public_source/41838112-6184-475a-ab01-0da0a092bf15/16a919a5b-cc86-4c48-97ac-2d1ea0115214.png',
      imageAlt: 'COMPASS platform preview',
      tech: ['ASP.NET Core', 'Angular', 'SignalR', 'Azure SQL', 'ELK Stack'],
      highlights: ['50% performance improvement']
    },
    {
      title: 'EKYC Platform',
      description:
        'End-to-end digital onboarding platform with OCR and biometric workflows for compliant account creation and KYC processing.',
      imageUrl:
        'assets/images/ekyc.png',
      imageAlt: 'EKYC platform preview',
      tech: ['ASP.NET Core', 'Angular', 'Docker', 'Kubernetes', 'Oracle'],
      highlights: ['500K+ customers', '11+ banks']
    },
    {
      title: 'Ceylon Exchange',
      description:
        'Currency exchange suite spanning teller desktop software, APIs, and web channels using a mixed .NET and Java service ecosystem.',
      imageUrl:
        'assets/images/ceylon.png',
      imageAlt: 'Ceylon Exchange platform preview',
      tech: ['ASP.NET Web API', 'Java Spring Boot', 'MySQL', 'Redis', 'AWS'],
      highlights: ['Multi-platform architecture']
    },
    {
      title: 'Bapcor Stock Taker',
      description:
        'Inventory and scanning solution delivered across web and mobile platforms with significant throughput optimization.',
      imageUrl:
        'https://image.qwenlm.ai/public_source/41838112-6184-475a-ab01-0da0a092bf15/16a919a5b-cc86-4c48-97ac-2d1ea0115214.png',
      imageAlt: 'Bapcor Stock Taker preview',
      tech: ['ASP.NET Web API', 'SQL Server', 'Mobile Apps', 'AWS VM'],
      highlights: ['80% performance gain']
    }
  ],
  contact: {
    heading: "Let's Work Together",
    description:
      "Available immediately for new opportunities. If you need support with .NET, Angular, or Azure architecture, let's connect."
  },
  footer: {
    copyright: '© 2026 Sayed Uz Zaman. Tech Lead & Senior Full-Stack .NET Engineer.',
    links: [
      { label: 'LinkedIn', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'Email', href: '#' }
    ]
  }
};

