import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b border-slate-200">
        <div className="text-2xl font-bold tracking-tight text-blue-600">DevFlow</div>
        <div className="hidden md:flex space-x-8 font-medium text-slate-600">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#solutions" className="hover:text-blue-600 transition">Solutions</a>
          <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          Get Started with Ali mehar
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative px-8 py-20 md:py-32 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
          Build faster than ever before.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          The all-in-one platform for developers to deploy, scale, and monitor applications with zero friction.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition shadow-lg">
            Start Building Free
          </button>
          <button className="px-8 py-4 bg-white border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition shadow-sm">
            View Documentation
          </button>
        </div>
      </header>

      {/* Feature Grid */}
      <section id="features" className="px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard 
              title="Global Edge Network" 
              desc="Deploy your apps closer to your users for sub-millisecond latency worldwide." 
              icon="🌍"
            />
            <FeatureCard 
              title="Automated CI/CD" 
              desc="Connect your GitHub and let us handle the rest. Automatic builds on every push." 
              icon="🚀"
            />
            <FeatureCard 
              title="Advanced Analytics" 
              desc="Real-time insights into your application's performance and user behavior." 
              icon="📊"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 text-center text-slate-500">
        <p>© 2026 DevFlow Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, desc, icon }: { title: string; desc: string; icon: string }) => (
  <div className="p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow bg-slate-50/50">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default Home;