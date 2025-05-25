
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Code, Palette } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with modern gradient and animated shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-lg rotate-45 animate-float delay-1000 blur-sm"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-r from-yellow-400/25 to-orange-500/25 rounded-full animate-float delay-2000 blur-lg"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-20 bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-full animate-float delay-500 blur-xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          {/* Enhanced Profile Section */}
          <div className="relative mb-8">
            {/* Floating icons around profile */}
            <div className="absolute -top-8 -left-8 animate-float">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Code className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
            <div className="absolute -top-4 -right-8 animate-float delay-1000">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Palette className="w-7 h-7 text-pink-400" />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 animate-float delay-2000">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
            </div>

            {/* Enhanced Profile Image */}
            <div className="w-52 h-52 mx-auto rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg border border-white/20 flex items-center justify-center shadow-2xl relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-pink-400/20 animate-pulse"></div>
              <div className="w-44 h-44 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400 flex items-center justify-center text-white text-6xl font-bold shadow-inner relative z-10 group-hover:scale-105 transition-transform duration-300">
                MS
              </div>
            </div>
          </div>

          {/* Enhanced Typography */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Hello, I'm <br />
              <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Mahek
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent flex-1 max-w-16"></div>
              <p className="text-2xl md:text-3xl text-white/90 font-light px-4">
                Visual Designer
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent flex-1 max-w-16"></div>
            </div>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Aspiring Developer • UI/UX Enthusiast • Future Educator
            </p>
          </div>
          
          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="group bg-white/90 backdrop-blur-sm text-purple-700 hover:bg-white hover:scale-105 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20"
            >
              <span className="flex items-center gap-2">
                Learn More About Me
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 hover:scale-105 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                Get In Touch
              </span>
            </Button>
          </div>

          {/* Enhanced Stats or Quick Info */}
          <div className="flex justify-center gap-8 mt-16">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3+</div>
              <div className="text-sm text-white/70">Years Learning</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-sm text-white/70">Technologies</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">∞</div>
              <div className="text-sm text-white/70">Possibilities</div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <div className="text-white/70 text-sm font-medium">Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
