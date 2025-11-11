import {
  Brain,
  Code,
  Database,
  Cloud,
  LineChart,
  Globe,
  FileSpreadsheet,
  BarChart3,
  Users,
  TrendingUp,
  MessageSquare,
  Briefcase,
  Share2,
} from "lucide-react";

export interface CourseModule {
  module: string;
  topics: string[];
}

export interface CourseData {
  id: string;
  icon: any;
  title: string;
  description: string;
  duration: string;
  totalHours: string;
  level: string;
  modules: string[];
  color: string;
  borderColor: string;
  category: string;
  detailedModules: CourseModule[];
  learningOutcomes: string[];
  projects: string[];
  certification: string;
  onlineDuration?: string;
  offlineDuration?: string;
}

export const coursesData: CourseData[] = [
  {
    id: "crt",
    icon: Brain,
    title: "CRT (Campus Recruitment Training)",
    description: "Comprehensive placement preparation covering aptitude, reasoning, verbal ability, and interview skills for final year students",
    duration: "8 Weeks",
    totalHours: "80 hrs",
    level: "All Final Year Students",
    modules: ["Aptitude", "Logical Reasoning", "Verbal Ability", "Interview Prep", "Group Discussions"],
    color: "text-flame",
    borderColor: "border-flame",
    category: "Career Prep",
    detailedModules: [
      {
        module: "Module 1: Quantitative Aptitude",
        topics: [
          "Number Systems: Types, Divisibility, Factors & Multiples, HCF & LCM",
          "Ratio & Proportion: Basic concepts, Direct & Inverse proportion",
          "Percentages: Profit & Loss, Discounts",
          "Averages: Weighted average, Alligation method"
        ]
      },
      {
        module: "Module 2: Logical Reasoning",
        topics: [
          "Puzzles and Seating Arrangements",
          "Blood Relations and Direction Sense",
          "Series and Pattern Recognition",
          "Coding-Decoding"
        ]
      },
      {
        module: "Module 3: Verbal Ability",
        topics: [
          "Grammar and Sentence Correction",
          "Reading Comprehension",
          "Vocabulary Building",
          "Para Jumbles and Sentence Completion"
        ]
      },
      {
        module: "Module 4: Interview Skills",
        topics: [
          "Resume Building",
          "Technical Interview Preparation",
          "HR Interview Tips",
          "Group Discussion Practice"
        ]
      }
    ],
    learningOutcomes: [
      "Master quantitative aptitude for competitive exams",
      "Develop strong logical reasoning skills",
      "Improve verbal communication and comprehension",
      "Ace technical and HR interviews",
      "Build professional resume and LinkedIn profile"
    ],
    projects: [
      "Company-specific mock tests (TCS, Infosys, Wipro, Accenture)",
      "Resume building workshop",
      "Group discussion practice sessions",
      "Mock interview rounds with feedback"
    ],
    certification: "Campus Recruitment Training Certificate with performance report"
  },
  {
    id: "c-programming",
    icon: Code,
    title: "C Programming",
    description: "Master the fundamentals of programming with C language, covering syntax, logic building, and problem-solving skills",
    duration: "6 Weeks",
    totalHours: "60 hrs",
    level: "Beginners",
    modules: ["Basics & Syntax", "Control Flow", "Functions", "Pointers", "File Handling"],
    color: "text-primary",
    borderColor: "border-primary",
    category: "Programming",
    detailedModules: [
      {
        module: "Module 1: C Programming Fundamentals",
        topics: [
          "Introduction to C: History, Structure, Compilation",
          "Variables & Data Types: Declaration, Constants, Type conversion",
          "Input/Output: printf(), scanf(), Formatting",
          "Operators: Arithmetic, Relational, Logical, Bitwise"
        ]
      },
      {
        module: "Module 2: Control Structures",
        topics: [
          "Decision Making: if, if-else, nested if",
          "Loops: for, while, do-while",
          "Break and Continue statements",
          "Switch-case statements"
        ]
      },
      {
        module: "Module 3: Functions & Arrays",
        topics: [
          "Functions: Declaration, Definition, Calling",
          "Recursion and its applications",
          "Arrays: 1D and 2D arrays",
          "String Handling"
        ]
      },
      {
        module: "Module 4: Pointers & File Handling",
        topics: [
          "Pointers: Basics, Pointer arithmetic",
          "Dynamic Memory Allocation",
          "File Operations: Read, Write, Append",
          "Structures and Unions"
        ]
      }
    ],
    learningOutcomes: [
      "Understand core programming concepts",
      "Write efficient C programs",
      "Master pointers and memory management",
      "Implement data structures from scratch",
      "Debug and optimize code effectively"
    ],
    projects: [
      "Student Management System",
      "Library Management System",
      "Simple Calculator with file operations",
      "Banking System with file handling"
    ],
    certification: "C Programming Certificate with hands-on project completion"
  },
  {
    id: "cpp",
    icon: Code,
    title: "C++",
    description: "Learn object-oriented programming concepts with C++, building on C fundamentals for advanced application development",
    duration: "6 Weeks",
    totalHours: "60 hrs",
    level: "Intermediate",
    modules: ["OOP Concepts", "Classes & Objects", "Inheritance", "Polymorphism", "STL"],
    color: "text-gold",
    borderColor: "border-gold",
    category: "Programming",
    detailedModules: [
      {
        module: "Module 1: C++ Fundamentals",
        topics: [
          "Introduction to C++: History, Structure, Compilation",
          "Syntax & Variables: Data types, Scope, Constants",
          "Operators: Arithmetic, Relational, Logical, Bitwise",
          "Control Structures: Loops, Conditionals"
        ]
      },
      {
        module: "Module 2: Object-Oriented Programming",
        topics: [
          "Classes & Objects: Defining and Creating",
          "Encapsulation & Access Specifiers",
          "Inheritance: Single, Multiple, Hierarchical",
          "Polymorphism: Function & Operator Overloading"
        ]
      },
      {
        module: "Module 3: Advanced OOP",
        topics: [
          "Abstraction & Interfaces",
          "Constructors & Destructors",
          "Virtual Functions",
          "Friend Functions and Classes"
        ]
      },
      {
        module: "Module 4: STL & Advanced Concepts",
        topics: [
          "Standard Template Library: Containers, Iterators",
          "File Handling in C++",
          "Exception Handling",
          "Templates and Generic Programming"
        ]
      }
    ],
    learningOutcomes: [
      "Master object-oriented programming principles",
      "Implement classes and objects effectively",
      "Use inheritance and polymorphism in projects",
      "Work with STL containers and algorithms",
      "Build scalable C++ applications"
    ],
    projects: [
      "Employee Management System using OOP",
      "Banking Application with file handling",
      "Inventory Management System",
      "Hospital Management System"
    ],
    certification: "C++ Programming Certificate with OOP project"
  },
  {
    id: "core-java",
    icon: Code,
    title: "Core Java",
    description: "Master Java programming from basics to advanced concepts, essential for IT/CS students and enterprise development",
    duration: "8 Weeks",
    totalHours: "80 hrs",
    level: "IT/CS Students",
    modules: ["Java Fundamentals", "OOP in Java", "Collections", "Exception Handling", "Multithreading"],
    color: "text-flame",
    borderColor: "border-flame",
    category: "Programming",
    detailedModules: [
      {
        module: "Module 1: Java Fundamentals",
        topics: [
          "Introduction to Java: Features, JVM/JRE/JDK",
          "Syntax & Structure: Variables, Data Types, Operators",
          "Control Flow: Conditionals, Loops",
          "Arrays and Strings"
        ]
      },
      {
        module: "Module 2: Object-Oriented Programming",
        topics: [
          "Classes & Objects: Constructors, Methods",
          "Inheritance: Types and Usage",
          "Polymorphism: Overloading & Overriding",
          "Abstraction & Interfaces"
        ]
      },
      {
        module: "Module 3: Collections Framework",
        topics: [
          "List, Set, Map interfaces",
          "ArrayList, LinkedList, HashMap",
          "Iterators and Comparators",
          "Collections utility class"
        ]
      },
      {
        module: "Module 4: Advanced Java & JDBC",
        topics: [
          "Exception Handling",
          "Multithreading Basics",
          "File I/O Operations",
          "JDBC: Database Connectivity"
        ]
      }
    ],
    learningOutcomes: [
      "Write robust Java applications",
      "Implement OOP principles in Java",
      "Master Java Collections Framework",
      "Handle exceptions gracefully",
      "Connect to databases using JDBC"
    ],
    projects: [
      "Student Management System with JDBC",
      "E-commerce backend application",
      "Hospital Management System",
      "Library Management with database"
    ],
    certification: "Core Java Certificate with database project"
  },
  {
    id: "python",
    icon: Code,
    title: "Python Programming (Beginner to Advanced)",
    description: "Comprehensive Python training from fundamentals to advanced concepts including OOP, data structures, and popular libraries",
    duration: "12-16 Weeks",
    totalHours: "96-128 hrs",
    level: "Beginners",
    onlineDuration: "12–16 weeks (4–6 hrs/week)",
    offlineDuration: "8–12 weeks (6–8 hrs/week)",
    modules: ["Programming Fundamentals", "Object-Oriented Programming", "Data Structures & Algorithms", "Advanced Concepts"],
    color: "text-primary",
    borderColor: "border-primary",
    category: "Programming",
    detailedModules: [
      {
        module: "Module 1: Programming Fundamentals",
        topics: [
          "Introduction to Programming & IDE Setup",
          "Variables, Data Types, and Operators",
          "Control Structures (if, else, loops)",
          "Functions & Modular Programming",
          "Input/Output Operations",
          "Error Handling Basics"
        ]
      },
      {
        module: "Module 2: Object-Oriented Programming",
        topics: [
          "Classes & Objects",
          "Encapsulation, Inheritance, Polymorphism",
          "Abstraction & Interfaces",
          "Constructors & Destructors",
          "Method Overloading & Overriding"
        ]
      },
      {
        module: "Module 3: Data Structures & Algorithms",
        topics: [
          "Arrays, Strings, Lists",
          "Stacks, Queues, Linked Lists",
          "Trees & Graphs",
          "Sorting & Searching Algorithms",
          "Time & Space Complexity"
        ]
      },
      {
        module: "Module 4: Advanced Concepts",
        topics: [
          "File Handling",
          "Exception Handling Advanced",
          "Multithreading & Concurrency",
          "Memory Management",
          "Libraries & Frameworks (NumPy, Pandas, etc.)"
        ]
      }
    ],
    learningOutcomes: [
      "Write efficient Python programs for various applications",
      "Master object-oriented programming principles in Python",
      "Implement data structures and algorithms effectively",
      "Handle files, exceptions, and multithreading",
      "Work with popular Python libraries for data manipulation"
    ],
    projects: [
      "Real-world application based on chosen language",
      "Data analysis with Pandas",
      "Automation scripts",
      "Web scraping project"
    ],
    certification: "Python Programming Certificate (Beginner to Advanced)"
  },
  {
    id: "frontend",
    icon: Globe,
    title: "Frontend Development",
    description: "Build beautiful, responsive user interfaces using HTML, CSS, JavaScript, and modern frameworks",
    duration: "8 Weeks",
    totalHours: "80 hrs",
    level: "Web Design Aspirants",
    modules: ["HTML/CSS", "JavaScript", "React", "Responsive Design", "UI/UX Basics"],
    color: "text-gold",
    borderColor: "border-gold",
    category: "Web Development",
    detailedModules: [
      {
        module: "Module 1: HTML5 & CSS3",
        topics: [
          "HTML5 Semantic Structure and Elements",
          "CSS Basics: Selectors, Colors, Fonts, Layout",
          "CSS Flexbox and Grid",
          "Responsive Design with Media Queries"
        ]
      },
      {
        module: "Module 2: JavaScript Fundamentals",
        topics: [
          "Variables, Data Types, Operators",
          "Functions and Scope",
          "DOM Manipulation",
          "Event Handling"
        ]
      },
      {
        module: "Module 3: Advanced JavaScript",
        topics: [
          "ES6+ Features: Arrow Functions, Promises, Async/Await",
          "Array Methods and Functional Programming",
          "Local Storage and Session Storage",
          "API Integration with Fetch"
        ]
      },
      {
        module: "Module 4: React Framework",
        topics: [
          "Introduction to React: Components, JSX, Virtual DOM",
          "State and Props Management",
          "React Hooks: useState, useEffect",
          "Building Complete React Applications"
        ]
      }
    ],
    learningOutcomes: [
      "Build responsive web pages",
      "Master modern CSS techniques",
      "Develop interactive UIs with JavaScript",
      "Create React applications",
      "Implement UI/UX best practices"
    ],
    projects: [
      "Portfolio website",
      "E-commerce frontend",
      "Social media UI clone",
      "Weather app with API integration"
    ],
    certification: "Frontend Development Certificate with portfolio project"
  },
  {
    id: "backend",
    icon: Database,
    title: "Backend Development",
    description: "Master server-side programming, APIs, databases, and authentication for building scalable applications",
    duration: "8 Weeks",
    totalHours: "80 hrs",
    level: "API/Server Development",
    modules: ["Node.js", "Express", "Databases", "REST APIs", "Authentication"],
    color: "text-flame",
    borderColor: "border-flame",
    category: "Web Development",
    detailedModules: [
      {
        module: "Module 1: Node.js Fundamentals",
        topics: [
          "Introduction to Node.js and npm",
          "Asynchronous Programming",
          "File System Operations",
          "Event Emitters"
        ]
      },
      {
        module: "Module 2: Express & REST APIs",
        topics: [
          "Setting up Express Server",
          "Routing and Middleware",
          "RESTful API Design Principles",
          "Request/Response Handling"
        ]
      },
      {
        module: "Module 3: Databases",
        topics: [
          "SQL Databases: MySQL/PostgreSQL",
          "NoSQL Databases: MongoDB",
          "Database Design and Relationships",
          "ORM/ODM Usage"
        ]
      },
      {
        module: "Module 4: Authentication & Deployment",
        topics: [
          "JWT Authentication",
          "User Authorization and Roles",
          "Error Handling and Validation",
          "Deployment Best Practices"
        ]
      }
    ],
    learningOutcomes: [
      "Build RESTful APIs",
      "Work with databases (SQL & NoSQL)",
      "Implement authentication and authorization",
      "Handle server-side logic",
      "Deploy backend applications"
    ],
    projects: [
      "REST API for e-commerce",
      "Authentication system",
      "Blog backend with database",
      "Real-time chat application"
    ],
    certification: "Backend Development Certificate with API project"
  },
  {
    id: "fullstack-python",
    icon: Globe,
    title: "Python Full Stack Development",
    description: "Complete full-stack development with Python, Django/Flask, frontend technologies, and cloud deployment",
    duration: "18-22 Weeks",
    totalHours: "144-176 hrs",
    level: "Job-Ready Developers",
    onlineDuration: "18–22 weeks",
    offlineDuration: "14–18 weeks",
    modules: ["Python Basics & Advanced", "Frontend Development", "Backend with Django/Flask", "REST APIs", "Database & Deployment"],
    color: "text-primary",
    borderColor: "border-primary",
    category: "Web Development",
    detailedModules: [
      {
        module: "Python Basics & Advanced",
        topics: [
          "Core Python Programming",
          "Object-Oriented Programming",
          "Advanced Python Concepts"
        ]
      },
      {
        module: "Frontend Development",
        topics: [
          "HTML, CSS, JavaScript",
          "Responsive Design",
          "Frontend Frameworks"
        ]
      },
      {
        module: "Backend with Django/Flask",
        topics: [
          "Django/Flask Framework",
          "Models, Views, Templates",
          "Authentication & Authorization"
        ]
      },
      {
        module: "REST APIs & Database",
        topics: [
          "RESTful API Development",
          "Database (MySQL/PostgreSQL)",
          "ORM and Database Operations"
        ]
      },
      {
        module: "Deployment & Cloud",
        topics: [
          "Deployment & Cloud Basics",
          "CI/CD Pipelines",
          "Production Best Practices"
        ]
      }
    ],
    learningOutcomes: [
      "Build complete full-stack applications with Python",
      "Master Django/Flask frameworks",
      "Create RESTful APIs and microservices",
      "Design and implement databases",
      "Deploy applications to cloud platforms"
    ],
    projects: [
      "Capstone Project: Full-stack web application",
      "E-commerce platform with payment integration",
      "Social media application",
      "Task management system"
    ],
    certification: "Python Full Stack Development Certificate with capstone project"
  },
  {
    id: "fullstack-java",
    icon: Globe,
    title: "Java Full Stack Development",
    description: "Comprehensive Java full-stack training with Spring Boot, React, REST APIs, and deployment strategies",
    duration: "18-22 Weeks",
    totalHours: "144-176 hrs",
    level: "Job-Ready Developers",
    onlineDuration: "18–22 weeks",
    offlineDuration: "14–18 weeks",
    modules: ["Java Programming", "Frontend Development", "Backend with Spring Boot", "REST APIs", "Database & CI/CD"],
    color: "text-flame",
    borderColor: "border-flame",
    category: "Web Development",
    detailedModules: [
      {
        module: "Java Programming",
        topics: [
          "Core & Advanced Java",
          "Object-Oriented Programming",
          "Collections & Frameworks"
        ]
      },
      {
        module: "Frontend Development",
        topics: [
          "HTML, CSS, JavaScript",
          "React Framework",
          "Component-based Architecture"
        ]
      },
      {
        module: "Backend with Spring Boot",
        topics: [
          "Spring Boot Framework",
          "Spring MVC & Spring Data",
          "Security & Authentication"
        ]
      },
      {
        module: "REST APIs & Database",
        topics: [
          "RESTful Web Services",
          "Database (MySQL/PostgreSQL)",
          "JPA & Hibernate"
        ]
      },
      {
        module: "Deployment & CI/CD",
        topics: [
          "Deployment Strategies",
          "CI/CD Basics",
          "Docker & Kubernetes Intro"
        ]
      }
    ],
    learningOutcomes: [
      "Build enterprise-grade Java applications",
      "Master Spring Boot framework",
      "Develop React-based frontends",
      "Create scalable REST APIs",
      "Implement CI/CD pipelines"
    ],
    projects: [
      "Capstone Project: Enterprise application",
      "E-commerce platform",
      "Banking system with microservices",
      "Real-time collaboration tool"
    ],
    certification: "Java Full Stack Development Certificate with capstone project"
  },
  {
    id: "data-analytics",
    icon: BarChart3,
    title: "Data Analytics (Excel, SQL, Python, Power BI, Tableau)",
    description: "Complete data analytics lifecycle from data cleaning to advanced visualization using industry-standard tools",
    duration: "14-18 Weeks",
    totalHours: "112-144 hrs",
    level: "Business Analysts",
    onlineDuration: "14–18 weeks",
    offlineDuration: "10–14 weeks",
    modules: ["Excel for Data Analytics", "SQL for Data Management", "Python for Analytics", "Power BI & Tableau"],
    color: "text-gold",
    borderColor: "border-gold",
    category: "Data",
    detailedModules: [
      {
        module: "Module 1: Excel for Data Analytics",
        topics: [
          "Data Cleaning & Formatting",
          "Formulas & Functions",
          "Pivot Tables & Charts",
          "Data Visualization"
        ]
      },
      {
        module: "Module 2: SQL for Data Management",
        topics: [
          "Basics of Databases & SQL Syntax",
          "Data Retrieval (SELECT, WHERE, JOIN)",
          "Aggregations & Grouping",
          "Subqueries & Views",
          "Stored Procedures"
        ]
      },
      {
        module: "Module 3: Python for Analytics",
        topics: [
          "NumPy & Pandas",
          "Data Cleaning & Wrangling",
          "Data Visualization (Matplotlib, Seaborn)",
          "Basic Statistics"
        ]
      },
      {
        module: "Module 4: Power BI & Tableau",
        topics: [
          "Data Connection & Transformation",
          "Building Dashboards",
          "Interactive Reports",
          "Publishing & Sharing Reports"
        ]
      }
    ],
    learningOutcomes: [
      "Perform advanced Excel analysis and automation",
      "Write complex SQL queries for data extraction",
      "Analyze data using Python libraries",
      "Create interactive dashboards in Power BI & Tableau",
      "Present data-driven insights to stakeholders"
    ],
    projects: [
      "Complete data analysis lifecycle with reporting",
      "Sales dashboard in Power BI",
      "Customer analytics report",
      "Financial analysis with Excel"
    ],
    certification: "Data Analytics Certificate with BI dashboard project"
  },
  {
    id: "data-science",
    icon: Brain,
    title: "Data Science & AI",
    description: "Comprehensive training in data science, machine learning, deep learning, and AI from foundations to deployment",
    duration: "20-24 Weeks",
    totalHours: "160-192 hrs",
    level: "ML/AI Aspirants",
    onlineDuration: "20–24 weeks",
    offlineDuration: "16–20 weeks",
    modules: ["Data Science Foundations", "Machine Learning", "Deep Learning & AI", "Advanced AI Topics"],
    color: "text-flame",
    borderColor: "border-flame",
    category: "Data",
    detailedModules: [
      {
        module: "Module 1: Data Science Foundations",
        topics: [
          "Python for Data Science",
          "Data Preprocessing",
          "Exploratory Data Analysis"
        ]
      },
      {
        module: "Module 2: Machine Learning",
        topics: [
          "Supervised & Unsupervised Learning",
          "Regression, Classification, Clustering",
          "Model Evaluation Metrics"
        ]
      },
      {
        module: "Module 3: Deep Learning & AI",
        topics: [
          "Neural Networks Basics",
          "TensorFlow / PyTorch",
          "NLP Fundamentals",
          "Computer Vision Basics"
        ]
      },
      {
        module: "Module 4: Advanced AI Topics",
        topics: [
          "Reinforcement Learning",
          "AI Ethics & Bias",
          "Model Deployment"
        ]
      }
    ],
    learningOutcomes: [
      "Build and evaluate machine learning models",
      "Understand deep learning and neural networks",
      "Implement AI algorithms for real-world problems",
      "Work with NLP and computer vision",
      "Deploy ML models to production"
    ],
    projects: [
      "End-to-end AI project",
      "Predictive analytics model",
      "Image classification with CNN",
      "Natural language processing application"
    ],
    certification: "Data Science & AI Certificate with capstone project"
  },
  {
    id: "python-foundation",
    icon: Code,
    title: "Python Foundation",
    description: "Build strong programming fundamentals with Python from scratch, no prior coding experience needed",
    duration: "6 Weeks",
    totalHours: "60 hrs",
    level: "No Prerequisites",
    modules: ["Programming Logic", "Python Syntax", "Data Types", "Control Flow", "Functions"],
    color: "text-primary",
    borderColor: "border-primary",
    category: "Programming",
    detailedModules: [],
    learningOutcomes: [
      "Understand programming fundamentals",
      "Write clean Python code",
      "Solve programming problems",
      "Build simple applications",
      "Prepare for advanced courses"
    ],
    projects: [
      "Calculator application",
      "Number guessing game",
      "Contact management system",
      "Simple text-based game"
    ],
    certification: "Python Foundation Certificate"
  },
  {
    id: "java-foundation",
    icon: Code,
    title: "Java Foundation",
    description: "Comprehensive Java training from basics, covering core concepts and object-oriented programming principles",
    duration: "8 Weeks",
    totalHours: "80 hrs",
    level: "No Prerequisites",
    modules: ["Java Basics", "OOP Fundamentals", "Core APIs", "Collections", "Exception Handling"],
    color: "text-gold",
    borderColor: "border-gold",
    category: "Programming",
    detailedModules: [],
    learningOutcomes: [
      "Master Java fundamentals",
      "Understand OOP concepts",
      "Work with Java APIs",
      "Handle errors and exceptions",
      "Build Java applications"
    ],
    projects: [
      "Banking system",
      "Student record management",
      "Quiz application",
      "Simple game development"
    ],
    certification: "Java Foundation Certificate"
  },
  {
    id: "oops-mastery",
    icon: Code,
    title: "OOPs Mastery",
    description: "Deep dive into Object-Oriented Programming concepts with real-world design patterns and best practices",
    duration: "4 Weeks",
    totalHours: "40 hrs",
    level: "Python/Java Basics Required",
    modules: ["OOP Principles", "Design Patterns", "SOLID Principles", "Code Design", "Best Practices"],
    color: "text-flame",
    borderColor: "border-flame",
    category: "Programming",
    detailedModules: [
      {
        module: "Module 1: OOP Fundamentals",
        topics: [
          "Introduction to OOP: Importance and Concepts",
          "Classes and Objects Basics",
          "Encapsulation and Data Hiding",
          "Access Modifiers"
        ]
      },
      {
        module: "Module 2: Core OOP Principles",
        topics: [
          "Inheritance: Types and Implementation",
          "Polymorphism: Compile-time and Runtime",
          "Abstraction: Abstract Classes and Interfaces",
          "Method Overriding and Overloading"
        ]
      },
      {
        module: "Module 3: Design Principles",
        topics: [
          "SOLID Principles in Detail",
          "DRY, KISS, YAGNI Principles",
          "Composition vs Inheritance",
          "Coupling and Cohesion"
        ]
      },
      {
        module: "Module 4: Design Patterns",
        topics: [
          "Creational Patterns: Singleton, Factory",
          "Structural Patterns: Adapter, Decorator",
          "Behavioral Patterns: Observer, Strategy",
          "Real-world Pattern Applications"
        ]
      }
    ],
    learningOutcomes: [
      "Master OOP design principles",
      "Implement design patterns",
      "Write maintainable code",
      "Apply SOLID principles",
      "Design scalable systems"
    ],
    projects: [
      "Library management system",
      "Inventory management",
      "Employee management with design patterns",
      "Banking system with OOP"
    ],
    certification: "OOPs Mastery Certificate with design project"
  },
  {
    id: "dsa",
    icon: Brain,
    title: "DSA (Data Structures & Algorithms)",
    description: "Master problem-solving with comprehensive coverage of data structures and algorithms for coding interviews",
    duration: "8 Weeks",
    totalHours: "80 hrs",
    level: "Any Programming Language",
    modules: ["Arrays & Strings", "Linked Lists", "Trees & Graphs", "Sorting & Searching", "Dynamic Programming"],
    color: "text-primary",
    borderColor: "border-primary",
    category: "Programming",
    detailedModules: [
      {
        module: "Module 1: DSA Foundations",
        topics: [
          "Introduction to DSA: Importance and Applications",
          "Algorithm Complexity: Time and Space",
          "Big O Notation",
          "Problem-solving Strategies"
        ]
      },
      {
        module: "Module 2: Linear Data Structures",
        topics: [
          "Arrays: Operations and Applications",
          "Strings: Manipulation and Algorithms",
          "Linked Lists: Single, Double, Circular",
          "Stacks and Queues"
        ]
      },
      {
        module: "Module 3: Non-Linear Data Structures",
        topics: [
          "Trees: Binary Trees, BST",
          "Tree Traversals: Inorder, Preorder, Postorder",
          "Graphs: Representation and Traversals",
          "BFS and DFS Algorithms"
        ]
      },
      {
        module: "Module 4: Algorithms",
        topics: [
          "Sorting: Bubble, Selection, Quick, Merge",
          "Searching: Linear, Binary",
          "Recursion and Backtracking",
          "Introduction to Dynamic Programming"
        ]
      }
    ],
    learningOutcomes: [
      "Understand data structures deeply",
      "Solve algorithmic problems",
      "Optimize code efficiency",
      "Ace coding interviews",
      "Think computationally"
    ],
    projects: [
      "Sorting visualizer",
      "Pathfinding algorithm implementation",
      "Binary search tree operations",
      "Graph algorithms project"
    ],
    certification: "DSA Certificate with coding interview prep"
  },
  {
    id: "adsa",
    icon: Brain,
    title: "ADSA (Advanced DSA)",
    description: "Advanced algorithms and competitive programming techniques for cracking top-tier tech interviews",
    duration: "8 Weeks",
    totalHours: "80 hrs",
    level: "DSA Prerequisite",
    modules: ["Advanced Algorithms", "Graph Algorithms", "System Design", "Competitive Coding", "Interview Prep"],
    color: "text-gold",
    borderColor: "border-gold",
    category: "Programming",
    detailedModules: [
      {
        module: "Module 1: Advanced Trees",
        topics: [
          "AVL Trees and Rotations",
          "Red-Black Trees",
          "B-Trees and B+ Trees",
          "Segment Trees and Fenwick Trees"
        ]
      },
      {
        module: "Module 2: Advanced Graph Algorithms",
        topics: [
          "Shortest Path: Dijkstra, Bellman-Ford",
          "Minimum Spanning Tree: Kruskal, Prim",
          "Network Flow Algorithms",
          "Topological Sorting"
        ]
      },
      {
        module: "Module 3: Dynamic Programming",
        topics: [
          "DP Fundamentals and Memoization",
          "Classic DP Problems",
          "DP on Trees and Graphs",
          "Optimization Techniques"
        ]
      },
      {
        module: "Module 4: Advanced Topics",
        topics: [
          "String Algorithms: KMP, Rabin-Karp",
          "Greedy Algorithms",
          "Bit Manipulation",
          "Competitive Programming Strategies"
        ]
      }
    ],
    learningOutcomes: [
      "Master advanced algorithms",
      "Solve complex coding problems",
      "Compete in coding contests",
      "Crack FAANG interviews",
      "Optimize complex solutions"
    ],
    projects: [
      "Advanced graph algorithms",
      "Dynamic programming challenges",
      "Competitive coding solutions",
      "Interview problem solutions"
    ],
    certification: "Advanced DSA Certificate with competitive coding prep"
  },
  {
    id: "cloud-azure",
    icon: Cloud,
    title: "Cloud Computing - Azure",
    description: "Deploy and manage scalable applications on Microsoft Azure with hands-on labs and real-world scenarios",
    duration: "8 Weeks",
    totalHours: "80 hrs",
    level: "Intermediate",
    modules: ["Azure Fundamentals", "Virtual Machines", "Storage", "Networking", "DevOps"],
    color: "text-flame",
    borderColor: "border-flame",
    category: "Cloud & Tools",
    detailedModules: [],
    learningOutcomes: [
      "Deploy Azure resources",
      "Manage cloud infrastructure",
      "Implement cloud security",
      "Optimize cloud costs",
      "Build scalable cloud solutions"
    ],
    projects: [
      "Web app deployment on Azure",
      "Azure VM setup and management",
      "Cloud storage solutions",
      "Azure DevOps pipeline"
    ],
    certification: "Azure Cloud Computing Certificate"
  },
  {
    id: "microsoft-tools",
    icon: FileSpreadsheet,
    title: "Microsoft Tools",
    description: "Master essential Microsoft Office tools including Excel, PowerPoint, Outlook, and Word for professional efficiency",
    duration: "6 Weeks",
    totalHours: "60 hrs",
    level: "Beginner to Intermediate",
    modules: ["Excel Advanced", "PowerPoint", "Word", "Outlook", "Office 365"],
    color: "text-primary",
    borderColor: "border-primary",
    category: "Cloud & Tools",
    detailedModules: [],
    learningOutcomes: [
      "Create professional presentations",
      "Master Excel for business",
      "Manage emails efficiently",
      "Create professional documents",
      "Collaborate using Office 365"
    ],
    projects: [
      "Business presentation deck",
      "Excel dashboard for reporting",
      "Professional documentation",
      "Email automation setup"
    ],
    certification: "Microsoft Tools Proficiency Certificate"
  },
  {
    id: "data-visualization",
    icon: BarChart3,
    title: "Data Visualization",
    description: "Create compelling visual stories with Power BI, Tableau, Excel, Looker Studio, and Qlik Sense",
    duration: "8 Weeks",
    totalHours: "80 hrs",
    level: "Intermediate",
    modules: ["Power BI", "Tableau", "Excel Charts", "Looker Studio", "Qlik Sense"],
    color: "text-gold",
    borderColor: "border-gold",
    category: "Data",
    detailedModules: [],
    learningOutcomes: [
      "Design interactive dashboards",
      "Tell stories with data",
      "Master visualization tools",
      "Create impactful reports",
      "Present data effectively"
    ],
    projects: [
      "Sales performance dashboard",
      "Customer insights visualization",
      "Marketing analytics report",
      "Executive dashboard"
    ],
    certification: "Data Visualization Certificate with portfolio"
  },
  {
    id: "business-analytics",
    icon: LineChart,
    title: "Business Analytics",
    description: "Learn to analyze business data, create reports, and make data-driven decisions for organizational success",
    duration: "10 Weeks",
    totalHours: "100 hrs",
    level: "Intermediate",
    modules: ["Business Intelligence", "SQL", "Data Modeling", "Reporting", "KPI Design"],
    color: "text-flame",
    borderColor: "border-flame",
    category: "Data",
    detailedModules: [],
    learningOutcomes: [
      "Analyze business metrics",
      "Design KPIs and dashboards",
      "Create business reports",
      "Drive data-driven decisions",
      "Optimize business processes"
    ],
    projects: [
      "Business intelligence dashboard",
      "Sales forecasting model",
      "Customer segmentation analysis",
      "ROI analysis report"
    ],
    certification: "Business Analytics Certificate with case studies"
  },
  {
    id: "project-management",
    icon: Briefcase,
    title: "Project Management",
    description: "Master project management methodologies including Agile, Waterfall, risk management, and resource allocation",
    duration: "8-10 Weeks",
    totalHours: "64-80 hrs",
    level: "Intermediate",
    onlineDuration: "8–10 weeks",
    offlineDuration: "6–8 weeks",
    modules: ["Project Management Fundamentals", "Agile & Waterfall", "Risk & Quality", "Tools & Simulations"],
    color: "text-primary",
    borderColor: "border-primary",
    category: "Career Prep",
    detailedModules: [
      {
        module: "Module 1: Introduction to Project Management",
        topics: [
          "Project Management Basics and Terminology",
          "Project Life Cycle Overview",
          "Roles and Responsibilities",
          "Project Charter and Initiation"
        ]
      },
      {
        module: "Module 2: Methodologies",
        topics: [
          "Waterfall Methodology",
          "Agile Framework and Scrum",
          "Kanban and Lean Principles",
          "Hybrid Approaches"
        ]
      },
      {
        module: "Module 3: Planning and Execution",
        topics: [
          "Risk Management Strategies",
          "Quality Management",
          "Budgeting & Resource Allocation",
          "Communication Planning"
        ]
      },
      {
        module: "Module 4: Tools & Case Studies",
        topics: [
          "MS Project, Jira, Trello",
          "Project Tracking and Reporting",
          "Real-world Case Studies",
          "Simulations and Practice"
        ]
      }
    ],
    learningOutcomes: [
      "Understand project management principles and methodologies",
      "Plan and execute projects effectively",
      "Manage risks and ensure quality",
      "Use project management tools efficiently",
      "Lead teams and communicate effectively"
    ],
    projects: [
      "Complete project plan with Gantt chart",
      "Agile sprint planning exercise",
      "Risk assessment and mitigation plan",
      "Case study analysis and presentation"
    ],
    certification: "Project Management Certificate"
  },
  {
    id: "hr-management",
    icon: Users,
    title: "HR Management",
    description: "Comprehensive HR training covering recruitment, employee engagement, payroll, compliance, and performance management",
    duration: "8-10 Weeks",
    totalHours: "64-80 hrs",
    level: "Intermediate",
    onlineDuration: "8–10 weeks",
    offlineDuration: "6–8 weeks",
    modules: ["HR Fundamentals", "Recruitment", "Employee Relations", "Payroll & Compliance", "HR Analytics"],
    color: "text-gold",
    borderColor: "border-gold",
    category: "Career Prep",
    detailedModules: [
      {
        module: "Module 1: HR Fundamentals",
        topics: [
          "Introduction to Human Resource Management",
          "HR Functions and Responsibilities",
          "HR Policies and Procedures",
          "Employment Laws and Regulations"
        ]
      },
      {
        module: "Module 2: Recruitment & Selection",
        topics: [
          "Job Analysis and Description",
          "Sourcing and Screening Candidates",
          "Interview Techniques",
          "Selection and Onboarding"
        ]
      },
      {
        module: "Module 3: Employee Engagement & Performance",
        topics: [
          "Employee Engagement Strategies",
          "Performance Management Systems",
          "Training and Development",
          "Career Planning and Succession"
        ]
      },
      {
        module: "Module 4: Payroll, Compliance & Analytics",
        topics: [
          "Payroll Processing Basics",
          "Labor Laws and Compliance",
          "HR Analytics and Metrics",
          "HRIS Systems"
        ]
      }
    ],
    learningOutcomes: [
      "Understand core HR functions and practices",
      "Conduct effective recruitment and selection",
      "Manage employee engagement and performance",
      "Handle payroll and ensure compliance",
      "Use HR analytics for decision making"
    ],
    projects: [
      "Recruitment process design",
      "Employee engagement survey and analysis",
      "Performance appraisal system",
      "HR analytics dashboard"
    ],
    certification: "HR Management Certificate"
  },
  {
    id: "digital-marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Master digital marketing including SEO, SEM, Google Ads, Email Marketing, and Analytics for business growth",
    duration: "10-12 Weeks",
    totalHours: "80-96 hrs",
    level: "Beginners",
    onlineDuration: "10–12 weeks",
    offlineDuration: "8–10 weeks",
    modules: ["SEO & SEM", "Google Ads", "Email Marketing", "Content Marketing", "Analytics"],
    color: "text-flame",
    borderColor: "border-flame",
    category: "Career Prep",
    detailedModules: [
      {
        module: "Module 1: Digital Marketing Fundamentals",
        topics: [
          "Introduction to Digital Marketing",
          "Digital Marketing Channels",
          "Marketing Funnel and Customer Journey",
          "Digital Marketing Strategy"
        ]
      },
      {
        module: "Module 2: SEO & SEM",
        topics: [
          "Search Engine Optimization Basics",
          "On-page and Off-page SEO",
          "Keyword Research and Analysis",
          "Search Engine Marketing (SEM)"
        ]
      },
      {
        module: "Module 3: Paid Advertising",
        topics: [
          "Google Ads Fundamentals",
          "Campaign Setup and Management",
          "Ad Copywriting and Design",
          "Bid Strategies and Budget Management"
        ]
      },
      {
        module: "Module 4: Email Marketing & Analytics",
        topics: [
          "Email Marketing Strategy",
          "List Building and Segmentation",
          "Campaign Creation and Automation",
          "Google Analytics and Reporting"
        ]
      }
    ],
    learningOutcomes: [
      "Develop comprehensive digital marketing strategies",
      "Optimize websites for search engines",
      "Run effective Google Ads campaigns",
      "Create successful email marketing campaigns",
      "Analyze and measure marketing performance"
    ],
    projects: [
      "Complete SEO audit and optimization plan",
      "Google Ads campaign setup and management",
      "Email marketing campaign",
      "Digital marketing strategy presentation"
    ],
    certification: "Digital Marketing Certificate"
  },
  {
    id: "social-media-marketing",
    icon: Share2,
    title: "Social Media Marketing",
    description: "Learn to create engaging content, run paid campaigns, and analyze performance across all major social platforms",
    duration: "6-8 Weeks",
    totalHours: "48-64 hrs",
    level: "Beginners",
    onlineDuration: "6–8 weeks",
    offlineDuration: "4–6 weeks",
    modules: ["Platform Strategy", "Content Creation", "Paid Campaigns", "Analytics", "Influencer Marketing"],
    color: "text-primary",
    borderColor: "border-primary",
    category: "Career Prep",
    detailedModules: [
      {
        module: "Module 1: Social Media Fundamentals",
        topics: [
          "Overview of Social Media Platforms",
          "Social Media Marketing Strategy",
          "Target Audience Identification",
          "Brand Voice and Positioning"
        ]
      },
      {
        module: "Module 2: Content Strategy",
        topics: [
          "Content Planning and Calendar",
          "Content Creation Best Practices",
          "Visual Design for Social Media",
          "Copywriting for Engagement"
        ]
      },
      {
        module: "Module 3: Paid Social Campaigns",
        topics: [
          "Facebook and Instagram Ads",
          "LinkedIn Advertising",
          "Twitter and TikTok Ads",
          "Campaign Optimization"
        ]
      },
      {
        module: "Module 4: Analytics & Growth",
        topics: [
          "Social Media Metrics and KPIs",
          "Platform Analytics Tools",
          "Community Management",
          "Influencer Marketing Basics"
        ]
      }
    ],
    learningOutcomes: [
      "Create effective social media strategies",
      "Produce engaging content for multiple platforms",
      "Run and optimize paid social campaigns",
      "Analyze social media performance",
      "Build and engage online communities"
    ],
    projects: [
      "Social media content calendar",
      "Platform-specific ad campaign",
      "Social media audit and strategy",
      "Influencer outreach campaign"
    ],
    certification: "Social Media Marketing Certificate"
  },
  {
    id: "business-communication",
    icon: MessageSquare,
    title: "Business Communication",
    description: "Enhance professional communication skills including verbal, written, presentation, and cross-cultural communication",
    duration: "4-6 Weeks",
    totalHours: "32-48 hrs",
    level: "All Levels",
    onlineDuration: "4–6 weeks",
    offlineDuration: "3–4 weeks",
    modules: ["Communication Fundamentals", "Written Communication", "Presentation Skills", "Cross-Cultural Communication"],
    color: "text-gold",
    borderColor: "border-gold",
    category: "Career Prep",
    detailedModules: [
      {
        module: "Module 1: Communication Fundamentals",
        topics: [
          "Verbal Communication Basics",
          "Non-Verbal Communication",
          "Active Listening Skills",
          "Communication Barriers"
        ]
      },
      {
        module: "Module 2: Written Communication",
        topics: [
          "Professional Email Writing",
          "Business Report Writing",
          "Memo and Letter Writing",
          "Grammar and Style"
        ]
      },
      {
        module: "Module 3: Presentation Skills",
        topics: [
          "Public Speaking Fundamentals",
          "Presentation Structure and Design",
          "Body Language and Voice Modulation",
          "Handling Q&A Sessions"
        ]
      },
      {
        module: "Module 4: Advanced Communication",
        topics: [
          "Cross-Cultural Communication",
          "Conflict Resolution",
          "Negotiation Skills",
          "Meeting Management"
        ]
      }
    ],
    learningOutcomes: [
      "Communicate effectively in professional settings",
      "Write clear and professional business documents",
      "Deliver impactful presentations",
      "Navigate cross-cultural communication",
      "Resolve conflicts and negotiate effectively"
    ],
    projects: [
      "Professional email portfolio",
      "Business presentation delivery",
      "Written communication samples",
      "Cross-cultural communication case study"
    ],
    certification: "Business Communication Certificate"
  },
  {
    id: "interview-skills",
    icon: Users,
    title: "Interview Skills & Career Preparation",
    description: "Complete interview preparation including resume building, personal branding, mock interviews, and salary negotiation",
    duration: "4-6 Weeks",
    totalHours: "32-48 hrs",
    level: "All Levels",
    onlineDuration: "4–6 weeks",
    offlineDuration: "3–4 weeks",
    modules: ["Resume Building", "Personal Branding", "Interview Techniques", "HR & Technical Interviews"],
    color: "text-flame",
    borderColor: "border-flame",
    category: "Career Prep",
    detailedModules: [
      {
        module: "Module 1: Resume & LinkedIn",
        topics: [
          "Professional Resume Writing",
          "Cover Letter Creation",
          "LinkedIn Profile Optimization",
          "Portfolio Development"
        ]
      },
      {
        module: "Module 2: Personal Branding",
        topics: [
          "Personal Brand Strategy",
          "Elevator Pitch Development",
          "Online Presence Management",
          "Networking Strategies"
        ]
      },
      {
        module: "Module 3: Interview Preparation",
        topics: [
          "Common Interview Questions",
          "STAR Method for Behavioral Questions",
          "Body Language and First Impressions",
          "Virtual Interview Best Practices"
        ]
      },
      {
        module: "Module 4: Mock Interviews & Negotiation",
        topics: [
          "HR Interview Practice",
          "Technical Interview Tips",
          "Salary Negotiation Techniques",
          "Post-Interview Follow-up"
        ]
      }
    ],
    learningOutcomes: [
      "Create professional resumes and cover letters",
      "Build a strong personal brand",
      "Excel in HR and technical interviews",
      "Negotiate salary and benefits confidently",
      "Network effectively for career growth"
    ],
    projects: [
      "Professional resume and cover letter",
      "LinkedIn profile optimization",
      "Mock interview recordings",
      "Personal branding portfolio"
    ],
    certification: "Interview Skills Certificate with mock interview assessment"
  },
];
