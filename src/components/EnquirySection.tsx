import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const EnquirySection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productType: 'medical',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS configuration
    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = 'service_zdwodw3';
    const templateId = 'template_jk27j0t';
    const publicKey = 'tITogzqwi7yin_6J2';
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,  // This ensures replies go to the customer
      to_name: "thoshifraseen4@gmail.com",  // Your company name in the email
      customer_email: formData.email,
      phone_number: formData.phone,
      company_name: formData.company,
      product_type: formData.productType,
      message: formData.message
    };
    
    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        
        // Show success notification
        toast.success("Thank you for your enquiry! We'll get back to you soon.");
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          productType: 'medical',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        toast.error("Failed to send your enquiry. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="enquiry" className="py-20 bg-gradient-to-r from-pharma-blue/5 to-pharma-teal/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pharma-blue mb-4">Make an Enquiry</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Interested in our products? Fill out the form below and our team will get back to you with the information you need.
            </p>
          </div>
          
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 bg-gradient-to-br from-pharma-blue to-pharma-teal text-white p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <p className="mb-8 text-white/90">
                    Have questions about our products? Our team is ready to assist you with any inquiries.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="rounded-full bg-white/10 p-2 mr-4">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Email</p>
                        <p>info@amanahchempharm.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="rounded-full bg-white/10 p-2 mr-4">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Phone</p>
                        <p>(+91) 70100 43342</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="rounded-full bg-white/10 p-2 mr-4">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Address</p>
                        <p> 59-47-A KRISHNAMACHARI ROAD
								            VIRUDHUNAGAR,-626001</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <div className="flex space-x-4">
                    <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-all">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-all">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                      </svg>
                    </a>
                    <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-all">
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3 p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input 
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="productType">Product Type</Label>
                      <select 
                        id="productType"
                        name="productType"
                        value={formData.productType}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="medical">Medical Products</option>
                        <option value="chemical">Chemical Products</option>
                        <option value="both">Both</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your inquiry..."
                        rows={4}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-pharma-blue to-pharma-teal hover:opacity-90 text-white w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;