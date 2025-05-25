import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Monitor, Sparkles, ArrowRight } from 'lucide-react';
const Services = () => {
  const services = [{
    title: "UI/UX Design",
    description: "Creating user-centric designs with wireframing, prototyping, and intuitive user experiences that delight and engage.",
    features: ["Wireframing & Prototyping", "User Research", "Interface Design", "Usability Testing"],
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50"
  }, {
    title: "Web Design",
    description: "Crafting beautiful, responsive websites with modern layouts and seamless user interactions across all devices.",
    features: ["Responsive Design", "Frontend Development", "Modern Layouts", "Cross-browser Compatibility"],
    icon: Monitor,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50"
  }];
  return <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10 bg-purple-300">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Specialized services I offer to help bring your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <Card key={service.title} className="p-8 bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group overflow-hidden relative" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => <div key={feature} className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300" style={{
                  transitionDelay: `${featureIndex * 50}ms`
                }}>
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>)}
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold py-3 rounded-2xl transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl`} onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                    <span className="flex items-center justify-center gap-2">
                      Request Consultation
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </Card>;
        })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white max-w-4xl mx-auto shadow-2xl border-0 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Let&apos;s collaborate to create something amazing. I&apos;m here to help bring your ideas to life with passion and creativity.
              </p>
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                <span className="flex items-center gap-2">
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default Services;