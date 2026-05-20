// Stats.jsx
import { Link, Zap, Globe } from "lucide-react";

const Stats = () => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { label: "URLs Shortened", value: "2.4M+", icon: Link },
        { label: "Clicks Tracked", value: "15.8M+", icon: Zap },
        { label: "Active Users", value: "45K+", icon: Globe },
      ].map((stat, index) => (
        <div
          key={index}
          className="text-center backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
        >
          <stat.icon className="w-8 h-8 text-pink-400 mx-auto mb-3" />
          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-gray-400 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
