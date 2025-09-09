import CaseStudy from '../../components/CaseStudy';

const AIDesignSystemCaseStudy = () => {
  const project = {
    id: 3,
    title: "AI-Powered Design System",
    description: "Revolutionary design system with intelligent component generation, automated accessibility checking, and AI-driven design suggestions.",
    longDescription: "The AI-Powered Design System revolutionizes how design teams create and maintain consistent user interfaces. By leveraging advanced machine learning algorithms, this system automatically generates design components, suggests optimal layouts, and ensures accessibility compliance. It bridges the gap between designers and developers by creating a unified workflow that adapts to team preferences and project requirements while maintaining design consistency at scale.",
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=1200&h=800&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&auto=format"
    ],
    technologies: ["React", "TypeScript", "OpenAI API", "Figma API", "Tailwind"],
    category: "AI Development",
    type: "Design Tools",
    featured: true,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    year: "2024",
    status: "Beta",
    challenge: "Design systems traditionally require extensive manual maintenance and often become outdated quickly. Teams struggle with inconsistent component usage, accessibility compliance, and the time-consuming process of creating and updating design tokens. The challenge was to create an intelligent system that could evolve with design trends while maintaining brand consistency.",
    solution: "I built an AI-driven platform that analyzes existing design patterns and automatically suggests component variations, color schemes, and layout improvements. The system integrates with Figma and popular development frameworks, providing real-time design-to-code conversion, automated accessibility testing, and intelligent component recommendations based on usage patterns and design best practices.",
    results: "The system has reduced design system maintenance overhead by 80% for partner teams and improved design-development handoff efficiency by 65%. Over 200 design teams are currently using the beta version, and the platform has generated over 50,000 component variations. The AI suggestions have achieved a 92% acceptance rate from design teams.",
    role: "Lead AI Engineer & Product Designer",
    duration: "10 months",
    team: ["Design Systems Architect", "Machine Learning Engineer", "Frontend Developer", "UX Researcher"]
  };

  const nextProject = {
    id: 4,
    title: "Immersive Music Synthesizer",
    caseStudyUrl: "/projects/music-synth",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop&auto=format"
  };

  return <CaseStudy project={project} nextProject={nextProject} />;
};

export default AIDesignSystemCaseStudy;