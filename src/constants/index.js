import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    docker,
    shopify,
    frontend,
    jobit,
    tripguide,
    threejs,
    Csharp,
    sql,
    leidos,
    project,
    visualstudio,
    vscode,
    Alexis,
    dotNET,
    threads
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React.JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Documentation",
      icon: creator,
    },
    {
      title: ".NET MVC",
      icon: dotNET,
    },
    {
      title: "Sql Developer",
      icon: sql,
    },
    {
      title: "Visual Studio",
      icon: visualstudio,
    },
    {
      title: "Visual Studio Code",
      icon: vscode,
    },

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C#",
      icon: Csharp,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Project",
      icon: project,
      iconBg: "#383E56",
      date: "August 2020 - July 2022",
      points: [
        "Created applications using C#, ASP.NET with MVC and Razor Pages, incorporating AJAX, HTML, CSS, JavaScript, and SQL Server",
        "Utilized ADO.NET with Entity Framework Core's Database First Approach",
        "Implemented N-tier Architecture for application development, consisting of presentation layer, data access layer, and business logic layer",
        "Proficient in Client-side and Server-side state management techniques including ViewState, cookies, and Session",
        "Employed Razor Views and integrated Viewbag, Tempdata, and Session to facilitate data transfer between views and controllers",
        "and much more...",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Project",
      icon: project,
      iconBg: "#E6DEDD",
      date: "April 2022 - July 2023",
      points: [
        "Developed business and database logic through Entity Framework and Repository Pattern",
        "Crafted TypeScript components and services, employing React's Component-based architecture to consume REST APIs",
        "Designed UI components in React, featuring filters for diverse data dimensions and font size adjustments",
        "Constructed Restful services with Web API, formatting JSON responses using Web API media type format",
        "Developed and modified SQL Stored Procedures, Triggers, and Views, integrating them effectively with applications and handling complex queries",
        "and much more...",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2022 - August 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Leidos",
      icon: leidos,
      iconBg: "#E6DEDD",
      date: "September 2022 - Present",
      points: [
        "Engaged in various SDLC phases, applying Agile methodologies for requirement analysis and architectural design for legacy applications",
        "Undertook six immediate projects outside my expertise, achieving successful completion and garnering approval from senior developers and colleagues",
        "Revised, modularized, and updated old code bases to modern development standards, reducing operating costs and improving functionality",
        "Introduced automated diagnostics for sensor data collection and processing",
        "Optimized application performance via strategic modifications to MS SQL stored procedures"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Aurel proved me wrong.",
      name: "Marthe Koanou",
      designation: "CEO",
      company: "Joy Healthcare Services",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Aurel does.",
      name: "Alexis De Silva",
      designation: "CEO",
      company: "AKA Moneymom",
      image: Alexis,
    },
    {
      testimonial:
        "After Aurel optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Zackaria Hitane",
      designation: "CEO",
      company: "Leonexa Solutions",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Cobra X Talisman",
      description:
        "E-Commerce Store complete with an admin backend website for order fullfillment using stripe API and mailSender for a complete user experience ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "dotNet",
          color: "pink-text-gradient",
        },
      ],
      image: frontend,
      source_code_link: "https://github.com/Npounengnong/CobraXTalisman", 
    },
    {
      name: "Dawg In Him ",
      description:
        "Web application that enables users to browse and buy books. Complete with an Admin panel in the back end and various authenticaiton methods as well as payment integration with stripe. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "dotnet",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Npounengnong/DawgInHim",
    },
    {
      name: "Red Mango",
      description:
        "A comprehensive Full stack application built in .NET 7.0. this is a restaurant application  where you can make reservations, place online orders and included payment integration with Stripe and a cloud database with Azure.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "ASP.NET MVC",
          color: "green-text-gradient",
        },
        {
          name: "Csharp",
          color: "pink-text-gradient",
        },
        {
          name: "Azure",
          color: "red-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Npounengnong/React-RedMango_API",
    },
    {
      name: "Threads Clone",
      description:
        "A META Theads clone developed  using the MongoDb,ExpressJs,React and Node.JS otherwise known as the (MERN) tech stack. This applicaiton features authentication provided by clark as well as very robust security features and user management.",
      tags: [
        {
          name: "nextjs",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDb",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Clerk Authentication",
          color: "orange-text-gradient",
        },
      ],
      image: threads,
      source_code_link: "https://github.com/Npounengnong/threads",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };