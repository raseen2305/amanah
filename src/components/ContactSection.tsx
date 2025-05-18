import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pharma-blue mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for any questions or support you need for our products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="bg-pharma-blue/10 p-4 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-pharma-blue" />
            </div>
            <h3 className="font-bold text-xl mb-2">Our Location</h3>
            <p className="text-gray-600">
              59-47-A Krishnamachari Road<br />
              Virudhunagar - 626001<br />
              Tamil Nadu, India
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="bg-pharma-teal/10 p-4 rounded-full mb-4">
              <Phone className="h-6 w-6 text-pharma-teal" />
            </div>
            <h3 className="font-bold text-xl mb-2">Phone</h3>
            <p className="text-gray-600">
              Main Office: (+91) 70100 43342
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="bg-pharma-blue/10 p-4 rounded-full mb-4">
              <Mail className="h-6 w-6 text-pharma-blue" />
            </div>
            <h3 className="font-bold text-xl mb-2">Email</h3>
            <p className="text-gray-600">
              General Inquiries: info@amanahchempharm.com<br />
              Website: www.amanahchempharm.com
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="bg-pharma-teal/10 p-4 rounded-full mb-4">
              <Clock className="h-6 w-6 text-pharma-teal" />
            </div>
            <h3 className="font-bold text-xl mb-2">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 8:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
<div className="mt-16">
  <div className="bg-gray-100 rounded-xl overflow-hidden h-[400px] mb-6">
    <iframe
      title="Amanah Chempharm HQ Location"
      src="https://www.google.com/maps?q=9.58144,77.94703&z=16&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>

  <div className="text-center">
    <a
      href="https://www.google.com/maps/dir/?api=1&destination=9.58144,77.94703"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-pharma-blue text-white font-semibold px-6 py-3 rounded-full hover:bg-pharma-blue/90 transition duration-300"
    >
      Get Directions
    </a>
  </div>
</div>

      </div>
    </section>
  );
};

export default ContactSection;
