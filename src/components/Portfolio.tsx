import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Rocket, Heart, ArrowRight } from 'lucide-react';
const Portfolio = () => {
  return <section id="portfolio" className="py-20 relative overflow-hidden bg-violet-300">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            My journey of continuous learning and creative exploration
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Under Construction Message */}
          <Card className="p-12 bg-gradient-to-br from-purple-50 via-white to-blue-50 border-2 border-dashed border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-r from-pink-200/30 to-cyan-200/30 rounded-full blur-xl"></div>
            
            <div className="space-y-6 relative z-10">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg animate-bounce">
                <Rocket className="w-12 h-12" />
              </div>
              
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Still Growing, Learning, and Building
              </h3>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                I&apos;m currently working on exciting projects that showcase my skills in UI/UX design, web development, and programming. My portfolio is evolving as I continue to learn and create amazing digital experiences.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-purple-600 font-medium">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span>Projects coming soon!</span>
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
            </div>
          </Card>

          {/* Future Projects Preview */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
            name: "UI/UX Project",
            icon: "🎨",
            color: "from-purple-400 to-pink-400"
          }, {
            name: "Web Application",
            icon: "💻",
            color: "from-blue-400 to-cyan-400"
          }, {
            name: "Mobile App Design",
            icon: "📱",
            color: "from-green-400 to-teal-400"
          }].map((project, index) => <Card key={project.name} className="p-6 bg-white/60 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className={`w-full h-32 bg-gradient-to-br ${project.color} rounded-lg mb-4 flex items-center justify-center text-4xl shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <h4 className="font-semibold text-gray-700 mb-2">{project.name}</h4>
                  <p className="text-sm text-gray-500">In Development</p>
                </div>
              </Card>)}
          </div>

          {/* Collaboration Invitation */}
          <div className="mt-16">
            <Card className="p-8 bg-gradient-to-r from-purple-100 via-blue-100 to-cyan-100 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/30 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/30 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Interested in Collaboration?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  I&apos;m always open to new opportunities, internships, and collaborative projects. Let&apos;s create something amazing together and make a positive impact!
                </p>
                <Button onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="flex items-center gap-2">
                    Get In Touch
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Portfolio;