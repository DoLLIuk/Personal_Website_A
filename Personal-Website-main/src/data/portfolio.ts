import localExplorerScreenshot1 from "@/assets/local_explorer.png";
import localExplorerScreenshot2 from "@/assets/local_explorer2.png";
import localExplorerPreview from "@/assets/local_explorer_preview.png";
import voiceAssistantPreviewTrial from "@/assets/AI_Voice_Assistant_preview_trial.jpg";
import voiceAssistantPreviewTrialWhite from "@/assets/AI_Voice_Assistant_preview_trial_white.png";
import voiceAssistantScreenshot from "@/assets/ai_voice_assistant_Screenshot.png";
import voiceAssistantArchitecture from "@/assets/ai_voice_assistant_system_architecture.png";
import notesHubPreview from "@/assets/NotesHub_logo_wide.png";
import notesHubPreviewBlack from "@/assets/NotesHub_logo_wide_black.png";
import notesHubScreenshot1 from "@/assets/screenshot1_NotesHub.webp";
import notesHubScreenshot2 from "@/assets/screenshot2_NotesHub.webp";
import notesHubScreenshot3 from "@/assets/screenshot3_NotesHub.webp";
import notesHubScreenshot4 from "@/assets/screenshot4_NotesHub.webp";
import calorieTrackingAppPreview from "@/assets/calorie_tracking_app_preview.jpg";
import calorieTrackingAppScreenshot1 from "@/assets/calorie_tracking_app_screenshot_1.jpg";
import calorieTrackingAppScreenshot2 from "@/assets/calorie_tracking_app_screenshot_2.jpg";
import calorieTrackingAppScreenshot3 from "@/assets/calorie_tracking_app_screenshot_3.jpg";
import calorieTrackingAppScreenshot4 from "@/assets/calorie_tracking_app_screenshot_4.jpg";
import calorieTrackingAppScreenshot5 from "@/assets/calorie_tracking_app_screenshot_5.jpg";
import calorieTrackingAppScreenshot6 from "@/assets/calorie_tracking_app_screenshot_6.jpg";

export type ProjectStackGroup = {
  title: string;
  items: string[];
};

export type ProjectMetric = {
  label: string;
  value: string;
  note?: string;
};

export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  themedImage?: {
    light: string;
    dark: string;
  };
  screenshots?: string[];
  technologies: string[];
  previewMetrics?: string[];
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
  metrics?: ProjectMetric[];
  screenshotScale?: number;
  screenshotLayout?: "desktop" | "mobile";
  previewMode?: "contain" | "cover" | "cover-top";
  previewScale?: number;
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
    id: 2,
    title: "AI Calorie Tracker",
    description:
      "Full-stack nutrition app with AI photo analysis, 5.83s average response time, and 80%+ calorie-estimation accuracy on simple meals. Designed as a complete Flutter plus backend product with personalized goals, flexible meal logging, and reliable user correction flows.",
    fullDescription:
      "AI Calorie Tracker is a functional MVP designed to make nutrition tracking faster, clearer, and easier to sustain in everyday use. In practical testing, the photo-analysis flow returns calories and macros in about 5.83 seconds on average from image submission to result, and calorie estimation was over 80% accurate on simple low-component meals where visual interpretation is more stable. I built it as a complete product, combining a Flutter mobile app with a custom backend service for photo-based food analysis, so the experience could be designed end to end rather than as a standalone interface. The app starts with a multi-step onboarding flow that calculates personalized calorie and macronutrient targets, then supports practical day-to-day meal logging through camera upload, gallery upload, manual entry, portion confirmation, and edit/delete flows. To make the product feel reliable in real use, I added local persistence, session-based meal history, and nutrition recalculation logic that keeps totals consistent over time. I also built the backend API for photo-based food analysis, including secure request handling, portion confirmation, and consistent structured responses that made the mobile app easier to integrate and extend.",
    image: calorieTrackingAppPreview,
    screenshots: [
      calorieTrackingAppScreenshot1,
      calorieTrackingAppScreenshot2,
      calorieTrackingAppScreenshot3,
      calorieTrackingAppScreenshot4,
      calorieTrackingAppScreenshot5,
      calorieTrackingAppScreenshot6,
    ],
    metrics: [
      {
        label: "Photo Analysis Latency",
        value: "5.83s",
        note: "Average time from image submission to calories and macros returned",
      },
      {
        label: "Calorie Accuracy",
        value: "80%+",
        note: "Observed on simple low-component meals during practical testing",
      },
    ],
    previewMetrics: ["5.83s avg response", "80%+ calorie accuracy"],
    technologies: [
      "Flutter",
      "Dart",
      "Python",
      "FastAPI",
      "Material Design 3",
      "Shared Preferences",
      "Image Picker",
      "REST API Integration",
      "Widget Testing",
    ],
    previewTechnologies: [
      "Flutter",
      "Dart",
      "Python",
      "FastAPI",
      "Material Design 3",
      "Shared Preferences",
    ],
    features: [
      "Built a multi-step onboarding flow with saved draft state and persisted final nutrition targets so users can complete setup without losing progress.",
      "Implemented AI-assisted meal capture from camera and gallery input, plus a complete manual logging flow with meal type selection for flexibility.",
      "Built a custom backend flow for photo-food analysis with structured JSON output, API-key protection, and a dedicated portion-confirmation endpoint.",
      "Designed a portion confirmation step for uncertain AI results, making the overall experience more trustworthy and user-controlled.",
      "Added meal editing and deletion with proportional macro recalculation to keep calorie and nutrient totals accurate after changes.",
    ],
    highlights: [
      "Shows product thinking by supporting both AI-assisted and manual flows instead of relying on a single ideal user path.",
      "Demonstrates full-stack ownership by combining the mobile client with a purpose-built backend service for image analysis.",
      "Balances UX and reliability by adding confirmation and correction flows around AI output instead of treating model responses as always correct.",
    ],
    outcomes: [
      "Delivered a functional nutrition-tracking MVP with personalized targets, meal CRUD, AI-powered photo analysis, and backend-assisted portion confirmation.",
      "Improved usability by making the latest meal, macro progress, and daily calorie progress immediately visible from the home dashboard.",
      "Reduced friction for repeat use through draft-saving onboarding and persistent local meal history.",
      "Built a codebase that is easier to maintain and extend by separating mobile flows, meal session logic, backend contracts, configuration, and photo-analysis logic.",
    ],
    fullStack: [
      {
        title: "Mobile Application",
        items: [
          "Flutter with Material 3 UI",
          "Dart application logic",
          "Meal CRUD flows",
          "Home dashboard and onboarding experience",
        ],
      },
      {
        title: "Backend and API",
        items: [
          "Python backend service for photo-food analysis",
          "Structured JSON response design",
          "API-key protected endpoints",
          "Portion confirmation and unified error handling",
        ],
      },
      {
        title: "Data and Product Logic",
        items: [
          "Personalized calorie and macro target calculations",
          "Meal session grouping with time-window classification",
          "Proportional macro recalculation on edit",
          "Local persistence with Shared Preferences",
        ],
      },
      {
        title: "Integration and Quality",
        items: [
          "Multipart image upload for meal analysis",
          "Camera and gallery input handling",
          "Runtime configuration via dart-define",
          "Unit and widget testing for core behavior",
        ],
      },
    ],
    category: "Mobile Health and Nutrition Application",
    role: "Independent developer responsible for product workflow design, Flutter implementation, backend API design, integration, persistence, and testing.",
    team: "Independent project",
    status: "Functional MVP",
    hiddenFacts: ["Team", "Status"],
    github: "https://github.com/DoLLIuk/Lumina-Health",
    demo: "",
    previewMode: "cover-top",
    previewScale: 1.22,
    screenshotLayout: "mobile",
    showDetailHeroImage: false,
  },
  {
    id: 1,
    title: "AI Voice Assistant",
    description:
      "Desktop voice assistant with 5.35s end-to-end latency, web-aware routing, and resilient fallback behavior. Built as a practical voice product with a lean pipeline, smaller default models, and strong responsiveness on short everyday turns.",
    fullDescription:
      "AI Voice Assistant is a desktop application optimized first for perceived responsiveness and smooth turn-taking. In a representative local debug run for a short everyday user query without a reasoning-heavy path, I measured an average end-to-end turn latency of 5.35 seconds from hotkey release to TTS-ready audio, with 1.19 seconds for transcription, 1.55 seconds for main-model generation, and 1.41 seconds for speech synthesis in the illustrative sample below. I achieved that by optimizing the pipeline around smaller, faster default models, a rules-first router that can skip unnecessary routing calls, and a desktop flow designed to keep short voice turns reliable. The application turns voice input into a spoken response through a structured pipeline: audio capture, speech detection, transcription, LLM reasoning, optional web routing, speech synthesis, and local playback. I built it as a practical AI product rather than a simple model demo, with a strong focus on responsiveness, fallback behavior, and user-facing clarity. The project demonstrates applied AI engineering across desktop UI, API integration, prompt design, modular Python architecture, and runtime reliability.",
    image: voiceAssistantPreviewTrial,
    themedImage: {
      light: voiceAssistantPreviewTrialWhite,
      dark: voiceAssistantPreviewTrial,
    },
    screenshots: [voiceAssistantScreenshot],
    metrics: [
      {
        label: "Total Turn Latency",
        value: "5.35s",
        note: "Average for a short user request without a reasoning-heavy path",
      },
      {
        label: "STT Latency",
        value: "1.19s",
        note: "Short spoken query to text",
      },
      {
        label: "LLM Time",
        value: "2.75s",
        note: "Main assistant reply generation",
      },
      {
        label: "TTS Time",
        value: "1.41s",
        note: "Speech synthesis before playback",
      },
      {
        label: "Routing Overhead",
        value: "0ms",
        note: "Can rise to about 1300ms when internet-backed routing is needed",
      },
    ],
    previewMetrics: ["5.35s latency", "Web-aware routing"],
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
    previewMode: "cover",
    screenshotLayout: "desktop",
    showDetailHeroImage: false,
  },
  {
    id: 3,
    title: "NotesHub",
    description:
      "On-device Android note classifier trained on 2,500+ samples, achieving 80% validation accuracy with offline inference. Optimized for privacy and speed through TensorFlow Lite deployment and a reproducible preprocessing pipeline across training and runtime.",
    fullDescription:
      "NotesHub is a full-cycle mobile project: a custom NLP model was trained in Python on a 2,500+ sample dataset, optimized with TensorFlow Lite, and integrated into a native Android app for low-latency offline categorization. The engineering effort included building a reproducible preprocessing pipeline to ensure identical tokenization across training and runtime, and extensive debugging using token-level validation and model checksum comparisons. Extensive evaluation and edge-case testing ensured robust classification across noisy user inputs and diverse note formats. Production optimizations reduced model size and inference latency, enabling a responsive user experience while keeping all data private on-device.",
    image: notesHubPreview,
    themedImage: {
      light: notesHubPreview,
      dark: notesHubPreviewBlack,
    },
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
    previewMetrics: ["2,500+ samples", "80% val accuracy"],
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
    id: 4,
    title: "Local Explorer",
    description:
      "Native iOS app for location-based discovery and routing, built with SwiftUI and Google Maps integrations.",
    fullDescription:
      "Local Explorer is a native iOS app that helps users discover nearby points of interest with a clean, accessible SwiftUI interface. It integrates Google Maps SDK for dynamic map interactions and the Google Directions API for smart routing. The app preprocesses and parses JSON location data to ensure fast, accurate display of POIs and supports category-driven updates and smooth UI transitions.",
    image: localExplorerPreview,
    screenshots: [localExplorerScreenshot1, localExplorerScreenshot2],
    previewMetrics: ["Real-time routing", "Native iOS"],
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
