
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Akshat Bansal",
  title: "Think. Design. Build.",
  intro: "Hello, I am a software developer based in California. I am a senior pursuing my bachelor's in Computer Science at San Jose State University. I love to design software that adds value to people's lives. Throughout my undergrad, I have been focused on learning new technologies and quality development practices to build reliable, scalable, and secure backend services surrounding full stack development. My education has provided me with the opportunity to work alongside very creative and passionate people who love to solve problems with code as well.",
  work: "I enjoy engaging with challenging projects that require me to work outside my comfort zone and knowledge set as continuing to learn new languages and better development techniques are important to me and to the success of my employer. During my internship at Sleep Number as a Cloud Engineer, I worked with multithreaded, performance-driven, and highly-scalable codebase. I wrote code to capture metrics like CPU usage, memory usage, API response times of many services that were deployed on AWS. I worked alongside senior engineers to define custom service-specific metrics to monitor the health of the cloud infrastructure.",
  resumeLink: "https://drive.google.com/file/d/1x7pntquAFCT6HyMuHEMN8XvwO5Z8IbDl/view?usp=sharing"
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
      progressPercentage: "85%"
    },
    {
      Stack: "Data structures and algorithms",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Design patterns",
      progressPercentage: "75%"
    },
    {
      Stack: "System design",
      progressPercentage: "60%"
    },
    {
      Stack: "Natural Language Processing",
      progressPercentage: "60%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "55%"
    },
    {
      Stack: "Testing",
      progressPercentage: "50%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cloud Engineering Intern",
      company: "Sleep Number",
      companylogo: require("./assets/images/SNLogo.png"),
      date: "October 2020 – December 2020",
      desc: "My project this fall involved reporting metrics for different microservices to DataDog and setting up triggers for  abnormal events like high CPU load, memory usage, etc. Apart from these common metrics, we also had different KPIs defined for different microservices. For example, for the database manager service one of the KPI was the persistence latency between when a message is generated and when it is persisted in the database.",
      daily: "My workflow throughout the week:",
      dailyBullets: [
        "Meet with mentor to clarify exactly what metrics we are trying to capture.",
        "Document these metrics in Confluence and get the naming reviewed.",
        "Meet with team and implement the metrics in code and raise PR.",
        "Meet with mentor to deploy the code on test environment.",
        "Make DataDog dashboards for the captured metrics.",
        "Send dashboard links to QA."
      ],
      tools: "Throughout the internship, I got hands-on experience with:",
      toolsBullets:[
        "AWS for our microservices architecture.",
        "DataDog for infrastructure monitoring.",
        "Jira for progress tracking.",
        "Confluence for documentation.",
        "Sumo logic for error logging."
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
      link: "https://github.com/akshat2610/Video-summary-project",
      demo: "https://drive.google.com/file/d/1Ha5noWjpkaVcAFaGXY2Kfz1iCUc99FNR/view"
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
      link: "https://github.com/akshat2610/Planner",
      demo: "https://drive.google.com/file/d/1ps3_L1xEywmkdyBUGcGfcqQ8fJFxo0v4/view"
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
      working: "How it works?",
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
      desc: "Compares GitHub contributions",
      name: "GitHub social",
      projectLogo: require("./assets/images/githubLogo.png"),
      date: "August 2020 - December 2020",
      problemStatement: "Wanted to learn React and GraphQL",
      usage: "How to use?",
      usageBullets: [
        "Type any GitHub username"
      ],
      working: "How it works?",
      workingBullets:[
        "Queries GitHub's GraphQL to get the usernames of the people that the current user follows",
        "Queries GitHub's REST api to get the contribution data",
        "Plots username vs contribution data on a bar chart"
      ],
      tools: "React, REST api, GraphQL, react-chartjs-2, Netlify",
      link: "https://github.com/akshat2610/github-social",
      demo: "https://socialgithub.netlify.app/"
    },
    {
      desc: "Helps focus, plan, and track day",
      name: "Day tracker",
      projectLogo: require("./assets/images/trackerLogo.png"),
      date: "August 2019 - December 2019",
      problemStatement: "Modelled approach to organization and planning discussed in the book 'Designing your life'",
      usage: "How to use?",
      usageBullets: [
        "Lock your focus for the day in hourly units for each - Health, Play, Work, and Love. ",
        "Save single most important task for each",
        "Set active task and select category",
        "Start/stop task to see your progress with a circular progress bar"
      ],
      working: "How it works?",
      workingBullets:[
        "Clock-in, clock-out system for each category",
      ],
      tools: "React, Netlify",
      link: "https://github.com/akshat2610/day-tracker",
      demo: "https://day-tracker.netlify.app/"
    },
    {
      desc: "Helps journal emotions and provides analysis on what factors affect user's happiness",
      name: "Mood modelling",
      projectLogo: require("./assets/images/moodLogo.png"),
      date: "August 2019 - December 2019",
      problemStatement: "Our senses are exposed to so much data that it becomes impossible to pinpoint our pain points.",
      usage: "How to use?",
      usageBullets: [
        "Journal your emotions of the day",
        "Record physical and social environment",
        "Fill in diet and sleep quality",
      ],
      working: "How it works?",
      workingBullets:[
        "User entries are saved in an RDS instance",
        "Each possible activity has a neutral score in the beginning",
        "As the user keeps journaling, the scores are reassigned according to the user's emotions",
        "The score indicates how an activity affects a particular user",
      ],
      tools: "PHP, JavaScript, AWS RDS",
      link: "https://github.com/akshat2610/Mood-modelling",
      demo: "https://drive.google.com/file/d/1eMO5NZft-1CQJXe1BwgivYoM11QGL0nm/view?usp=sharing"
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
