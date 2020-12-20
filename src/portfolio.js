
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Akshat Bansal",
  title: "Hello World!",
  subTitle: emoji("My name is Akshat. I am a senior in Computer Science at San Jose State University. I interned at Sleep Number as a Cloud Engineer where I worked with multithreaded, performance-driven, and highly-scalable codebase. I was responsible for writing Java code to capture metrics like CPU usage, memory usage, API response times of many services that were deployed on AWS. I also built DataDog dashboards for monitoring the metrics that we captured and setting alerts for critical loads.\nI care deeply about the scalability, performance, and security of any code that I ship to production. "),
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
      schoolName: "San Jose State University",
      logo: require("./assets/images/sjsuLogo.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "August 2017 - Present",
      gpa: "3.7/4.0",
      awards: "Honors and awards:",
      awardsBullets: [
        "Dean's scholar 2017",
        "President's scholar 2018",
        "Dean's scholar 2019",
        "Part of the Phi Kappa Phi honor society (Top 10% of the 2021 class)"
      ],
      coursework: "Some of the interesting classes that I took: ",
      courseworkBullets: [
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
      Stack: "Backend",  //Insert stack or technology you have experience in
      progressPercentage: "75%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Natural Language Processing",
      progressPercentage: "60%"
    },
    {
      Stack: "Automation",
      progressPercentage: "40%"
    },
    {
      Stack: "Testing",
      progressPercentage: "60%"
    },
    {
      Stack: "Cloud operations",
      progressPercentage: "70%"
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
      name: "summarAIze",
      projectLogo: require("./assets/images/summarAIzeLogo.png"),
      date: "August 2020 - December 2020",
      problemStatement: "Problem statement: Too much information causes information overload and only a small percantage of it is useful.",
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
      problemStatement: "Problem statement: Managing work and life is tedious and prioritizing the important tasks becomes complex.",
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
      problemStatement: "Problem statement: Collecting jobs to apply to is tedious and reading through job description is time consuming.",
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
  subtitle: "I am always open for discussing a project or having a deeply philosophical conversation.",
  number: "+1-408-688-4846",
  email_address: "akshat2610@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, projects, contactInfo};
