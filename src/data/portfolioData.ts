export interface Project {
  id: string;
  title: string;
  category: string;
  date?: string;
  description: string;
  features: string[];
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  level: string; // "Foundational" | "Proficient" | "Certified"
  category: 'languages' | 'web' | 'database' | 'tools';
  icon: string;
  description: string;
}

export interface Internship {
  id: string;
  role: string;
  organization: string;
  duration: string;
  period: string;
  description: string;
  learnings: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  location: string;
  statusOrScore: string;
  isScorePercentage?: boolean;
  scoreType: 'Pursuing' | 'CGPA' | 'Percentage';
  scoreValue: string;
  period?: string;
  details?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  credentialBadge: string;
  icon: string;
}

export interface AchievementItem {
  id: string;
  type: 'achievement' | 'leadership' | 'activity';
  title: string;
  subtitle?: string;
  date?: string;
  description: string;
  points: string[];
  icon: string;
}

export interface InterestItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  tag: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "DODDI MAHINDHRA",
    shortName: "DM",
    role: "Aspiring Software Developer",
    subtitle: "Aspiring Software Developer | Creative Problem Solver | Technology Enthusiast",
    email: "mahimahindhra000@gmail.com",
    phone: "+91 6302827360",
    phoneDisplay: "+91 6302827360",
    location: "Visakhapatnam, Andhra Pradesh, India",
    github: "https://github.com/Mahindhra",
    resumePath: "/Mahindhra_Resume.pdf",
    profileImage: "/images/profile.jpg",
    bio: "I am DODDI MAHINDHRA, an aspiring software developer currently pursuing a Master of Computer Applications (MCA) at Aditya Degree & PG College, Visakhapatnam. I have foundational knowledge of Java, C, Python, HTML, CSS, JavaScript, XML, SQL and MySQL. I am passionate about software development, problem-solving, emerging technologies, and creating meaningful digital solutions. I continuously work on improving my technical knowledge and developing practical applications.",
    taglines: [
      "Building Digital Experiences.",
      "Turning Ideas Into Reality.",
      "Exploring The Future With Code."
    ]
  },

  stats: [
    { label: "MCA Degree", value: "Pursuing", sub: "Aditya PG College" },
    { label: "B.Sc. MECs", value: "7.5 CGPA", sub: "Graduated with Merit" },
    { label: "SSC Board", value: "97%", sub: "High Academic Record" },
    { label: "Specialized Internships", value: "2", sub: "Cloud & AI/ML" }
  ],

  skills: [
    // Programming Languages
    { name: "Java", level: "Foundational", category: "languages", icon: "Coffee", description: "Object-oriented programming, classes, inheritance, core algorithms & syntax" },
    { name: "C", level: "Foundational", category: "languages", icon: "Cpu", description: "Structured programming, memory concepts, logic building, data structures" },
    { name: "Python", level: "Foundational", category: "languages", icon: "Terminal", description: "Scripting, syntax fundamentals, algorithms & basic data handling" },

    // Web Technologies
    { name: "HTML", level: "Proficient", category: "web", icon: "Layout", description: "Semantic markup, page structure, modern accessibility & web standards" },
    { name: "CSS", level: "Proficient", category: "web", icon: "Palette", description: "Responsive layouts, Flexbox, Grid, custom styling & animations" },
    { name: "JavaScript", level: "Foundational", category: "web", icon: "Code2", description: "DOM manipulation, event handling, ES6+ features & client interactivity" },
    { name: "XML", level: "Foundational", category: "web", icon: "FileCode", description: "Data interchange format, Android layout configurations & parsing" },

    // Database Technologies
    { name: "SQL", level: "Foundational", category: "database", icon: "Database", description: "Relational queries, table creation, joins, aggregations & data filtering" },
    { name: "MySQL", level: "Foundational", category: "database", icon: "HardDrive", description: "Database schema design, queries, relational storage & transactions" },

    // Tools & Platforms
    { name: "Git", level: "Foundational", category: "tools", icon: "GitBranch", description: "Version control, branching, committing & local repository tracking" },
    { name: "GitHub", level: "Foundational", category: "tools", icon: "Github", description: "Remote repository hosting, code management & open source workflows" },
    { name: "Apache Tomcat", level: "Foundational", category: "tools", icon: "Server", description: "Web server environment, Java servlet deployment & servlet container" },
    { name: "MS Office", level: "Certified", category: "tools", icon: "FileSpreadsheet", description: "Document preparation, data analysis, spreadsheets & presentations" }
  ] as SkillItem[],

  strengths: [
    { name: "Communication", desc: "Certified by Pearson MePro for effective verbal and written communication." },
    { name: "Teamwork", desc: "Collaborative mindset with experience coordinating team activities." },
    { name: "Time Management", desc: "Structured approach to project deadlines and milestone tracking." },
    { name: "Problem Solving", desc: "Analytical breakdown of challenges into logical, executable code." },
    { name: "Adaptability", desc: "Fast learner eager to adopt emerging technologies and industry best practices." }
  ],

  projects: [
    {
      id: "apsrtc-complaint-system",
      title: "Smart APSRTC Passenger Complaint & Feedback Management System",
      category: "Academic Project",
      description: "A passenger-focused complaint submission and tracking system designed to support feedback management and officer-side complaint handling.",
      features: [
        "Passenger complaint submission portal with category classification",
        "Unique complaint ID generation for live status tracking",
        "Passenger feedback & rating collection system",
        "Officer-side dashboard for complaint triage, review, and resolution status updates"
      ],
      technologies: ["Java", "HTML", "CSS", "JavaScript", "SQL", "MySQL", "Apache Tomcat"],
      highlights: [
        "Structured multi-role architecture: Passenger and Transport Officer views",
        "Relational database design ensuring tracking history integrity",
        "Designed to streamline public transit citizen service response times"
      ],
      githubUrl: "https://github.com/Mahindhra",
      metrics: [
        { label: "Project Type", value: "Academic Project" },
        { label: "Target Domain", value: "Public Transit / APSRTC" },
        { label: "Architecture", value: "Role-Based System" }
      ]
    },
    {
      id: "android-hackathon",
      title: "Android Development Hackathon",
      category: "Hackathon Challenge",
      date: "30 September 2024 – 04 October 2024",
      description: "Participated in an intensive multi-day Android development hackathon, gaining hands-on exposure to live application design and practical problem-solving challenges.",
      features: [
        "Rapid prototyping of Android mobile user interfaces",
        "Integration of XML layouts with Java event handlers",
        "Agile team coordination to meet strict sprint deadlines",
        "Hands-on debugging and real-time application testing on Android devices"
      ],
      technologies: ["Android", "Java", "XML", "Git", "Mobile UI Design"],
      highlights: [
        "Recognized for participation and collaborative problem-solving across 5 intense days",
        "Practiced real-time collaborative coding and milestone delivery",
        "Deepened understanding of Android application lifecycle and user interactions"
      ],
      githubUrl: "https://github.com/Mahindhra",
      metrics: [
        { label: "Duration", value: "5 Intensive Days" },
        { label: "Dates", value: "30 Sep – 04 Oct 2024" },
        { label: "Focus", value: "Live Mobile Solutions" }
      ]
    }
  ] as Project[],

  internships: [
    {
      id: "aws-cloud",
      role: "AWS Cloud Computing Intern",
      organization: "Adhoc Network",
      duration: "Short-term internship",
      period: "Internship Period",
      description: "Hands-on exposure to AWS cloud computing concepts and industry technologies, studying foundational cloud infrastructure, storage systems, and server management.",
      learnings: [
        "Studied fundamental AWS cloud architecture and virtualization concepts",
        "Gained exposure to Amazon EC2 compute instances and S3 object storage management",
        "Explored Identity and Access Management (IAM) role policies and security fundamentals",
        "Understood cloud deployment paradigms and scalable web architecture principles"
      ],
      skills: ["AWS Cloud", "EC2", "S3", "Cloud Computing Basics", "IAM"]
    },
    {
      id: "ai-ml-ulearn",
      role: "Artificial Intelligence and Machine Learning Intern",
      organization: "ULearn",
      duration: "Long-term internship",
      period: "Internship Period",
      description: "Immersive exposure to Artificial Intelligence and Machine Learning concepts, algorithms, and practical data problem-solving techniques.",
      learnings: [
        "Studied core principles of Artificial Intelligence and Machine Learning pipelines",
        "Learned data preprocessing, feature preparation, and dataset structuring",
        "Explored supervised and unsupervised learning algorithms and evaluation metrics",
        "Gained conceptual exposure to neural network foundations and emerging AI capabilities"
      ],
      skills: ["Artificial Intelligence", "Machine Learning", "Python Concepts", "Data Workflows"]
    }
  ] as Internship[],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Aditya Degree & PG College",
      location: "Visakhapatnam, India",
      statusOrScore: "Pursuing",
      scoreType: "Pursuing",
      scoreValue: "Pursuing",
      details: "Advanced coursework focusing on software engineering, computer networks, database systems, object-oriented software design, and practical software development."
    },
    {
      degree: "Bachelor of Science (B.Sc.)",
      field: "Mathematics, Electronics & Computer Science (MECs)",
      institution: "Aditya Degree & PG College",
      location: "Visakhapatnam, India",
      statusOrScore: "7.5 CGPA",
      scoreType: "CGPA",
      scoreValue: "7.5",
      details: "Built a solid analytical foundation spanning computer science basics, computational mathematics, digital logic, and programming concepts."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "M.N.R. High School",
      location: "Andhra Pradesh, India",
      statusOrScore: "97%",
      isScorePercentage: true,
      scoreType: "Percentage",
      scoreValue: "97%",
      details: "Exceptional academic performance demonstrating discipline, strong mathematical aptitude, and consistent academic dedication."
    }
  ] as EducationItem[],

  certifications: [
    {
      id: "c-prog",
      title: "C Programming Certification",
      issuer: "Technical Training & Evaluation",
      description: "Validation of foundational proficiency in C programming, control structures, pointers, functions, and structured memory handling.",
      credentialBadge: "Verified Programming Competency",
      icon: "Cpu"
    },
    {
      id: "pearson-mepro",
      title: "Pearson MePro – Communication Skills",
      issuer: "Pearson Education",
      description: "Certified proficiency in English professional communication, listening, professional verbal interaction, and collaborative workplace language.",
      credentialBadge: "Global English Assessment",
      icon: "Languages"
    },
    {
      id: "ms-office",
      title: "Microsoft Office Certification",
      issuer: "Authorized Training Institution",
      description: "Certified skill in document engineering, spreadsheet data modeling, visual presentation design, and office productivity tools.",
      credentialBadge: "Productivity Specialist",
      icon: "FileSpreadsheet"
    }
  ] as Certification[],

  achievements: [
    {
      id: "hackathon-award",
      type: "achievement",
      title: "Android Development Hackathon",
      subtitle: "Recognized for Participation & Technical Problem Solving",
      date: "30 September 2024 – 04 October 2024",
      description: "Successfully recognized for intensive participation in hackathon activities, tackling real-world mobile app design sprints.",
      points: [
        "Engaged in 5-day continuous technical challenge sprint",
        "Collaborated with peers to conceptualize and build functional mobile prototypes",
        "Demonstrated agility and practical debugging under timed hackathon constraints"
      ],
      icon: "Trophy"
    },
    {
      id: "team-leadership",
      type: "leadership",
      title: "Team Leadership & Project Coordination",
      subtitle: "Academic & Collaborative Initiatives",
      description: "Proven capability to coordinate team members, clarify requirements, and drive projects across the finish line.",
      points: [
        "Coordinated team projects and balanced responsibilities among peers",
        "Distributed tasks according to team members' strengths",
        "Supported timely project delivery and maintained team focus"
      ],
      icon: "Users"
    },
    {
      id: "event-org",
      type: "activity",
      title: "Event Organization & Campus Initiatives",
      subtitle: "Community-Focused Campus Activities",
      description: "Active contributor to campus events, organizing community-oriented college functions and student gatherings.",
      points: [
        "Participated in organizing community-focused campus events and seminars",
        "Assisted in stage coordination, participant reception, and session logistics",
        "Fostered collaborative community spirit within the college student body"
      ],
      icon: "Calendar"
    },
    {
      id: "financial-literacy",
      type: "activity",
      title: "Financial Literacy & Market Analysis",
      subtitle: "Active Learning & Risk Management",
      description: "Engaged in exploring financial literacy concepts, understanding financial mechanisms, and trading fundamentals.",
      points: [
        "Participated in trading and financial literacy activities and knowledge sessions",
        "Developed structured understanding of risk management and discipline",
        "Applied analytical mindset to data trends and economic insights"
      ],
      icon: "TrendingUp"
    }
  ] as AchievementItem[],

  interests: [
    {
      id: "piano",
      title: "Playing Piano",
      subtitle: "Music & Harmonic Discipline",
      description: "Exploring melodies and classical timing, developing pattern recognition, creative focus, and rhythmic discipline that mirrors algorithmic thinking.",
      icon: "Music",
      tag: "Harmony & Timing"
    },
    {
      id: "cooking",
      title: "Cooking",
      subtitle: "Culinary Precision & Creativity",
      description: "Enjoying the art and science of flavors—where precise ingredient measurement, heat control, and experimentation turn simple recipes into delightful dishes.",
      icon: "Utensils",
      tag: "Flavor Engineering"
    },
    {
      id: "painting",
      title: "Painting",
      subtitle: "Visual Composition & Color",
      description: "Expressing ideas visually through acrylics and watercolors, exploring color theory, spatial composition, and aesthetic balance.",
      icon: "Palette",
      tag: "Visual Aesthetics"
    },
    {
      id: "drawing",
      title: "Drawing",
      subtitle: "Sketching & Fine Observation",
      description: "Translating concepts into line drawings and sketches, cultivating keen attention to detail, perspective, and clean geometric structures.",
      icon: "PenTool",
      tag: "Detail & Proportion"
    }
  ] as InterestItem[]
};
