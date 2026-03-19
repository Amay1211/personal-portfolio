export const profile = {
  name: "Amay Sandanshiv",
  title: "Full Stack Developer | MERN Stack Developer",
  email: "1211amay@gmail.com",
  phone: "+91 8605837047",
  linkedin: "https://www.linkedin.com/in/amay-sandanshiv",
  linkedinLabel: "Connect on LinkedIn",
  summary:
    "Passionate about tech. Full Stack developer with 4+ years of experience in React.js, Next.js, and TypeScript. Proven ability to deliver high-quality, user-focused web applications with optimized performance.",
} as const;

export const skills = {
  languages: ["JavaScript", "TypeScript", "HTML5", "CSS"],
  frameworks: [
    "React.js",
    "Next.js",
    "Axios",
    "GraphQL",
    "Material UI",
    "React Hook Form",
    "React Table",
    "Yup",
    "React Date Picker",
    "SASS",
    "Tailwind CSS",
    "Bootstrap",
  ],
  stateManagement: ["Redux", "Redux Toolkit", "Thunk", "Context"],
  tools: ["Webpack", "Vite", "Jest", "Storybook", "Postman", "Figma", "Git"],
} as const;

export const experience = [
  {
    role: "Software Engineer",
    company: "Coditas Technologies",
    location: "Pune",
    period: "Jul 2022 - Present",
    highlights: [
      "Delivered 6+ Full Stack projects using React.js, Next.js, and TypeScript.",
      "Maintaining component library (npm package) by building reusable UI components, hooks and HOCs using React.js.",
      "Designed and maintained responsive web applications with a strong focus on performance and user experience.",
      "Collaborated with UI/UX designers, QA teams, and product managers to ensure smooth project delivery.",
      "Wrote unit tests using Jest to enhance application reliability and reduce bugs.",
      "Optimized website performance, improving loading times and application speed.",
      "Debugged and resolved issues quickly to meet project deadlines.",
      "Contributed to code reviews to ensure high code quality and adherence to best practices.",
    ],
  },
] as const;

export const projects = [
  {
    name: "Omnenest",
    tagline: "Brokerage Admin Platform",
    description:
      "Omnenest is a Broker Admin Panel that helps brokers customize onboarding, manage compliance, and define their brand identity.",
    highlights: [
      "Set up the project, configured the codebase and created reusable components.",
      "Implemented Role-Based Authentication with multiple roles and configurations using the developer console.",
      "Integrated live charts (line, candle) using the lightweight-charts package and sockets.",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Trading view charts",
      "React Use Web Sockets",
      "Material UI",
    ],
  },
  {
    name: "Worker Onboard",
    tagline: "Relambda",
    description:
      "A platform for workers, agents, and admins to manage eligibility for government schemes and track family, wage, and healthcare records.",
    highlights: [
      "Built a dynamic multistep form for data collection and validation.",
      "Integrated UIDAI for real-time user authentication and worker profile management.",
      "Ensured secure data handling, including consent proofs and bank detail validation via third-party APIs.",
      "Developed a multilingual (i18n) and WCAG-compliant interface for accessibility.",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "React-i18next",
      "Formik",
      "Bootstrap",
      "Axios",
    ],
  },
  {
    name: "Codilytics",
    tagline: "Project Management & Analytics",
    description:
      "Codilytics simplifies project management by providing tools for project creation, assignment, and insights through analytics.",
    highlights: [
      "Developed the Dashboard to display performance metrics like revenue, project count, and employee assignments using interactive charts and tables.",
      "Built a project creation and employee assignment module with a dynamic stepper form and validations.",
      "Enhanced data analysis features by adding date range filtering.",
      "Optimized API calls, reducing load times by 25%.",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "GraphQL",
      "React Hook Form",
      "React Table",
      "React Date Picker",
      "Redux Toolkit",
      "Echarts",
    ],
  },
] as const;

export const education = [
  {
    degree: "Bachelor of Engineering - BE",
    field: "Computer Engineering",
    school: "Modern Education Society's College of Engineering, Pune",
    location: "Pune, Maharashtra, India",
    period: "2018 - 2022",
    cgpa: "8.51/10",
  },
] as const;

export const certifications = [
  {
    name: "JAVA (Basic)",
    issuer: "HackerRank",
    issued: "May 2021",
    url: "https://www.hackerrank.com/certificates/14824a7c2ade",
  },
] as const;
