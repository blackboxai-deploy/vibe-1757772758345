"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nailImages = [
    '/assets/nails/1.jpg',
    '/assets/nails/2.jpg', 
    '/assets/nails/3.jpg',
    '/assets/nails/4.jpg',
    '/assets/nails/5.jpg',
    '/assets/nails/6.jpg',
    '/assets/nails/7.jpg',
    '/assets/nails/8.jpg'
  ];

  const nailAlts = [
    'Elegant French manicure with gold accents',
    'Glamorous stiletto nails with golden patterns',
    'Professional acrylic nails with ombre design',
    'Luxury press-on nails with matte black finish',
    'Bridal nail art with white and gold florals',
    'Trendy coffin nails with holographic finish',
    'Classic red nails with high-gloss finish',
    'Modern nude nails with gold stripe accent'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % nailImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [nailImages.length]);

  const services = [
    { name: 'Hair', icon: '💇‍♀️', desc: 'Cutting, styling, treatments' },
    { name: 'Makeup', icon: '💄', desc: 'Professional makeup services' },
    { name: 'Nails', icon: '💅', desc: 'Manicures, nail art, press-on nails' },
    { name: 'Facial', icon: '✨', desc: 'Deep cleansing treatments' },
    { name: 'Waxing', icon: '🕯️', desc: 'Professional hair removal' },
    { name: 'Threading', icon: '🧵', desc: 'Precise eyebrow shaping' },
    { name: 'Bridal', icon: '👰', desc: 'Complete bridal packages' }
  ];

  const specialties = [
    { name: 'Hair Straightening', price: 'AED 200+' },
    { name: 'Blow Dry', price: 'AED 50+' },
    { name: 'Mehendi', price: 'AED 30+' },
    { name: 'Press-on Nails', price: 'AED 80+' }
  ];

  const testimonials = [
    { name: 'Fatima Al-Zahra', text: 'Amazing nail work! Professional and beautiful results.', service: 'Press-on Nails' },
    { name: 'Priya Sharma', text: 'Best hair straightening in Dubai! Highly recommended.', service: 'Hair Straightening' },
    { name: 'Sarah Johnson', text: 'Beautiful bridal mehendi. Perfect for my wedding day!', service: 'Bridal Mehendi' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HERO SECTION - NAILS SLIDER */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 py-8">
          
          {/* Nails Slider */}
          <div className="relative hero-slider bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-12">
            <div className="flex transition-transform duration-700 ease-in-out h-full"
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {nailImages.map((src, index) => (
                <div key={index} className="min-w-full h-full relative">
                  <img
                    src={src}
                    alt={nailAlts[index]}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = `https://placehold.co/1200x800/C6A664/000000?text=Professional+Nail+Art+${index + 1}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-black/60 text-gold px-3 py-1 rounded-full text-sm border border-gold/30">
                    {index + 1} / {nailImages.length}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Slide indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
              {nailImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-gold shadow-lg scale-125' : 'bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Headlines + CTAs */}
          <div className="text-center space-y-8 fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Your Beauty Destination
              </h1>
              <h3 className="text-2xl md:text-3xl gold font-medium">
                in Bur Dubai
              </h3>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Experience premium beauty services at Shobha Beauty Studio & Nails in Meena Bazaar. 
              Specializing in stunning nail artistry and complete beauty transformations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="https://wa.me/97143591532?text=Hello!%20I%20want%20to%20book%20an%20appointment%20at%20Shobha%20Beauty%20Studio%20%26%20Nails"
                target="_blank"
                className="btn-gold text-lg"
              >
                💬 Book Appointment
              </a>
              <a
                href="tel:+97143591532"
                className="btn-outline-gold text-lg"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US BADGES */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gold/20 hover:border-gold/40 transition-all">
              <div className="text-4xl mb-3">🕒</div>
              <h3 className="gold font-semibold mb-2">Daily 10AM–10PM</h3>
              <p className="text-gray-400 text-sm">365 Days Open</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gold/20 hover:border-gold/40 transition-all">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="gold font-semibold mb-2">Meena Bazaar</h3>
              <p className="text-gray-400 text-sm">Prime Location</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gold/20 hover:border-gold/40 transition-all">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="gold font-semibold mb-2">Since 2011</h3>
              <p className="text-gray-400 text-sm">Trusted Experience</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gold/20 hover:border-gold/40 transition-all">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="gold font-semibold mb-2">13+ Years</h3>
              <p className="text-gray-400 text-sm">Professional Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="gold">Services</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-gold/50 transition-all hover:transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="gold text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALTIES STRIP */}
      <section className="py-16 bg-gradient-to-r from-gold/10 to-gold/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="gold">Specialties</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <div key={index} className="text-center p-6 bg-black/30 rounded-xl border border-gold/20">
                <h3 className="gold text-xl font-semibold mb-2">{specialty.name}</h3>
                <p className="gold font-semibold text-lg">{specialty.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="gold">Pricing</span> & Packages
            </h2>
          </div>
          
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gold/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gold/30">
                    <th className="text-left py-4 px-6 gold font-semibold">Service</th>
                    <th className="text-left py-4 px-6 gold font-semibold">Description</th>
                    <th className="text-left py-4 px-6 gold font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-6">Hair Straightening</td>
                    <td className="py-4 px-6">Keratin treatment, chemical straightening</td>
                    <td className="py-4 px-6 gold font-semibold">AED 200-400</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-6">Blow Dry</td>
                    <td className="py-4 px-6">Professional styling, volume, bouncy curls</td>
                    <td className="py-4 px-6 gold font-semibold">AED 50-120</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-4 px-6">Mehendi</td>
                    <td className="py-4 px-6">Traditional & contemporary henna designs</td>
                    <td className="py-4 px-6 gold font-semibold">AED 30-500</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Press-on Nails</td>
                    <td className="py-4 px-6">Instant glamorous nail application</td>
                    <td className="py-4 px-6 gold font-semibold">AED 80-220</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="gold">Gallery</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nailImages.slice(0, 8).map((src, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden group">
                <img
                  src={src}
                  alt={nailAlts[index]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = `https://placehold.co/400x400/C6A664/000000?text=Gallery+${index + 1}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our <span className="gold">Clients Say</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-800/50 rounded-xl border border-gold/20">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="gold text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="gold font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT & MAP */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Visit Our <span className="gold">Studio</span>
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <span className="gold text-2xl">📍</span>
                  <div>
                    <p className="text-white font-semibold">Meena Bazaar, Bur Dubai, UAE</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="gold text-2xl">📞</span>
                  <a href="tel:+97143591532" className="gold hover:text-white font-semibold text-lg">
                    +971 4 359 1532
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="gold text-2xl">✉️</span>
                  <a href="mailto:Shobhabeautysaloon@gmail.com" className="gold hover:text-white">
                    Shobhabeautysaloon@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="gold text-2xl">📷</span>
                  <a href="https://instagram.com/shobhasaloon" target="_blank" className="gold hover:text-white">
                    @shobhasaloon
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="gold text-2xl">🕒</span>
                  <div>
                    <p className="text-white font-semibold">Daily: 10:00 AM - 10:00 PM</p>
                    <p className="gold text-sm">Open 365 days a year</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/97143591532?text=Hello!%20I%20want%20to%20book%20an%20appointment%20at%20Shobha%20Beauty%20Studio%20%26%20Nails"
                  target="_blank"
                  className="block w-full btn-gold text-center py-4 text-lg"
                >
                  💬 WhatsApp Book Now
                </a>
                <a
                  href="tel:+97143591532"
                  className="block w-full btn-outline-gold text-center py-4 text-lg"
                >
                  📞 Call Directly
                </a>
              </div>
            </div>
            
            <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5441087465467!2d55.26834641501438!3d25.259869483905426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xa5286883d5dd8594!2sMeena%20Bazaar%2C%20Bur%20Dubai%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1634567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                title="Shobha Beauty Studio Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://i.postimg.cc/YqtGN1NK/IMG-20250808-WA0128.jpg"
                  alt="Shobha Beauty Studio Logo"
                  className="h-12 w-12 object-contain rounded-lg bg-white/10 p-1"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">Shobha Beauty Studio & Nails</h3>
                  <p className="gold text-sm">Since 2011</p>
                </div>
              </div>
              <p className="text-gray-400">Your trusted beauty destination in Bur Dubai.</p>
            </div>
            
            <div>
              <h4 className="gold text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>📍 Meena Bazaar, Bur Dubai, UAE</p>
                <p>📞 <a href="tel:+97143591532" className="hover:text-gold">+971 4 359 1532</a></p>
                <p>✉️ <a href="mailto:Shobhabeautysaloon@gmail.com" className="hover:text-gold">Email Us</a></p>
                <p>🕒 Daily: 10 AM - 10 PM</p>
              </div>
            </div>
            
            <div>
              <h4 className="gold text-lg font-semibold mb-4">Follow Us</h4>
              <a href="https://instagram.com/shobhasaloon" target="_blank" className="gold hover:text-white">
                📸 @shobhasaloon
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Shobha Beauty Studio & Nails. All rights reserved.</p>
            <p className="mt-2 gold">🌐 www.shobhabeautystudio.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}