import React from 'react';
import { motion } from 'motion/react';
import { StoryTemplate } from '../data/stories';

interface StorySelectorProps {
  stories: StoryTemplate[];
  onSelect: (story: StoryTemplate) => void;
}

export function StorySelector({ stories, onSelect }: StorySelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {stories.map((story, index) => (
        <motion.button
          key={story.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onSelect(story)}
          className="group relative flex flex-col items-start p-6 h-full bg-zinc-900/50 border border-white/10 rounded-2xl hover:bg-zinc-800/50 hover:border-orange-500/50 transition-all duration-300 text-left"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {story.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
            {story.title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {story.description}
          </p>
          <div className="mt-auto pt-6 flex items-center text-xs font-mono text-zinc-500 uppercase tracking-widest">
            {story.stages.length} Stages
            <span className="mx-2">•</span>
            {story.stages[0].year} - {story.stages[story.stages.length - 1].year}
          </div>
        </motion.button>
      ))}
    </div>
  );
}
