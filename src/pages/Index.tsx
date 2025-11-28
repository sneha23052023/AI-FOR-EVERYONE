import { LearnerCard } from "@/components/LearnerCard";
import { Navigation } from "@/components/Navigation";
import { ChatbotAssistant } from "@/components/ChatbotAssistant";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Lightbulb, Users, Sparkles, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Index = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState("Hi");

  useEffect(() => {
    const greetings = ["Hi", "Hello", "Hey", "Welcome back", "Good to see you"];
    setGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
  }, []);

  const learnerGroups = [
    {
      title: "KuttyMakers",
      ageGroup: "Ages 10-17",
      description: "Spark curiosity and get cozy with cool AI basics like spotting patterns and thinking logically!",
      color: "purple",
      details: {
        what: "Spark curiosity and get cozy with cool AI basics like spotting patterns and thinking logically!",
        why: "Kids are already surrounded by AI every day. Let's help them understand it instead of just using it. We want them to be creators and critical thinkers, not just consumers!",
        how: "Through fun pattern games, AI storybooks, and hands-on experiments with awesome tools like Teachable Machine and Scratch."
      }
    },
    {
      title: "Students",
      ageGroup: "Ages 18-25",
      description: "Connect what you learn in class with real-world AI that actually matters!",
      color: "blue",
      details: {
        what: "Connect what you learn in class with real-world AI that actually matters!",
        why: "Too many students graduate without knowing the tech that'll shape their careers. We need to build tomorrow's skills today!",
        how: "Through hands-on projects, exciting hackathons, mentorship from pros, and building real AI solutions that make a difference."
      }
    },
    {
      title: "Professionals",
      ageGroup: "Working Adults",
      description: "Keep up with AI changes at work and stay ahead in your career game!",
      color: "orange",
      details: {
        what: "Level up your skills to thrive in the AI-powered workplace!",
        why: "AI is changing jobs fast, especially for newcomers and service workers. Automation and new skills are reshaping everything. Let's make sure you're ready!",
        how: "Through intensive workshops, certification programs, real projects, and partnerships with industry leaders who know their stuff."
      }
    },
    {
      title: "Everyone",
      ageGroup: "All Ages",
      description: "Making sure everyone gets to understand AI, because nobody should be left out!",
      color: "green",
      details: {
        what: "Help everyone understand how AI affects our lives, culture, and communities.",
        why: "AI can be amazing for creativity, but it can also spread biases and fake news. Deepfakes and scams are real threats, especially for our elders. Let's protect and empower everyone!",
        how: "Through community hangouts, resources in your language, storytelling sessions, and grassroots programs that share AI knowledge with everyone."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      
      {user && (
        <div className="fixed top-[76px] left-6 z-40 text-foreground text-base font-semibold bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-lg">
          {greeting}, {user.name}! 👋
        </div>
      )}
      
      <Button 
        variant="ghost" 
        onClick={logout}
        className="fixed top-[76px] right-6 z-40 hover:bg-accent text-sm"
      >
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
      
      {/* Hero Section */}
      <section id="hero" className="relative py-20 px-6 bg-gradient-hero pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
              AI for Everyone
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-white/90">
              Kerala's Mission to Make AI Awesome for All
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80 leading-relaxed">
              "We've got this amazing chance to shape how AI works for people, not the other way around. Let's make it happen together!"
            </p>
            <p className="text-base text-white/70 italic">
              - Fei-Fei Li, Stanford University & Co-Founder of AI4ALL
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/register')}
              className="bg-white text-vivid-purple hover:bg-white/90 text-xl px-8 py-6 rounded-full shadow-glow-hover transform transition-all duration-300 hover:scale-110 mt-8"
            >
              Jump In!
            </Button>
          </div>
        </div>
      </section>

      {/* TL;DR Section */}
      <section id="tldr" className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <Card className="p-8 bg-gradient-to-br from-vivid-purple/10 via-hot-pink/10 to-bright-orange/10 border-2 border-primary/20 shadow-glow">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="text-bright-orange" />
              What's This All About?
            </h2>
            <p className="text-lg leading-relaxed text-foreground">
              We're on a mission to make AI knowledge accessible to everyone in Kerala! With TinkerHub's support, we're building on our awesome digital literacy legacy to turn people into AI creators, not just users. We're tackling skill gaps, workplace changes, and even fake news, all while showing the world how to do AI the right way.
            </p>
          </Card>
        </div>
      </section>

      {/* Why Kerala Section */}
      <section id="why-kerala" className="py-16 px-6 bg-gradient-to-br from-electric-blue/5 to-cyber-cyan/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-vivid-purple via-hot-pink to-bright-orange bg-clip-text text-transparent">
            Why This Matters Right Now
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-vivid-purple to-hot-pink text-white border-0 shadow-glow transform transition-all duration-300 hover:scale-105 animate-fade-in-up">
              <Brain className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Knowledge for Everyone</h3>
              <p className="leading-relaxed">
                We believe everyone deserves to understand AI, not just tech geeks. We're making sure every person in Kerala gets the knowledge they need to use AI responsibly and become a global example of how to do it right.
              </p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-electric-blue to-cyber-cyan text-white border-0 shadow-glow transform transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <Lightbulb className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Be a Maker, Not Just a User</h3>
              <p className="leading-relaxed">
                Why just use AI when you can build with it? We're helping folks in Kerala create their own AI solutions and innovations. Let's flip the script and become creators!
              </p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-bright-orange to-hot-pink text-white border-0 shadow-glow transform transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Users className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Learning Together</h3>
              <p className="leading-relaxed">
                AI knowledge should be free and open to all. We're keeping it grassroots, multilingual, and super inclusive. The best part? Everyone gets to be both a student and a teacher!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center mb-8 bg-gradient-to-r from-vivid-purple to-cyber-cyan bg-clip-text text-transparent">
            How We Roll
          </h2>
          <p className="text-2xl text-center mb-12 text-muted-foreground italic">
            Real learning happens when you think it, build it, and feel it.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-b from-vivid-purple/10 to-transparent">
              <div className="text-6xl font-black text-vivid-purple">💭</div>
              <h3 className="text-2xl font-bold text-primary">Head</h3>
              <p className="text-foreground">Get the lowdown on how AI actually works and why it matters in your everyday life.</p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-b from-cyber-cyan/10 to-transparent">
              <div className="text-6xl font-black text-cyber-cyan">🛠️</div>
              <h3 className="text-2xl font-bold text-secondary">Hand</h3>
              <p className="text-foreground">Get your hands dirty! Build cool stuff with AI tools and solve real problems in your community.</p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-b from-bright-orange/10 to-transparent">
              <div className="text-6xl font-black text-bright-orange">❤️</div>
              <h3 className="text-2xl font-bold text-accent">Heart</h3>
              <p className="text-foreground">Share what you learn, help others grow, and be part of building an AI future that works for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learner Groups Section */}
      <section id="programs" className="py-16 px-6 bg-gradient-to-br from-lime-green/5 via-cyber-cyan/5 to-electric-blue/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-bright-orange via-hot-pink to-vivid-purple bg-clip-text text-transparent">
            Find Your Track
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Pick what fits you best and click to learn more!
          </p>
          <div className="learner-card-container grid md:grid-cols-2 gap-6">
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
            Ready to Dive In?
          </h2>
          <p className="text-xl text-white/80">
            Join us in making Kerala the coolest place for AI learning and innovation!
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/register')}
            className="bg-white text-vivid-purple hover:bg-white/90 text-xl px-10 py-7 rounded-full shadow-glow-hover transform transition-all duration-300 hover:scale-110"
          >
            Let's Do This!
          </Button>
        </div>
      </section>

      <ChatbotAssistant />
    </div>
  );
};

export default Index;
