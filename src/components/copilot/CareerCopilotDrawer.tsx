import React, { useState } from 'react';
import { useApp } from '../../store';
import { generateAIResponse, CopilotMessage } from '../../services/aiService';
import { 
  Bot, 
  Send, 
  Sparkles, 
  X, 
  ChevronRight, 
  HelpCircle,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';

interface CareerCopilotDrawerProps {
  onNavigateTab: (tab: string) => void;
}

export const CareerCopilotDrawer: React.FC<CareerCopilotDrawerProps> = ({ onNavigateTab }) => {
  const { isCopilotOpen, setIsCopilotOpen, skills, skillGaps, currentUser } = useApp();
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<CopilotMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'assistant',
      text: `Namaste Ananya! 👋 I am your **AYUSH Career Copilot**.\n\nI monitor real-time industry demands from top Ayurvedic research labs, manufacturers, and clinical trial sponsors. Currently, you are **78% ready** for your **Clinical Research** path.\n\nHow can I help accelerate your industry readiness today?`,
      timestamp: 'Just now',
      suggestedPrompts: [
        'What skills am I missing for clinical research?',
        'What happens if I learn Data Analysis?',
        'Which internship is best for me?'
      ]
    }
  ]);

  if (!isCopilotOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg: CopilotMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    const response = await generateAIResponse(query, {
      skills: skills.map(s => ({ name: s.name, score: s.score })),
      targetCareer: currentUser?.targetCareer || 'Clinical Research',
      gaps: skillGaps.map(g => ({ skillName: g.skillName, gap: g.gapPercentage }))
    });

    setIsTyping(false);
    setMessages(prev => [...prev, response]);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[460px] bg-white shadow-2xl border-l border-slate-200 flex flex-col animate-slide-left">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-ayush-teal-950 via-ayush-teal-900 to-ayush-green-900 text-white flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-ayush-green-300 ring-1 ring-white/20">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm tracking-tight">AYUSH Career Copilot</h3>
              <span className="text-[10px] bg-ayush-green-400/20 text-ayush-green-300 font-semibold px-2 py-0.5 rounded-full border border-ayush-green-400/30">
                AI Service
              </span>
            </div>
            <p className="text-[11px] text-ayush-teal-200">
              Personalized guidance for {currentUser?.fullName || 'AYUSH Student'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsCopilotOpen(false)}
          className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[88%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-ayush-teal-800 text-white rounded-br-none shadow-sm'
                  : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-card'
              }`}
            >
              <div className="whitespace-pre-line">
                {msg.text}
              </div>

              {msg.actionLink && (
                <button
                  onClick={() => {
                    setIsCopilotOpen(false);
                    onNavigateTab(msg.actionLink!.tab);
                  }}
                  className="mt-3 w-full py-1.5 px-2.5 rounded-lg bg-ayush-mint-50 hover:bg-ayush-mint-100 border border-ayush-teal-300 text-ayush-teal-900 font-semibold text-[11px] flex items-center justify-between transition-colors"
                >
                  <span>{msg.actionLink.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-ayush-teal-700" />
                </button>
              )}
            </div>

            {/* Suggested Prompts */}
            {msg.suggestedPrompts && msg.suggestedPrompts.length > 0 && (
              <div className="mt-2 space-y-1.5 w-full pl-1">
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1">
                  <Lightbulb className="w-3 h-3 text-ayush-amber-500" /> Suggested queries:
                </p>
                <div className="flex flex-col gap-1">
                  {msg.suggestedPrompts.map((prompt, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => handleSend(prompt)}
                      className="text-left text-xs bg-white hover:bg-ayush-teal-50 text-slate-700 hover:text-ayush-teal-900 border border-slate-200 rounded-xl px-2.5 py-1.5 transition-colors shadow-subtle flex items-center justify-between group"
                    >
                      <span className="truncate pr-2">{prompt}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-ayush-teal-600 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 p-3 bg-white rounded-2xl border border-slate-200 w-fit text-xs text-slate-500 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-ayush-green-600 animate-spin" />
            <span>Copilot is analyzing AYUSH curriculum & trial benchmarks...</span>
          </div>
        )}
      </div>

      {/* Input Form */}
      <div className="p-3 bg-white border-t border-slate-200">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder="Ask about skills, gaps, internships or What-If..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-ayush-teal-600 focus:bg-white transition-all"
          />
          <button
            type="submit"
            disabled={!inputQuery.trim() || isTyping}
            className="p-2 bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white rounded-xl disabled:opacity-40 transition-colors shadow-sm"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
        <p className="text-[10px] text-center text-slate-400 mt-2">
          Deterministic AI Copilot Prototype • Contextual to AIIA BAMS 3rd-Year data
        </p>
      </div>
    </div>
  );
};
