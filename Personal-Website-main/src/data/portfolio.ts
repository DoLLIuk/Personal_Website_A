import localExplorerScreenshot1 from "@/assets/local_explorer.png";
import localExplorerScreenshot2 from "@/assets/local_explorer2.png";
import localExplorerPreview from "@/assets/local_explorer_preview.png";
import voiceAssistantScreenshot from "@/assets/ai_voice_assistant_Screenshot.png";
import voiceAssistantArchitecture from "@/assets/ai_voice_assistant_system_architecture.png";
import notesHubPreview from "@/assets/NotesHub_logo_wide.png";
import notesHubScreenshot1 from "@/assets/screenshot1_NotesHub.webp";
import notesHubScreenshot2 from "@/assets/screenshot2_NotesHub.webp";
import notesHubScreenshot3 from "@/assets/screenshot3_NotesHub.webp";
import notesHubScreenshot4 from "@/assets/screenshot4_NotesHub.webp";

export type ProjectStackGroup = {
  title: string;
  items: string[];
};

export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  screenshots?: string[];
  technologies: string[];
  previewTechnologies?: string[];
  features?: string[];
  github: string;
  demo: string;
  category?: string;
  role?: string;
  team?: string;
  timeline?: string;
  status?: string;
  highlights?: string[];
  outcomes?: string[];
  fullStack?: ProjectStackGroup[];
  architectureTitle?: string;
  architectureDescription?: string;
  architectureImage?: string;
  architectureHighlights?: string[];
  hiddenFacts?: string[];
  screenshotScale?: number;
  screenshotLayout?: "desktop" | "mobile";
  previewMode?: "contain" | "cover" | "cover-top";
  showDetailHeroImage?: boolean;
  hiddenSections?: string[];
}

export const personalInfo = {
  name: "Mykyta Holovko",
  title: "Software Engineering Student Seeking Internship Opportunities",
  description:
    "Software Engineering student building AI, mobile, and full-stack projects with a focus on practical implementation and reliable user experiences.",
  email: "golovkonikita25@gmail.com",
  phone: "+1 224-284-3342",
  location: "Chicago, IL",
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

export const technologyGroups = [
  {
    title: "Languages",
    items: ["Python", "C++", "SQL", "HTML/CSS"],
  },
  {
    title: "AI and Data",
    items: ["TensorFlow", "TensorFlow Lite", "Pandas", "NumPy"],
  },
  {
    title: "Application Development",
    items: ["SwiftUI", "Android SDK", "React", "Desktop UI"],
  },
  {
    title: "Tools and Platforms",
    items: ["Git", "Docker", "Google Cloud Platform", "Xcode", "Jupyter"],
  },
];

export const about = {
  bio:
    "I am a Software Engineering student who enjoys turning technical ideas into clear, usable products. My work is centered on applied AI, mobile development, and product-oriented engineering, with an emphasis on building systems that are reliable, understandable, and useful in real scenarios.",
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

export const projects: PortfolioProject[] = [
  {
    id: 1,
    title: "AI Voice Assistant",
    description:
      "A Windows desktop voice assistant that connects speech recognition, LLM reasoning, web routing, and multi-provider TTS into one practical end-to-end product with strong fallback behavior and a clean desktop UX.",
    fullDescription:
      "AI Voice Assistant is a desktop application that turns voice input into a reliable spoken response through a structured pipeline: audio capture, speech detection, transcription, LLM reasoning, optional web routing, speech synthesis, and local playback. I built it as a practical AI product rather than a simple model demo, with a strong focus on responsiveness, fallback behavior, and user-facing clarity. The project demonstrates applied AI engineering across desktop UI, API integration, prompt design, modular Python architecture, and runtime reliability.",
    image: voiceAssistantScreenshot,
    screenshots: [voiceAssistantScreenshot],
    technologies: [
      "Python",
      "Tkinter",
      "GitHub Models API",
      "Azure OpenAI",
      "LangChain",
      "Tavily",
      "NumPy",
      "WebRTC VAD",
      "SoundDevice",
    ],
    previewTechnologies: [
      "Python",
      "LLM Integration",
      "Prompt Engineering",
      "Desktop UI",
      "API Integration",
      "System Design",
    ],
    features: [
      "Designed an end-to-end voice pipeline for capture, transcription, reasoning, web routing, synthesis, and playback.",
      "Built a responsive desktop UI with background processing so recording, generation, and playback do not block the user experience.",
      "Added fallback logic, speech gating, and configurable runtime settings to make the MVP more stable and easier to test.",
      "Implemented grounded web routing and voice-safe response formatting for better handling of current questions and spoken output.",
    ],
    fullStack: [
      {
        title: "Application",
        items: [
          "Python 3.13",
          "Tkinter desktop UI",
          "Threaded background processing",
          "Modular architecture",
        ],
      },
      {
        title: "AI Layer",
        items: [
          "GitHub Models API",
          "Prompt design and persona logic",
          "Structured screen and speech answers",
          "Web-assisted response routing",
        ],
      },
      {
        title: "Reliability",
        items: [
          "Speech gating with WebRTC VAD",
          "Fallback transcription flow",
          "Persisted runtime settings",
          "Debug-friendly activity logging",
        ],
      },
    ],
    architectureTitle: "Voice Assistant System Architecture",
    architectureDescription:
      "The system is organized as a clean pipeline that turns raw audio into a grounded spoken response. Each stage is isolated so the product can be debugged, tested, and upgraded without rewriting the entire app.",
    architectureImage: voiceAssistantArchitecture,
    architectureHighlights: [
      "Input layer captures microphone audio and filters weak or silent input before expensive downstream processing.",
      "Speech layer routes audio through the configured STT backend and can fall back automatically for resilience.",
      "Decision layer uses GitHub Models for response generation and optionally invokes web search when the request depends on fresh external information.",
      "Output layer synthesizes speech with the selected TTS provider and plays it locally while keeping the UI responsive.",
    ],
    category: "Desktop AI Application",
    role: "Sole developer responsible for product design, Python architecture, AI integration, desktop UI, and reliability improvements.",
    team: "Independent project",
    timeline: "2026",
    status: "Stable MVP for manual testing",
    hiddenFacts: ["Team", "Timeline", "Status"],
    hiddenSections: ["highlights", "outcomes"],
    screenshotScale: 1.2,
    github: "https://github.com/DoLLIuk/Voice_assistant_Public",
    demo: "",
    previewMode: "contain",
    screenshotLayout: "desktop",
    showDetailHeroImage: false,
  },
  {
    id: 3,
    title: "NotesHub",
    description:
      "A smart Android application that leverages on-device Machine Learning to automatically categorize personal notes, enabling fast, private, and offline inference.",
    fullDescription:
      "NotesHub is a full-cycle mobile project: a custom NLP model was trained in Python on a 2,500+ sample dataset, optimized with TensorFlow Lite, and integrated into a native Android app for low-latency offline categorization. The engineering effort included building a reproducible preprocessing pipeline to ensure identical tokenization across training and runtime, and extensive debugging using token-level validation and model checksum comparisons. Extensive evaluation and edge-case testing ensured robust classification across noisy user inputs and diverse note formats. Production optimizations reduced model size and inference latency, enabling a responsive user experience while keeping all data private on-device.",
    image: notesHubPreview,
    screenshots: [
      notesHubScreenshot1,
      notesHubScreenshot2,
      notesHubScreenshot3,
      notesHubScreenshot4,
    ],
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
    category: "Mobile ML Application",
    role: "Independent developer responsible for dataset preparation, NLP model training, TensorFlow Lite optimization, Android integration, and inference debugging.",
    github: "https://github.com/DoLLIuk/Note_Classification",
    demo: "",
    previewMode: "contain",
    screenshotLayout: "mobile",
    showDetailHeroImage: false,
  },
  {
    id: 2,
    title: "Portfolio Generator",
    description: "No-code tool for creating personal portfolio websites",
    fullDescription: "Personal portfolio website builder that requires no programming skills. Users can choose a template, customize colors and fonts, add information about themselves and their projects through a user-friendly interface. The finished site can be published with one click. All created sites are fully responsive and optimized.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["React", "TypeScript", "Framer Motion"],
    category: "Frontend Web Application",
    role: "Developer responsible for product concept, UI architecture, responsive frontend implementation, and reusable customization flows.",
    github: "https://github.com/yourusername/project4",
    demo: "https://demo4.example.com",
    previewMode: "cover",
    screenshotLayout: "desktop",
    showDetailHeroImage: true,
  },
  {
    id: 4,
    title: "Local Explorer",
    description:
      "A native iOS application designed to enhance urban exploration by helping users discover local points of interest. The app features a responsive, modern interface that provides real-time navigation and personalized discovery through deep integration with location-based services.",
    fullDescription:
      "Local Explorer is a native iOS app that helps users discover nearby points of interest with a clean, accessible SwiftUI interface. It integrates Google Maps SDK for dynamic map interactions and the Google Directions API for smart routing. The app preprocesses and parses JSON location data to ensure fast, accurate display of POIs and supports category-driven updates and smooth UI transitions.",
    image: localExplorerPreview,
    screenshots: [localExplorerScreenshot1, localExplorerScreenshot2],
    technologies: ["Swift", "SwiftUI", "Google Maps SDK", "Google Directions API"],
    features: [
      "Dynamic Map Interaction: Real-time discovery of nearby restaurants, hotels, and attractions using Google Maps SDK.",
      "Smart Routing: Automated route generation and distance calculation powered by the Google Directions API.",
      "Advanced Data Processing: Custom JSON parsing and transformation logic to ensure fast, accurate display of location data.",
      "Modern UI/UX: Clean, accessible SwiftUI interface with category-driven updates and smooth transitions.",
      "Tools & Setup: Implemented in Swift with Xcode; integrates Google Maps SDK and Google Directions API.",
    ],
    category: "Native iOS Application",
    role: "Developer responsible for SwiftUI interface design, map integration, routing logic, and location-data processing.",
    github: "",
    demo: "",
    previewMode: "cover-top",
    screenshotLayout: "mobile",
    showDetailHeroImage: false,
  },
];

export const socialLinks = {
  github: "https://github.com/DoLLIuk",
  linkedin: "https://www.linkedin.com/in/mykyta-holovko/",
  email: "mailto:golovkonikita25@gmail.com",
  phone: "tel:+12242843342",
};
