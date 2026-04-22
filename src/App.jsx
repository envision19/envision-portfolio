import React, { useState } from 'react';
import './index.css';
import { 
  Search, PenTool, Code, Rocket, ChevronDown, ChevronUp, 
  Globe, Github, Zap, MousePointer2, Menu, X 
} from 'lucide-react';
import project1Img from "./project1Img.png";
import project2Img from "./project2Img.png";

function App() {
  const [status, setStatus] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Bespoke Digital Experiences",
      tech: "React • Tailwind • High Performance",
      img: project2Img,
      type: "expandable",
      details: "This project focuses on crafting a seamless, distraction-free shopping journey. By utilizing React's state management and Tailwind's minimalist design patterns, I achieved a high-performance interface that prioritizes product visuality and sub-100ms navigation."
    },
    {
      id: 2,
      title: "Minimalist E-Commerce Hub",
      tech: "React • Node.js • State Management",
      img: project1Img,
      type: "live_website",
      link: "https://envision-sample-project.vercel.app"
    },
    {
      id: 3,
      title: "Project images",
      tech: "15+ Reusable Components",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=500",
      type: "github_images",
      github: "https://github.com/envision19/envision-projects"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setStatus("SENDING");
    try {
      const response = await fetch("https://formspree.io/f/xzdyrone", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else { setStatus("ERROR"); }
    } catch (error) { setStatus("ERROR"); }
  };

  return (
    <div className="text-slate-900 bg-[#FAFAFA] font-['Inter',_sans-serif] overflow-x-hidden">
      
      {/* NAVBAR */}
            <nav className="flex justify-between items-center px-6 md:px-10 py-6 sticky top-0 bg-white/80 backdrop-blur-md z-[100]">
        <div className="text-2xl font-bold tracking-tighter text-emerald-600">ENVISION</div>
        
        <div className="hidden md:flex space-x-8 font-medium text-sm uppercase tracking-widest text-slate-600">
          <a href="#" className="hover:text-emerald-500 transition">Home</a>
          <a href="#projects" className="hover:text-emerald-500 transition">Projects</a>
          <a href="#services" className="hover:text-emerald-500 transition">Services</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden sm:block bg-emerald-500 text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-600 transition shadow-lg shadow-emerald-200">CONTACT</a>
          
          {/* Hamburger Button */}
          <button 
            className="md:hidden p-2 text-slate-600 z-[110] relative" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        </nav>

        {/* MOBILE MENU */}
                <div 
          className={`fixed inset-0 z-[150] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden
            ${isMenuOpen 
              ? 'translate-y-0 opacity-100 visible' 
              : '-translate-y-full opacity-0 invisible pointer-events-none'
            }`}
          style={{ 
            backgroundColor: '#FAFAFA', // Absolute fallback
            height: '100vh', 
            width: '100vw' 
          }}
        >
          <div className="flex flex-col items-center space-y-10 text-3xl font-black tracking-tighter text-slate-900">
            {['HOME', 'PROJECTS', 'SERVICES', 'CONTACT'].map((item) => (
              <a 
                key={item}
                href={item === 'HOME' ? '#' : `#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-emerald-500 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="absolute bottom-10 text-[10px] font-black tracking-[0.3em] text-slate-300 uppercase">
            Envision Portfolio 2026
          </div>
          </div>
         
       
                

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-20 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <p className="text-emerald-500 font-bold tracking-widest text-xs md:text-sm uppercase">Hi, I am Creative Frontend Developer.</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            I AM <strong>ENVISION.</strong><br />
            <span className="text-slate-700">I craft high-performance, visually stunning websites using</span>{" "}
            <span className="text-emerald-500">Tailwind, <span className="text-slate-700">and</span> React</span>
          </h1>
          <p className="text-slate-500 text-base md:text-lg">High-impact code for high-level visions.</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <div className="bg-emerald-500 text-white px-8 py-3 rounded-md font-bold hover:scale-105 transition cursor-default text-center">100% custom code</div>
            <div className="border border-slate-300 px-8 py-3 rounded-md font-bold hover:bg-slate-50 transition cursor-default text-slate-600 text-center">FAST DELIVERY</div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 mt-12 flex flex-col items-center lg:items-start">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-6 font-black">My Specialization</p>
            <div className="flex space-x-10 items-center">
              {[
                { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", name: "React", desc: "JavaScript library for building user interfaces." },
                { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", name: "Tailwind CSS", desc: "Utility-first CSS framework for rapid UI development." },
              ].map((logo, idx) => (
                <div key={idx} className="relative group flex items-center justify-center">
                  <img src={logo.src} alt={logo.name} className="h-9 w-auto hover:scale-110 transition-transform cursor-help" />
                  <div className="absolute -top-24 scale-0 group-hover:scale-100 transition-all bg-white border border-slate-100 p-4 rounded-xl shadow-2xl w-48 z-50 pointer-events-none">
                    <p className="text-emerald-500 font-black text-[10px] uppercase mb-1">{logo.name}</p>
                    <p className="text-[10px] text-slate-500 leading-tight">{logo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative flex items-center justify-center h-[500px] md:h-[600px] w-full mt-12 lg:mt-0 scale-75 md:scale-100">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-emerald-400/20 rounded-full blur-[80px] md:blur-[100px] animate-pulse"></div>
          <div className="absolute w-[280px] md:w-[320px] h-[350px] md:h-[400px] bg-white/40 backdrop-blur-md border border-white/60 rounded-[3rem] rotate-12 translate-x-12 md:translate-x-16 translate-y-6 shadow-2xl z-10 hidden md:block"></div>
          <div className="absolute w-[280px] md:w-[320px] h-[350px] md:h-[400px] bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 rounded-[3rem] -rotate-6 -translate-x-12 md:translate-x-16 shadow-2xl z-20"></div>
          <div className="absolute w-[320px] md:w-[400px] bg-white p-8 md:p-10 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] z-30 hover:-translate-y-4 transition-all duration-500 group border border-slate-50">
            <div className="flex justify-between items-start mb-12">
              <div className="w-14 h-14 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200">
                <Zap size={28} fill="currentColor" />
              </div>
              <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-[10px] font-black tracking-widest uppercase py-2.5 px-5 rounded-full border border-slate-100 hover:bg-slate-900 hover:text-white transition-all active:scale-95">
                Toggle Theme: {isDarkMode ? 'Dark' : 'Light'}
              </button>
            </div>
            <div className={`rounded-3xl p-8 transition-all duration-500 border ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
              <h4 className={`text-base font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Live Visual Demo</h4>
              <p className={`text-xs font-mono mb-6 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>// Performance Optimization</p>
              <div className="space-y-3">
                <div className={`h-2 w-full rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                  <div className="h-full w-3/4 bg-emerald-500 rounded-full animate-progress"></div>
                </div>
                <div className={`h-2 w-1/2 rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                  <div className="h-full w-1/2 bg-emerald-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-7xl mx-auto px-6 md:px-10 py-32 border-t border-slate-100">
        <header className="mb-16">
          <p className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-3">Envision Works</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-center md:text-left">Sample Projects</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className={`bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-2xl flex flex-col ${expandedId === project.id ? 'lg:col-span-2' : ''}`}>
              <div className="overflow-hidden rounded-2xl mb-8 bg-slate-100">
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 px-2">{project.title}</h3>
                <p className="text-zinc-500 text-sm font-semibold mb-8 uppercase tracking-wide px-2">{project.tech}</p>
                <div className="mt-auto">
                  {project.type === 'expandable' && (
                    <>
                      {expandedId === project.id && (
                        <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 mb-6">
                          <p className="text-sm text-zinc-600 leading-relaxed">{project.details}</p>
                        </div>
                      )}
                      <button onClick={() => setExpandedId(expandedId === project.id ? null : project.id)} className="text-[#34A853] font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform px-2">
                        {expandedId === project.id ? 'Close Details' : 'View Case Study'}
                        {expandedId === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                    </>
                  )}
                  {project.type === 'live_website' && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <button className="w-full bg-[#10B981] text-white py-4 rounded-2xl font-bold text-sm hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
                        <Globe size={18} /> Launch Live Website
                      </button>
                    </a>
                  )}
                  {project.type === 'github_images' && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="w-full block">
                      <button className="w-full bg-zinc-900 text-white py-4 rounded-2xl font-bold text-sm hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                        <Github size={18} /> Github
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="inline-block text-4xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-blue-500 pb-2 mb-16 md:mb-20">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Code size={32} />, title: "Responsive Website Design", desc: "I will ensure your brand stays consistent and functional whether viewed on a smartphone or tablet or desktop." },
              { icon: <Search size={32} />, title: "Pixel-Perfect Implementation", desc: "Turning visual concepts into digital reality with 100% accuracy." },
              { icon: <Rocket size={32} />, title: "High-End Landing Pages", desc: "I combine clean layouts with smooth interactions to elevate your professional online presence." }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-emerald-100 hover:border-emerald-500 hover:shadow-2xl transition group text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-emerald-500 group-hover:text-white transition">
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 bg-slate-50 text-center rounded-[3rem] my-20">
        <h2 className="inline-block text-4xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-blue-500 pb-2 mb-16 md:mb-20">Workflow</h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
          {[
            { icon: <Search size={28} />, title: "Visual Strategy", sub: "Concept & Branding", tilt: "rotate-[15deg]" },
            { icon: <PenTool size={28} />, title: "UI Design", sub: "Prototyping & Flow", tilt: "-rotate-[15deg]" },
            { icon: <Code size={28} />, title: "Engineering", sub: "React & Tailwind Code", tilt: "rotate-[15deg]" },
            { icon: <Rocket size={28} />, title: "Launch", sub: "Deployment & Polish", tilt: "-rotate-[15deg]" }
          ].map((step, i) => (
            <React.Fragment key={i}>
              <div className="relative px-4 group">
                <div className={`w-16 h-16 bg-white text-emerald-500 rounded-2xl flex items-center justify-center shadow-sm mb-4 mx-auto group-hover:bg-emerald-500 group-hover:text-white group-hover:${step.tilt} transition-all duration-300`}>
                  {step.icon}
                </div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-[10px] text-slate-400 max-w-[150px] mx-auto uppercase tracking-tighter font-semibold">{step.sub}</p>
              </div>
              {i < 3 && <div className="hidden md:block flex-1 h-[2px] bg-slate-200 mx-4"></div>}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <footer id="contact" className="bg-white border-t border-slate-100 pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-black mb-4 tracking-tighter text-emerald-600">ENVISION</h2>
                <p className="font-bold text-slate-800 text-lg">Frontend Developer</p>
                <div className="mt-12">
                  <h4 className="font-bold uppercase text-xs tracking-widest text-slate-400 mb-6">Quick Links</h4>
                  <ul className="space-y-4 text-sm font-bold">
                    <li><a href="#" className="hover:text-emerald-500 transition">HOME</a></li>
                    <li><a href="#projects" className="hover:text-emerald-500 transition">PROJECTS</a></li>
                    <li><a href="#services" className="hover:text-emerald-500 transition">SERVICES</a></li>
                  </ul>
                </div>
              </div>
              <div className="flex space-x-6 mt-12">
                <a href="https://www.tiktok.com/@envision.b?_r=1&_t=ZS-95iorFUTejq" className="text-slate-400 hover:text-emerald-500 transition font-bold text-xs uppercase tracking-widest">Tiktok</a>
                <a href="https://contra.com/community/for-you?r=envision_3e6jp5nj" className="text-slate-400 hover:text-emerald-500 transition font-bold text-xs uppercase tracking-widest">Contra</a>
                <a href="https://github.com/envision19/envision-projects/blob/main/README.md" className="text-slate-400 hover:text-emerald-500 transition font-bold text-xs uppercase tracking-widest">Github</a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-slate-50 p-6 md:p-10 rounded-[2rem] shadow-sm border border-slate-100">
                <h4 className="text-2xl font-black mb-2 tracking-tight">Let's Work Together</h4>
                <p className="text-slate-500 mb-8 text-sm leading-relaxed">Fill out the form below and I'll get back to you as soon as possible.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="name" type="text" placeholder="Name" required className="w-full bg-white border border-slate-200 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition" />
                    <input name="email" type="email" placeholder="Email Address" required className="w-full bg-white border border-slate-200 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition" />
                  </div>
                  <input name="subject" type="text" placeholder="Subject" required className="w-full bg-white border border-slate-200 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition" />
                  <textarea name="message" placeholder="Your Message" rows="5" required className="w-full bg-white border border-slate-200 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition resize-none"></textarea>
                  <button type="submit" disabled={status === "SENDING"} className="w-full bg-emerald-500 text-white font-black py-5 rounded-2xl shadow-xl shadow-emerald-200 hover:bg-emerald-600 transition-all duration-300 uppercase tracking-widest text-xs disabled:bg-slate-400">
                    {status === "SENDING" ? "Sending..." : status === "SUCCESS" ? "Message Sent!" : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="text-center border-t border-slate-100 pt-10 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            © 2026 ENVISION. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;