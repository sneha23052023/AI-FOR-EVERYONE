import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface LearnerCardProps {
  title: string;
  ageGroup: string;
  description: string;
  color: string;
  details: {
    what: string;
    why: string;
    how: string;
  };
}

export const LearnerCard = ({ title, ageGroup, description, color, details }: LearnerCardProps) => {
  const navigate = useNavigate();
  
  const colorClasses = {
    purple: "from-vivid-purple to-hot-pink hover:shadow-glow-hover",
    blue: "from-electric-blue to-cyber-cyan hover:shadow-glow-hover",
    orange: "from-bright-orange to-hot-pink hover:shadow-glow-hover",
    green: "from-lime-green to-cyber-cyan hover:shadow-glow-hover",
  }[color] || "from-vivid-purple to-hot-pink";

  const handleClick = () => {
    navigate(`/program/${title.toLowerCase().replace(/\s+/g, '')}`);
  };

  return (
    <Card 
      onClick={handleClick}
      className={`p-6 bg-gradient-to-br ${colorClasses} text-white border-0 shadow-glow cursor-pointer transform transition-all duration-300 hover:scale-105 animate-fade-in-up`}
    >
      <span className="inline-block mb-4 px-3 py-1 bg-white/20 text-white rounded-full text-sm font-semibold">{ageGroup}</span>
      <h3 className="text-3xl font-black mb-4">{title}</h3>
      <p className="text-lg leading-relaxed">{description}</p>
      <p className="mt-4 text-sm opacity-80">Click to learn more →</p>
    </Card>
  );
};
