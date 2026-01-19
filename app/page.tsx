'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: 'fa-face-smile',
      title: 'Îngrijire față',
      description: 'Regimuri de îngrijire personalizate pentru un ten strălucitor și o piele radiantă.'
    },
    {
      icon: 'fa-hand-fist',
      title: 'Metode de slăbire',
      description: 'Soluții inovatoare pentru o siluetă sculptată și o încredere sporită.'
    },
    {
      icon: 'fa-spa',
      title: 'Îngrijire corp',
      description: 'Rituale relaxante și revitalizante pentru un corp și o minte în armonie.'
    },
    {
      icon: 'fa-heart',
      title: 'Tratamente anti-îmbătrânire',
      description: 'Tehnologii avansate pentru a reduce semnele îmbătrânirii și a redobândi o piele tânără.'
    },
    {
      icon: 'fa-droplet',
      title: 'Hidratare intensă',
      description: 'Îngrijiri profunde pentru a hidrata și hrăni pielea, făcând-o moale și catifelată.'
    },
    {
      icon: 'fa-star',
      title: 'Tratament premium',
      description: 'Experiențe exclusive care combină cele mai bune tehnici pentru rezultate excepționale.'
    }
  ]

  const testimonials = [
    {
      name: 'Maria D.',
      role: 'Clientă de 2 ani',
      content: 'Experiență incredibilă! Echipa este profesionistă și atentă. Rezultatele mele depășesc așteptările.',
      rating: 5
    },
    {
      name: 'Sofia M.',
      role: 'Clientă regulată',
      content: 'Atmosferă relaxantă și tratamente de înaltă calitate. Recomand cu căldură Beauty Skin Studio!',
      rating: 5
    },
    {
      name: 'Clara L.',
      role: 'Clientă nouă',
      content: 'Prima vizită și deja uimită de nivelul de excelență. Voi reveni cu siguranță.',
      rating: 5
    }
  ]

  const contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      title: 'Adresă',
      text: 'Splaiul Unirii 189, București 032261'
    },
    {
      icon: 'fa-phone',
      title: 'Telefon',
      text: '0723 836 619'
    },
    {
      icon: 'fa-envelope',
      title: 'Email',
      text: 'contact@beautyskinstudio.ro'
    },
    {
      icon: 'fa-clock',
      title: 'Program',
      text: 'Luni - Vineri: 10:00 - 18:00 | Sâmbătă - Duminică: Închis'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Promo Bar */}
      <div className="promo-bar">
        <div className="promo-desktop">
          <span>Concept demo • Conținut orientativ • Dezvoltat de sky.ro • <a href="mailto:dan.trifan@sky.ro">dan.trifan@sky.ro</a> • <a href="tel:+40720088880">+4 0720 088 880</a></span>
          <a className="btn-promo" href="https://wa.me/40720088880">WhatsApp</a>
        </div>
        <div className="promo-mobile">
          <div className="promo-left">Concept demo</div>
          <div className="promo-center">Dezvoltat de sky.ro</div>
          <div className="promo-right">
            <a href="tel:+40720088880">+4 0720 088 880</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed w-full bg-primary/95 backdrop-blur-md z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-4' : 'shadow-sm py-6'}`} style={{ top: 'calc(var(--promo-height) + env(safe-area-inset-top))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Beauty Skin Studio" 
                width={150} 
                height={50} 
                className="object-contain"
              />
            </div>
            <ul className="hidden md:flex space-x-8">
              <li><a href="#home" className="text-white hover:text-gray-200 transition-colors font-medium">Acasă</a></li>
              <li><a href="#about" className="text-white hover:text-gray-200 transition-colors font-medium">Despre noi</a></li>
              <li><a href="#services" className="text-white hover:text-gray-200 transition-colors font-medium">Servicii</a></li>
              <li><a href="#contact" className="text-white hover:text-gray-200 transition-colors font-medium">Contact</a></li>
            </ul>
            <button className="md:hidden text-white text-2xl">
              <i className="fas fa-bars"></i>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-bg opacity-5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="floating-animation inline-block mb-4">
            <i className="fas fa-spa text-primary text-5xl"></i>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight fade-in-up">
            Descoperiți o <span className="gradient-text">nouă eleganță</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            La Beauty Skin Studio, vă oferim o experiență de frumusețe excepțională cu tratamente personalizate și rezultate remarcabile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button className="btn-primary">
              <i className="fas fa-calendar-alt mr-2"></i> Rezervați o programare
            </button>
            <button className="btn-secondary">
              <i className="fas fa-info-circle mr-2"></i> Aflați mai multe
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-primary text-2xl"></i>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 fade-in-up">
              O echipă de
              <span className="gradient-text"> exelență</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              Echipa noastră de profesioniști calificați vă întâmpină într-un cadru călduros pentru a vă oferi îngrijiri de frumusețe excepționale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <Image 
                src="/hairstylist-lady-dried-head-in-barber-shop-at-mirr-2026-01-08-23-22-36-utc.jpg"
                alt="Beauty Skin Studio - Filosofia noastră"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl card-hover"
              />
            </div>
            <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-3xl font-bold gradient-text">Filosofia noastră</h3>
              <p className="text-gray-600">
                La Beauty Skin Studio, credem că frumusețea este o combinație de expertiză, îngrijiri personalizate și tehnologie de ultimă generație. Fiecare client este unic, iar noi adaptăm tratamentele pentru a răspunde nevoilor dumneavoastră specifice.
              </p>
              <p className="text-gray-600">
                Cu peste 10 ani de experiență în sectorul esteticii, echipa noastră este dedicată să vă ofere rezultate excepționale într-un mediu relaxant și sigur.
              </p>
              <div className="space-y-4">
                {['Expertiză profesională', 'Tratamente personalizate', 'Tehnologie de ultimă generație', 'Rezultate garantate'].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white mr-4">
                      <i className="fas fa-check"></i>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 fade-in-up">
              <span className="gradient-text">Serviciile</span> noastre
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              Descoperiți gama noastră completă de servicii estetice pentru o bunăstare totală.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg service-card hover:shadow-xl transition-all duration-300 card-hover fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-white text-2xl mb-6 service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 fade-in-up">
              Ce spun <span className="gradient-text">clienții</span> noștri
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              Mărturii autentice de la clienți mulțumiți.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-lg card-hover fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-accent"></i>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">" {testimonial.content} "</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <i className="fas fa-spa text-9xl absolute top-10 left-10"></i>
          <i className="fas fa-leaf text-9xl absolute bottom-10 right-10"></i>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Contactați-<span className="text-accent">ne</span>
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              Pregătit să începi călătoria către o frumusețe sporită? Suntem aici să te ajutăm.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in-up">
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white text-xl mr-6 flex-shrink-0">
                      <i className={`fas ${info.icon}`}></i>
                    </div>
                    <div>
                      <div className="text-lg font-semibold mb-1">{info.title}</div>
                      <div className="text-white/80">{info.text}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Urmăriți-ne</h3>
                <div className="flex space-x-4">
                  {['facebook', 'instagram', 'twitter', 'linkedin'].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white hover:text-primary transition-all duration-300"
                    >
                      <i className={`fab fa-${social}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/95 rounded-2xl p-8 text-gray-800 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Trimite-ne un mesaj</h3>
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Nume Complet</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Numele dumneavoastră"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="email@dumneavoastra.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Mesaj</label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    rows={4}
                    placeholder="Cum vă putem ajuta?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
                >
                  <i className="fas fa-paper-plane mr-2"></i> Trimite mesajul
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
                <div className="flex items-center">
                  <Image 
                    src="/logo.png" 
                    alt="Beauty Skin Studio" 
                    width={150} 
                    height={50} 
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-400">
                  Partenerul dumneavoastră de încredere pentru o frumusețe strălucitoare și durabilă.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Link-uri rapide</h4>
                <ul className="space-y-2">
                  {['Acasă', 'Despre noi', 'Servicii', 'Contact'].map((link, index) => (
                    <li key={index}>
                      <a href={`#${link.toLowerCase().replace(/\s+/g, '')}`} className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Servicii</h4>
                <ul className="space-y-2">
                  {['Îngrijire față', 'Metode de slăbire', 'Îngrijire corp', 'Tratamente anti-îmbătrânire'].map((service, index) => (
                    <li key={index}>
                      <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><i className="fas fa-phone mr-2"></i> 0723 836 619</li>
                  <li><i className="fas fa-envelope mr-2"></i> contact@beautyskinstudio.ro</li>
                  <li><i className="fas fa-map-marker-alt mr-2"></i> Splaiul Unirii 189, București 032261</li>
                </ul>
              </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex justify-between items-center text-gray-400">
            <p>© 2026 Beauty Skin Studio. Toate drepturile rezervate.</p>
            <a href="https://sky.ro" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors">
              <span>Powered by</span>
              <Image 
                src="/skyro.png" 
                alt="Skyro" 
                width={60} 
                height={20} 
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}
