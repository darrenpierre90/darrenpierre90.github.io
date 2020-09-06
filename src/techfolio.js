import emoji from "react-easy-emoji";

/* 1. Main App */
/* 2. Social Networks */
/* 3. Banner Section  */
/* 4. About Section  */
/* 5. Skills Section */
/* 6. Open Source Section  */
/* 7. Projects Section */
/* 8. Experience Section */
/* 9. Contact Section */

/* wrap your text in emoji("") if you want to show emoji in your text
/*=====================
    1. Main App
    Desc: set what's in the document's head section
==========================*/

const app = {
  title: "Darren Pierre Portfolio",
  // Note : consider leaving null if you dont have any head icon
  icon: "icon.png",
  description: "Portfollio app ",
};

/*=====================
    2. Social Networks 
    Desc: your social network links
==========================*/

const socialNetworks = {
  //Note : if you dont need or have any social network just add null value
  github: "https://github.com/darrenpierre90",
  linkden: "www.linkedin.com/in/darren-pierre",
  facebook: null,
  instagram: "https://www.instagram.com/darrenpierre90/",
  twitter: null,
};

/*=====================
    3. Banner Section
    Desc: techfolio logo, greetings, summary and avatar,
==========================*/

const bannerSection = {
  username: "Darren Pierre",
  bannerHeading: "Ello, gov'nor!",
  bannerTagLine: emoji(
    "Welcome to my personal portfolio ! My name is Darren Pierre and my portfolio is a representation of all that I've learned and accomplished as a Computer Science and Cognitive Science student."
  ),
  //Note:Simply add you avatar image in src/assets/imgs folder 
  //and add the name along with extention e.g xyz.png , abc.svg
  //Note : if you want to use default illustration instead of adding your avatar add defaultAvatar.svg
  bannerAvatar: "avatar.JPG",
  resumeLink:
    "https://drive.google.com/file/d/1xHMqe1EjfK9wxgPfalz_L499T3abw-AR/view?usp=sharing",
};


/*=====================
    4. About Section
    Desc: It's all about you!. this section is designed using the command 
    line concept so it asked you to add the admin of the command line 
    and 2 basic commands (i recommend you to use default commands).
==========================*/

/*=====================
    4. About Section
    Desc: It's all about you!. this section is designed using the command 
    line concept so it asked you to add the admin of the command line 
    and 2 basic commands (i recommend you to use default commands).
==========================*/

const aboutSection = {
  admin: "Darren@Pierre",
  firstCommand: " sudo run about.exe",
  secondCommand: " executing about.exe",
  about:
  "I’m currently a computer science in my last year at Carleton.  I have a strong interest in AI, Machine Learning and Data Science. This passion may lead me to pursue a master’s in one of these 3 topics in the future. I would like to see myself as a life long learner who doesn’t just have great technical skills but great communication skills also .Ideally I would like a hybrid role where I get to create something but also get to interact with others. But in general I enjoy any role that allows me to participate in a meaningful way so that I'm in service of the team/organisations . My hobbies are basketball, football, chess .anime and  enjoying time with friends and family.",
};

/*=====================
    5. Skils Section
    Desc: This section hep you set your skills 
==========================*/

const skillsSection = {
  // Recommended : don't add more than 3 skill taglines.
  skillsTagLines: [
    "Fast learner who can deliver results",
    "Flexible developer who can program from various programming languages",
    "Communicator able to translate and understand complex information",
    "Rigorous understanding of the fundamental concepts of ML",
    "Hands-on experience with data retrieval , data cleaning and data manipulation",
  ],

  // Recommended : don't add more than 12 skills.
  // Note : go to https://fontawesome.com/icons?d=gallery > select the icon you want to show 
  //        > copy its class > paste it as {fontAwesomeClassname: "fab fa-html5"} in SkillsSet

  skillsSet: [
    {
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      fontAwesomeClassname: "fab fa-css3-alt",
    },
   
    {
      fontAwesomeClassname: "fab fa-js",
    },
    {
      fontAwesomeClassname: "fab fa-react",
    },
    {
      fontAwesomeClassname: "fab fa-node",
    },
    {
      fontAwesomeClassname: "fab fa-kaggle",
    },
    {
      fontAwesomeClassname: "fab fa-ubuntu",
    },
    {
      fontAwesomeClassname: "fab fa-java",
    },
    {
      fontAwesomeClassname: "fab fa-python",
    },
    {
      fontAwesomeClassname: "fab fa-linux",
    },
    {
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      fontAwesomeClassname: "fab fa-dev",
    }

  ],
};
/*=====================
    6. Open Source Section
    Desc: This section hlep you configure your github repos section 
==========================*/
const openSourceSection = {
  
  //Note :  don't edit the githubToken
  githubToken: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,

  githubUserName: "darrenpie90",
  //Note :  no of open source projects you want to show.
  numberOfRepos: 3,
};

/*=====================
    7. Projects Section
    Desc: This section hlep you configure your major projects.
==========================*/

const projectsSection = {
  projects: [
    {
      projectName: "Family Tree with Neo4j",
      projectBio:
        "Building my family tree by modeling it as a graph with Neo4j",

      projectUrl: "https://github.com/darrenpierre90/familytreeWithNeo4j",
      stackList: ["Neo4j", "Python"],
    },


  ],
};

/*=====================
    8. Experience Section
    Desc: This section help you configure your experience.
==========================*/

const experienceSection = {
  experiences: [
    {
      experienceTitle: "R&D Data Developer",
      experienceDesc:
        "Successfully completed 2 research projects in order to help the Agency with its advanced analytics capabilties.1st research project consisted of configuring, integrating, testing and documenting the build of a Big Data cluster (Hadoop / Spark).The second research project was to learn the R language and explore the Shiny visualization library in order to develop a working prototype of a R/Shiny dashboard.",
      // Recommended : don't add full date.
      experienceDuration: "12/18-05/19",
      // Recommended : don't add more than 3 tags.
      experienceTags: ["Hadoop/Spark", "Data visualization", "R"],
    },
    {
      experienceTitle: "Teaching Assistant",
      experienceDesc:
        "",
      experienceDuration: "10/18-12/18",
      experienceTags: ["Interns Pk", "1.5 month", "Remote"],
    },
    {
      experienceTitle: "Cyber Security Big Data Analyst",
      experienceDesc:
        "",
      experienceDuration: "1/19-4/19",
      experienceTags: ["Java","Cyber Security",""],
    },
    {
      experienceTitle: "First Year Connections Peer Mentor",
      experienceDesc:
        "",
      experienceDuration: "10/19-12/19",
      experienceTags: ["Mentoring","Organization","Communication"],
    }, {
      experienceTitle: "Application Developer",
      experienceDesc:
        "",
      experienceDuration: "5/19-1/20",
      experienceTags: ["Java","Cyber Security",""],
    }, {
      experienceTitle: "Technical Project Manager",
      experienceDesc:
        "Work collaboratively with other TPMs and Academic Lecturers to deliver the CAIS project and Bootcamp .Oversee CAIS Bootcamp participants in the completion of their final projects. Maintain and manage Carleton AI Github organization Help in other activities of the organization including hosting workshops, event organization, etc.",
      experienceDuration: "5-19-Current",
      experienceTags: ["Java","Cyber Security",""],
    }
  ],
};

/*=====================
    9. Contact Section
    Desc: This section help you configure your contact.
==========================*/

const contactSection = {
  contactTagline:
    "If I appeal your interest, get in touch with me",
  // Note : add your all contacts in the contactList seperating with *,* .
  contactList: ["613-986-4288", "d-pierre90@hotmail.com"],
};


// Bingo :))

export {
  app,
  socialNetworks,
  bannerSection,
  aboutSection,
  skillsSection,
  openSourceSection,
  projectsSection,
  experienceSection,
  contactSection,
};
