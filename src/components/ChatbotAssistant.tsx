import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { X, MessageCircle, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ChatbotAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hi! I'm here to help you find the perfect AI program. How old are you?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState<'age' | 'recommendation'>('age');
  const navigate = useNavigate();

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    if (step === 'age') {
      const age = parseInt(input);
      let recommendation = '';
      let programLink = '';

      if (age >= 10 && age <= 17) {
        recommendation = "Perfect! Based on your age, I recommend the KuttyMakers program. It's designed specifically for young innovators like you!";
        programLink = '/program/kuttymakers';
      } else if (age >= 18 && age <= 25) {
        recommendation = "Great! The Students program would be ideal for you. It's tailored for college students and young adults!";
        programLink = '/program/students';
      } else if (age > 25) {
        recommendation = "Excellent! The Professionals program is perfect for you. It focuses on career advancement with AI!";
        programLink = '/program/professionals';
      } else {
        recommendation = "The Everyone program welcomes all ages! It's a great starting point for anyone interested in AI!";
        programLink = '/program/everyone';
      }

      setTimeout(() => {
        setMessages(prev => [...prev, { text: recommendation, isBot: true }]);
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            text: `Click here to explore: ${programLink}`, 
            isBot: true 
          }]);
        }, 500);
      }, 500);

      setStep('recommendation');
    }

    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-vivid-purple to-hot-pink shadow-glow hover:scale-110 transition-transform"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 h-96 flex flex-col bg-card/95 backdrop-blur-sm shadow-glow animate-scale-in">
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-vivid-purple to-hot-pink text-white rounded-t-lg">
            <h3 className="font-bold">AI Program Assistant</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-muted text-foreground'
                      : 'bg-gradient-to-r from-vivid-purple to-hot-pink text-white'
                  }`}
                >
                  {message.text.startsWith('Click here') ? (
                    <button
                      onClick={() => {
                        const path = message.text.split(': ')[1];
                        navigate(path);
                        setIsOpen(false);
                      }}
                      className="underline hover:opacity-80"
                    >
                      {message.text}
                    </button>
                  ) : (
                    message.text
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your age..."
              className="flex-1"
            />
            <Button
              onClick={handleSend}
              className="bg-gradient-to-r from-vivid-purple to-hot-pink"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};
