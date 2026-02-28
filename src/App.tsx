import React, { useState } from 'react';
import { STORIES, StoryTemplate } from './data/stories';
import { StorySelector } from './components/StorySelector';
import { TimelineView } from './components/TimelineView';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedStory, setSelectedStory] = useState<StoryTemplate | null>(null);
  const [hasApiKey, setHasApiKey] = useState(false);

  React.useEffect(() => {
    const checkKey = async () => {
      try {
        if (window.aistudio && await window.aistudio.hasSelectedApiKey()) {
          setHasApiKey(true);
        }
      } catch (e) {
        console.error("Error checking API key:", e);
      }
    };
    checkKey();
  }, []);

  const [isSelecting, setIsSelecting] = useState(false);

  const handleSelectKey = async () => {
    setIsSelecting(true);
    console.log("Select Key clicked. window.aistudio:", window.aistudio);
    
    if (window.aistudio) {
      try {
        await window.aistudio.openSelectKey();
        // Assume success as per instructions
        setHasApiKey(true);
      } catch (error) {
        console.error("Error selecting key:", error);
        alert("Failed to open key selector. Please try again.");
      } finally {
        setIsSelecting(false);
      }
    } else {
      console.warn("window.aistudio is missing");
      alert("AI Studio interface not found. If you have already set the key in .env, you can continue.");
      // Allow bypass if aistudio is missing (e.g. local dev)
      setHasApiKey(true);
      setIsSelecting(false);
    }
  };

  if (!hasApiKey) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 text-center font-sans">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-zinc-900 border border-white/10 p-8 rounded-2xl shadow-2xl"
        >
          <div className="text-5xl mb-6">🔑</div>
          <h1 className="text-2xl font-bold mb-4">API Key Required</h1>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            To use the high-quality <strong>Gemini 3.1 Flash Image</strong> model, you need to select a paid API key from a Google Cloud project.
          </p>
          <button
            onClick={handleSelectKey}
            disabled={isSelecting}
            className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-zinc-700 disabled:cursor-not-allowed text-white px-6 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer relative z-50"
          >
            {isSelecting ? 'Opening Selector...' : 'Select Paid API Key'}
          </button>
          <p className="mt-6 text-xs text-zinc-600">
            <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="underline hover:text-zinc-400 relative z-50">
              Read about Gemini API billing
            </a>
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30">
      {/* Hero Header */}
      <header className="pt-16 pb-12 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            TimeLapse Storyteller
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Witness the passage of time. Choose a narrative and watch as AI generates a dramatic visual timeline of change, decay, and transformation.
          </p>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedStory ? (
            <motion.div
              key="selector"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <StorySelector 
                stories={STORIES} 
                onSelect={setSelectedStory} 
              />
            </motion.div>
          ) : (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
            >
              <TimelineView 
                stages={selectedStory.stages} 
                onBack={() => setSelectedStory(null)} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-12 text-center text-zinc-600 text-sm font-mono">
        <p>Powered by Gemini 3.1 Flash Image Preview</p>
      </footer>
    </div>
  );
}
