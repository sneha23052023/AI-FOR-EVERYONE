import { LearnerCard } from "@/components/LearnerCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Lightbulb, Users, Sparkles } from "lucide-react";

const Index = () => {
  const learnerGroups = [
    {
      title: "KuttyMakers",
      ageGroup: "Ages 10-17",
      description: "Develop curiosity and familiarity with foundational AI concepts such as pattern recognition and logic.",
      color: "purple",
      details: {
        what: "Develop curiosity and familiarity with foundational AI concepts such as pattern recognition and logic.",
        why: "Children are already immersed in AI. A formal introduction guides their curiosity. Without proper exposure, they risk becoming mere consumers of AI rather than creators or critical thinkers.",
        how: "Through pattern recognition games, sorting exercises, AI storybooks, and hands-on experiments using tools like Teachable Machine and Scratch."
      }
    },
    {
      title: "Students",
      ageGroup: "Ages 18-25",
      description: "Bridge the gap between academics and real-world AI applications through applied learning.",
      color: "blue",
      details: {
        what: "Bridge the gap between academics and real-world AI applications through applied learning.",
        why: "Many students graduate without understanding the technologies defining their future careers. Tomorrow's essential skills need to be developed today.",
        how: "Through project-based learning, hackathons, mentorship programs, and collaboration with industry experts to build practical AI solutions."
      }
    },
    {
      title: "Professionals",
      ageGroup: "Working Adults",
      description: "Adapt to AI's rapid integration into the workplace and stay relevant in evolving careers.",
      color: "orange",
      details: {
        what: "Upskill and reskill professionals to adapt to AI-driven workplace transformations.",
        why: "AI's rapid integration presents significant challenges for professionals, particularly freshers and those in the service industry. Automation and skill-based changes are drastically impacting the workforce.",
        how: "Through intensive workshops, certification programs, hands-on projects, and industry partnerships focused on practical AI implementation."
      }
    },
    {
      title: "Everyone",
      ageGroup: "All Ages",
      description: "Make AI literacy accessible to all, ensuring no one is left behind in the AI era.",
      color: "green",
      details: {
        what: "Create awareness about AI's impact on society, culture, and daily life for all community members.",
        why: "AI offers opportunities for self-expression but also reflects biases. The rise of deepfakes and misinformation creates risks for all, especially elders facing scams and fake news.",
        how: "Through community workshops, multilingual resources, storytelling sessions, and grassroots education programs that make AI knowledge a public good."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl">
              AI for Everyone
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-white/90">
              A Statewide Initiative for AI Literacy
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80 leading-relaxed">
              "We have a historical opportunity and responsibility to establish a human-centred framework for AI research, education, practice and policy."
            </p>
            <p className="text-base text-white/70 italic">
              - Fei-Fei Li, Stanford University & Co-Founder of AI4ALL
            </p>
            <Button 
              size="lg" 
              className="bg-white text-vivid-purple hover:bg-white/90 text-xl px-8 py-6 rounded-full shadow-glow-hover transform transition-all duration-300 hover:scale-110 mt-8"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* TL;DR Section */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <Card className="p-8 bg-gradient-to-br from-vivid-purple/10 via-hot-pink/10 to-bright-orange/10 border-2 border-primary/20 shadow-glow">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="text-bright-orange" />
              TL;DR
            </h2>
            <p className="text-lg leading-relaxed text-foreground">
              The "AI for Everyone" initiative, enabled by TinkerHub, is a statewide program aiming to democratize AI knowledge across Kerala. Building on Kerala's digital literacy legacy, it aims to make communities active creators in the AI era, addressing student skill gaps, workforce changes, and misinformation, while positioning Kerala as a global model for responsible AI.
            </p>
          </Card>
        </div>
      </section>

      {/* Why Kerala Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-electric-blue/5 to-cyber-cyan/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-vivid-purple via-hot-pink to-bright-orange bg-clip-text text-transparent">
            Why Kerala Needs AI Literacy Now
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-vivid-purple to-hot-pink text-white border-0 shadow-glow transform transition-all duration-300 hover:scale-105 animate-fade-in-up">
              <Brain className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Literacy for All & Global Model</h3>
              <p className="leading-relaxed">
                Equitable AI education that empowers every citizen to understand and apply AI responsibly. Position Kerala as a global model for AI education rooted in social responsibility.
              </p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-electric-blue to-cyber-cyan text-white border-0 shadow-glow transform transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <Lightbulb className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Creators, Not Just Consumers</h3>
              <p className="leading-relaxed">
                Enabling Keralites to innovate and build AI-driven solutions, not just use them. Transform from passive users to active creators.
              </p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-bright-orange to-hot-pink text-white border-0 shadow-glow transform transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Users className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Knowledge as a Public Good</h3>
              <p className="leading-relaxed">
                Making AI knowledge accessible to all, with emphasis on open, grassroots-first, multilingual, and equitable approaches where everyone becomes both learner and teacher.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center mb-8 bg-gradient-to-r from-vivid-purple to-cyber-cyan bg-clip-text text-transparent">
            Our Approach
          </h2>
          <p className="text-2xl text-center mb-12 text-muted-foreground italic">
            True learning engages the head, hand, and heart.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-b from-vivid-purple/10 to-transparent">
              <div className="text-6xl font-black text-vivid-purple">💭</div>
              <h3 className="text-2xl font-bold text-primary">Head</h3>
              <p className="text-foreground">Understand how AI works and why it matters in daily life.</p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-b from-cyber-cyan/10 to-transparent">
              <div className="text-6xl font-black text-cyber-cyan">🛠️</div>
              <h3 className="text-2xl font-bold text-secondary">Hand</h3>
              <p className="text-foreground">Build with AI tools, create projects, and solve problems that matter locally.</p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-b from-bright-orange/10 to-transparent">
              <div className="text-6xl font-black text-bright-orange">❤️</div>
              <h3 className="text-2xl font-bold text-accent">Heart</h3>
              <p className="text-foreground">Share knowledge, mentor others, and shape a more inclusive AI future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learner Groups Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-lime-green/5 via-cyber-cyan/5 to-electric-blue/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-bright-orange via-hot-pink to-vivid-purple bg-clip-text text-transparent">
            Programs for Everyone
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Click on any card to learn more about each program
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {learnerGroups.map((group, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <LearnerCard {...group} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-5xl font-black text-white">
            Ready to Join the AI Revolution?
          </h2>
          <p className="text-xl text-white/80">
            Be part of Kerala's journey to become a global model for AI literacy
          </p>
          <Button 
            size="lg" 
            className="bg-white text-vivid-purple hover:bg-white/90 text-xl px-10 py-7 rounded-full shadow-glow-hover transform transition-all duration-300 hover:scale-110"
          >
            Start Your AI Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
