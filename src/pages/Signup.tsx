import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (signup(email, password, name)) {
      toast.success('Awesome! Now just log in to start');
      navigate('/login');
    } else {
      toast.error('Hmm, looks like that email is already taken');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8 bg-card/95 backdrop-blur-sm shadow-glow">
        <h1 className="text-4xl font-black text-center mb-2 bg-gradient-to-r from-vivid-purple to-hot-pink bg-clip-text text-transparent">
          Join the Movement!
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Create your account and start your AI journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">What's your name?</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your awesome name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email address</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Create a password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Make it secure (6+ chars)"
              minLength={6}
            />
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-vivid-purple to-hot-pink text-white">
            Count Me In!
          </Button>

          <p className="text-center text-sm">
            Already part of the crew?{' '}
            <Link to="/login" className="text-vivid-purple font-semibold hover:underline">
              Log in here
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
