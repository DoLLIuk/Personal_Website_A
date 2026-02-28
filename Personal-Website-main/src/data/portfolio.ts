export const personalInfo = {
  name: "Mykyta Holovko",
  title: "Software Engineering Student",
  description:
    "Software Engineering student with a focused background in mobile and software development. Proficient in Python and C++ with a solid foundation in Data Structures and Algorithms.",
  email: "golovkonikita25@gmail.com",
  phone: "+1 224-284-3342",
  location: "Harper College",
};

export const skills = [
  { name: "Python", level: 90 },
  { name: "C++", level: 70 },
  { name: "HTML/CSS", level: 85 },
  { name: "Git", level: 85 },
  { name: "Docker", level: 70 },
  { name: "TensorFlow", level: 75 },
  { name: "SQL", level: 60 },
];

export const technologies = [
  "Python",
  "C++",
  "HTML/CSS",
  "TensorFlow",
  "TensorFlow Lite",
  "Pandas",
  "NumPy",
  "Git",
  "Docker",
  "Google Cloud Platform",
  "SwiftUI",
  "Google Maps SDK",
  "Google Directions API",
  "Xcode",
  "Jupyter",
];

export const about = {
  bio:
    "I am a Software Engineering student focused on creating efficient, scalable, and reliable software. I am passionate about building purposeful products that people can rely on in their daily lives. With a strong foundation in Python and C++, I strive to bridge the gap between complex backend logic and seamless user experiences to deliver tools that make a real impact.",
  experience: [
    {
      title: "Information Technology Support Specialist",
      company: "Prospect Heights School District 23",
      location: "Prospect Heights, IL",
      period: "June 2022 – Aug. 2024",
      description:
        "Supported daily IT operations while communicating with teachers and staff to diagnose technical issues and explain solutions. Helped troubleshoot basic network issues and software installations.",
    },
  ],
  education: [
    {
      degree: "Associate in Engineering Science",
      school: "Harper College",
      period: "2024 - 2026",
    },
    {
      degree: "Bachelor of Computer Science",
      school: "University of Illinois Chicago (UIC)",
      period: "2026 - Present",
    },
  ],
  affiliations: [
    "Member, American Association for the Advancement of Science (AAAS)",
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Ukrainian", level: "Native" },
    { name: "Russian", level: "Fluent" },
  ],
  interests: ["AI", "Machine Learning","Data Engineering" ,"Mobile ML", "Software Engineering", "Research"],
};

export const projects = [
  {
    id: 1,
    title: "NotesHub",
    description:
      "A smart Android application that leverages on-device Machine Learning to automatically categorize personal notes, enabling fast, private, and offline inference.",
    fullDescription:
      "NotesHub is a full-cycle mobile project: a custom NLP model was trained in Python on a 2,500+ sample dataset, optimized with TensorFlow Lite, and integrated into a native Android app for low-latency offline categorization. The engineering effort included building a reproducible preprocessing pipeline to ensure identical tokenization across training and runtime, and extensive debugging using token-level validation and model checksum comparisons. Extensive evaluation and edge-case testing ensured robust classification across noisy user inputs and diverse note formats. Production optimizations reduced model size and inference latency, enabling a responsive user experience while keeping all data private on-device.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    technologies: [
      "Python",
      "Kotlin",
      "TensorFlow",
      "TensorFlow Lite",
      "NumPy",
      "Pandas",
      "Android SDK",
    ],
    features: [
      "Custom NLP Pipeline: Developed and trained a text classification model on a dataset of 2,500+ samples, achieving 80% validation accuracy using TensorFlow.",
      "Mobile Optimization & Deployment: Converted and optimized the model with TensorFlow Lite to enable fast, private, and offline categorization directly on the device.",
      "Engineering Consistency: Designed a specialized preprocessing pipeline to ensure identical tokenization and inference results between the Python training environment and the Android (Kotlin) runtime.",
      "Technical Debugging: Solved complex cross-platform issues through token-level validation and model checksum comparisons, ensuring high reliability of the on-device model.",
    ],
    github: "https://github.com/DoLLIuk/Note_Classification",
    demo: "",
  },
  {
    id: 2,
    title: "Local Explorer",
    description:
      "A native iOS application designed to enhance urban exploration by helping users discover local points of interest. The app features a responsive, modern interface that provides real-time navigation and personalized discovery through deep integration with location-based services.",
    fullDescription:
      "Local Explorer is a native iOS app that helps users discover nearby points of interest with a clean, accessible SwiftUI interface. It integrates Google Maps SDK for dynamic map interactions and the Google Directions API for smart routing. The app preprocesses and parses JSON location data to ensure fast, accurate display of POIs and supports category-driven updates and smooth UI transitions.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
    technologies: ["Swift", "SwiftUI", "Google Maps SDK", "Google Directions API"],
    features: [
      "Dynamic Map Interaction: Real-time discovery of nearby restaurants, hotels, and attractions using Google Maps SDK.",
      "Smart Routing: Automated route generation and distance calculation powered by the Google Directions API.",
      "Advanced Data Processing: Custom JSON parsing and transformation logic to ensure fast, accurate display of location data.",
      "Modern UI/UX: Clean, accessible SwiftUI interface with category-driven updates and smooth transitions.",
      "Tools & Setup: Implemented in Swift with Xcode; integrates Google Maps SDK and Google Directions API.",
    ],
    github: "",
    demo: "",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with forecasts and beautiful animations",
    fullDescription: "Beautiful and informative weather dashboard with detailed forecasts. Displays current weather, hourly and weekly forecasts, UV index, wind speed and other parameters. Data is visualized with animated charts. Supports city search and automatic location detection.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    github: "https://github.com/yourusername/project3",
    demo: "https://demo3.example.com",
  },
  {
    id: 4,
    title: "Portfolio Generator",
    description: "No-code tool for creating personal portfolio websites",
    fullDescription: "Personal portfolio website builder that requires no programming skills. Users can choose a template, customize colors and fonts, add information about themselves and their projects through a user-friendly interface. The finished site can be published with one click. All created sites are fully responsive and optimized.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["React", "TypeScript", "Framer Motion"],
    github: "https://github.com/yourusername/project4",
    demo: "https://demo4.example.com",
  },
];

export const socialLinks = {
  github: "https://github.com/DoLLIuk",
  linkedin: "https://www.linkedin.com/in/mykyta-holovko/",
  email: "mailto:golovkonikita25@gmail.com",
  phone: "tel:+12242843342",
};
