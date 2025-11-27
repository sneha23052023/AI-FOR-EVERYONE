import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

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
    toast.success('Registration successful!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-hero pt-24 pb-12 px-6">
      <Card className="max-w-2xl mx-auto p-8 bg-card/95 backdrop-blur-sm shadow-glow">
        <h1 className="text-4xl font-black text-center mb-2 bg-gradient-to-r from-vivid-purple to-hot-pink bg-clip-text text-transparent">
          Program Registration
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Complete your registration to join the AI literacy program
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name *</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Phone *</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                placeholder="+91 1234567890"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Age *</label>
              <Input
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                required
                placeholder="25"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Program *</label>
              <Select 
                value={formData.program} 
                onValueChange={(value) => setFormData({ ...formData, program: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a program" />
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
              <label className="block text-sm font-semibold mb-2">Organization/School</label>
              <Input
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="Your institution"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Why are you interested in AI?</label>
            <textarea
              className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
              value={formData.interests}
              onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
              placeholder="Tell us about your interests..."
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-vivid-purple to-hot-pink text-white text-lg py-6"
          >
            Complete Registration
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
