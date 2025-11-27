import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Home } from 'lucide-react';

const Register = () => {
  const location = useLocation();
  const selectedProgram = location.state?.program || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: selectedProgram,
    age: '',
    organization: '',
    interests: ''
  });

  const { user, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(formData);
    toast.success('Yay! You are in!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-hero pt-24 pb-12 px-6">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 text-white hover:bg-white/20"
        >
          <Home className="mr-2 h-4 w-4" /> Back to Home
        </Button>

        <Card className="p-8 bg-card/95 backdrop-blur-sm shadow-glow">
          <h1 className="text-4xl font-black text-center mb-2 bg-gradient-to-r from-vivid-purple to-hot-pink bg-clip-text text-transparent">
            Let's Get You Registered!
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Just a few quick details and you're all set to dive into the AI world
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">What's your name? *</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Your awesome name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email address *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone number *</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  placeholder="+91 9876543210"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">How old are you? *</label>
                <Input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  required
                  placeholder="Your age"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Pick your track *</label>
                <Select
                  value={formData.program}
                  onValueChange={(value) => setFormData({ ...formData, program: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="KuttyMakers">KuttyMakers (Ages 10-17)</SelectItem>
                    <SelectItem value="Students">Students (Ages 18-25)</SelectItem>
                    <SelectItem value="Professionals">Professionals</SelectItem>
                    <SelectItem value="Everyone">Everyone (All Ages)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Where do you study/work?</label>
                <Input
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="School, college, or workplace"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Why AI? What gets you excited?</label>
              <textarea
                className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={formData.interests}
                onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                placeholder="Tell us what makes you curious about AI..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-vivid-purple to-hot-pink text-white text-lg py-6"
            >
              Let's Go!
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Register;
