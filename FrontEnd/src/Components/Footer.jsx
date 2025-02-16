function Footer() {
    return (
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Insure<span className="text-amber-400">Me</span></h2>
              <p className="text-sm text-gray-400">
                Your trusted partner for all types of insurance policies. We provide secure, reliable, and hassle-free services to protect what matters most to you.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-amber-400">Home</a></li>
                <li><a href="#" className="hover:text-amber-400">About Us</a></li>
                <li><a href="#" className="hover:text-amber-400">Policies</a></li>
                <li><a href="#" className="hover:text-amber-400">Claims</a></li>
                <li><a href="#" className="hover:text-amber-400">Contact</a></li>
              </ul>
            </div>
  
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Our Services</h3>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-amber-400">Health Insurance</a></li>
                <li><a href="#" className="hover:text-amber-400">Car Insurance</a></li>
                <li><a href="#" className="hover:text-amber-400">Home Insurance</a></li>
                <li><a href="#" className="hover:text-amber-400">Life Insurance</a></li>
                <li><a href="#" className="hover:text-amber-400">Travel Insurance</a></li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <ul className="text-gray-400 space-y-2">
                <li><i className="fas fa-map-marker-alt"></i> Pune, India</li>
                <li><i className="fas fa-phone"></i> +91-9881910567</li>
                <li><i className="fas fa-envelope"></i> support@insureme.com</li>
              </ul>
              {/* Social Media */}
              <div className="mt-4 flex space-x-4">
                <a href="#" className="hover:text-amber-400 text-xl"><i className="fab fa-facebook"></i></a>
                <a href="#" className="hover:text-amber-400 text-xl"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:text-amber-400 text-xl"><i className="fab fa-linkedin"></i></a>
                <a href="#" className="hover:text-amber-400 text-xl"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
  
          </div>
  
          {/* Copyright Section */}
          <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
            © {new Date().getFullYear()} InsureMe. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  