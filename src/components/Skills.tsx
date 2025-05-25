import { Card } from '@/components/ui/card';
import { Code, Database, Palette, Heart, Layers } from 'lucide-react';
const Skills = () => {
  const skillCategories = [{
    title: "Programming Languages",
    skills: ["Python", "Java", "C", "C++"],
    color: "from-blue-500 to-cyan-500",
    icon: Code
  }, {
    title: "Frameworks & Tools",
    skills: ["Flutter", "Django"],
    color: "from-purple-500 to-pink-500",
    icon: Layers
  }, {
    title: "Databases",
    skills: ["MongoDB"],
    color: "from-green-500 to-emerald-500",
    icon: Database
  }, {
    title: "Design",
    skills: ["UI/UX Design", "Web Design"],
    color: "from-orange-500 to-red-500",
    icon: Palette
  }, {
    title: "Soft Skills",
    skills: ["Teaching", "Tutoring", "Communication"],
    color: "from-indigo-500 to-purple-500",
    icon: Heart
  }];
  return <section id="skills" className="py-20 relative overflow-hidden bg-violet-300">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-pink-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return <Card key={category.title} className="p-6 bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map(skill => <div key={skill} className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-200">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>)}
                </div>
              </Card>;
        })}
        </div>

        {/* Technical Proficiency */}
        <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-cyan-50 rounded-3xl p-8 border border-purple-100">
          <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8">
            Technical Proficiency
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {["Python", "Java", "UI/UX", "Django"].map((skill, index) => <div key={skill} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {skill}
                </div>
                <p className="text-gray-700 font-medium">{skill}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;