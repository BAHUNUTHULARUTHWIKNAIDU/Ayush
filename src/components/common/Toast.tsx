import React from 'react';
import { useApp } from '../../store';
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast, hideToast } = useApp();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-ayush-green-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-ayush-teal-400 shrink-0" />,
    warning: <AlertTriangle className="w-5 h-5 text-ayush-amber-400 shrink-0" />
  };

  const bgStyles = {
    success: 'bg-ayush-teal-950/95 border-ayush-green-500/50 text-white',
    info: 'bg-ayush-teal-950/95 border-ayush-teal-400/50 text-white',
    warning: 'bg-ayush-teal-950/95 border-ayush-amber-500/50 text-white'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-fade-in shadow-elevation">
      <div className={`flex items-start gap-3 p-4 rounded-xl border backdrop-blur-md ${bgStyles[toast.type]}`}>
        {icons[toast.type]}
        <div className="text-sm font-medium pr-2 leading-snug">
          {toast.message}
        </div>
        <button
          onClick={hideToast}
          className="text-slate-400 hover:text-white transition-colors ml-auto -mr-1 -mt-1 p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
