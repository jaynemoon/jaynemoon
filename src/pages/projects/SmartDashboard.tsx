import CaseStudy from '../../components/CaseStudy';

const SmartDashboardCaseStudy = () => {
  const project = {
    id: 8,
    title: "Voice-Controlled Smart Dashboard",
    description: "IoT dashboard with natural language processing, voice commands, and predictive analytics for smart home automation.",
    longDescription: "The Voice-Controlled Smart Dashboard transforms how users interact with their smart home ecosystem. By combining advanced natural language processing with IoT device integration, this platform allows users to control and monitor their entire smart home through conversational voice commands. The system learns from user patterns to provide predictive automation and proactive suggestions for energy optimization and comfort enhancement.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&auto=format"
    ],
    technologies: ["React", "Node.js", "Speech Recognition", "IoT", "Machine Learning"],
    category: "IoT",
    type: "Smart Home",
    featured: false,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    year: "2023",
    status: "Live",
    challenge: "Creating a voice interface that could understand natural language commands for diverse IoT devices while maintaining privacy and working reliably in various acoustic environments. The system needed to learn user preferences and provide predictive automation without being intrusive or making incorrect assumptions about user intent.",
    solution: "I developed a hybrid architecture combining local speech processing for privacy with cloud-based NLP for complex query understanding. The system uses federated learning to improve voice recognition while keeping personal data on-device. Machine learning models analyze usage patterns to provide predictive automation suggestions and energy optimization recommendations.",
    results: "Deployed in 1,200+ smart homes with 96% voice command accuracy and 40% reduction in manual device interactions. Users report 25% average energy savings through predictive automation. The platform has integrated with 50+ IoT device types and maintains complete local processing for privacy-sensitive commands while providing advanced analytics through anonymized data.",
    role: "IoT Engineer & Voice Interface Developer",
    duration: "8 months",
    team: ["IoT Systems Engineer", "Machine Learning Engineer", "UX Designer", "Privacy Consultant"]
  };

  // No next project for the last one, loops back to first
  const nextProject = {
    id: 1,
    title: "Neural Style Transfer Studio",
    caseStudyUrl: "/projects/neural-style-studio",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop&auto=format"
  };

  return <CaseStudy project={project} nextProject={nextProject} />;
};

export default SmartDashboardCaseStudy;