/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Avinash Chandan",
  title: "Hi all, I'm Avinash",
  subTitle: emoji(
    "A passionate Web developer 🚀 having an experience of designing and building Website and Applications(Android + Ios) with JavaScript / React Js / Flutter / and other cool libraries'"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: false // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/avinashchandan12/",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "avinashchandan12@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  //medium: "https://medium.com/@davidrakosi",
  //stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: 'https://www.instagram.com/avinashchandan12/',
  twitter: 'https://twitter.com/avinashchandan5_',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY WEBSITES AND APPS FOR BUSINESSES TO BREAK INTO MARKET",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "flutter",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // // {
    // //   skillName: "swift",
    // //   fontAwesomeClassname: "fab fa-swift"
    // // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    // {
    //   schoolName: "ViMEET",
    //   logo: require("./assets/images/harvardLogo.png"),
    //   subHeader: "Bachelor of Technology in Computer Science",
    //   duration: "",
    //   desc: "Participated in the research of XXX and published 3 papers.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    {
      schoolName: "Mumbai University",
      logo: require("./assets/images/Mu.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2019 - Present",
      desc:
        "Ranked 2nd in Intercollege level 72 hours Hackathon, My project was to build a safety system for Womens, ...",
     // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "App development : Flutter", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Javascript",
      progressPercentage: "90%"
    },
    
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software & Web developer",
      company: "Woobblr and Freelancer",
     companylogo: require("./assets/images/woobblr.png"),
      date: "Novemner 2020 – Present",
      desc:
        "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Custom building applications",
        "Building Websites for clients",
        "Running Bootcamps of Flutter development",
        "Teaching logic techniques to new programmers"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "avinashchandan12", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Freelance Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [

    {
      projectName: "Coast2Coast Property Solutions",
      projectDesc: "Fully funtional website for a real estate company : Coast 2 Coast property solutions",
      footerLink: [
        {
          name: "Coast2Coast Property Solutions",
          url: "https://coast2coastpropertysolutions.com"
        }
      ]
    },

    {
     // image: ("./assets/images/Alcpa.png"),
      projectName: "ALCPA LTD Website",
      projectDesc: "A fully functional website for an Accounting firm :ALCPA LTD ",
      footerLink: [
        {
          name: "ALCPA LTD",
         url: "https://alcpaltd.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: ("./assets/images/boom.png"),
      projectName: "BoomBoomCleaners website",
      projectDesc: "Fully funtional website for a US based cleaning company : BoomBoom Cleaners",
      footerLink: [
        {
          name: "BoomBoom Cleaners",
          url: "https://Boomboomcleaners.com"
        }
      ]
    },
    {
      // image: ("./assets/images/vid.png"),
      projectName: "Design Institute : VID",
      projectDesc: "Fully funtional website for a Design College : Vishwaniketan institute of design",
      footerLink: [
        {
          name: "Vishwaniketan institute of Design",
         url: "https://vid.vishwaniketan.edu.in"
        }
      ]
    },
    {
      projectName: "Indian Cow",
      projectDesc: " Complete website for Indian Cow company",
      footerLink: [
        {
          name: "Indian Cow",
          url: "https://indiancow.co.in"
        }
      ]
    },
    {
     // image: require("./assets/images/vimeet.png"),
      projectName: "ViMEET",
      projectDesc: "Fully funtional website for a Engineering College : ViMEET",
      footerLink: [
        {
          name: "ViMEET",
          url: "https://vimeet.vishwaniketan.edu.in/"
        }
      ]
    },
    {
      projectName: "Woobblr Technologies",
      projectDesc: "Fully funtional website for our digital marketing startup : Woobblr",
      footerLink: [
        {
          name: "Woobblr ",
          url: "https://woobblr.co.in"
        }
      ]
    },
    {
      projectName: "Veronica & Jonathan's wedding website",
      projectDesc: "Beautifully designed wedding website for Veronica and Jonathan",
      footerLink: [
        {
          name: "Veronica and Jonathan",
          url: "https://veronicaandjonathan.com"
        }
      ]
    },
    {
      projectName: "Vishwaniketan's iMEET",
      projectDesc: "Fully funtional website for VIshwaniketan Institute of Technology",
      footerLink: [
        {
          name: "Vishwaniketan's iMEET",
          url: "https://vishwaniketan.edu.in"
        }
      ]
    },
    {
      //image: require("./assets/images/vcaad.png"),
      projectName: "VCAAD",
      projectDesc: "Fully funtional website for a Architecture College : VCAAD",
      footerLink: [
        {
          name: "VCAAD",
          url: "https://vcaad.vishwaniketan.edu.in"
        }
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+917903734549",
  email_address: "avinashchandan12@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "avinashchandan5_", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
