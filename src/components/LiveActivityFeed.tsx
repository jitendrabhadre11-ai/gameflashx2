import { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface Activity {
  id: number;
  user: string;
  country: string;
  reward: string;
  amount: number;
}

export function LiveActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([]);

  const sampleActivities: Omit<Activity, 'id'>[] = [
    { user: 'Emma', country: 'UK', reward: 'Amazon', amount: 50 },
    { user: 'Michael', country: 'USA', reward: 'Steam', amount: 25 },
    { user: 'Sophie', country: 'Canada', reward: 'Netflix', amount: 100 },
    { user: 'James', country: 'Australia', reward: 'PayPal', amount: 75 },
    { user: 'Olivia', country: 'USA', reward: 'Roblox', amount: 25 },
    { user: 'Lucas', country: 'UK', reward: 'Google Play', amount: 50 },
  ];

  useEffect(() => {
    const addRandomActivity = () => {
      const randomActivity = sampleActivities[Math.floor(Math.random() * sampleActivities.length)];
      const newActivity: Activity = {
        ...randomActivity,
        id: Date.now(),
      };

      setActivities((prev) => [newActivity, ...prev.slice(0, 4)]);
    };

    addRandomActivity();
    const interval = setInterval(addRandomActivity, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Live Activity Feed
          </h2>
          <p className="text-xl text-gray-300">
            See what rewards people are unlocking right now
          </p>
        </div>

        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="glass-card p-4 flex items-center space-x-4 animate-in slide-in-from-top duration-500"
            >
              <CheckCircle className="w-6 h-6 text-[#10b981] flex-shrink-0" />
              <div className="flex-1">
                <p className="text-white font-semibold">
                  <span className="text-[#df104e]">{activity.user}</span> from {activity.country} unlocked
                  <span className="text-[#df104e]"> ${activity.amount} {activity.reward}</span> reward
                </p>
                <p className="text-sm text-gray-400">Just now</p>
              </div>
            </div>
          ))}
        </div>

        {activities.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            Loading activities...
          </div>
        )}
      </div>
    </section>
  );
}
