import CaseStudy from '../../components/CaseStudy';

const CollabPlatformCaseStudy = () => {
  const project = {
    id: 7,
    title: "Real-time Collaboration Platform",
    description: "Advanced real-time collaboration platform with AI-powered suggestions, integrated video calls, and intelligent workflow optimization.",
    longDescription: "The Real-time Collaboration Platform redefines how teams work together in the digital age. Combining seamless real-time document editing, AI-powered productivity suggestions, and integrated communication tools, this platform creates a unified workspace where teams can collaborate effortlessly. The system learns from team behaviors to suggest optimal workflows and automate routine tasks.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&auto=format"
    ],
    technologies: ["Next.js", "Socket.io", "WebRTC", "OpenAI", "PostgreSQL"],
    category: "Full Stack",
    type: "Productivity",
    featured: false,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    year: "2024",
    status: "Live",
    challenge: "Modern teams struggle with fragmented collaboration tools, context switching between applications, and maintaining productivity in remote environments. The challenge was creating a unified platform that could handle real-time collaboration at scale while providing intelligent insights without being intrusive or overwhelming to users.",
    solution: "I architected a microservices-based platform with real-time operational transformation for document editing, WebRTC for peer-to-peer communication, and machine learning models for workflow optimization. The AI system analyzes team patterns to suggest meeting times, document structures, and task assignments while maintaining privacy and user agency.",
    results: "The platform serves 10,000+ active users across 500+ organizations with 99.9% uptime. Teams report 40% faster project completion times and 60% reduction in unnecessary meetings. The AI suggestions have an 87% acceptance rate, and the platform has processed over 1 million collaborative sessions with seamless real-time synchronization.",
    role: "Full-Stack Architect & Team Lead",
    duration: "14 months",
    team: ["Backend Engineer", "AI/ML Engineer", "Frontend Developer", "DevOps Engineer", "Product Designer"]
  };

  const nextProject = {
    id: 8,
    title: "Voice-Controlled Smart Dashboard",
    caseStudyUrl: "/projects/smart-dashboard",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&auto=format"
  };

  return <CaseStudy project={project} nextProject={nextProject} />;
};

export default CollabPlatformCaseStudy;