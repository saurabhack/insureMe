function ContactUs() {
    return (
      <div className="bg-gray-900 text-white min-h-screen">
        {/* Hero Section */}
        <section
          className="relative h-[50vh] flex items-center justify-center bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1600x900/?business,contact')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <p className="text-lg mt-3 max-w-xl mx-auto">
              Get in touch with us for any queries or assistance.
            </p>
          </div>
        </section>
  
        {/* Contact Information Section */}
        <section className="py-12 px-6 text-center">
          <h2 className="text-4xl font-semibold mb-6">Our Office</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Address</h3>
              <p className="mt-2 text-gray-300">
                123 Insurance Street, Mumbai, India
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="mt-2 text-gray-300">support@insureme.com</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="mt-2 text-gray-300">+91 98765 43210</p>
            </div>
          </div>
        </section>
  
        {/* Contact Form */}
        <section className="py-12 px-6">
          <h2 className="text-4xl font-semibold text-center mb-6">
            Send Us a Message
          </h2>
          <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <label className="block text-gray-300">Full Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Email Address</label>
                <input
                  type="email"
                  className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Message</label>
                <textarea
                  className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button className="w-full py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition">
                Send Message
              </button>
            </form>
          </div>
        </section>
  
        {/* Google Map Section */}
        <section className="py-12 px-6">
          <h2 className="text-4xl font-semibold text-center mb-6">Find Us</h2>
          <div className="max-w-5xl mx-auto">
            <iframe
              title="Office Location"
              className="w-full h-[300px] rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4359598393613!2d78.38564347517613!3d17.44776180143753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f4c44a9b69%3A0x8bdb5c9a1d96ec7c!2sGoogle%20India!5e0!3m2!1sen!2sin!4v1633094625868!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="py-6 bg-black text-center text-gray-400">
          <p>© {new Date().getFullYear()} InsureMe. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  
  export default ContactUs;
  