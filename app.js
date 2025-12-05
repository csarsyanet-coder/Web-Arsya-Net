const { useState, useEffect, useRef } = React;

        // --- ICONS (Inline SVG) ---
        const IconWrapper = ({ children, size = 24, className = "" }) => (
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width={size} 
                height={size} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={className}
            >
                {children}
            </svg>
        );

        const Server = (props) => (<IconWrapper {...props}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></IconWrapper>);
        const Shield = (props) => (<IconWrapper {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></IconWrapper>);
        const Zap = (props) => (<IconWrapper {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></IconWrapper>);
        const Database = (props) => (<IconWrapper {...props}><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></IconWrapper>);
        const Cpu = (props) => (<IconWrapper {...props}><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></IconWrapper>);
        const Globe = (props) => (<IconWrapper {...props}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path></IconWrapper>);
        const Menu = (props) => (<IconWrapper {...props}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></IconWrapper>);
        const X = (props) => (<IconWrapper {...props}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></IconWrapper>);
        const Check = (props) => (<IconWrapper {...props}><polyline points="20 6 9 17 4 12"></polyline></IconWrapper>);
        const ArrowRight = (props) => (<IconWrapper {...props}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></IconWrapper>);
        const Star = (props) => (<IconWrapper {...props} className={props.className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></IconWrapper>);
        const Mail = (props) => (<IconWrapper {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></IconWrapper>);
        const ChevronDown = (props) => (<IconWrapper {...props}><polyline points="6 9 12 15 18 9"></polyline></IconWrapper>);
        const HardDrive = (props) => (<IconWrapper {...props}><line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line></IconWrapper>);
        const Sliders = (props) => (<IconWrapper {...props}><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></IconWrapper>);

        const DiscordIcon = ({ size = 24, className }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.738 13.738 0 0 0-.64 1.31 18.257 18.257 0 0 0-5.43 0 13.736 13.736 0 0 0-.642-1.31.077.077 0 0 0-.08-.037 19.757 19.757 0 0 0-4.882 1.515.069.069 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
        );

        const WhatsAppIcon = ({ size = 24, className }) => (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
        );

        // --- COMPONENTS ---

        const Reveal = ({ children, delay = 0, className = "" }) => {
            const [isVisible, setIsVisible] = useState(false);
            const ref = useRef(null);

            useEffect(() => {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setIsVisible(true);
                            observer.unobserve(entry.target);
                        }
                    },
                    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
                );
                if (ref.current) observer.observe(ref.current);
                return () => ref.current && observer.unobserve(ref.current);
            }, []);

            return (
                <div ref={ref} className={`reveal-hidden ${isVisible ? 'reveal-visible' : ''} ${delay ? `delay-${delay}` : ''} ${className}`}>
                    {children}
                </div>
            );
        };

        const Logo = () => (
            <div className="flex items-center gap-3 select-none cursor-pointer group">
                <img 
                    src="https://i.ibb.co.com/dJbjShZ4/logo-web-hosting.png" 
                    alt="Arsya Net Logo" 
                    className="h-10 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(99,102,241,0.3)] transition-transform duration-300 group-hover:scale-110" 
                />
                <span className="font-gaming font-bold text-2xl text-white group-hover:text-indigo-100 transition-colors">
                    ARSYA <span className="text-indigo-500 group-hover:text-indigo-400">NET</span>
                </span>
            </div>
        );

        const testimonialsData = [
            { name: "Budi Santoso", role: "Server Owner", text: "Gila sih, TPS stabil banget di 20 walaupun player lagi rame. Supportnya juga fast respon parah!", rating: 5, avatar: "BS" },
            { name: "Kevin Wijaya", role: "SMP Admin", text: "Harga pelajar tapi kualitas sultan. Udah pindah 3x hosting, akhirnya nemu yang cocok di Arsya Net.", rating: 5, avatar: "KW" },
            { name: "Dimas R.", role: "Builder", text: "Upload map gede cepet banget karena udah NVMe. Panelnya juga gampang dipake buat pemula.", rating: 5, avatar: "DR" },
            { name: "Reza A.", role: "Developer", text: "Anti DDoS nya beneran kerja. Server gue pernah diserang tapi tetep aman jaya. Recommended!", rating: 4, avatar: "RA" },
            { name: "Fajar", role: "Community Leader", text: "Puas banget sama pelayanan private servernya. Setup dibantuin sampe jadi. Top markotop!", rating: 5, avatar: "FJ" },
        ];

        // NEW: Fixed Private Server Plans (4GB, 8GB, 16GB, 32GB)
        // CPU specs matched to shared logic: 
        // 4GB=200%, 8GB=300%, 16GB=500%, 32GB=800%
        const privatePlansList = [
            { ram: 4, label: "Private 4GB", cpu: "200% vCpu", price: "50.000", disk: "20 GB" },
            { ram: 8, label: "Private 8GB", cpu: "300% vCpu", price: "100.000", disk: "40 GB" },
            { ram: 16, label: "Private 16GB", cpu: "500% vCpu", price: "200.000", disk: "80 GB" },
            { ram: 32, label: "Private 32GB", cpu: "800% vCpu", price: "400.000", disk: "160 GB" },
        ];

        const App = () => {
            const [isMenuOpen, setIsMenuOpen] = useState(false);
            const [scrolled, setScrolled] = useState(false);
            const [hostingType, setHostingType] = useState('shared');
            const [animating, setAnimating] = useState(false);
            
            // Shared Hosting Slider State (1 - 32)
            const [sharedLevel, setSharedLevel] = useState(1);
            // Private Hosting Slider State (Index 0 - 3)
            const [privateLevelIndex, setPrivateLevelIndex] = useState(0);

            // State untuk menampilkan tombol order (WA/Discord)
            const [showOrderButtons, setShowOrderButtons] = useState(false);
            const [showPrivateOrderButtons, setShowPrivateOrderButtons] = useState(false);

            useEffect(() => {
                const handleScroll = () => {
                    setScrolled(window.scrollY > 20);
                };
                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
            }, []);

            // Reset order buttons when slider changes
            useEffect(() => {
                setShowOrderButtons(false);
            }, [sharedLevel]);

            useEffect(() => {
                setShowPrivateOrderButtons(false);
            }, [privateLevelIndex]);

            const handleTypeChange = (type) => {
                if (type === hostingType) return;
                setAnimating(true);
                setHostingType(type);
                // Reset buttons when switching types
                setShowOrderButtons(false);
                setShowPrivateOrderButtons(false);
                setTimeout(() => setAnimating(false), 400);
            };

            // Logic for Shared Hosting Specs
            const getSharedCpu = (level) => {
                if (level === 1) return "100%";
                if (level >= 2 && level <= 4) return "200%";
                if (level >= 5 && level <= 8) return "300%";
                if (level >= 9 && level <= 14) return "400%";
                if (level >= 15 && level <= 19) return "500%";
                if (level >= 20 && level <= 25) return "700%";
                if (level >= 26 && level <= 32) return "800%";
                return "100%";
            };

            const currentSharedPlan = {
                name: `Shared ${sharedLevel}`,
                price: (sharedLevel * 10000).toLocaleString('id-ID'),
                ram: `${sharedLevel} GB`,
                cpu: `${getSharedCpu(sharedLevel)} vCpu`,
                disk: `${sharedLevel * 5} GB`, 
                features: ["Ekstra Port", "Daily Backup", "DDoS Protection"]
            };

            // Current Private Plan Data
            const currentPrivatePlan = privatePlansList[privateLevelIndex];

            // Generate WhatsApp Messages
            const waMessageShared = `Halo Admin Arsya Net, saya ingin order paket hosting:

📦 *Paket:* ${currentSharedPlan.name}
💰 *Harga:* Rp ${currentSharedPlan.price} / bulan
🧠 *RAM:* ${currentSharedPlan.ram}
⚡ *CPU:* ${currentSharedPlan.cpu}
💾 *Disk:* ${currentSharedPlan.disk} NVMe

Mohon dibantu prosesnya. Terima kasih!`;

            const waMessagePrivate = `Halo Admin Arsya Net, saya ingin order Private Server:

📦 *Paket:* ${currentPrivatePlan.label}
💰 *Harga:* Rp ${currentPrivatePlan.price} / bulan
🧠 *RAM:* ${currentPrivatePlan.ram} GB
⚡ *CPU:* ${currentPrivatePlan.cpu}
💾 *Disk:* ${currentPrivatePlan.disk} NVMe

Mohon dibantu prosesnya. Terima kasih!`;

            const waLinkShared = `https://wa.me/6281234567890?text=${encodeURIComponent(waMessageShared)}`;
            const waLinkPrivate = `https://wa.me/6281234567890?text=${encodeURIComponent(waMessagePrivate)}`;
            const discordLink = "https://discord.gg/arsyanet"; 

            // Slider percentage calculation Shared
            const minShared = 1;
            const maxShared = 32;
            const percentageShared = ((sharedLevel - minShared) / (maxShared - minShared)) * 100;

            // Slider percentage calculation Private (0 to 3)
            const percentagePrivate = (privateLevelIndex / 3) * 100;

            return (
                <div className="min-h-screen hero-pattern overflow-x-hidden selection:bg-indigo-500 selection:text-white">
                    
                    {/* --- NAVBAR --- */}
                    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
                        <div className="container mx-auto px-4 flex justify-between items-center">
                            <a href="#" className="flex items-center gap-3"><Logo /></a>
                            <div className="hidden md:flex items-center gap-8 font-medium text-slate-300">
                                {['Beranda', 'Fitur', 'Harga', 'Testimoni', 'Bantuan'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase() === 'beranda' ? 'home' : item.toLowerCase() === 'harga' ? 'pricing' : item.toLowerCase() === 'fitur' ? 'features' : item.toLowerCase() === 'testimoni' ? 'reviews' : 'support'}`} className="relative hover:text-white transition-colors duration-300 hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-indigo-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300">{item}</a>
                                ))}
                                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/40 active:scale-95">Client Area</button>
                            </div>
                            <button className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
                        </div>
                        <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 p-4 flex flex-col gap-4 shadow-xl transition-all duration-300 origin-top ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'}`}>
                            <a href="#home" className="text-slate-300 hover:text-white py-2 px-4 hover:bg-slate-800 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Beranda</a>
                            <a href="#features" className="text-slate-300 hover:text-white py-2 px-4 hover:bg-slate-800 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Fitur</a>
                            <a href="#pricing" className="text-slate-300 hover:text-white py-2 px-4 hover:bg-slate-800 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Harga</a>
                             <a href="#reviews" className="text-slate-300 hover:text-white py-2 px-4 hover:bg-slate-800 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Testimoni</a>
                             <a href="#support" className="text-slate-300 hover:text-white py-2 px-4 hover:bg-slate-800 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>Bantuan</a>
                            <button className="bg-indigo-600 text-white px-5 py-3 rounded-lg font-bold w-full active:scale-95 transition-transform">Client Area</button>
                        </div>
                    </nav>

                    {/* --- HERO SECTION --- */}
                    <section id="home" className="pt-32 pb-24 relative overflow-hidden flex items-center min-h-[90vh]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
                        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
                        <div className="container mx-auto px-4 text-center z-10">
                            <Reveal>
                                <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-semibold mb-8 shadow-lg shadow-indigo-900/20 hover:bg-indigo-500/20 transition-colors cursor-default">🚀 Hosting Minecraft #1 di Indonesia</span>
                            </Reveal>
                            <Reveal delay={100}>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 font-gaming leading-tight tracking-tight">Bangun Dunia Impianmu <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 animate-gradient bg-300%">Tanpa Lag</span></h1>
                            </Reveal>
                            <Reveal delay={200}>
                                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">Arsya Net menyediakan performa server terbaik dengan harga pelajar. Siap untuk main bareng teman atau membangun komunitas besar?</p>
                            </Reveal>
                            <Reveal delay={300}>
                                <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
                                    <a href="#pricing" className="minecraft-btn bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 w-full md:w-auto justify-center group">Pesan Sekarang <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></a>
                                    <a href="#features" className="px-8 py-4 rounded-xl font-bold text-lg text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-800 transition-all w-full md:w-auto justify-center flex hover:-translate-y-1">Lihat Fitur</a>
                                </div>
                            </Reveal>
                            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto border-t border-slate-800/60 pt-10 animate-float">
                                {[{ val: '99.9%', label: 'Uptime', color: 'text-emerald-400' }, { val: '10Gbps', label: 'Connection', color: 'text-cyan-400' }, { val: '24/7', label: 'Support', color: 'text-indigo-400' }, { val: '1000+', label: 'Pelanggan', color: 'text-purple-400' }].map((stat, i) => (
                                    <div key={i} className="hover:bg-slate-800/30 p-4 rounded-xl transition-colors duration-300">
                                        <h3 className={`text-3xl md:text-4xl font-bold ${stat.color} font-gaming mb-1`}>{stat.val}</h3>
                                        <p className="text-slate-500 text-sm font-medium tracking-wide uppercase">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* --- FEATURES SECTION --- */}
                    <section id="features" className="py-24 bg-slate-900/50 relative">
                         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>
                        <div className="container mx-auto px-4">
                            <Reveal><div className="text-center mb-20"><h2 className="text-3xl md:text-5xl font-bold font-gaming mb-6">Kenapa Pilih <span className="text-indigo-500 relative inline-block">Arsya Net</span>?</h2><p className="text-slate-400 text-lg max-w-2xl mx-auto">Teknologi server mutakhir yang dirancang khusus untuk memberikan pengalaman bermain Minecraft tanpa gangguan.</p></div></Reveal>
                            <div className="grid md:grid-cols-3 gap-8">
                                {[{ icon: <Zap size={32} />, title: "Performa Tinggi", desc: "Menggunakan prosesor terbaru dan RAM DDR4/5 untuk memastikan TPS server tetap stabil di angka 20.", color: "text-indigo-400", bg: "bg-indigo-500/10", hover: "group-hover:bg-indigo-500" }, { icon: <Shield size={32} />, title: "Anti DDoS Protection", desc: "Server Anda aman dari serangan siber. Main dengan tenang tanpa gangguan orang iseng dengan proteksi berlapis.", color: "text-emerald-400", bg: "bg-emerald-500/10", hover: "group-hover:bg-emerald-500" }, { icon: <Globe size={32} />, title: "Lokasi Indonesia", desc: "Ping rendah untuk pemain Indonesia. Latency kecil membuat PvP dan building makin lancar tanpa delay yang mengganggu.", color: "text-cyan-400", bg: "bg-cyan-500/10", hover: "group-hover:bg-cyan-500" }].map((feature, i) => (
                                    <Reveal key={i} delay={(i+1) * 100}>
                                        <div className="glass-card p-8 rounded-3xl h-full group flex flex-col items-start relative overflow-hidden">
                                            <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${feature.bg} blur-3xl group-hover:blur-2xl transition-all duration-500`}></div>
                                            <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 ${feature.color} ${feature.hover} group-hover:text-white transition-all duration-300 shadow-lg group-hover:scale-110 group-hover:rotate-3`}>{feature.icon}</div>
                                            <h3 className="text-2xl font-bold mb-4 font-gaming">{feature.title}</h3>
                                            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{feature.desc}</p>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* --- PRICING SECTION --- */}
                    <section id="pricing" className="py-24 relative overflow-hidden">
                         <div className="absolute right-0 top-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                         <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-emerald-600/10 rounded-full blur-[80px] -z-10"></div>
                        <div className="container mx-auto px-4">
                            <Reveal>
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-5xl font-bold font-gaming mb-6">
                                        Pilih Paket <span className={`transition-colors duration-500 ${hostingType === 'private' ? 'text-emerald-500' : 'text-indigo-500'}`}>{hostingType === 'private' ? 'Sultan' : 'Pelajar'}</span>
                                    </h2>
                                    <p className="text-slate-400 text-lg mb-4">Pilih tipe hosting yang sesuai dengan kebutuhan komunitasmu.</p>
                                    
                                    {/* RYZEN 9950X BADGE */}
                                    <div className="inline-block mb-8 animate-pulse">
                                        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-lg shadow-orange-900/40 border border-orange-400/30 flex items-center gap-2">
                                            <Cpu size={14} />
                                            Powered by AMD Ryzen™ 9 9950X - Extreme Performance
                                        </div>
                                    </div>
                                    
                                    <div className="flex justify-center mb-10">
                                        <div className="inline-flex bg-slate-800/80 backdrop-blur-sm p-1.5 rounded-full border border-slate-700 relative">
                                            <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full transition-all duration-500 ease-spring ${hostingType === 'private' ? 'translate-x-full bg-emerald-600' : 'translate-x-0 bg-indigo-600'}`} style={{transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"}}></div>
                                            <button onClick={() => handleTypeChange('shared')} className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${hostingType === 'shared' ? 'text-white' : 'text-slate-400 hover:text-white'}`}>Shared Hosting</button>
                                            <button onClick={() => handleTypeChange('private')} className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${hostingType === 'private' ? 'text-white' : 'text-slate-400 hover:text-white'}`}>Private Server</button>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                            
                            <div className={`w-full transition-all duration-500 ease-out ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                                
                                {/* SHARED HOSTING SINGLE INTERACTIVE CARD */}
                                {hostingType === 'shared' && (
                                    <Reveal key="shared-configurator">
                                        <div className="max-w-2xl mx-auto glass-card rounded-3xl overflow-hidden relative flex flex-col shadow-2xl shadow-indigo-900/20 border border-indigo-500/30">
                                            
                                            {/* Header */}
                                            <div className="h-40 overflow-hidden relative">
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10"></div>
                                                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" alt="Shared Plan" className="w-full h-full object-cover" />
                                                <div className="absolute top-4 right-4 z-20 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-indigo-500/40 tracking-wide uppercase flex items-center gap-2">
                                                    <Sliders size={12}/> Configurable
                                                </div>
                                            </div>

                                            {/* Body */}
                                            <div className="p-8 pt-4">
                                                {/* Plan Selector */}
                                                <div className="mb-8">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <label className="text-slate-400 text-xs font-bold uppercase tracking-wider">Geser untuk pilih paket</label>
                                                        <span className="text-indigo-400 font-bold font-gaming text-lg">Shared {sharedLevel}</span>
                                                    </div>
                                                    
                                                    {/* Slider */}
                                                    <div className="relative h-6 flex items-center">
                                                        <input 
                                                            type="range" 
                                                            min={minShared} 
                                                            max={maxShared} 
                                                            value={sharedLevel} 
                                                            onChange={(e) => setSharedLevel(parseInt(e.target.value))}
                                                            className="w-full absolute z-20 opacity-0 cursor-pointer h-full inset-0"
                                                        />
                                                        {/* Custom Slider Track */}
                                                        <div className="w-full h-2 bg-slate-700 rounded-full relative overflow-hidden pointer-events-none">
                                                            <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 absolute top-0 left-0 transition-all duration-75" style={{ width: `${percentageShared}%` }}></div>
                                                        </div>
                                                        {/* Custom Slider Thumb */}
                                                        <div 
                                                            className="h-5 w-5 bg-white rounded-full absolute z-10 shadow-lg shadow-black/50 transition-all duration-75 pointer-events-none border-2 border-indigo-500" 
                                                            style={{ left: `calc(${percentageShared}% - 10px)` }} 
                                                        ></div>
                                                    </div>
                                                    
                                                    {/* Dropdown fallback/alternative */}
                                                    <div className="mt-4 flex items-center gap-3">
                                                         <span className="text-sm text-slate-400">Atau pilih manual:</span>
                                                         <div className="relative flex-1">
                                                            <select 
                                                                className="w-full bg-slate-800 text-white text-sm font-bold border border-slate-600 rounded-lg py-2 pl-3 pr-8 appearance-none focus:outline-none focus:border-indigo-500 cursor-pointer hover:bg-slate-700 transition-colors"
                                                                value={sharedLevel}
                                                                onChange={(e) => setSharedLevel(parseInt(e.target.value))}
                                                            >
                                                                {[...Array(32)].map((_, i) => (
                                                                    <option key={i+1} value={i+1}>Shared {i+1} ({i+1} GB RAM)</option>
                                                                ))}
                                                            </select>
                                                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                                <ChevronDown size={14} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="w-full h-px bg-slate-700/50 mb-6"></div>

                                                {/* Price & Specs */}
                                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                                                    <div>
                                                        <h3 className="text-3xl font-gaming font-bold text-white mb-1 transition-all">{currentSharedPlan.name}</h3>
                                                        <div className="flex items-baseline">
                                                            <span className="text-sm text-slate-400 font-medium">Rp</span>
                                                            <span className="text-5xl font-bold mx-1 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 transition-all">{currentSharedPlan.price}</span>
                                                            <span className="text-slate-500 font-medium text-sm">/bulan</span>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
                                                        <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 flex flex-col items-center min-w-[100px]">
                                                            <span className="text-xs text-slate-400 uppercase font-bold mb-1">RAM</span>
                                                            <div className="text-white font-bold text-lg flex items-center gap-1.5"><Database size={16} className="text-indigo-400"/> {currentSharedPlan.ram}</div>
                                                        </div>
                                                        <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 flex flex-col items-center min-w-[100px]">
                                                            <span className="text-xs text-slate-400 uppercase font-bold mb-1">CPU</span>
                                                            <div className="text-white font-bold text-lg flex items-center gap-1.5"><Cpu size={16} className="text-purple-400"/> {currentSharedPlan.cpu}</div>
                                                        </div>
                                                        <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 flex flex-col items-center min-w-[100px] col-span-2">
                                                            <span className="text-xs text-slate-400 uppercase font-bold mb-1">NVMe Disk</span>
                                                            <div className="text-white font-bold text-lg flex items-center gap-1.5"><HardDrive size={16} className="text-emerald-400"/> {currentSharedPlan.disk}</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Features */}
                                                <div className="bg-slate-800/40 rounded-xl p-4 mb-6">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        {currentSharedPlan.features.map((feature, idx) => (
                                                            <div key={idx} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                                                                <div className="bg-emerald-500/20 p-1 rounded-full"><Check size={12} className="text-emerald-500" /></div>
                                                                {feature}
                                                            </div>
                                                        ))}
                                                        <div className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                                                            <div className="bg-emerald-500/20 p-1 rounded-full"><Check size={12} className="text-emerald-500" /></div>
                                                            Panel Pterodactyl
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Main Button (Toggles Options) */}
                                                <button 
                                                    onClick={() => setShowOrderButtons(!showOrderButtons)}
                                                    className={`w-full py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-900/50 minecraft-btn flex items-center justify-center gap-2 group ${showOrderButtons ? 'mb-4 ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-900' : ''}`}
                                                >
                                                    Pilih Paket {currentSharedPlan.name} 
                                                    <ArrowRight size={20} className={`transition-transform duration-300 ${showOrderButtons ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                                                </button>

                                                {/* Conditional Payment Buttons */}
                                                <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-500 ease-in-out overflow-hidden ${showOrderButtons ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <a 
                                                        href={waLinkShared} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-1"
                                                    >
                                                        <WhatsAppIcon size={20} /> Order via WhatsApp
                                                    </a>
                                                    <a 
                                                        href={discordLink} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="bg-[#5865F2] hover:bg-[#4752C4] text-white py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-[#5865F2]/30 transition-all hover:-translate-y-1"
                                                    >
                                                        <DiscordIcon size={20} /> Order via Discord
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </Reveal>
                                )}

                                {/* PRIVATE SERVER CONFIGURATOR CARD */}
                                {hostingType === 'private' && (
                                    <Reveal key="private-configurator">
                                        <div className="max-w-2xl mx-auto glass-card rounded-3xl overflow-hidden relative flex flex-col shadow-2xl shadow-emerald-900/20 border border-emerald-500/30">
                                            
                                            {/* Header */}
                                            <div className="h-40 overflow-hidden relative">
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10"></div>
                                                <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop" alt="Private Plan" className="w-full h-full object-cover" />
                                                <div className="absolute top-4 right-4 z-20 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-emerald-500/40 tracking-wide uppercase flex items-center gap-2">
                                                    <Shield size={12}/> Dedicated Resources
                                                </div>
                                            </div>

                                            {/* Body */}
                                            <div className="p-8 pt-4">
                                                {/* Plan Selector */}
                                                <div className="mb-8">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <label className="text-slate-400 text-xs font-bold uppercase tracking-wider">Geser untuk pilih paket</label>
                                                        <span className="text-emerald-400 font-bold font-gaming text-lg">{currentPrivatePlan.label}</span>
                                                    </div>
                                                    
                                                    {/* Slider */}
                                                    <div className="relative h-6 flex items-center">
                                                        <input 
                                                            type="range" 
                                                            min="0" 
                                                            max="3" 
                                                            value={privateLevelIndex} 
                                                            onChange={(e) => setPrivateLevelIndex(parseInt(e.target.value))}
                                                            className="w-full absolute z-20 opacity-0 cursor-pointer h-full inset-0"
                                                        />
                                                        {/* Custom Slider Track */}
                                                        <div className="w-full h-2 bg-slate-700 rounded-full relative overflow-hidden pointer-events-none">
                                                            <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 absolute top-0 left-0 transition-all duration-75" style={{ width: `${percentagePrivate}%` }}></div>
                                                        </div>
                                                        {/* Custom Slider Thumb */}
                                                        <div 
                                                            className="h-5 w-5 bg-white rounded-full absolute z-10 shadow-lg shadow-black/50 transition-all duration-75 pointer-events-none border-2 border-emerald-500" 
                                                            style={{ left: `calc(${percentagePrivate}% - 10px)` }} 
                                                        ></div>
                                                    </div>
                                                    
                                                    {/* Steps Indicators */}
                                                    <div className="flex justify-between mt-2 px-1">
                                                        {privatePlansList.map((plan, i) => (
                                                            <div key={i} className={`text-xs font-bold transition-colors ${i === privateLevelIndex ? 'text-emerald-400' : 'text-slate-600'}`}>
                                                                {plan.ram}GB
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="w-full h-px bg-slate-700/50 mb-6"></div>

                                                {/* Price & Specs */}
                                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                                                    <div>
                                                        <h3 className="text-3xl font-gaming font-bold text-white mb-1 transition-all">{currentPrivatePlan.label}</h3>
                                                        <div className="flex items-baseline">
                                                            <span className="text-sm text-slate-400 font-medium">Rp</span>
                                                            <span className="text-5xl font-bold mx-1 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 transition-all">{currentPrivatePlan.price}</span>
                                                            <span className="text-slate-500 font-medium text-sm">/bulan</span>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
                                                        <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 flex flex-col items-center min-w-[100px]">
                                                            <span className="text-xs text-slate-400 uppercase font-bold mb-1">RAM</span>
                                                            <div className="text-white font-bold text-lg flex items-center gap-1.5"><Database size={16} className="text-emerald-400"/> {currentPrivatePlan.ram} GB</div>
                                                        </div>
                                                        <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 flex flex-col items-center min-w-[100px]">
                                                            <span className="text-xs text-slate-400 uppercase font-bold mb-1">CPU</span>
                                                            <div className="text-white font-bold text-lg flex items-center gap-1.5"><Cpu size={16} className="text-teal-400"/> {currentPrivatePlan.cpu}</div>
                                                        </div>
                                                        <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 flex flex-col items-center min-w-[100px] col-span-2">
                                                            <span className="text-xs text-slate-400 uppercase font-bold mb-1">NVMe Disk</span>
                                                            <div className="text-white font-bold text-lg flex items-center gap-1.5"><HardDrive size={16} className="text-cyan-400"/> {currentPrivatePlan.disk}</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Features */}
                                                <div className="bg-slate-800/40 rounded-xl p-4 mb-6">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        <div className="flex items-center gap-3 text-slate-300 text-sm font-medium"><div className="bg-emerald-500/20 p-1 rounded-full"><Check size={12} className="text-emerald-500" /></div>Full Root Access</div>
                                                        <div className="flex items-center gap-3 text-slate-300 text-sm font-medium"><div className="bg-emerald-500/20 p-1 rounded-full"><Check size={12} className="text-emerald-500" /></div>Isolated Environment</div>
                                                        <div className="flex items-center gap-3 text-slate-300 text-sm font-medium"><div className="bg-emerald-500/20 p-1 rounded-full"><Check size={12} className="text-emerald-500" /></div>Premium Support</div>
                                                        <div className="flex items-center gap-3 text-slate-300 text-sm font-medium"><div className="bg-emerald-500/20 p-1 rounded-full"><Check size={12} className="text-emerald-500" /></div>Free Setup</div>
                                                    </div>
                                                </div>

                                                {/* Main Button (Toggles Options) */}
                                                <button 
                                                    onClick={() => setShowPrivateOrderButtons(!showPrivateOrderButtons)}
                                                    className={`w-full py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-900/50 minecraft-btn flex items-center justify-center gap-2 group ${showPrivateOrderButtons ? 'mb-4 ring-2 ring-emerald-400 ring-offset-2 ring-offset-slate-900' : ''}`}
                                                >
                                                    Pilih Paket {currentPrivatePlan.label} 
                                                    <ArrowRight size={20} className={`transition-transform duration-300 ${showPrivateOrderButtons ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                                                </button>

                                                {/* Conditional Payment Buttons */}
                                                <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-500 ease-in-out overflow-hidden ${showPrivateOrderButtons ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <a 
                                                        href={waLinkPrivate} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-1"
                                                    >
                                                        <WhatsAppIcon size={20} /> Order via WhatsApp
                                                    </a>
                                                    <a 
                                                        href={discordLink} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="bg-[#5865F2] hover:bg-[#4752C4] text-white py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-[#5865F2]/30 transition-all hover:-translate-y-1"
                                                    >
                                                        <DiscordIcon size={20} /> Order via Discord
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </Reveal>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* --- REVIEWS SECTION (MARQUEE) --- */}
                    <section id="reviews" className="py-20 bg-slate-900/50 border-t border-slate-800/50 overflow-hidden pause-on-hover relative">
                        {/* Title */}
                        <div className="container mx-auto px-4 mb-10 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold font-gaming mb-2">Kata Mereka Tentang <span className="text-indigo-500">Arsya Net</span></h2>
                            <p className="text-slate-400 text-sm">Review jujur dari pelanggan setia kami</p>
                        </div>
                        
                        {/* Marquee Container with Mask */}
                        <div className="w-full relative marquee-mask">
                            <div className="flex animate-marquee gap-6 items-center min-w-full pl-6">
                                {/* Duplicate data to ensure seamless loop */}
                                {[...testimonialsData, ...testimonialsData, ...testimonialsData, ...testimonialsData].map((testimonial, idx) => (
                                    <div key={idx} className="w-80 md:w-96 flex-shrink-0 glass-card p-6 rounded-2xl border border-slate-700/50 hover:border-indigo-500/30 transition-colors">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg">
                                                {testimonial.avatar}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white leading-none">{testimonial.name}</h4>
                                                <span className="text-xs text-indigo-400 font-medium">{testimonial.role}</span>
                                            </div>
                                            <div className="ml-auto flex gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={14} className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600"} />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-slate-300 text-sm leading-relaxed italic">"{testimonial.text}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* --- CUSTOMER SUPPORT SECTION --- */}
                    <section id="support" className="py-24 relative">
                        <div className="container mx-auto px-4">
                            <Reveal>
                                <div className="glass-card rounded-3xl p-8 md:p-12 border border-indigo-500/20 bg-gradient-to-br from-slate-800/50 to-indigo-900/20 relative overflow-hidden">
                                    {/* Background Decor */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
                                    
                                    <div className="grid md:grid-cols-2 gap-12 items-center">
                                        <div>
                                            <span className="inline-block py-1 px-3 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-4 border border-emerald-500/20">ONLINE 24/7</span>
                                            <h2 className="text-3xl md:text-5xl font-bold font-gaming mb-6">Butuh Bantuan Setup?</h2>
                                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                                Tim support kami siap membantu kapanpun kamu butuh. 
                                                Bingung install plugin? Atau mau custom domain? Chat aja langsung!
                                            </p>
                                            
                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <a href="https://wa.me/6281234567890" target="_blank" className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white px-6 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 shadow-lg shadow-green-900/30">
                                                    <WhatsAppIcon size={24} />
                                                    WhatsApp
                                                </a>
                                                <a href="#" target="_blank" className="flex items-center justify-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 shadow-lg shadow-indigo-900/30">
                                                    <DiscordIcon size={24} />
                                                    Join Discord
                                                </a>
                                                <a href="mailto:support@arsyanet.com" className="flex items-center justify-center gap-3 bg-slate-700 hover:bg-slate-600 text-white px-6 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 border border-slate-600">
                                                    <Mail size={24} />
                                                    Email
                                                </a>
                                            </div>
                                        </div>
                                        
                                        <div className="relative">
                                            {/* Chat Bubble Simulation */}
                                            <div className="space-y-4 max-w-md mx-auto">
                                                <div className="bg-slate-800/80 p-4 rounded-2xl rounded-tl-none border border-slate-700 shadow-xl animate-float" style={{animationDelay: '0s'}}>
                                                    <p className="text-sm text-slate-300"><span className="text-indigo-400 font-bold">User:</span> Min, server saya kok gak bisa connect ya?</p>
                                                </div>
                                                <div className="bg-indigo-600/20 p-4 rounded-2xl rounded-tr-none border border-indigo-500/30 shadow-xl ml-auto animate-float" style={{animationDelay: '1s'}}>
                                                    <p className="text-sm text-slate-200"><span className="text-emerald-400 font-bold">Admin:</span> Halo kak! Coba cek whitelistnya sudah dimatikan belum? Biar saya bantu cek ip nya ya.</p>
                                                </div>
                                                <div className="bg-slate-800/80 p-4 rounded-2xl rounded-tl-none border border-slate-700 shadow-xl animate-float" style={{animationDelay: '2s'}}>
                                                    <p className="text-sm text-slate-300"><span className="text-indigo-400 font-bold">User:</span> Wah iya lupa, makasih min fast respon banget!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </section>

                    {/* --- FOOTER --- */}
                    <footer className="bg-slate-900 border-t border-slate-800 py-16 relative">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-900 to-transparent"></div>
                        
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                                <div className="text-center md:text-left">
                                    <Logo />
                                    <p className="text-slate-500 mt-4 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                                        &copy; 2024 Arsya Net. All rights reserved. <br/>
                                        Mitra terbaik Anda dalam membangun komunitas Minecraft yang solid.
                                    </p>
                                </div>
                                <div className="flex gap-8">
                                    {['Terms of Service', 'Privacy Policy', 'Contact Us'].map(link => (
                                        <a key={link} href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium hover:underline decoration-indigo-500 decoration-2 underline-offset-4">
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);