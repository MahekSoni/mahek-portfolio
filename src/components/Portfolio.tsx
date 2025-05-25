
import { Card } from '@/components/ui/card';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Under Construction Message */}
          <Card className="p-12 bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-dashed border-purple-300">
            <div className="space-y-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl">
                🚧
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800">
                Still Growing, Learning, and Building
              </h3>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                I'm currently working on exciting projects that showcase my skills in UI/UX design, web development, and programming. My portfolio is evolving as I continue to learn and create.
              </p>
              
              <div className="text-sm text-gray-500 font-medium">
                Projects coming soon! 🎨✨
              </div>
            </div>
          </Card>

          {/* Future Projects Preview */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {["UI/UX Project", "Web Application", "Mobile App Design"].map((project, index) => (
              <Card 
                key={project}
                className="p-6 opacity-50 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Coming Soon</span>
                </div>
                <h4 className="font-semibold text-gray-700">{project}</h4>
                <p className="text-sm text-gray-500 mt-2">In Development</p>
              </Card>
            ))}
          </div>

          {/* Collaboration Invitation */}
          <div className="mt-16">
            <Card className="p-8 bg-gradient-to-r from-purple-100 to-blue-100 border-purple-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Interested in Collaboration?
              </h3>
              <p className="text-gray-600 mb-6">
                I'm always open to new opportunities, internships, and collaborative projects. Let's create something amazing together!
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300"
              >
                Get In Touch
              </button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
