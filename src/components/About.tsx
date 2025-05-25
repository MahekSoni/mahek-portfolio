
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am <span className="font-semibold text-purple-700">Mahek Soni</span>, a 3rd-year BCA student with expertise in Python, Java, C, C++, Flutter, MongoDB, Django, and UI/UX design. I have three years of experience as a personal tutor and will soon begin my professional journey as a primary school teacher.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My passion lies in creating beautiful, functional designs and writing clean, efficient code. I believe in the power of technology to solve real-world problems and am constantly learning new skills to stay ahead in this dynamic field.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full">
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold px-8 py-3 rounded-full"
              >
                Let's Connect
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 card-hover">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-purple-700">Bachelor of Computer Applications (BCA)</p>
                  <p className="text-gray-600">3rd Year Student</p>
                  <p className="text-gray-500 text-sm">Expected Graduation: 2025</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-hover">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Experience</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-purple-700">Personal Tutor</p>
                  <p className="text-gray-600">3 Years Experience</p>
                  <p className="text-gray-500 text-sm">Teaching programming and computer science fundamentals</p>
                </div>
                <div>
                  <p className="font-medium text-purple-700">Future Primary School Teacher</p>
                  <p className="text-gray-600">Starting Soon</p>
                  <p className="text-gray-500 text-sm">Transitioning into formal education</p>
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
