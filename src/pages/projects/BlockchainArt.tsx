import CaseStudy from '../../components/CaseStudy';

const BlockchainArtCaseStudy = () => {
  const project = {
    id: 5,
    title: "Blockchain Art Marketplace",
    description: "Decentralized platform for digital art trading with NFT integration, smart contracts, and sustainable blockchain technology.",
    longDescription: "The Blockchain Art Marketplace reimagines digital art ownership and trading through innovative blockchain technology. This platform empowers artists to tokenize their digital creations as NFTs while maintaining creator royalties and provenance tracking. Built with sustainability in mind, it utilizes energy-efficient blockchain networks and implements carbon offset mechanisms to minimize environmental impact while providing artists with new revenue streams.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=800&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop&auto=format"
    ],
    technologies: ["Solidity", "Web3.js", "React", "IPFS", "Ethereum"],
    category: "Blockchain",
    type: "Web3 Platform",
    featured: false,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    year: "2023",
    status: "Live",
    challenge: "The NFT space faced significant challenges including environmental concerns, artist exploitation, and complex user experiences that hindered mainstream adoption. Traditional platforms offered limited creator control and often charged excessive fees while providing minimal value to artists beyond basic tokenization services.",
    solution: "I designed a comprehensive marketplace with custom smart contracts that ensure perpetual royalties, implement fair pricing algorithms, and provide detailed analytics for creators. The platform uses Layer 2 solutions to reduce gas fees and environmental impact, while IPFS ensures decentralized storage of artwork metadata and files.",
    results: "The platform has facilitated over $2M in art sales while maintaining creator royalty compliance at 99.8%. Over 500 artists have joined the platform, and the average transaction fee is 75% lower than major competitors. The sustainability initiatives have offset 100% of the platform's carbon footprint and established it as a leader in eco-friendly NFT solutions.",
    role: "Blockchain Developer & Product Lead",
    duration: "9 months",
    team: ["Smart Contract Auditor", "Frontend Developer", "Community Manager", "Legal Advisor"]
  };

  const nextProject = {
    id: 6,
    title: "AR Interior Design Tool",
    caseStudyUrl: "/projects/ar-interior",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format"
  };

  return <CaseStudy project={project} nextProject={nextProject} />;
};

export default BlockchainArtCaseStudy;