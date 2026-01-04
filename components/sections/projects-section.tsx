"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "PeerPrep",
    description:
      "Collaborative coding interview platform with real-time code editor, video chat, and shared problem-solving sessions. Designed to help peers practice together efficiently.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Stream Video",
      "Clerk",
      "Tailwind CSS",
    ],
    link: "https://peer-prep-one.vercel.app/",
    color: "from-blue-400/20 to-purple-500/20",
  },
  {
    title: "Socially",
    description:
      "A modern social media web app with user accounts, rich posts with media, likes, bookmarks, comments, notifications, and real-time chat. Built for scalability using a full-stack TypeScript setup.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Lucia Auth",
      "Google OAuth",
      "UploadThing",
      "Stream Chat",
      "Tailwind CSS",
      "TanStack Query",
    ],
    link: "https://socially-gilt-seven.vercel.app",
    color: "from-indigo-500/20 to-cyan-500/20",
  },
  {
    title: "Spendly",
    description:
      "AI-powered expense tracking app with smart insights and analytics. Uses intelligent scripts to scan and analyze spending patterns for better financial decisions.",
    tech: ["Next.js", "TypeScript", "Prisma", "Clerk", "Tailwind CSS"],
    link: "https://spendly-one-rho.vercel.app/",
    color: "from-cyan-500/20 to-blue-500/20",
  },
];

const secondaryProjects = [
  {
    title: "PrepMate AI",
    description:
      "Interview preparation platform that generates tailored questions and answers based on job descriptions and experience level. Built to help candidates ace their interviews.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    link: "https://ai-mock-interview-ebba4.web.app/",
    color: "from-teal-500/20 to-cyan-500/20",
  },
  {
    title: "CrowdFund DApp",
    description:
      "A decentralized crowdfunding application where campaigns are created and funded on-chain using smart contracts. Users connect via MetaMask and interact with Ethereum smart contracts deployed on the Sepolia testnet.",
    tech: [
      "Next.js",
      "React",
      "Solidity",
      "Remix IDE",
      "Ethereum",
      "Sepolia Testnet",
      "MetaMask",
      "Ethers.js",
      "Web3",
    ],
    link: "https://crowdfund-lac.vercel.app/",
    color: "from-emerald-400/20 to-teal-500/20",
  },
  {
    title: "Ghumkad Travels",
    description:
      "AI-powered trip planner that generates complete travel itineraries in seconds—from destinations to daily activity breakdowns.",
    tech: ["React", "Node.js", "MongoDB", "JavaScript", "Tailwind CSS"],
    link: "https://ai-travel-planner-two-beta.vercel.app/",
    color: "from-blue-500/20 to-indigo-500/20",
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only apply 3D effect to visible cards
      const allCards = showAllProjects 
        ? [...cardsRef.current.slice(0, projects.length), ...cardsRef.current.slice(projects.length)]
        : cardsRef.current.slice(0, projects.length);
      
      allCards.forEach((card) => {
        if (!card) return;

        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 20;
          const rotateY = (centerX - x) / 20;

          gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      });
      
      // Animate secondary projects when they appear
      if (showAllProjects) {
        const secondaryCards = cardsRef.current.slice(projects.length);
        gsap.fromTo(
          secondaryCards,
          { 
            opacity: 0, 
            y: 30,
            rotateX: -10,
            rotateY: 0,
            scale: 0.95
          },
          { 
            opacity: 1, 
            y: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.1
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [showAllProjects]);

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building
            modern, AI-powered web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="reveal group relative"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glow effect */}
              <div
                className={`absolute -inset-px bg-gradient-to-br ${project.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
              />

              <div className="relative glass rounded-2xl p-6 h-full flex flex-col border border-border/50 group-hover:border-primary/30 transition-colors">
                {/* Project title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 bg-secondary rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {
          showAllProjects && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 md:mt-6">
          {secondaryProjects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                cardsRef.current[projects.length + index] = el;
              }}
              className="reveal group relative"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glow effect */}
              <div
                className={`absolute -inset-px bg-gradient-to-br ${project.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
              />

              <div className="relative glass rounded-2xl p-6 h-full flex flex-col border border-border/50 group-hover:border-primary/30 transition-colors">
                {/* Project title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 bg-secondary rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
          )
        }

        <button 
          className="mt-8 mx-auto block px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          onClick={() => setShowAllProjects(!showAllProjects)}
        >
          {showAllProjects ? "Show Less" : "View All Projects"}
        </button>
      </div>
    </section>
  );
}
