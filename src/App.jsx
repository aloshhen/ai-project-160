import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Github, Instagram, Linkedin, Eye, Download, Grid, List, Camera, Clock, Facebook } from 'lucide-react'

function Snowflake({ delay, duration, left }) {
  return (
    <motion.div
      initial={{ y: -20, x: left, opacity: 0 }}
      animate={{ 
        y: '100vh', 
        opacity: [0, 1, 1, 0],
        rotate: 360
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: 'linear'
      }}
      className="absolute text-black text-opacity-30"
      style={{ left: `${left}%` }}
    >
      ❄
    </motion.div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Все')
  const [selectedWork, setSelectedWork] = useState(null)
  const [viewMode, setViewMode] = useState('grid')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categories = ['Все', 'Архитектура', 'Иллюстрации', 'Видео']
  
  const works = [
    { id: 1, title: 'Modern Villa Design', category: 'Архитектура', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', description: 'Contemporary residential architecture with minimalist approach' },
    { id: 2, title: 'Urban Landscape', category: 'Иллюстрации', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', description: 'Digital illustration exploring city dynamics' },
    { id: 3, title: 'Brand Showcase', category: 'Видео', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80', description: 'Motion graphics for corporate identity' },
    { id: 4, title: 'Skyscraper Concept', category: 'Архитектура', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', description: 'High-rise building with sustainable features' },
    { id: 5, title: 'Character Design', category: 'Иллюстрации', image: 'https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=800&q=80', description: 'Original character illustrations for storytelling' },
    { id: 6, title: 'Product Demo', category: 'Видео', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80', description: 'Animated product visualization and demo' },
    { id: 7, title: 'Interior Spaces', category: 'Архитектура', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80', description: 'Minimalist interior design project' },
    { id: 8, title: 'Abstract Art', category: 'Иллюстрации', image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80', description: 'Experimental digital artwork series' },
    { id: 9, title: 'Documentary Film', category: 'Видео', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80', description: 'Short documentary on urban development' },
  ]

  const services = [
    { id: 1, number: '01', title: 'Архитектура', description: 'Проектирование жилых и коммерческих пространств с акцентом на минимализм и функциональность.' },
    { id: 2, number: '02', title: 'Иллюстрации', description: 'Создание уникальных цифровых иллюстраций для брендов, публикаций и личных проектов.' },
    { id: 3, number: '03', title: 'Видеография', description: 'Производство видеоконтента от съёмки до постпродакшена.' },
    { id: 4, number: '04', title: '3D Визуализация', description: 'Реалистичная визуализация архитектурных проектов и интерьеров.' },
    { id: 5, number: '05', title: 'Брендинг', description: 'Разработка фирменного стиля и визуальной айдентики.' },
    { id: 6, number: '06', title: 'Motion Design', description: 'Анимация и моушн-графика для рекламы и презентаций.' },
  ]

  const filteredWorks = selectedCategory === 'Все' 
    ? works 
    : works.filter(work => work.category === selectedCategory)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  // Generate snowflakes
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 10,
    left: Math.random() * 100
  }))

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* SNOWFLAKES */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {snowflakes.map((flake) => (
          <Snowflake
            key={flake.id}
            delay={flake.delay}
            duration={flake.duration}
            left={flake.left}
          />
        ))}
      </div>

      {/* HEADER */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl border-b border-black/10 shadow-2xl shadow-black/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between py-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-black/20 blur-xl rounded-full group-hover:bg-black/30 transition-all" />
                <div className="relative bg-gradient-to-br from-black to-gray-700 p-2 rounded-xl">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black tracking-tighter leading-none text-black">
                  CREATIVE
                </div>
                <div className="text-xs text-gray-600 tracking-widest uppercase">
                  Portfolio
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden md:flex items-center gap-1 bg-black/5 backdrop-blur-md rounded-full px-2 py-2 border border-black/10"
            >
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="px-6 py-2 rounded-full text-sm font-semibold text-gray-700 hover:text-black hover:bg-black/10 transition-all"
              >
                Галерея
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="px-6 py-2 rounded-full text-sm font-semibold text-gray-700 hover:text-black hover:bg-black/10 transition-all"
              >
                О себе
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="px-6 py-2 rounded-full text-sm font-semibold text-gray-700 hover:text-black hover:bg-black/10 transition-all"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-6 py-2 rounded-full text-sm font-semibold bg-black text-white hover:bg-gray-800 transition-all"
              >
                Контакты
              </button>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => scrollToSection('contact')}
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-black to-gray-800 text-white px-6 py-3 rounded-full font-bold text-sm hover:shadow-2xl hover:shadow-black/20 transition-all transform hover:scale-105"
            >
              Начать проект
              <ChevronRight className="w-4 h-4" />
            </motion.button>

            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative p-3 hover:bg-black/10 rounded-xl transition-all"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-black" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-black" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </nav>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-black/10 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-8 flex flex-col gap-2">
                <motion.button 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  onClick={() => scrollToSection('gallery')} 
                  className="text-left px-6 py-4 text-lg font-semibold text-gray-700 hover:text-black hover:bg-black/10 rounded-xl transition-all"
                >
                  Галерея
                </motion.button>
                <motion.button 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  onClick={() => scrollToSection('about')} 
                  className="text-left px-6 py-4 text-lg font-semibold text-gray-700 hover:text-black hover:bg-black/10 rounded-xl transition-all"
                >
                  О себе
                </motion.button>
                <motion.button 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => scrollToSection('services')} 
                  className="text-left px-6 py-4 text-lg font-semibold text-gray-700 hover:text-black hover:bg-black/10 rounded-xl transition-all"
                >
                  Услуги
                </motion.button>
                <motion.button 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  onClick={() => scrollToSection('contact')} 
                  className="text-left px-6 py-4 text-lg font-semibold bg-black text-white hover:bg-gray-800 rounded-xl transition-all mt-2"
                >
                  Контакты
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* HERO - FULL HEIGHT */}
      <section className="h-screen flex items-center justify-center px-6 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none text-black">
              CREATIVE
              <br />
              <span className="text-gray-400">PORTFOLIO</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light tracking-wide">
              Архитектура • Иллюстрации • Видеография
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Создаю визуальные решения, которые вдохновляют и трансформируют пространство. 
              Работаю на стыке архитектуры, графического дизайна и видеопроизводства.
            </p>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-red-600/50"
            >
              Смотреть работы
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black">
              РАБОТЫ
            </h2>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-all ${viewMode === 'grid' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-full transition-all ${viewMode === 'list' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            layout
            className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'flex flex-col gap-6'}
          >
            <AnimatePresence>
              {filteredWorks.map((work) => (
                <motion.div
                  key={work.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`group cursor-pointer ${viewMode === 'list' ? 'flex gap-6 items-center' : ''}`}
                  onClick={() => setSelectedWork(work)}
                >
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64 h-40' : 'aspect-[4/3]'} bg-gray-100 rounded-xl`}>
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-black">
                        {work.category}
                      </span>
                    </div>
                  </div>
                  <div className={viewMode === 'list' ? 'flex-1' : 'mt-4'}>
                    <h3 className="text-xl font-bold mb-2 text-black group-hover:text-gray-600 transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {work.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-full rounded-2xl"
                />
                <button
                  onClick={() => setSelectedWork(null)}
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="mt-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{selectedWork.title}</h3>
                    <p className="text-gray-400">{selectedWork.category}</p>
                  </div>
                  <button className="flex items-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 px-6 py-3 rounded-full transition-all">
                    <Download className="w-5 h-5" />
                    Скачать
                  </button>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedWork.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 text-black">
                О СЕБЕ
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Я — креативный профессионал с опытом работы в архитектуре, иллюстрации и видеопроизводстве. 
                Моя цель — создавать визуальные решения, которые не только красивы, но и функциональны.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Работаю с частными клиентами и крупными компаниями, создавая проекты от концепции до финальной реализации. 
                Каждый проект — это возможность создать что-то уникальное и значимое.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-all"
                >
                  Связаться
                </button>
                <button className="border-2 border-black hover:bg-black hover:text-white px-8 py-3 rounded-full font-semibold transition-all">
                  Скачать резюме
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Profile"
                className="w-full rounded-2xl shadow-2xl transition-opacity duration-500 group-hover:opacity-0"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES - INFINITE SCROLL */}
      <section id="services" className="py-20 px-6 bg-white overflow-hidden">
        <div className="container mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-center text-black">
            УСЛУГИ
          </h2>
        </div>
        
        <div className="relative">
          <motion.div
            animate={{
              x: [0, -1920]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
            className="flex gap-8"
          >
            {[...services, ...services, ...services].map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="flex-shrink-0 w-[400px] border-2 border-gray-200 hover:border-black rounded-2xl p-8 transition-all hover:shadow-xl bg-white"
              >
                <div className="text-5xl font-black text-gray-200 mb-4">{service.number}</div>
                <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-center mb-16 text-black">
            КОНТАКТЫ
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-black">Свяжитесь со мной</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Готов обсудить ваш проект. Напишите мне, и я отвечу в течение 24 часов.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-semibold text-black">hello@portfolio.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Телефон</div>
                    <div className="font-semibold text-black">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Локация</div>
                    <div className="font-semibold text-black">Ярославль, Россия</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a href="#" className="bg-gray-100 hover:bg-black hover:text-white p-3 rounded-full transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-black hover:text-white p-3 rounded-full transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-black hover:text-white p-3 rounded-full transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-black hover:text-white p-3 rounded-full transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-black">Имя</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-white rounded-xl focus:border-black focus:outline-none transition-colors text-black"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-black">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-white rounded-xl focus:border-black focus:outline-none transition-colors text-black"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-black">Сообщение</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 bg-white rounded-xl focus:border-black focus:outline-none transition-colors resize-none text-black"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>
                <button className="w-full bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-all">
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-2 rounded-xl">
                  <Camera className="w-6 h-6 text-black" />
                </div>
                <div className="text-2xl font-black tracking-tighter">
                  CREATIVE PORTFOLIO
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Создаю визуальные решения в области архитектуры, иллюстрации и видеопроизводства. 
                Работаю с частными клиентами и крупными компаниями по всему миру.
              </p>
              <div className="flex gap-3">
                <a href="#" className="bg-gray-900 hover:bg-white hover:text-black p-3 rounded-lg transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-900 hover:bg-white hover:text-black p-3 rounded-lg transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-900 hover:bg-white hover:text-black p-3 rounded-lg transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-900 hover:bg-white hover:text-black p-3 rounded-lg transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-white transition-colors">
                    Галерея
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">
                    О себе
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">
                    Услуги
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">
                    Контакты
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Ярославль, Россия</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>hello@portfolio.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Пн-Пт: 10:00 - 19:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Creative Portfolio. Все права защищены.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App