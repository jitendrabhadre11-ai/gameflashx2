import { Gift } from 'lucide-react';

interface RewardCardProps {
  name: string;
  values: number[];
  icon?: string;
  onUnlock: () => void;
}

export function RewardCard({ name, values, icon, onUnlock }: RewardCardProps) {
  return (
    <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#df104e] to-[#b3114c] flex items-center justify-center mb-4 animate-pulse-glow">
          {icon ? (
            <span className="text-4xl">{icon}</span>
          ) : (
            <Gift className="w-10 h-10 text-white" />
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {values.map((value) => (
            <span
              key={value}
              className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 font-semibold"
            >
              ${value}
            </span>
          ))}
        </div>

        <button
          onClick={onUnlock}
          className="btn-primary w-full text-sm"
        >
          Unlock Reward
        </button>
      </div>
    </div>
  );
}
