import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };
  const navItems = [{
    label: 'Home',
    id: 'home'
  }, {
    label: 'About',
    id: 'about'
  }, {
    label: 'Skills',
    id: 'skills'
  }, {
    label: 'Services',
    id: 'services'
  }, {
    label: 'Portfolio',
    id: 'portfolio'
  }, {
    label: 'Contact',
    id: 'contact'
  }];
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 bg-zinc-950">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">
            Mahek Soni
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="transition-colors duration-300 font-medium text-black-50\\\\n text-slate-50 bg-gray-950 hover:bg-gray-800">
                {item.label}
              </button>)}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                  {item.label}
                </button>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;