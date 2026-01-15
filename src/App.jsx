import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Github, Instagram, Linkedin, Eye, Download, Grid, List } from 'lucide-react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Все')
  const [selectedWork, setSelectedWork] = useState(null)
  const [viewMode, setViewMode] = useState('grid')

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

  const filteredWorks = selectedCategory === 'Все' 
    ? works 
    : works.filter(work => work.category === selectedCategory)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter"
          >
            PORTFOLIO
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('gallery')} className="text-gray-600 hover:text-black transition-colors font-medium">
              Галерея
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-black transition-colors font-medium">
              О себе
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-black transition-colors font-medium">
              Услуги
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-black transition-colors font-medium">
              Контакты
            </button>
          </div>

          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                <button onClick={() => scrollToSection('gallery')} className="text-left text-gray-600 hover:text-black transition-colors font-medium">
                  Галерея
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-600 hover:text-black transition-colors font-medium">
                  О себе
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-600 hover:text-black transition-colors font-medium">
                  Услуги
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-600 hover:text-black transition-colors font-medium">
                  Контакты
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
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
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105"
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
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              РАБОТЫ
            </h2>
            
            <div className="flex items-center gap-4">
              {/* VIEW MODE TOGGLE */}
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

              {/* CATEGORY FILTERS */}
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

          {/* WORKS GRID/LIST */}
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
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                        {work.category}
                      </span>
                    </div>
                  </div>
                  <div className={viewMode === 'list' ? 'flex-1' : 'mt-4'}>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gray-600 transition-colors">
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
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
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
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Profile"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-center mb-16">
            УСЛУГИ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-2 border-gray-200 hover:border-black rounded-2xl p-8 transition-all hover:shadow-xl"
            >
              <div className="text-5xl font-black text-gray-200 mb-4">01</div>
              <h3 className="text-2xl font-bold mb-4">Архитектура</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Проектирование жилых и коммерческих пространств с акцентом на минимализм и функциональность. 
                От концепции до рабочей документации.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Концептуальный дизайн</li>
                <li>• 3D визуализация</li>
                <li>• Рабочая документация</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-2 border-gray-200 hover:border-black rounded-2xl p-8 transition-all hover:shadow-xl"
            >
              <div className="text-5xl font-black text-gray-200 mb-4">02</div>
              <h3 className="text-2xl font-bold mb-4">Иллюстрации</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Создание уникальных цифровых иллюстраций для брендов, публикаций и личных проектов. 
                Работа в различных стилях и техниках.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Дизайн персонажей</li>
                <li>• Цифровая живопись</li>
                <li>• Брендинг и айдентика</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-2 border-gray-200 hover:border-black rounded-2xl p-8 transition-all hover:shadow-xl"
            >
              <div className="text-5xl font-black text-gray-200 mb-4">03</div>
              <h3 className="text-2xl font-bold mb-4">Видеография</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Производство видеоконтента от съёмки до постпродакшена. 
                Работаю с рекламными роликами, документальными проектами и motion-графикой.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Рекламные ролики</li>
                <li>• Motion graphics</li>
                <li>• Документальное кино</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-center mb-16">
            КОНТАКТЫ
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Свяжитесь со мной</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Готов обсудить ваш проект. Напишите мне, и я отвечу в течение 24 часов.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-semibold">hello@portfolio.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Телефон</div>
                    <div className="font-semibold">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Локация</div>
                    <div className="font-semibold">Москва, Россия</div>
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
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Имя</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-colors resize-none"
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
      <footer className="bg-black text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-black tracking-tighter mb-4 md:mb-0">
              PORTFOLIO
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Portfolio Gallery. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App