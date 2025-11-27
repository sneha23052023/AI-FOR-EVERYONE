import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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
  const colorClasses = {
    purple: "from-vivid-purple to-hot-pink hover:shadow-glow-hover",
    blue: "from-electric-blue to-cyber-cyan hover:shadow-glow-hover",
    orange: "from-bright-orange to-hot-pink hover:shadow-glow-hover",
    green: "from-lime-green to-cyber-cyan hover:shadow-glow-hover",
  }[color] || "from-vivid-purple to-hot-pink";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card 
          className={`p-6 bg-gradient-to-br ${colorClasses} text-white cursor-pointer transform transition-all duration-300 hover:scale-105 shadow-glow border-0 animate-fade-in-up`}
        >
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-90 mb-3">{ageGroup}</p>
          <p className="text-base leading-relaxed">{description}</p>
          <Button 
            variant="secondary" 
            className="mt-4 bg-white/20 hover:bg-white/30 text-white border-0"
          >
            Learn More
          </Button>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-card">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-vivid-purple to-hot-pink bg-clip-text text-transparent">
            {title}
          </DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            {ageGroup}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          <div className="p-4 rounded-lg bg-gradient-to-br from-vivid-purple/10 to-transparent border border-primary/20">
            <h4 className="font-bold text-lg mb-2 text-primary">What</h4>
            <p className="text-foreground">{details.what}</p>
          </div>
          <div className="p-4 rounded-lg bg-gradient-to-br from-cyber-cyan/10 to-transparent border border-secondary/20">
            <h4 className="font-bold text-lg mb-2 text-secondary">Why</h4>
            <p className="text-foreground">{details.why}</p>
          </div>
          <div className="p-4 rounded-lg bg-gradient-to-br from-bright-orange/10 to-transparent border border-accent/20">
            <h4 className="font-bold text-lg mb-2 text-accent">How</h4>
            <p className="text-foreground">{details.how}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
