import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'tldr' },
    { label: 'Why Kerala', id: 'why-kerala' },
    { label: 'Our Approach', id: 'approach' },
    { label: 'Programs', id: 'programs' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black bg-gradient-to-r from-vivid-purple to-hot-pink bg-clip-text text-transparent">
          AI for Everyone
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground hover:text-primary font-semibold transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-foreground hover:text-primary font-semibold transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
