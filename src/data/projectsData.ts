
// Live & Deployed Projects Data
export const liveApps = [
  {
    id: "task-manager",
    title: "TaskFlow Pro",
    description: "A revolutionary task management platform featuring AI-powered prioritization, real-time collaboration, and intuitive drag-and-drop workflows. Designed for teams who demand excellence and efficiency in their daily operations.",
    url: "https://taskflow-pro.example.com",
    gradient: "from-blue-600 to-purple-600",
    icon: "📋"
  },
  {
    id: "analytics-dashboard",
    title: "DataViz Analytics",
    description: "Transform complex data into compelling visual stories with advanced analytics, machine learning insights, and real-time monitoring capabilities. Your data deserves beautiful, actionable dashboards.",
    url: "https://dataviz-analytics.example.com",
    gradient: "from-emerald-500 to-teal-600",
    icon: "📊"
  },
  {
    id: "fitness-tracker",
    title: "FitLife Coach",
    description: "Personal fitness companion that adapts to your lifestyle with AI-powered workout recommendations, nutrition tracking, and progress visualization. Transform your health journey with intelligent insights.",
    url: "https://fitlife-coach.example.com",
    gradient: "from-orange-500 to-red-600",
    icon: "💪"
  },
  {
    id: "recipe-finder",
    title: "ChefMate Kitchen",
    description: "Discover culinary magic with smart recipe recommendations based on your ingredients, dietary preferences, and cooking skills. Features meal planning, grocery lists, and cooking timers.",
    url: "https://chefmate-kitchen.example.com",
    gradient: "from-yellow-500 to-orange-600",
    icon: "👨‍🍳"
  },
  {
    id: "budget-planner",
    title: "WealthWise Finance",
    description: "Take control of your financial future with intelligent budgeting, expense tracking, and investment insights. Secure, intuitive, and designed for financial peace of mind.",
    url: "https://wealthwise-finance.example.com",
    gradient: "from-green-600 to-emerald-600",
    icon: "💰"
  },
  {
    id: "learning-platform",
    title: "SkillForge Academy",
    description: "Interactive learning platform with adaptive coursework, skill assessments, and personalized learning paths. Master new skills with engaging content and community support.",
    url: "https://skillforge-academy.example.com",
    gradient: "from-indigo-600 to-purple-600",
    icon: "🎓"
  },
  {
    id: "weather-app",
    title: "WeatherSense Pro",
    description: "Advanced weather forecasting with hyperlocal predictions, severe weather alerts, and beautiful visualizations. Stay ahead of the weather with precision meteorology.",
    url: "https://weathersense-pro.example.com",
    gradient: "from-cyan-500 to-blue-600",
    icon: "🌤️"
  },
  {
    id: "music-streamer",
    title: "SoundWave Studio",
    description: "High-fidelity music streaming with AI-curated playlists, social listening features, and artist discovery tools. Experience music like never before with spatial audio support.",
    url: "https://soundwave-studio.example.com",
    gradient: "from-purple-600 to-pink-600",
    icon: "🎵"
  },
  {
    id: "travel-planner",
    title: "WanderWise Travel",
    description: "Intelligent travel planning with real-time booking, local recommendations, and itinerary optimization. Turn your travel dreams into perfectly planned adventures.",
    url: "https://wanderwise-travel.example.com",
    gradient: "from-teal-500 to-cyan-600",
    icon: "✈️"
  },
  {
    id: "productivity-suite",
    title: "FocusFlow Workspace",
    description: "All-in-one productivity suite combining note-taking, time tracking, and project management. Boost your productivity with seamless workflow integration and team collaboration.",
    url: "https://focusflow-workspace.example.com",
    gradient: "from-slate-600 to-gray-700",
    icon: "⚡"
  }
];

// In Development Projects Data
export const devProjects = [
  {
    title: "E-Commerce Platform",
    description: "Next-generation e-commerce solution with AI-driven personalization, advanced inventory management, and seamless payment processing.",
    progress: 75,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    gradient: "from-orange-500 to-red-600",
    icon: "🛒",
    status: "Beta Testing",
    expectedCompletion: "Q2 2024"
  },
  {
    title: "Social Network Platform",
    description: "Privacy-first social platform with end-to-end encryption, decentralized architecture, and innovative content discovery algorithms.",
    progress: 45,
    technologies: ["Next.js", "GraphQL", "MongoDB", "WebRTC", "Docker"],
    gradient: "from-pink-500 to-rose-600",
    icon: "🌐",
    status: "Development",
    expectedCompletion: "Q3 2024"
  },
  {
    title: "AI Writing Assistant",
    description: "Intelligent writing companion powered by advanced language models, real-time collaboration, and industry-specific templates.",
    progress: 30,
    technologies: ["Vue.js", "Python", "TensorFlow", "Redis", "GCP"],
    gradient: "from-indigo-500 to-purple-600",
    icon: "✍️",
    status: "Prototyping",
    expectedCompletion: "Q4 2024"
  },
  {
    title: "IoT Dashboard",
    description: "Comprehensive IoT device management platform with real-time monitoring, predictive analytics, and automated workflows.",
    progress: 60,
    technologies: ["Angular", "Express", "InfluxDB", "MQTT", "Kubernetes"],
    gradient: "from-cyan-500 to-blue-600",
    icon: "📡",
    status: "Alpha Testing",
    expectedCompletion: "Q2 2024"
  }
];

// Concept Projects Data
export const conceptProjects = [
  {
    title: "AR Learning Platform",
    description: "Immersive augmented reality education platform that transforms traditional learning into interactive 3D experiences for students.",
    targetAudience: "Educational Institutions",
    keyFeatures: ["3D Object Visualization", "Interactive Simulations", "Progress Tracking", "Multi-language Support"],
    difficulty: "High" as const,
    timeEstimate: "12-18 months",
    gradient: "from-purple-600 to-pink-600",
    icon: "🥽",
    priority: "High" as const
  },
  {
    title: "Sustainable City Planner",
    description: "AI-powered urban planning tool that helps city planners design more sustainable and efficient urban environments.",
    targetAudience: "Urban Planners & Government",
    keyFeatures: ["Environmental Impact Analysis", "Traffic Flow Optimization", "Resource Management", "Community Input Integration"],
    difficulty: "High" as const,
    timeEstimate: "15-20 months",
    gradient: "from-green-600 to-emerald-600",
    icon: "🏙️",
    priority: "Medium" as const
  },
  {
    title: "Wellness Companion App",
    description: "Personalized wellness platform that combines mental health support, fitness tracking, and nutrition guidance in one seamless experience.",
    targetAudience: "Health-conscious Individuals",
    keyFeatures: ["Mood Tracking", "Personalized Workouts", "Nutrition Planning", "Meditation Sessions"],
    difficulty: "Medium" as const,
    timeEstimate: "8-12 months",
    gradient: "from-teal-500 to-cyan-600",
    icon: "💪",
    priority: "High" as const
  },
  {
    title: "Blockchain Voting System",
    description: "Secure, transparent, and accessible digital voting platform built on blockchain technology for democratic processes.",
    targetAudience: "Government Organizations",
    keyFeatures: ["Cryptographic Security", "Transparency Ledger", "Identity Verification", "Real-time Results"],
    difficulty: "High" as const,
    timeEstimate: "18-24 months",
    gradient: "from-blue-600 to-indigo-600",
    icon: "🗳️",
    priority: "Low" as const
  },
  {
    title: "Smart Home Hub",
    description: "Unified smart home management system with AI-powered automation, energy optimization, and seamless device integration.",
    targetAudience: "Homeowners & Tech Enthusiasts",
    keyFeatures: ["Device Integration", "Energy Monitoring", "Automated Routines", "Voice Control"],
    difficulty: "Medium" as const,
    timeEstimate: "10-14 months",
    gradient: "from-yellow-500 to-orange-600",
    icon: "🏠",
    priority: "Medium" as const
  },
  {
    title: "Music Collaboration Platform",
    description: "Cloud-based platform enabling musicians worldwide to collaborate on projects with real-time audio sharing and mixing capabilities.",
    targetAudience: "Musicians & Producers",
    keyFeatures: ["Real-time Audio Sync", "Version Control", "Virtual Instruments", "Copyright Management"],
    difficulty: "Medium" as const,
    timeEstimate: "6-10 months",
    gradient: "from-violet-500 to-purple-600",
    icon: "🎵",
    priority: "Low" as const
  }
];
