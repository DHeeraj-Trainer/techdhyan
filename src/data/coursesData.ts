import {
  Brain,
  Code,
  Database,
  Cloud,
  LineChart,
  Globe,
  FileSpreadsheet,
  BarChart3,
} from "lucide-react";

export interface CourseModule {
  session: number;
  module: string;
  topic: string;
  subtopics: string;
  hours: number;
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
      { session: 1, module: "Quantitative Aptitude – I", topic: "Number Systems", subtopics: "Types of numbers, Divisibility, Factors & Multiples, HCF & LCM, Unit digits, Remainder Theorem", hours: 2 },
      { session: 2, module: "Quantitative Aptitude – I", topic: "Ratio & Proportion", subtopics: "Basic concepts, Direct & Inverse proportion, Partnership, Mixing problems", hours: 2 },
      { session: 3, module: "Quantitative Aptitude – I", topic: "Percentages", subtopics: "Percentage change, Successive percentage, Profit & Loss, Discounts", hours: 2 },
      { session: 4, module: "Quantitative Aptitude – I", topic: "Averages", subtopics: "Weighted average, Alligation method, Age problems", hours: 2 },
      { session: 5, module: "Quantitative Aptitude – I", topic: "Practice & Test", subtopics: "Daily practice sets, sectional mini-test with discussion", hours: 2 },
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
      { session: 1, module: "Introduction", topic: "Overview of C", subtopics: "History of C, Structure of a C program, Compilation & Execution process", hours: 2 },
      { session: 2, module: "Introduction", topic: "Variables & Data Types", subtopics: "Declaring variables, Constants, Data types, Type conversion", hours: 2 },
      { session: 3, module: "Introduction", topic: "Input / Output", subtopics: "printf(), scanf(), Escape sequences, Formatting output", hours: 2 },
      { session: 4, module: "Introduction", topic: "Operators", subtopics: "Arithmetic, Relational, Logical, Increment/Decrement, Conditional, Bitwise operators", hours: 2 },
      { session: 5, module: "Introduction", topic: "Lab Session", subtopics: "Basic programs – Hello World, Simple arithmetic, Temperature conversion, etc.", hours: 2 },
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
      { session: 1, module: "Basics", topic: "Introduction to C++", subtopics: "History of C++, Structure of a program, Compiling and execution process", hours: 2 },
      { session: 2, module: "Basics", topic: "Syntax & Variables", subtopics: "Data types, Variable declaration, Scope, Constants, Type conversion", hours: 2 },
      { session: 3, module: "Basics", topic: "Operators", subtopics: "Arithmetic, Relational, Logical, Assignment, Bitwise, Ternary operators", hours: 2 },
      { session: 11, module: "OOP Concepts", topic: "Introduction to OOP", subtopics: "Principles of OOP: Encapsulation, Inheritance, Polymorphism, Abstraction", hours: 2 },
      { session: 12, module: "OOP Concepts", topic: "Classes & Objects", subtopics: "Defining classes, Creating objects, Access specifiers, Member functions", hours: 2 },
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
      { session: 1, module: "Basics", topic: "Introduction to Java", subtopics: "Features of Java, JVM/JRE/JDK overview, Installation & setup", hours: 2 },
      { session: 2, module: "Basics", topic: "Syntax & Structure", subtopics: "Java program structure, main method, compilation & execution", hours: 2 },
      { session: 11, module: "OOP Concepts", topic: "Class & Object", subtopics: "Defining classes, creating objects, constructors", hours: 2 },
      { session: 26, module: "Collections", topic: "Introduction to Collections", subtopics: "Overview of Collection Framework", hours: 2 },
      { session: 31, module: "JDBC", topic: "Introduction to JDBC", subtopics: "Architecture, Drivers, Connection setup", hours: 2 },
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
    title: "Python",
    description: "Learn Python programming for data analytics, automation, and web development with hands-on projects",
    duration: "6 Weeks",
    totalHours: "60 hrs",
    level: "Beginners",
    modules: ["Python Basics", "Data Structures", "Functions", "Libraries", "File Operations"],
    color: "text-primary",
    borderColor: "border-primary",
    category: "Programming",
    detailedModules: [
      { session: 1, module: "Basics", topic: "Introduction to Python", subtopics: "History, Features, Installation, Running Python programs", hours: 2 },
      { session: 2, module: "Basics", topic: "Syntax & Variables", subtopics: "Indentation, Comments, Variables, Constants, Dynamic typing", hours: 2 },
      { session: 11, module: "Data Structures", topic: "Lists", subtopics: "Creation, indexing, slicing, methods, list comprehensions", hours: 2 },
      { session: 21, module: "Libraries", topic: "NumPy Basics", subtopics: "Arrays, creation, slicing, mathematical operations", hours: 2 },
      { session: 23, module: "Libraries", topic: "Pandas Basics", subtopics: "Series, DataFrames, Creating and accessing data", hours: 2 },
    ],
    learningOutcomes: [
      "Write Python programs for various use cases",
      "Work with NumPy and Pandas libraries",
      "Automate repetitive tasks",
      "Manipulate and analyze data",
      "Build Python-based solutions"
    ],
    projects: [
      "Data analysis with Pandas",
      "Automation scripts",
      "Web scraping project",
      "File processing application"
    ],
    certification: "Python Programming Certificate with analytics project"
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
      { session: 1, module: "HTML5", topic: "Introduction to HTML5", subtopics: "Structure of HTML, Elements, Attributes, Semantic tags", hours: 2 },
      { session: 6, module: "CSS3", topic: "CSS Basics", subtopics: "Selectors, colors, fonts, borders, margins, paddings", hours: 2 },
      { session: 11, module: "JavaScript – I", topic: "JavaScript Basics", subtopics: "Variables (var, let, const), data types, operators", hours: 2 },
      { session: 21, module: "React", topic: "Introduction to React", subtopics: "What is React, Components, JSX, Virtual DOM", hours: 2 },
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
    detailedModules: [],
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
    id: "fullstack",
    icon: Globe,
    title: "Full Stack Development",
    description: "Complete web development training covering both frontend and backend for job-ready developers",
    duration: "12 Weeks",
    totalHours: "120 hrs",
    level: "Job-Ready Developers",
    modules: ["Frontend Stack", "Backend Stack", "Database Design", "Deployment", "Full Projects"],
    color: "text-primary",
    borderColor: "border-primary",
    category: "Web Development",
    detailedModules: [],
    learningOutcomes: [
      "Build complete web applications",
      "Master MERN/MEAN stack",
      "Design and implement databases",
      "Deploy full-stack projects",
      "Work as a full-stack developer"
    ],
    projects: [
      "Full-stack e-commerce platform",
      "Social media application",
      "Task management system",
      "Real-time collaboration tool"
    ],
    certification: "Full Stack Development Certificate with capstone project"
  },
  {
    id: "data-analytics",
    icon: BarChart3,
    title: "Data Analytics",
    description: "Learn to analyze and visualize business data using Excel, SQL, and analytics tools for data-driven decisions",
    duration: "8 Weeks",
    totalHours: "80 hrs",
    level: "Business Analysts",
    modules: ["Excel Advanced", "SQL", "Data Visualization", "Statistical Analysis", "Power BI"],
    color: "text-gold",
    borderColor: "border-gold",
    category: "Data",
    detailedModules: [
      { session: 1, module: "Excel", topic: "Introduction to Excel for Analytics", subtopics: "Interface, shortcuts, data organization", hours: 2 },
      { session: 2, module: "Excel", topic: "Functions Overview", subtopics: "SUM, AVERAGE, COUNT, IF, Nested IF, Text & Date functions", hours: 2 },
      { session: 11, module: "SQL", topic: "Introduction to SQL", subtopics: "Databases, tables, CRUD operations", hours: 2 },
      { session: 26, module: "Power BI / Tableau", topic: "Introduction to BI Tools", subtopics: "Difference between Power BI & Tableau", hours: 2 },
    ],
    learningOutcomes: [
      "Perform advanced Excel analysis",
      "Write complex SQL queries",
      "Create interactive dashboards",
      "Analyze business metrics",
      "Present data-driven insights"
    ],
    projects: [
      "Sales dashboard in Power BI",
      "Customer analytics report",
      "Financial analysis with Excel",
      "Business intelligence dashboard"
    ],
    certification: "Data Analytics Certificate with BI dashboard project"
  },
  {
    id: "data-science",
    icon: Brain,
    title: "Data Science",
    description: "Master machine learning, AI algorithms, and data modeling for building intelligent systems",
    duration: "12 Weeks",
    totalHours: "120 hrs",
    level: "ML/AI Aspirants",
    modules: ["Python for ML", "Statistics", "Machine Learning", "Deep Learning", "AI Projects"],
    color: "text-flame",
    borderColor: "border-flame",
    category: "Data",
    detailedModules: [
      { session: 1, module: "Python for DS", topic: "Introduction to Data Science", subtopics: "What is Data Science, Workflow, Tools overview", hours: 2 },
      { session: 26, module: "ML – I", topic: "Introduction to Machine Learning", subtopics: "ML concepts, types, workflow", hours: 2 },
      { session: 51, module: "Deep Learning", topic: "Neural Network Basics", subtopics: "Neurons, layers, activation functions", hours: 2 },
    ],
    learningOutcomes: [
      "Build machine learning models",
      "Understand deep learning concepts",
      "Implement AI algorithms",
      "Analyze complex datasets",
      "Deploy ML solutions"
    ],
    projects: [
      "Predictive analytics model",
      "Image classification with CNN",
      "Natural language processing project",
      "Recommendation system"
    ],
    certification: "Data Science Certificate with ML capstone project"
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
      { session: 1, module: "OOP Basics", topic: "Introduction to OOP", subtopics: "Importance of OOP, Difference between Procedural & Object-Oriented programming", hours: 2 },
      { session: 16, module: "Design Principles", topic: "OOP Design Principles", subtopics: "DRY, KISS, YAGNI, and modularity", hours: 2 },
      { session: 17, module: "Design Principles", topic: "SOLID Principles", subtopics: "Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion", hours: 2 },
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
      { session: 1, module: "Introduction", topic: "Introduction to DSA", subtopics: "Importance of DSA, real-world applications, programming language choices", hours: 2 },
      { session: 2, module: "Introduction", topic: "Algorithm Complexity", subtopics: "Time and space complexity, need for optimization", hours: 2 },
      { session: 6, module: "Arrays & Strings", topic: "Arrays Basics", subtopics: "Declaration, initialization, traversal", hours: 2 },
      { session: 26, module: "Trees", topic: "Tree Basics", subtopics: "Terminologies, tree representation", hours: 2 },
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
      { session: 1, module: "Advanced Trees", topic: "Introduction to Advanced Trees", subtopics: "Need for balanced trees, comparison with basic BST", hours: 2 },
      { session: 11, module: "Graph Algorithms", topic: "Shortest Path Algorithms", subtopics: "Concept of weighted graphs, applications", hours: 2 },
      { session: 16, module: "Dynamic Programming – I", topic: "Recursion Review", subtopics: "Overlapping subproblems, optimal substructure", hours: 2 },
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
];
