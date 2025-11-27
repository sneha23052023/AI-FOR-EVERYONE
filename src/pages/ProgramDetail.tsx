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
      what: 'Develop curiosity and familiarity with foundational AI concepts such as pattern recognition and logic.',
      why: 'Children are already immersed in AI. A formal introduction guides their curiosity. Without proper exposure, they risk becoming mere consumers of AI rather than creators or critical thinkers.',
      how: 'Through pattern recognition games, sorting exercises, AI storybooks, and hands-on experiments using tools like Teachable Machine and Scratch.',
      activities: ['Interactive AI Games', 'Creative Coding Projects', 'Storytelling with AI', 'Build Your First AI Model']
    },
    students: {
      title: 'Students',
      ageGroup: 'Ages 18-25',
      color: 'from-electric-blue to-cyber-cyan',
      icon: '🎓',
      what: 'Bridge the gap between academics and real-world AI applications through applied learning.',
      why: 'Many students graduate without understanding the technologies defining their future careers. Tomorrow\'s essential skills need to be developed today.',
      how: 'Through project-based learning, hackathons, mentorship programs, and collaboration with industry experts to build practical AI solutions.',
      activities: ['AI Hackathons', 'Industry Mentorship', 'Real-world Projects', 'Career Workshops']
    },
    professionals: {
      title: 'Professionals',
      ageGroup: 'Working Adults',
      color: 'from-bright-orange to-hot-pink',
      icon: '💼',
      what: 'Upskill and reskill professionals to adapt to AI-driven workplace transformations.',
      why: 'AI\'s rapid integration presents significant challenges for professionals, particularly freshers and those in the service industry. Automation and skill-based changes are drastically impacting the workforce.',
      how: 'Through intensive workshops, certification programs, hands-on projects, and industry partnerships focused on practical AI implementation.',
      activities: ['Certification Courses', 'Hands-on Workshops', 'Industry Case Studies', 'AI Tool Training']
    },
    everyone: {
      title: 'Everyone',
      ageGroup: 'All Ages',
      color: 'from-lime-green to-cyber-cyan',
      icon: '🌍',
      what: 'Create awareness about AI\'s impact on society, culture, and daily life for all community members.',
      why: 'AI offers opportunities for self-expression but also reflects biases. The rise of deepfakes and misinformation creates risks for all, especially elders facing scams and fake news.',
      how: 'Through community workshops, multilingual resources, storytelling sessions, and grassroots education programs that make AI knowledge a public good.',
      activities: ['Community Workshops', 'Multilingual Sessions', 'AI Safety Training', 'Digital Literacy Programs']
    }
  };

  const data = programData[program || ''];

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Program Not Found</h2>
          <Button onClick={() => navigate('/')}>Go Back</Button>
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
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Programs
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
                <h2 className="text-2xl font-bold mb-3">What We Offer</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">{data.what}</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-glow transition-shadow">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-bright-orange flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-3">Why It Matters</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">{data.why}</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-glow transition-shadow">
            <div className="flex items-start gap-4">
              <Wrench className="w-8 h-8 text-cyber-cyan flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-3">How We Do It</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">{data.how}</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-br from-card to-primary/5">
          <h2 className="text-3xl font-bold mb-6">Program Activities</h2>
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
            Register for {data.title}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
