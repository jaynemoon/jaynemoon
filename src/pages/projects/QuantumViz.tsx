import CaseStudy from '../../components/CaseStudy';

const QuantumVizCaseStudy = () => {
  const project = {
    id: 2,
    title: "Quantum Algorithm Visualizer",
    description: "Interactive 3D platform for visualizing quantum computing algorithms with real-time quantum state representations and educational simulations.",
    longDescription: "The Quantum Algorithm Visualizer bridges the gap between abstract quantum computing concepts and intuitive understanding. This educational platform transforms complex quantum algorithms into interactive 3D visualizations, making quantum computing accessible to students, researchers, and curious minds. The project features real-time quantum state visualization, interactive circuit builders, and comprehensive educational content that demystifies the quantum world.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=800&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&auto=format"
    ],
    technologies: ["Three.js", "WebGL", "Qiskit", "D3.js", "TypeScript"],
    category: "Creative Tech",
    type: "Data Visualization",
    featured: true,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    year: "2024",
    status: "Live",
    challenge: "Quantum computing concepts are notoriously difficult to visualize and understand. Traditional educational materials often rely on mathematical abstractions that don't provide intuitive understanding. The challenge was creating accurate visual representations of quantum states while maintaining scientific precision and making the content accessible to learners with varying technical backgrounds.",
    solution: "I developed a multi-layered visualization system using WebGL and Three.js to render quantum states in real-time 3D space. The platform includes interactive Bloch spheres, quantum circuit diagrams, and animated algorithm demonstrations. Each visualization is accompanied by adjustable parameters, step-by-step explanations, and hands-on exercises that allow users to experiment with quantum algorithms.",
    results: "The platform has been adopted by 15 universities as a teaching tool and has over 25,000 registered users. Educational effectiveness studies show a 60% improvement in quantum computing concept retention among students. The project has been featured at quantum computing conferences and has contributed to several research publications on quantum education.",
    role: "Lead Developer & Visualization Designer",
    duration: "8 months",
    team: ["Quantum Computing Researcher", "Educational Content Designer", "UI/UX Designer"]
  };

  const nextProject = {
    id: 3,
    title: "AI-Powered Design System",
    caseStudyUrl: "/projects/ai-design-system",
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&h=400&fit=crop&auto=format"
  };

  return <CaseStudy project={project} nextProject={nextProject} />;
};

export default QuantumVizCaseStudy;