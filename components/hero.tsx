
export default function Hero() {
  return (


    <section 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: 'url(/background.jpeg)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance drop-shadow-lg">
            Engineering, Precision & Innovation
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-balance drop-shadow-md">
            Delivering innovative, sustainable, and cost-effective infrastructure across East Africa.
          </p>

          <a
            href="#projects"
            className="inline-block bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-deep-blue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}
