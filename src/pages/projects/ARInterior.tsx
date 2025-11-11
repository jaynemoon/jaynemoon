import CaseStudy from '../../components/CaseStudy';

const ARInteriorCaseStudy = () => {
  const project = {
    id: 6,
    title: "AR Interior Design Tool",
    description: "Augmented reality application for interior design with 3D object placement, real-time lighting simulation, and collaborative design features.",
    longDescription: "The AR Interior Design Tool revolutionizes how people visualize and plan interior spaces. Using cutting-edge augmented reality technology, users can place virtual furniture and decorations in their real environments, see how different lighting conditions affect the space, and collaborate with designers or family members in real-time. This tool bridges the gap between imagination and reality in interior design.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&h=400&fit=crop&auto=format"
    ],
    technologies: ["AR.js", "Three.js", "WebXR", "React", "Computer Vision"],
    category: "Creative Tech",
    type: "AR/VR",
    featured: false,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    year: "2023",
    status: "Development",
    challenge: "Creating realistic AR furniture placement that accounts for proper scaling, lighting, and occlusion was technically complex. The app needed to work across various devices with different camera capabilities while maintaining consistent performance and user experience. Additionally, ensuring accurate spatial tracking and realistic rendering in diverse lighting conditions posed significant challenges.",
    solution: "I developed a hybrid approach using WebXR for device compatibility and custom computer vision algorithms for surface detection and tracking. The system includes adaptive lighting models that adjust virtual objects to match real-world illumination, and a collaborative framework that allows multiple users to view and modify the same AR scene simultaneously.",
    results: "The application has been adopted by 50+ interior design professionals and has helped visualize over 10,000 room designs. User testing shows 85% improved design decision confidence and 60% reduction in furniture return rates. The tool has been featured in design technology conferences and is currently being integrated with major furniture retailer catalogs.",
    role: "AR Developer & 3D Graphics Engineer",
    duration: "12 months",
    team: ["Interior Design Consultant", "UX/UI Designer", "Computer Vision Engineer", "Mobile Developer"]
  };

  const nextProject = {
    id: 7,
    title: "Real-time Collaboration Platform",
    caseStudyUrl: "/projects/collab-platform",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&auto=format"
  };

  return <CaseStudy project={project} nextProject={nextProject} />;
};

export default ARInteriorCaseStudy;