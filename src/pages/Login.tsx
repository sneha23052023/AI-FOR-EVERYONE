import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Moon, Sun } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showThemeDialog, setShowThemeDialog] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenThemeDialog = localStorage.getItem('hasSeenThemeDialog');
    if (!hasSeenThemeDialog) {
      setShowThemeDialog(true);
    }
  }, []);

  const handleThemeSelection = (theme: 'light' | 'dark') => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    localStorage.setItem('hasSeenThemeDialog', 'true');
    setShowThemeDialog(false);
    toast.success(`${theme === 'dark' ? 'Dark' : 'Light'} mode activated!`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (login(email, password)) {
      toast.success('Hey, good to see you again!');
      navigate('/');
    } else {
      toast.error('Oops! Those credentials don\'t match');
    }
  };

  return (
    <>
      <Dialog open={showThemeDialog} onOpenChange={setShowThemeDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-center">Pick Your Vibe!</DialogTitle>
            <DialogDescription className="text-center text-base pt-2">
              How do you like your screen? Bright or dark?
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Button
              onClick={() => handleThemeSelection('light')}
              variant="outline"
              className="h-32 flex flex-col gap-3 hover:bg-gradient-to-br hover:from-bright-orange/10 hover:to-hot-pink/10 hover:border-bright-orange/50"
            >
              <Sun className="h-12 w-12 text-bright-orange" />
              <span className="text-lg font-bold">Light Mode</span>
            </Button>
            <Button
              onClick={() => handleThemeSelection('dark')}
              variant="outline"
              className="h-32 flex flex-col gap-3 hover:bg-gradient-to-br hover:from-vivid-purple/10 hover:to-cyber-cyan/10 hover:border-vivid-purple/50"
            >
              <Moon className="h-12 w-12 text-vivid-purple" />
              <span className="text-lg font-bold">Dark Mode</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
        <Card className="w-full max-w-md p-8 bg-card/95 backdrop-blur-sm shadow-glow">
          <h1 className="text-4xl font-black text-center mb-2 bg-gradient-to-r from-vivid-purple to-hot-pink bg-clip-text text-transparent">
            Hey There!
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Log in and let's continue your AI adventure
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Your email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
              />
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-vivid-purple to-hot-pink text-white">
              Let's Go!
            </Button>

            <p className="text-center text-sm">
              New here?{' '}
              <Link to="/signup" className="text-vivid-purple font-semibold hover:underline">
                Join the crew
              </Link>
            </p>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Login;
