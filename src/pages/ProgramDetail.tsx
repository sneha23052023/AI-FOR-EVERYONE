import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Target, Lightbulb, Wrench } from 'lucide-react';

const ProgramDetail = () => {
  const { program } = useParams();
  const navigate = useNavigate();

  const programData: any = {
    kuttymakers: {
      title: 'KuttyMakers',
      ageGroup: 'Ages 10-17',
      color: 'from-vivid-purple to-hot-pink',
      icon: '🎨',
      what: 'Spark curiosity and get cozy with cool AI basics like spotting patterns and thinking logically!',
      why: 'Kids are already surrounded by AI every day. Let\'s help them understand it instead of just using it. We want them to be creators and critical thinkers, not just consumers!',
      how: 'Through fun pattern games, AI storybooks, and hands-on experiments with awesome tools like Teachable Machine and Scratch.',
      activities: ['Interactive AI Games', 'Creative Coding Projects', 'Storytelling with AI', 'Build Your First AI Model']
    },
    students: {
      title: 'Students',
      ageGroup: 'Ages 18-25',
      color: 'from-electric-blue to-cyber-cyan',
      icon: '🎓',
      what: 'Connect what you learn in class with real-world AI that actually matters!',
      why: 'Too many students graduate without knowing the tech that\'ll shape their careers. We need to build tomorrow\'s skills today!',
      how: 'Through hands-on projects, exciting hackathons, mentorship from pros, and building real AI solutions that make a difference.',
      activities: ['AI Hackathons', 'Industry Mentorship', 'Real-world Projects', 'Career Workshops']
    },
    professionals: {
      title: 'Professionals',
      ageGroup: 'Working Adults',
      color: 'from-bright-orange to-hot-pink',
      icon: '💼',
      what: 'Level up your skills to thrive in the AI-powered workplace!',
      why: 'AI is changing jobs fast, especially for newcomers and service workers. Automation and new skills are reshaping everything. Let\'s make sure you\'re ready!',
      how: 'Through intensive workshops, certification programs, real projects, and partnerships with industry leaders who know their stuff.',
      activities: ['Certification Courses', 'Hands-on Workshops', 'Industry Case Studies', 'AI Tool Training']
    },
    everyone: {
      title: 'Everyone',
      ageGroup: 'All Ages',
      color: 'from-lime-green to-cyber-cyan',
      icon: '🌍',
      what: 'Help everyone understand how AI affects our lives, culture, and communities.',
      why: 'AI can be amazing for creativity, but it can also spread biases and fake news. Deepfakes and scams are real threats, especially for our elders. Let\'s protect and empower everyone!',
      how: 'Through community hangouts, resources in your language, storytelling sessions, and grassroots programs that share AI knowledge with everyone.',
      activities: ['Community Workshops', 'Multilingual Sessions', 'AI Safety Training', 'Digital Literacy Programs']
    }
  };

  const data = programData[program || ''];

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Hmm, can't find that program</h2>
          <Button onClick={() => navigate('/')}>Take Me Back</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Programs
        </Button>

        <Card className={`p-8 md:p-12 bg-gradient-to-br ${data.color} text-white border-0 shadow-glow mb-8`}>
          <div className="text-6xl mb-4">{data.icon}</div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">{data.title}</h1>
          <p className="text-2xl font-semibold opacity-90">{data.ageGroup}</p>
        </Card>

        <div className="grid gap-6 mb-8">
          <Card className="p-8 hover:shadow-glow transition-shadow">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-vivid-purple flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-3">What You'll Get</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">{data.what}</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-glow transition-shadow">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-bright-orange flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-3">Why This Rocks</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">{data.why}</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-glow transition-shadow">
            <div className="flex items-start gap-4">
              <Wrench className="w-8 h-8 text-cyber-cyan flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-3">How It Works</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">{data.how}</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-br from-card to-primary/5">
          <h2 className="text-3xl font-bold mb-6">What You'll Do</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.activities.map((activity: string, index: number) => (
              <div 
                key={index} 
                className="p-4 bg-background rounded-lg border-2 border-primary/20 hover:border-primary/40 transition-colors"
              >
                <p className="font-semibold text-lg">{activity}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-12 text-center">
          <Button 
            size="lg"
            onClick={() => navigate('/register', { state: { program: data.title } })}
            className="bg-gradient-to-r from-vivid-purple to-hot-pink text-white text-xl px-12 py-6 rounded-full shadow-glow-hover transform transition-all hover:scale-105"
          >
            Sign Me Up for {data.title}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
