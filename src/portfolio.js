/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Ali Zamani',
  title: "Hi there, I'm Ali",
  subTitle: emoji(
    'A passionate Full Stack Web Developer 🚀 with a background in Chemical Engineering Computational Design. I have experience building Web applications with JavaScript / Reactjs / Nodejs and some experience with React Native plus tons of cool libraries and frameworks.'
  ),
  resumeLink:
    'https://www.dropbox.com/s/edhwtje87p34tzm/Ali-Zamani-Resume.pdf?dl=0',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/alizmn',
  // linkedin: 'https://www.linkedin.com/in/saadpasta/',
  gmail: 'Ali.zmn@hotmail.com',
  // gitlab: 'https://gitlab.com/saadpasta',
  // facebook: 'https://www.facebook.com/saad.pasta7',
  // medium: 'https://medium.com/@saadpasta',
  // stackoverflow: 'https://stackoverflow.com/users/10422806/saad-pasta',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do...',
  subTitle: '(Except washing my hands and drinking coffee ☕)',
  skills: [
    emoji(
      '⚡ Code with Test-Driven Development (TDD) approach and Entity Relationship Diagram (ERD) design'
    ),
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
    ),
    emoji('⚡ Design and implement RESTful APIs for third-party access'),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    // {
    //   skillName: 'swift',
    //   fontAwesomeClassname: 'fab fa-swift',
    // },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    // {
    //   skillName: 'aws',
    //   fontAwesomeClassname: 'fab fa-aws',
    // },
    // {
    //   skillName: 'firebase',
    //   fontAwesomeClassname: 'fas fa-fire',
    // },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    // {
    //   skillName: 'docker',
    //   fontAwesomeClassname: 'fab fa-docker',
    // },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'University of Ottawa',
      logo: require('./assets/images/uOttawalogo.png'),
      subHeader: 'Master of Applied Science in Chemical Engineering',
      duration: 'September 2017 - March 2020',
      desc: 'Numerical Modelling of Membrane Diffusion for BioFuel Separation Applications',
      descBullets: [
        'Ranked top 1% in Chemical Engineering Department',
        'Worked with best-in-class simulation tools and calculation nodes',
        'Enrolled in multiple programming Bootcamps to sharpen my skills in JS, React and Python',
      ],
    },
    {
      schoolName: 'Sharif University of Technology',
      logo: require('./assets/images/shariflogo.jpeg'),
      subHeader: 'Bachelor of Engineering in Chemical Engineering',
      duration: 'September 2013 - April 2017',
      desc:
        'Numerical Simulation of Gas exchange in the respiratory system for advanced drug delivery applications',
      descBullets: ['Ranked top 10% in the program'],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Programming',
      progressPercentage: '100%',
    },
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '80%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      project: 'TinyApp',
      github:'https://github.com/Alizmn/tinyapp',
      projectImage: require('./assets/images/tinyapp.png'),
      desc:
        'Easy and fun app to shorten any given Url for easier sharing',
      descBullets: [
        'Node.js',
        'Express',
        'EJS',
        'Bcrypt',
        'Body-parser',
        'Cookie-session',
        'Mocha & Chai'
      ],
    },
    {
      project: 'Tweeter',
      github:'https://github.com/Alizmn/tweeter',
      projectImage: require('./assets/images/tweeter.png'),
      desc:
        'Tweeter is a simple, single-page Twitter clone using HTML, CSS, JS, jQuery and AJAX on the front-end, and Node, Express and MongoDB on the back-end',
      descBullets: [
        'HTML, CSS',
        'Node.js, jQuery',
        'Ajax, MongoDB'
      ],
    },
    {
      project: 'Interview Scheduler',
      github:'https://github.com/Alizmn/scheduler',
      projectImage: require('./assets/images/schedueler.png'),
      desc:
        'Scheduler is a single-page application built with React that allows users to book, edit and cancel appointments throughout the week.',
      descBullets: [
        'React',
        'Axios',
        'Jest',
        'Cypress'
      ],
    },
  ],
};

// const workExperiences = {
//   display: true, //Set it to true to show workExperiences Section
//   experience: [
//     {
//       role: 'Software Engineer',
//       company: 'Facebook',
//       companylogo: require('./assets/images/facebookLogo.png'),
//       date: 'June 2018 – Present',
//       desc:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       descBullets: [
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//       ],
//     },
//     {
//       role: 'Front-End Developer',
//       company: 'Quora',
//       companylogo: require('./assets/images/quoraLogo.png'),
//       date: 'May 2017 – May 2018',
//       desc:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     },
//     {
//       role: 'Software Engineer Intern',
//       company: 'Airbnb',
//       companylogo: require('./assets/images/airbnbLogo.png'),
//       date: 'Jan 2015 – Sep 2015',
//       desc:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     },
//   ],
// };

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'alizmn', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      link: 'http://saayahealth.com/',
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      link: 'http://nextu.se/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Training And Certifications 🏆 '),
  // subtitle:
  //   'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Full Stack Developer BootCamp',
      subtitle:
        '',
      image: require('./assets/images/uOttawalogoe.png'),
      footerLink: [
        {name: 'JavaScript', url:''},
        {name: 'Nodejs', url:''},
        {name: 'React.js', url:''},
        {name: 'PostgreSQL', url:''},
        {name: 'Cypress',url:''},
      ],
    },
    {
      title: 'Machine Learning',
      subtitle: '',
      image: require('./assets/images/kaggle.png'),
      footerLink: [
        { name: 'Python / Pandas', url: 'https://www.kaggle.com/learn/certification/alizamani/pandas' },
        { name: 'Feature Engineering', url: 'https://www.kaggle.com/learn/certification/alizamani/feature-engineering' },
        { name: 'Python Data Visualization', url: 'https://www.kaggle.com/learn/certification/alizamani/data-visualization' },
        { name: 'Intermediate Machine Learning', url: 'https://www.kaggle.com/learn/certification/alizamani/intermediate-machine-learning' },
        { name: 'Game AI and Reinforcement Learning', url: 'https://www.kaggle.com/learn/certification/alizamani/intro-to-game-ai-and-reinforcement-learning' },
      ],
    },
    {
      title: 'Data Science in Python',
      subtitle:
      '',
      image: require('./assets/images/coursera.png'),
      footerLink: [
        {
          name: 'Introduction to Data Science in Python',
          url:
          'https://www.coursera.org/account/accomplishments/verify/2QBQ9GTVBUSY',
        },
      ],
    },
    {
      title: 'Project Management',
      subtitle:
        '',
      image: require('./assets/images/UCI.png'),
      footerLink: [
        {
          name: 'Initiating and Planning Projects',
          url:
            'https://www.coursera.org/account/accomplishments/verify/L5XL8A5NY9DZ',
          },
        {
          name: 'Budgeting and Scheduling Projects',
          url:
            'https://www.coursera.org/account/accomplishments/verify/9L6BJ6PTF7C6',
        },
        {
          name: 'Managing Project Risks and Changes',
          url:
            'https://www.coursera.org/account/accomplishments/verify/53C4Z2C58T44',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    `I'm currently looking for new opportunities as a Full-Stack Developer, preferably in Ontario. If you have anything in mind, plz shoot me a message.`,
  number: '',
  emailAddress: 'Ali.Zmn@hotmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
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
  twitterDetails,
};
