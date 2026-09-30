/**
 * ==============================================================================
 * CENTRALIZED PROFILE DATA FOR MEET KOTADIYA
 * ==============================================================================
 * All personal information, experience, projects, skills, education,
 * and contact details are managed in this single file.
 * To update any section on your portfolio, simply edit the values below!
 * ==============================================================================
 */

export const profileData = {
  // Personal & Professional Details
  personal: {
    fullName: "Kotadiya Meet Maheshbhai",
    professionalName: "Meet Kotadiya",
    title: "iOS Developer",
    experience: "1.5 Years",
    status: "Open to Work",
    currentPosition: "iOS Developer",
    location: "Ahmedabad, Gujarat, India", // Public location only (no private home address)
    email: "kotadiyameet38@gmail.com",
    phone: "+91 7069223256",
    linkedin: "https://www.linkedin.com/in/meet-kotadiya-33a15a389",
    // GitHub is currently hidden globally per user preference.
    // Set showGithub to true if you want to display it in the future.
    showGithub: false,
    github: "", 
    resumeUrl: "/assets/resume.pdf",
    headline: "Building Reliable and User-Friendly iOS Applications",
    shortBio: "iOS Developer specializing in Swift, UIKit, REST API integration, Firebase, and modern mobile application development.",
  },

  // About Me Section
  about: {
    summary: [
      "I am an iOS Developer with 1.5 years of experience in developing and maintaining mobile applications using Swift and Apple's iOS development ecosystem. I have experience working with UIKit, XIB-based interfaces, REST APIs, Firebase, authentication, local data storage, third-party libraries, UI implementation, debugging, testing, and production application workflows.",
      "I enjoy building clean, reliable, and user-friendly mobile applications and continuously improving my technical skills through real-world development and problem solving.",
      "I am currently open to new opportunities where I can contribute my iOS development experience and continue growing as a professional developer."
    ],
    highlights: [
      { label: "Experience", value: "1.5 Years" },
      { label: "Specialization", value: "Native iOS (Swift & UIKit)" },
      { label: "Status", value: "Open to Work" },
      { label: "Location", value: "Ahmedabad, Gujarat, India" },
    ],
    developmentFocus: [
      "Native iOS Architecture & Clean Code in Swift",
      "Dynamic UI Implementation with UIKit, Auto Layout & XIBs",
      "Robust REST API Integration & JSON Serialization",
      "Authentication, Push Notifications & Firebase Services",
      "Local Data Persistence with Core Data, UserDefaults & Keychain",
      "Debugging, Performance Tuning & Apple Ecosystem Best Practices"
    ],
    careerInterests: [
      "Contributing to scalable, consumer-facing and enterprise iOS applications",
      "Collaborating in agile teams with designers, backend engineers, and product managers",
      "Staying up to date with evolving Apple technologies, Swift updates, and modern frameworks"
    ]
  },

  // Technical Skills (Categorized badges/cards - No fake percentage bars)
  skills: [
    {
      category: "iOS Development",
      description: "Core Apple platforms, UI architecture, and layout systems",
      skills: [
        "Swift",
        "UIKit",
        "SwiftUI",
        "Xcode",
        "XIB",
        "Storyboard",
        "Auto Layout",
        "UITableView",
        "UICollectionView",
        "Navigation Controller",
        "Tab Bar",
        "UIPageControl"
      ]
    },
    {
      category: "Networking & APIs",
      description: "HTTP networking, data serialization, and backend integrations",
      skills: [
        "REST APIs",
        "URLSession",
        "Alamofire",
        "JSON",
        "JSONSerialization",
        "Codable",
        "Decodable",
        "API Integration",
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE",
        "HTTP Headers",
        "Parameters",
        "Error Handling"
      ]
    },
    {
      category: "Authentication & Services",
      description: "Identity verification, cloud messaging, and third-party services",
      skills: [
        "Firebase",
        "Firebase Cloud Messaging",
        "Google Sign-In",
        "Apple Sign-In",
        "Authentication",
        "Push Notifications"
      ]
    },
    {
      category: "Data & Storage",
      description: "Local data persistence, caching, and secure credential storage",
      skills: [
        "UserDefaults",
        "Core Data",
        "Keychain",
        "Local Data Storage"
      ]
    },
    {
      category: "Libraries & Packages",
      description: "Dependency management and battle-tested iOS community libraries",
      skills: [
        "Kingfisher",
        "CocoaPods",
        "Swift Package Manager"
      ]
    },
    {
      category: "Development Tools",
      description: "Engineering toolchain, version control, and API testing",
      skills: [
        "Xcode",
        "Git",
        "Postman",
        "Figma"
      ]
    },
    {
      category: "Programming / Web Basics",
      description: "Foundational programming languages and web fundamentals",
      skills: [
        "Python",
        "HTML",
        "CSS",
        "JavaScript"
      ]
    }
  ],

  // Soft Skills
  softSkills: [
    {
      title: "Continuous Learner",
      description: "Eager to expand technical knowledge, adopt new iOS standards, and master emerging Apple technologies."
    },
    {
      title: "Communication",
      description: "Clear and transparent technical communication with team members, designers, and stakeholders."
    },
    {
      title: "Team Collaboration",
      description: "Proven ability to work productively within cross-functional teams and contribute positively to project goals."
    },
    {
      title: "Problem Solving",
      description: "Methodical approach to debugging, diagnosing edge cases, and delivering elegant, performant solutions."
    }
  ],

  // Languages Spoken
  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Gujarati", level: "Native / Mother Tongue" },
    { name: "Hindi", level: "Fluent" }
  ],

  // Professional Experience
  // Configurable architecture: update company, start/end dates, achievements when ready!
  experience: [
    {
      id: 1,
      role: "iOS Developer",
      company: "iOS Mobile Application Development",
      period: "1.5 Years Professional Experience",
      location: "Ahmedabad, Gujarat, India",
      type: "Full-Time Professional Experience",
      status: "Open to Work",
      summary: "1.5 years of practical professional experience developing, maintaining, and deploying iOS mobile applications using Swift, UIKit, and Apple's development toolchain.",
      responsibilities: [
        "Architected and implemented responsive user interfaces using UIKit, XIBs, Storyboards, and programmatic Auto Layout constraints.",
        "Engineered reliable networking layers utilizing URLSession and Alamofire to communicate with RESTful APIs, parsing JSON payloads using Swift Codable/Decodable.",
        "Integrated Firebase ecosystem features including Firebase Authentication, Firebase Cloud Messaging (FCM), and custom Push Notifications.",
        "Structured local data persistence using Core Data for relational records, UserDefaults for lightweight state, and Keychain for secure token storage.",
        "Integrated third-party iOS libraries (such as Kingfisher for asynchronous image caching) via Swift Package Manager and CocoaPods.",
        "Tested, debugged, and profiled applications in Xcode Instruments to eliminate memory leaks and ensure smooth 60fps scrolling in UITableViews and UICollectionViews."
      ],
      technologies: [
        "Swift",
        "UIKit",
        "Xcode",
        "Auto Layout",
        "REST APIs",
        "Alamofire",
        "Firebase",
        "Core Data",
        "UserDefaults",
        "Keychain",
        "CocoaPods",
        "SPM"
      ]
    }
  ],

  // Projects Section
  // As requested: Do NOT invent project details.
  // The data structure below is cleanly structured and ready for your real projects!
  projects: [
    /*
    To add your real project, uncomment and populate this template:
    {
      id: "project-1",
      title: "Your App Title",
      description: "Comprehensive description of what the iOS application does and problems it solves.",
      role: "iOS Developer",
      technologies: ["Swift", "UIKit", "REST APIs", "Firebase", "Core Data"],
      features: [
        "Feature 1: User authentication via Apple & Google Sign-In",
        "Feature 2: Real-time REST API synchronization with Alamofire",
        "Feature 3: Offline-first data caching with Core Data"
      ],
      challenges: "How complex UI layouts or asynchronous data sync were engineered.",
      contribution: "Designed UI architecture, integrated network layer, and optimized memory usage.",
      image: "", // Path to screenshot or banner
      github: "", // Leave blank if you do not want GitHub link displayed
      liveDemo: "" // App Store or TestFlight link if applicable
    }
    */
  ],

  // Education History
  education: [
    {
      degree: "Bachelor of Science in Information Technology (BSc IT)",
      institution: "Atmiya University",
      period: "2021 – 2024",
      graduationYear: "2024",
      location: "Gujarat, India",
      type: "Graduation",
      details: "Comprehensive undergraduate degree in Information Technology focusing on computer science foundations, software engineering, databases, and application programming."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Gujarat Board (GSEB)",
      period: "2019 – 2021",
      graduationYear: "2021",
      location: "Gujarat, India",
      type: "Higher Secondary Education",
      details: "Senior secondary education completed with focus on science and foundational mathematics."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Gujarat Board (GSEB)",
      period: "2018 – 2019",
      graduationYear: "2019",
      location: "Gujarat, India",
      type: "Secondary School Education",
      details: "Fundamental secondary schooling completed with academic distinction."
    }
  ],

  // Certifications
  certifications: [
    {
      title: "Python Basics and Advanced",
      organization: "Bascom Computer",
      date: "August 2024",
      description: "Comprehensive training covering foundational and advanced Python programming principles, data structures, object-oriented concepts, and computational problem-solving."
    }
  ],

  // Navigation Links
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" }
  ]
};
