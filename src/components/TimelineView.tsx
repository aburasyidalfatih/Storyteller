import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StoryStage } from '../data/stories';
import { generateImage } from '../services/gemini';
import { Loader2, RefreshCw, Share2, Download } from 'lucide-react';

interface TimelineViewProps {
  stages: StoryStage[];
  onBack: () => void;
}

interface GeneratedStage extends StoryStage {
  imageUrl?: string;
  loading: boolean;
  error?: string;
}

export function TimelineView({ stages, onBack }: TimelineViewProps) {
  const [generatedStages, setGeneratedStages] = useState<GeneratedStage[]>(
    stages.map(s => ({ ...s, loading: false }))
  );
  const [generatingIndex, setGeneratingIndex] = useState<number>(-1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Auto-start generation for the first image only
  useEffect(() => {
    if (generatingIndex === -1) {
      setGeneratingIndex(0);
    }
  }, []);

  // Effect to trigger generation when index changes
  useEffect(() => {
    if (generatingIndex >= 0 && generatingIndex < generatedStages.length) {
      const currentStage = generatedStages[generatingIndex];
      // Only generate if not already generated/loading
      if (!currentStage.imageUrl && !currentStage.loading && !currentStage.error) {
        generateStage(generatingIndex);
      }
    }
  }, [generatingIndex]);

  const generateStage = async (index: number) => {
    setGeneratedStages(prev => prev.map((s, i) => i === index ? { ...s, loading: true, error: undefined } : s));
    
    try {
      // Use the first image (index 0) as reference for all subsequent images (index > 0)
      // This ensures consistency with the original structure
      const referenceImage = index > 0 ? generatedStages[0].imageUrl : undefined;
      
      const imageUrl = await generateImage(stages[index].prompt, referenceImage);
      
      setGeneratedStages(prev => {
        const next = [...prev];
        next[index] = { ...next[index], loading: false, imageUrl };
        return next;
      });
      
      // WE DO NOT AUTO ADVANCE ANYMORE. User must click "Next".
    } catch (error) {
      setGeneratedStages(prev => prev.map((s, i) => i === index ? { ...s, loading: false, error: 'Failed to generate' } : s));
    }
  };

  const handleApproveAndNext = () => {
    const nextIndex = generatedStages.findIndex(s => !s.imageUrl);
    if (nextIndex !== -1) {
      setGeneratingIndex(nextIndex);
    }
  };

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pb-20">
      <div className="flex items-center justify-between mb-8 sticky top-0 bg-black/80 backdrop-blur-xl z-10 py-4 border-b border-white/10">
        <button 
          onClick={onBack}
          className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-mono uppercase tracking-wider"
        >
          ← Back to Stories
        </button>
        <div className="flex items-center gap-4">
          <div className="text-zinc-500 text-xs font-mono">
            {generatedStages.filter(s => s.imageUrl).length} / {stages.length} GENERATED
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {generatedStages.map((stage, index) => (
          <motion.div
            key={stage.year}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            {/* Year Label */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 bg-orange-600 text-white px-3 py-1 text-sm font-bold font-mono shadow-lg rounded-full">
              {stage.year}
            </div>

            {/* Card Content */}
            <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl aspect-[9/16] relative">
              {stage.imageUrl ? (
                <>
                  <img 
                    src={stage.imageUrl} 
                    alt={stage.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedImage(stage.imageUrl || null)}
                  />
                  
                  {/* Overlay Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{stage.title}</h3>
                    <p className="text-zinc-300 text-sm mb-4">{stage.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                       <button 
                        onClick={(e) => { e.stopPropagation(); generateStage(index); }}
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors"
                        title="Regenerate"
                      >
                        <RefreshCw size={16} className="text-white" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleDownload(stage.imageUrl!, `story-${stage.year}.png`); }}
                        className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors"
                        title="Download"
                      >
                        <Download size={16} className="text-white" />
                      </button>
                      
                      {/* Show "Next" button only on the latest generated image if there are more to come */}
                      {index === generatedStages.filter(s => s.imageUrl).length - 1 && index < stages.length - 1 && (
                        <button
                          onClick={(e) => { e.stopPropagation(); handleApproveAndNext(); }}
                          className="ml-auto px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-full transition-colors flex items-center gap-2 shadow-lg animate-pulse"
                        >
                          Next Year →
                        </button>
                      )}
                    </div>
                  </div>

                  {/* TikTok Caption Style */}
                  <div className="absolute bottom-16 left-0 right-0 px-4 text-center pointer-events-none">
                    <span className="inline-block bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium shadow-sm">
                      {stage.caption}
                    </span>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  {stage.loading ? (
                    <div className="flex flex-col items-center gap-4">
                      <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
                      <p className="text-zinc-500 text-sm animate-pulse">Generating {stage.year}...</p>
                    </div>
                  ) : stage.error ? (
                    <div className="flex flex-col items-center gap-4">
                      <span className="text-red-500 text-2xl">⚠️</span>
                      <p className="text-red-400 text-sm">{stage.error}</p>
                      <button 
                        onClick={() => generateStage(index)}
                        className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-xs text-white transition-colors"
                      >
                        Retry
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 opacity-30">
                      <div className="w-12 h-12 rounded-full border-2 border-dashed border-white/20" />
                      <p className="text-xs text-zinc-500 uppercase tracking-widest">Waiting</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
