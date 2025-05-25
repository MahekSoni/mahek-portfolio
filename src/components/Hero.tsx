
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient and animated shapes */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/20 rounded-lg rotate-45 animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-white/15 rounded-full animate-float delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-20 bg-white/10 rounded-full animate-float delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          {/* Profile Image Placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center shadow-2xl">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-6xl font-bold">
              MS
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hello, my <br />
            name's <span className="text-yellow-300">Mahek</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
            I'm a Visual Designer
          </p>
          
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto font-light">
            Aspiring Developer | UI/UX Enthusiast | Future Educator
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="bg-white text-purple-700 hover:bg-white/90 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-white text-white hover:bg-white hover:text-purple-700 font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
