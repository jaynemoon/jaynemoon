import CaseStudy from '../../components/CaseStudy';

const MusicSynthCaseStudy = () => {
  const project = {
    id: 4,
    title: "Immersive Music Synthesizer",
    description: "WebAudio-based synthesizer with 3D spatial audio, AI-generated harmonies, and collaborative real-time music creation capabilities.",
    longDescription: "The Immersive Music Synthesizer transforms how musicians create and experience digital music. This innovative platform combines advanced WebAudio technologies with 3D spatial positioning, AI-assisted composition, and real-time collaboration features. Musicians can create complex soundscapes in virtual 3D space, collaborate with others in real-time, and let AI suggest harmonic progressions and melodies that complement their creative vision.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=800&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1571974599782-87624638275b?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&auto=format"
    ],
    technologies: ["WebAudio API", "Three.js", "Socket.io", "React", "WebRTC"],
    category: "Creative Tech",
    type: "Audio Technology",
    featured: false,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    year: "2023",
    status: "Live",
    challenge: "Creating professional-quality audio synthesis in the browser while maintaining low latency for real-time performance was technically challenging. Additionally, implementing spatial audio that works consistently across different devices and enabling seamless collaboration between multiple users required innovative approaches to audio processing and network synchronization.",
    solution: "I developed a distributed audio processing architecture using WebAudio worklets for low-latency synthesis and Web Workers for intensive calculations. The 3D spatial audio system uses HRTF-based positioning with optimized convolution algorithms. Real-time collaboration is achieved through operational transformation techniques that ensure musical synchronization across network delays.",
    results: "The platform has been used to create over 5,000 musical compositions and hosts regular virtual jam sessions with musicians worldwide. The AI harmony suggestion feature has a 78% adoption rate, and the collaborative features have enabled cross-continental music creation. The project has been featured in electronic music publications and used by several indie artists for album production.",
    role: "Audio Engineer & Full-Stack Developer",
    duration: "7 months",
    team: ["Music Producer", "WebRTC Specialist", "UI/UX Designer"]
  };

  const nextProject = {
    id: 5,
    title: "Blockchain Art Marketplace",
    caseStudyUrl: "/projects/blockchain-art",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop&auto=format"
  };

  return <CaseStudy project={project} nextProject={nextProject} />;
};

export default MusicSynthCaseStudy;