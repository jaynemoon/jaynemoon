import CaseStudy from '../../components/CaseStudy';

const NeuralStyleStudioCaseStudy = () => {
  const project = {
    id: 1,
    title: "Neural Style Transfer Studio",
    description: "AI-powered creative platform that transforms images using neural networks, allowing artists to blend styles with cutting-edge machine learning algorithms.",
    longDescription: "Neural Style Transfer Studio represents the intersection of artificial intelligence and creative expression. This innovative platform democratizes AI-powered art creation by making advanced neural network techniques accessible to artists, designers, and creative professionals. The project combines state-of-the-art machine learning models with an intuitive user interface, enabling users to transform their images using the artistic styles of famous painters or create entirely new aesthetic expressions.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&h=800&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fbd25c85cd64?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=600&h=400&fit=crop&auto=format"
    ],
    technologies: ["TensorFlow.js", "React", "Python", "GANs", "Canvas API"],
    category: "AI Development",
    type: "Creative AI",
    featured: true,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    year: "2024",
    status: "Live",
    challenge: "The primary challenge was creating a real-time neural style transfer system that could process high-resolution images while maintaining artistic quality. Traditional neural style transfer methods were too slow for interactive use, and existing solutions lacked the flexibility for creative experimentation that professional artists required.",
    solution: "I developed a hybrid approach combining lightweight neural networks with progressive enhancement techniques. The solution features real-time preview capabilities using optimized TensorFlow.js models, while high-resolution processing occurs server-side with GPU acceleration. The interface includes advanced parameter controls, batch processing, and a collaborative workspace for creative teams.",
    results: "The platform has been adopted by over 500 creative professionals and has processed more than 100,000 artistic transformations. Users report a 70% reduction in creative iteration time, and the platform has been featured in major design publications. The project has also contributed to open-source AI art tools, with the lightweight models being downloaded over 10,000 times.",
    role: "Full-Stack Developer & AI Engineer",
    duration: "6 months",
    team: ["AI Researcher", "UX Designer", "DevOps Engineer"]
  };

  const nextProject = {
    id: 2,
    title: "Quantum Algorithm Visualizer",
    caseStudyUrl: "/projects/quantum-viz",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop&auto=format"
  };

  return <CaseStudy project={project} nextProject={nextProject} />;
};

export default NeuralStyleStudioCaseStudy;