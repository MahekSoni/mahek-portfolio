const Footer = () => {
  return <footer className="text-white py-12 bg-purple-950">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Mahek Soni
          </h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            BCA Student | UI/UX Designer | Future Educator
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:mahek200521@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              Email
            </a>
            <span className="text-gray-600">|</span>
            <a href="tel:7211120207" className="text-gray-400 hover:text-white transition-colors">
              Phone
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm">
              © 2024 Mahek Soni. All rights reserved. Built with passion and dedication.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;