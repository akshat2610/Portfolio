
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Akshat Bansal",
  title: "Think. Design. Build.",
  intro: "Hello, I am Akshat. I am a Software Engineer based in California. I love to design software that adds value to people's lives. Throughout my undergrad, I have been focused on learning new technologies and quality development practices to build reliable, scalable, and secure backend services surrounding full stack development. My education has provided me with the opportunity to work alongside very creative and passionate people who love to solve problems with code as well.",
  work: "I enjoy engaging with challenging projects that require me to work outside my comfort zone and knowledge set as continuing to learn new languages and better development techniques are important to me and to the success of my employer. During my internship at Sleep Number as a Cloud Engineer, I worked with multithreaded, performance-driven, and highly-scalable codebase. I wrote code to capture metrics like CPU usage, memory usage, API response times of many services that were deployed on AWS. I worked alongside senior engineers to define custom service-specific metrics to monitor the health of the cloud infrastructure.",
  resumeLink: "https://drive.google.com/file/d/1WFUPy3Dq2iDNeZDyzZ7xhS28ce3mbr7G/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/akshat2610",
  linkedin: "https://www.linkedin.com/in/-akshat-bansal/",
  gmail: "akshat2610@gmail.com",
  hackerrank: "https://www.hackerrank.com/akshat2610"
};

// Your Skills Section

const skillsSection = {
  title: "Mission",
  subTitle: "Use my skillset to build solutions that makes a positive impact on the world",
  skills: [
    emoji("⚡ Build highly scalable, secure, and performance-oriented backend solutions."),
    emoji("⚡ Automate the boring stuff."),
    emoji("⚡ Deploy with Docker and AWS for scalability."),
    emoji("⚡ Monitor health of backend infrastructure with JMX and DataDog.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      role: "Bachelors of Science in Computer Science",
      company: "San Jose State University",
      companylogo: require("./assets/images/sjsuLogo.png"),
      date: "August 2017 - Present",
      desc: "3.7/4.0",
      daily: "Honors and awards:",
      dailyBullets: [
        "Dean's Scholar 2017",
        "President's Scholar 2018",
        "Dean's Scholar 2019",
        "Member of Phi Kappa Phi honor society (Top 10% of the 2021 class)"
      ],
      tools: "Some of the interesting classes that I took: ",
      toolsBullets: [
        "Data structures and algorithms",
        "Object-oriented design",
        "Operating systems",
        "Database management systems",
        "Server-side programming",
        "Information security",
        "Software engineering",
        "Advanced programming in C++",
        "Advanced topics in Machine Learning"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Software Engineering",
      progressPercentage: "95%"
    },
    {
      Stack: "Data structures and algorithms",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Design patterns",
      progressPercentage: "85%"
    },
    {
      Stack: "System design",
      progressPercentage: "75%"
    },
    {
      Stack: "Natural Language Processing",
      progressPercentage: "70%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "AutoGrid",
      companylogo: require("./assets/images/AutoGridLogo.jpg"),
      date: "July 2021 – Present",
      // desc: "My project this fall involved reporting metrics for different microservices to DataDog and setting up triggers for  abnormal events like high CPU load, memory usage, etc. Apart from these common metrics, we also had different KPIs defined for different microservices. For example, for the database manager service one of the KPI was the persistence latency between when a message is generated and when it is persisted in the database.",
      daily: "Accomplishments:",
      dailyBullets: [
        "Helped scale the platform from being able to manage 300k Distributed Energy Resources (DERs) to 1M DERs by load testing our performance-testing environment with 800k, 1M, and 3M resources, profiling core functional components, and identifying bottlenecks in the system",
        "Reduced API response times by 3-5% and HTTP 500 failure rate count by 10-15% across all the REST endpoints by optimizing Puma web server configuration for thread and process count per Docker container using Locust for load testing and New Relic, AWS RDS insights, Grafana, and Prometheus for metrics",
        "Improved load times of a certain set of web pages by replacing on-render counting of resources with caching the count in a MySQL table and updating the caches with background cron jobs using Sidekiq",
        "Improved application security by finding a critical vulnerability in the ruby gem used for sanitizing user inputs by injecting serialized JavaScript across the all the input fields in our legacy services",
        "Designed robust REST APIs using Ruby on Rails framework for UI, Analytics, and PID controller teams by iterating on system design with feedback from tech leads for respective teams and senior engineers on the team",
        "Increased code coverage from 81% to 87% for our service by adding unit tests using Rspec framework and integration tests using Python lemoncheesecake end-to-end testing framework"
      ],
      // tools: "Throughout the internship, I got hands-on experience with:"
      stack: [
        {
          name: "Rails",
          imageName: "RailsLogo.png"
        },
        {
          name: "MySQL",
          imageName: "MySQLLogo.png"
        },
        {
          name: "Kubernetes",
          imageName: "KubernetesLogo.png"
        },
        {
          name: "Kafka",
          imageName: "KafkaLogo.png"
        },
        {
          name: "Redis",
          imageName: "RedisLogo.png"
        },
        {
          name: "Docker",
          imageName: "DockerLogo.png"
        },
        {
          name: "Jenkins",
          imageName: "JenkinsLogo.png"
        },
        {
          name: "Python",
          imageName: "PythonLogo.png"
        }
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Entefy",
      companylogo: require("./assets/images/EntefyLogo.png"),
      date: "Feb 2021 – May 2021",
      // desc: "My project this fall involved reporting metrics for different microservices to DataDog and setting up triggers for  abnormal events like high CPU load, memory usage, etc. Apart from these common metrics, we also had different KPIs defined for different microservices. For example, for the database manager service one of the KPI was the persistence latency between when a message is generated and when it is persisted in the database.",
      daily: "Accomplishments:",
      dailyBullets: [
        "Developed POC microservice using NodeJS to demonstrate integration with Kafka, Redis, and PostgreSQL",
        "Designed internal dashboard using ReactJS to monitor and visualize real-time API calls per user ",
        "Researched and presented Python packages - nltk, scrapy, pandas – best suited for specific use cases"
      ],
      // tools: "Throughout the internship, I got hands-on experience with:"
      stack: [
        {
          name: "Material UI",
          imageName: "MaterialUILogo.png"
        },
        {
          name: "React",
          imageName: "ReactLogo.png"
        },
        {
          name: "Node",
          imageName: "NodeLogo.png"
        },
        {
          name: "Python",
          imageName: "PythonLogo.png"
        },
        {
          name: "PostgreS",
          imageName: "PostgreSQLLogo.png"
        },
        {
          name: "Kafka",
          imageName: "KafkaLogo.png"
        }
      ]
    },
    {
      role: "Cloud Engineering Intern",
      company: "Sleep Number",
      companylogo: require("./assets/images/SNLogo.png"),
      date: "October 2020 – December 2020",
      // desc: "My project this fall involved reporting metrics for different microservices to DataDog and setting up triggers for  abnormal events like high CPU load, memory usage, etc. Apart from these common metrics, we also had different KPIs defined for different microservices. For example, for the database manager service one of the KPI was the persistence latency between when a message is generated and when it is persisted in the database.",
      daily: "Accomplishments:",
      dailyBullets: [
        "Captured infrastructure KPIs defined by cloud engineers such as Kafka consumer lag, PostgreSQL",
        "Assessed exported metrics with the QA team using DataDog dashboards to ensure metric correctness",
        "Presented metrics to the DevOps team to help them identify and resolve bottlenecks in the architecture"
      ],
      // tools: "Throughout the internship, I got hands-on experience with:"
      stack: [
        {
          name: "Java",
          imageName: "JavaLogo.png"
        },
        {
          name: "DataDog",
          imageName: "DataDogLogo.png"
        },
        {
          name: "MySQL",
          imageName: "MySQLLogo.png"
        },
        {
          name: "Docker",
          imageName: "DockerLogo.png"
        },
        {
          name: "Jenkins",
          imageName: "JenkinsLogo.png"
        },
        {
          name: "AWS",
          imageName: "AWSLogo.png"
        }
      ]
    }
  ]
};

const projects = {
  viewProjects: true, //Set it to true to show workExperiences Section
  project : [
    {
      desc: "Reduces video content upto 40% using NLP",
      name: "SummarAIze",
      projectLogo: require("./assets/images/summarAIzeLogo.png"),
      date: "August 2020 - December 2020",
      problemStatement: "Too much information causes information overload and only a small percantage of it is useful",
      usage: "How to use?",
      usageBullets: [
        "Upload the video.",
        "Upload the transcript.",
        "Upload the list of relevant keywords.",
        "Take a walk and the summary is ready."
      ],
      working: "How it works?",
      workingBullets:[
        "Parse the transcript to map sentences to their respective timestamps.",
        "Preprocess the transcript -  removes punctuation, removes stopwords, and stems the words.",
        "Preprocess the keywords - removes punctuation and stems the keywords.",
        "Compare preprocessed keywords and preprocessed transcript to save relevant timestamps.",
        "Clips the video according to the collected timestamps.",
        "Exports the summary video by concatenating the subclips."
      ],
      tools: "Python, nltk, moviePy, Selenium, Flask, Docker",
      link: "https://github.com/akshat2610/Video-summary-project"
    },
    {
      desc: "Helps manage personal and work related tasks",
      name: "Project Planner",
      projectLogo: require("./assets/images/rocketLogo.png"),
      date: "August 2019 - December 2019",
      problemStatement: "Managing work and life is tedious and prioritizing the important tasks becomes complex",
      usage: "How to use?",
      usageBullets: [
        "Add task details {name, deadline, priority, importance, number of hours required}.",
        "Get prioritied plan, track tasks by clocking in hours for each, and mark them off the list.",
        "Journal daily activities and events.",
        "Get insights into how you spend your time."
      ],
      working: "How it works?",
      workingBullets:[
        "Scores tasks according to importance vs urgency matrix.",
        "Takes into account the deadline and number of hours required.",
        "Uses custom algorithm to come up with a plan that maximizes the score.",
        "Visualizes weekly workload to help make informed decisions about time commitments",
        "Visualizes hours spent on different activities and events to help minimize bad habits and maximize good habits."
      ],
      tools: "Java, Swing, JUnit",
      link: "https://github.com/akshat2610/Planner"
    },
    {
      desc: "Scrapes LinkedIn jobs and identifies hot skills",
      name: "Linkedin scraper and analytics tool",
      projectLogo: require("./assets/images/linkedinLogo.webp"),
      date: "August 2019 - December 2019",
      problemStatement: "Collecting jobs to apply to is tedious and reading through job description is time consuming",
      usage: "How to use?",
      usageBullets: [
        "Provide link to the linkedin page of a job you like.",
        "Fill in the relevant keywords (Data Science, Software engineering, social media marketing, etc).",
        "Take a walk and the excel sheet containing all the job details is ready along with frequency visualization of most frequent skills.",
      ],
      working: "How it works",
      workingBullets:[
        "Crawls the linkedin pages with similar jobs using a breadth-first approach.",
        "Extracts useful information from the html of the page using lxml parser.",
        "Writes the collected infromation to an excel file.",
        "Creates a dictionary to store the frequency counts of relevant keywords",
        "Plots skill vs frequency.",
      ],
      tools: "Python, bs4, xlwt, pandas, matplotlib",
      link: "https://github.com/akshat2610/LinkedIn-Automation-Scraping-and-Analysis"
    }
  ]
};

const liveProjects = {
  viewProjects: true, //Set it to true to show workExperiences Section
  project : [
    {
      desc: "Reduces video content upto 40% using NLP",
      name: "summarAIze",
      projectLogo: require("./assets/images/summarAIzeLogo.png"),
      date: "August 2020 - December 2020",
      problemStatement: "Too much information causes information overload and only a small percantage of it is useful.",
      usage: "How to use?",
      usageBullets: [
        "Upload the video.",
        "Upload the transcript.",
        "Upload the list of relevant keywords.",
        "Take a walk and the summary is ready."
      ],
      working: "How it works?",
      workingBullets:[
        "Parse the transcript to map sentences to their respective timestamps.",
        "Preprocess the transcript -  removes punctuation, removes stopwords, and stems the words.",
        "Preprocess the keywords - removes punctuation and stems the keywords.",
        "Compare preprocessed keywords and preprocessed transcript to save relevant timestamps.",
        "Clips the video according to the collected timestamps.",
        "Exports the summary video by concatenating the subclips."
      ],
      link: "https://github.com/akshat2610/Video-summary-project"
    },
    {
      desc: "Helps manage personal and work related tasks",
      name: "Project Management Tool",
      projectLogo: require("./assets/images/rocketLogo.png"),
      date: "August 2019 - December 2019",
      problemStatement: "Managing work and life is tedious and prioritizing the important tasks becomes complex.",
      usage: "How to use?",
      usageBullets: [
        "Add task details {name, deadline, priority, importance, number of hours required}.",
        "Get prioritied plan, track tasks by clocking in hours for each, and mark them off the list.",
        "Journal daily activities and events.",
        "Get insights into how you spend your time."
      ],
      working: "How it works?",
      workingBullets:[
        "Scores tasks according to importance vs urgency matrix.",
        "Takes into account the deadline and number of hours required.",
        "Uses custom algorithm to come up with a plan that maximizes the score.",
        "Visualizes weekly workload to help make informed decisions about time commitments",
        "Visualizes hours spent on different activities and events to help minimize bad habits and maximize good habits."
      ],
      link: "https://github.com/akshat2610/Planner"
    },
    {
      desc: "Scrapes LinkedIn jobs and identifies hot skills.",
      name: "Linkedin scraper and analytics tool",
      projectLogo: require("./assets/images/linkedinLogo.webp"),
      date: "August 2019 - December 2019",
      problemStatement: "Collecting jobs to apply to is tedious and reading through job description is time consuming.",
      usage: "How to use?",
      usageBullets: [
        "Provide link to the linkedin page of a job you like.",
        "Fill in the relevant keywords (Data Science, Software engineering, social media marketing, etc).",
        "Take a walk and the excel sheet containing all the job details is ready along with frequency visualization of most frequent skills.",
      ],
      working: "How it works",
      workingBullets:[
        "Crawls the linkedin pages with similar jobs using a breadth-first approach.",
        "Extracts useful information from the html of the page using lxml parser.",
        "Writes the collected infromation to an excel file.",
        "Creates a dictionary to store the frequency counts of relevant keywords",
        "Plots skill vs frequency.",
      ],
      link: "https://github.com/akshat2610/LinkedIn-Automation-Scraping-and-Analysis"
    }
  ]
};

const contactInfo = {
  title: emoji("Lets connect!"),
  subtitle: "Are you looking for a sincere, motivated, and passionate software developer?",
  number: "+1-408-688-4846",
  email_address: "akshat2610@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, projects, contactInfo, liveProjects};
