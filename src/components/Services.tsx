
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating user-centric designs with wireframing, prototyping, and intuitive user experiences that delight and engage.",
      features: ["Wireframing & Prototyping", "User Research", "Interface Design", "Usability Testing"],
      icon: "🎨",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Web Design",
      description: "Crafting beautiful, responsive websites with modern layouts and seamless user interactions across all devices.",
      features: ["Responsive Design", "Frontend Development", "Modern Layouts", "Cross-browser Compatibility"],
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Specialized services I offer to help bring your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="p-8 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 text-2xl`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold py-3 rounded-full transition-all duration-300`}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Consultation
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's collaborate to create something amazing. I'm here to help bring your ideas to life.
            </p>
            <Button 
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Project
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
