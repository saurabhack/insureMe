function AboutUs() {
    return (
      <div className="bg-gray-900 text-white min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?insurance,finance')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl font-bold">About <span className="text-amber-400">InsureMe</span></h1>
            <p className="text-lg mt-3 max-w-xl mx-auto">Your trusted partner for secure and reliable insurance solutions.</p>
          </div>
        </section>
  
        {/* Who We Are Section */}
        <section className="py-12 px-6 text-center">
          <h2 className="text-4xl font-semibold mb-6">Who We Are</h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            At <span className="text-amber-400 font-semibold">InsureMe</span>, we simplify insurance for individuals, families, and businesses. 
            Our goal is to provide <strong>comprehensive, reliable, and hassle-free insurance solutions</strong> that protect what matters most.
          </p>
        </section>
  
        {/* Our Mission */}
        <section className="py-12 px-6 bg-gray-800 text-center">
          <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
          <div className="max-w-2xl mx-auto text-gray-300 text-lg">
            <ul className="space-y-4">
              <li>✔️ To make insurance <strong>accessible, transparent, and stress-free</strong>.</li>
              <li>✔️ To provide <strong>tailored policies</strong> that meet individual needs.</li>
              <li>✔️ To ensure <strong>quick claim settlements</strong> with 24/7 support.</li>
              <li>✔️ To build <strong>trust and long-term relationships</strong> with our clients.</li>
            </ul>
          </div>
        </section>
  
        {/* Why Choose Us */}
        <section className="py-12 px-6 text-center">
          <h2 className="text-4xl font-semibold mb-6">Why Choose Us?</h2>
          <div className="max-w-2xl mx-auto text-gray-300 text-lg">
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="bg-gray-800 p-4 rounded-lg shadow-lg">🚀 <strong>Easy & Quick Process</strong> - Get insured in just a few clicks.</li>
              <li className="bg-gray-800 p-4 rounded-lg shadow-lg">💰 <strong>Affordable Plans</strong> - Best pricing with maximum benefits.</li>
              <li className="bg-gray-800 p-4 rounded-lg shadow-lg">✅ <strong>Trusted by Thousands</strong> - Backed by happy clients worldwide.</li>
              <li className="bg-gray-800 p-4 rounded-lg shadow-lg">📞 <strong>24/7 Support</strong> - Our experts are always available to help.</li>
            </ul>
          </div>
        </section>
  
        {/* Services */}
        <section className="py-12 px-6 bg-gray-800 text-center">
          <h2 className="text-4xl font-semibold mb-6">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-4 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">🏥 Health Insurance</h3>
              <p className="text-gray-300">Get the best medical coverage for your health needs.</p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">🚗 Car Insurance</h3>
              <p className="text-gray-300">Protect your vehicle from accidents and damages.</p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">🏠 Home Insurance</h3>
              <p className="text-gray-300">Secure your home against natural disasters and theft.</p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">💼 Life Insurance</h3>
              <p className="text-gray-300">Ensure financial security for your loved ones.</p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">✈️ Travel Insurance</h3>
              <p className="text-gray-300">Enjoy worry-free travel with complete protection.</p>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">📈 Business Insurance</h3>
              <p className="text-gray-300">Protect your business from financial risks and liabilities.</p>
            </div>
          </div>
        </section>
  
        {/* Contact Us */}
        <section className="py-12 px-6 text-center">
          <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-4">
            Need assistance? Our expert team is here to help. Contact us today and let’s secure your future together.
          </p>
          <a href="/contact" className="px-6 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition">Contact Us</a>
        </section>
  
        {/* Footer */}
        <footer className="py-6 bg-black text-center text-gray-400">
          <p>© {new Date().getFullYear()} InsureMe. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  
  export default AboutUs;
  