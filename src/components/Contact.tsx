
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Send, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-pink-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                I&apos;m always excited to discuss new opportunities, whether it&apos;s a project collaboration, internship, or just a friendly chat about technology and design.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-white/80 backdrop-blur-sm border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <a 
                      href="mailto:mahek200521@gmail.com"
                      className="text-purple-600 hover:text-purple-700 transition-colors font-medium"
                    >
                      mahek200521@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <a 
                      href="tel:7211120207"
                      className="text-purple-600 hover:text-purple-700 transition-colors font-medium"
                    >
                      7211120207
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Response Time</h4>
                    <p className="text-gray-600">Usually within 24 hours</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Social Links Placeholder */}
            <Card className="p-6 bg-gradient-to-r from-purple-100 to-blue-100 border-purple-200 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Social Media</h4>
                  <p className="text-gray-600 text-sm">
                    LinkedIn and GitHub profiles coming soon! <br />
                    Follow my journey as I build my professional presence.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">
                  Message
                </Label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-4 h-4" />
                </span>
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
