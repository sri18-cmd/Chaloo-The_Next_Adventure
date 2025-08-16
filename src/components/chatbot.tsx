"use client";

import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { askChatbot } from '@/ai/flows/chatbot-flow';
import type { ChatbotInput } from '@/ai/flows/chatbot-types';
import { v4 as uuidv4 } from 'uuid';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/use-auth';

interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { id: uuidv4(), role: 'model', content: "Hello! I'm your Chaloo travel assistant. How can I help you plan your next adventure?" }
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: uuidv4(), role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(({ id, ...rest }) => rest);
      const chatbotInput: ChatbotInput = {
        history,
        message: input,
      };
      
      const result = await askChatbot(chatbotInput);

      const aiMessage: Message = { id: uuidv4(), role: 'model', content: result.response };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: Message = { id: uuidv4(), role: 'model', content: "I'm sorry, something went wrong. Please try again." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="icon" className="rounded-full w-14 h-14 shadow-lg" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
          <span className="sr-only">Toggle Chat</span>
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50">
          <Card className="w-80 h-[500px] flex flex-col shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg font-headline">Chaloo Assistant</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
              <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map(message => (
                    <div key={message.id} className={cn("flex items-start gap-3", message.role === 'user' ? "justify-end" : "justify-start")}>
                      {message.role === 'model' && (
                        <Avatar className="w-8 h-8 border-2 border-primary">
                          <AvatarFallback><Bot size={20}/></AvatarFallback>
                        </Avatar>
                      )}
                      <div className={cn("rounded-lg px-3 py-2 max-w-[80%]", 
                        message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted')}>
                        <p className="text-sm">{message.content}</p>
                      </div>
                       {message.role === 'user' && (
                        <Avatar className="w-8 h-8">
                           <AvatarImage src={user?.photoURL ?? ''} />
                          <AvatarFallback>{user?.displayName?.charAt(0) ?? 'U'}</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex items-start gap-3 justify-start">
                       <Avatar className="w-8 h-8 border-2 border-primary">
                          <AvatarFallback><Bot size={20}/></AvatarFallback>
                        </Avatar>
                      <div className="rounded-lg px-3 py-2 bg-muted flex items-center">
                        <Loader2 className="h-5 w-5 animate-spin" />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              <div className="p-4 border-t">
                <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                  <Input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Ask about a destination..."
                    autoComplete="off"
                    disabled={isLoading}
                  />
                  <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
