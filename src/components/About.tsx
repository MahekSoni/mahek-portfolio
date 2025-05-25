
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code, Palette, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-pink-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Passionate about creating beautiful digital experiences and teaching others
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
              <p className="text-lg text-gray-700 leading-relaxed pl-8">
                I am <span className="font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Mahek Soni</span>, a 3rd-year BCA student with expertise in Python, Java, C, C++, Flutter, MongoDB, Django, and UI/UX design.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              <p className="text-lg text-gray-700 leading-relaxed pl-8">
                I have three years of experience as a personal tutor and will soon begin my professional journey as a primary school teacher. My passion lies in creating beautiful, functional designs and writing clean, efficient code.
              </p>
            </div>

            {/* Skills highlights */}
            <div className="flex flex-wrap gap-3 pt-6">
              {["Python", "Java", "UI/UX", "Teaching", "Django"].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200 hover:scale-105 transition-transform duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-purple-300 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold px-8 py-3 rounded-2xl transition-all duration-300"
              >
                Let&apos;s Connect
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Education Card */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Education</h3>
                  <p className="font-medium text-purple-700">Bachelor of Computer Applications (BCA)</p>
                  <p className="text-gray-600">3rd Year Student</p>
                  <p className="text-gray-500 text-sm">Expected Graduation: 2025</p>
                </div>
              </div>
            </Card>

            {/* Experience Card */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Experience</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-blue-700">Personal Tutor</p>
                      <p className="text-gray-600">3 Years Experience</p>
                    </div>
                    <div>
                      <p className="font-medium text-blue-700">Future Primary School Teacher</p>
                      <p className="text-gray-600">Starting Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Passion Card */}
            <Card className="p-6 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">My Passion</h4>
                  <p className="text-gray-600 text-sm">Creating beautiful digital experiences through code and design</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
