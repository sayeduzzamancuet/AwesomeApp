import { PortfolioData } from '../../../core/models/portfolio.models';

export const PORTFOLIO_DATA: PortfolioData = {
  name: 'Sayed Uz Zaman',
  role: 'Tech Lead · Full-Stack .NET & Angular Engineer',
  navItems: [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' }
  ],
  hero: {
    heading: 'I Build Software That Scales',
    highlightedHeading: 'Software That Scales',
    description:
      '7.5+ years turning complex requirements into clean, production-grade systems. Tech Lead specialising in .NET Core, Angular, and Azure — shipping features teams are proud of.',
    primaryCta: { id: 'projects', label: 'See My Work' },
    secondaryCta: { id: 'contact', label: "Let's Talk" },
    imageUrl:
      'https://image.qwenlm.ai/public_source/41838112-6184-475a-ab01-0da0a092bf15/16a919a5b-cc86-4c48-97ac-2d1ea0115214.png',
    imageAlt: 'Enterprise architecture illustration',
    codeLines: [
      { type: 'keyword', text: 'public class' },
      { type: 'type', text: ' SayedUzZaman' },
      { type: 'plain', text: ' : ' },
      { type: 'type', text: 'ITechLead' },
      { type: 'plain', text: ' {' },
      { type: 'comment', text: '// Clean Arch · CQRS · Microservices' },
      { type: 'keyword', text: 'public string' },
      { type: 'plain', text: ' Stack => ' },
      { type: 'string', text: '".NET 8 + Angular 18"' },
      { type: 'plain', text: ';' }
    ]
  },
  about: {
    intro: [
      "I'm Sayed — a Tech Lead and Full-Stack Engineer who's spent 7.5+ years building systems that handle real load, real users, and real consequences.",
      'My stack is .NET Core + Angular. My patterns are Clean Architecture, CQRS, and microservices. My standard is code that stays maintainable two years after I write it.',
      "I've shipped to production across banking, oil & gas, and enterprise SaaS — leading teams, owning architecture, and doing the work myself when it counts."
    ],
    availability: 'Open to new opportunities — immediately available.',
    stats: [
      { value: '7.5+', label: 'Years Experience' },
      { value: '500K+', label: 'Customers Onboarded' },
      { value: '11+', label: 'Banks Served' },
      { value: '50%', label: 'Performance Gained' }
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
      dateRange: 'September 2023 – March 2026',
      title: 'Senior Software Engineer · Tech Lead',
      company: 'Skill Quotient Technologies — Client: PETRONAS',
      description:
        "Tech-led COMPASS, PETRONAS's strategic planning platform. Cut system response times by 50% through targeted optimisation, established CI/CD on Azure DevOps, enforced secure-by-default coding standards, and mentored a cross-functional engineering team."
    },
    {
      dateRange: 'February 2021 – August 2023',
      title: 'Senior Software Engineer',
      company: 'Gigatech Ltd',
      description:
        'Architected and shipped the EKYC digital-onboarding SaaS platform end-to-end — scaling to 500K+ customers across 11+ banks. Hardened security, containerised services with Docker & Kubernetes, and navigated a regulated private-cloud environment.'
    },
    {
      dateRange: 'May 2018 – February 2021',
      title: 'Software Engineer',
      company: 'Oscillosoft Pty. Ltd',
      description:
        'Owned full-cycle delivery of multiple enterprise systems — from offshore requirement analysis to production deployment — across web, API, and desktop platforms.'
    }
  ],
  projects: [
    {
      title: 'COMPASS — PETRONAS',
      description:
        "PETRONAS's enterprise strategic-planning hub. Unified siloed data into scenario-driven workflows and slashed response times by 50% through query optimisation and intelligent caching.",
      imageUrl:
        'https://image.qwenlm.ai/public_source/41838112-6184-475a-ab01-0da0a092bf15/16a919a5b-cc86-4c48-97ac-2d1ea0115214.png',
      imageAlt: 'COMPASS platform preview',
      tech: ['ASP.NET Core', 'Angular', 'SignalR', 'Azure SQL', 'ELK Stack'],
      highlights: ['50% performance improvement', 'Tech lead ownership']
    },
    {
      title: 'EKYC Platform',
      description:
        'SaaS digital-onboarding platform with OCR and biometric verification. Built for compliance, containerised for scale, and trusted by 11+ banks to onboard real customers.',
      imageUrl: 'assets/images/ekyc.png',
      imageAlt: 'EKYC platform preview',
      tech: ['ASP.NET Core', 'Angular', 'Docker', 'Kubernetes', 'Oracle'],
      highlights: ['500K+ customers onboarded', '11+ banks served']
    },
    {
      title: 'Ceylon Exchange',
      description:
        'Cross-platform currency exchange suite — teller desktop app, REST APIs, and a web channel — powered by a polyglot .NET + Java Spring Boot service layer.',
      imageUrl: 'assets/images/ceylon.png',
      imageAlt: 'Ceylon Exchange platform preview',
      tech: ['ASP.NET Web API', 'Java Spring Boot', 'MySQL', 'Redis', 'AWS'],
      highlights: ['Multi-platform architecture', 'Desktop + Web + API']
    },
    {
      title: 'Bapcor Stock Taker',
      description:
        'Warehouse inventory and barcode-scanning solution delivered across web and mobile. Optimised scanning pipeline and cut throughput time by 80%.',
      imageUrl:
        'https://image.qwenlm.ai/public_source/41838112-6184-475a-ab01-0da0a092bf15/16a919a5b-cc86-4c48-97ac-2d1ea0115214.png',
      imageAlt: 'Bapcor Stock Taker preview',
      tech: ['ASP.NET Web API', 'SQL Server', 'Mobile Apps', 'AWS VM'],
      highlights: ['80% throughput improvement']
    }
  ],
  contact: {
    heading: "Let's Build Something Great",
    description:
      'Open to new opportunities — remote or on-site. Whether you need a Tech Lead, a senior engineer, or both, I am ready to contribute from day one.'
  },
  footer: {
    copyright: '© 2026 Sayed Uz Zaman · Tech Lead & Senior Full-Stack Engineer',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sayeduzzamancuet' },
      { label: 'GitHub', href: 'https://github.com/sayeduzzamancuet' },
      { label: 'Email', href: 'sayeduzzamancuet@gmail.com' }
    ]
  }
};

