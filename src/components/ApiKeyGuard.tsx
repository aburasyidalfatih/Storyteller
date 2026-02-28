import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Key } from 'lucide-react';

interface ApiKeyGuardProps {
  children: React.ReactNode;
}

export function ApiKeyGuard({ children }: ApiKeyGuardProps) {
  const [hasKey, setHasKey] = useState<boolean | null>(null);

  useEffect(() => {
    checkKey();
  }, []);

  const checkKey = async () => {
    try {
      if (window.aistudio && window.aistudio.hasSelectedApiKey) {
        const has = await window.aistudio.hasSelectedApiKey();
        setHasKey(has);
      } else {
        // Fallback for environments without aistudio object (e.g. local dev outside of container)
        // We assume true if GEMINI_API_KEY is present, but in the container we rely on aistudio object
        setHasKey(!!process.env.GEMINI_API_KEY);
      }
    } catch (e) {
      console.error("Error checking API key:", e);
      setHasKey(false);
    }
  };

  const handleSelectKey = async () => {
    try {
      if (window.aistudio && window.aistudio.openSelectKey) {
        await window.aistudio.openSelectKey();
        // Assume success after dialog closes/returns
        setHasKey(true);
        // Force reload to ensure env vars are picked up if necessary
        // window.location.reload(); 
        // Note: The instructions say "Do not add delay... assume successful". 
        // Reloading might be aggressive but often needed for env var injection.
        // However, for SPA, maybe just state update is enough if the key is grabbed from window or similar?
        // The instruction says: "The selected API key is available using process.env.API_KEY. It is injected automatically"
        // If it's injected into process.env, that usually requires a server restart or page reload in many setups.
        // But let's try just setting state first.
      }
    } catch (e) {
      console.error("Error selecting API key:", e);
    }
  };

  if (hasKey === null) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="animate-pulse">Checking permissions...</div>
      </div>
    );
  }

  if (!hasKey) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center"
        >
          <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Key className="w-8 h-8 text-orange-500" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">API Key Required</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            To generate high-quality images with Gemini 3.1, you need to select a paid API key.
          </p>
          <button
            onClick={handleSelectKey}
            className="w-full py-3 px-6 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
          >
            Select API Key
          </button>
          <p className="mt-6 text-xs text-zinc-600">
            <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="underline hover:text-zinc-400">
              Learn more about billing
            </a>
          </p>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
}
