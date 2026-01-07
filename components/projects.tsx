export default function Projects() {
  const projects = [
    {
      title: "Thindigua Apartments",
      description: "12-storey residential development with EPS technology",
      image: "/thindigua-apartments-construction-site.jpg",
    },
    {
      title: "Kimbo Hospital",
      description: "Modern healthcare facility with EPS technology",
      image: "/kimbo-hospital-construction-site.jpg",
    },
    {
      title: "Naivasha Villa",
      description: "Luxury residence in Naivasha",
      image: "/naivasha-villa-luxury-residence.jpg",
    },
  ]

  return (

    <section id="projects" className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">Key Projects</h2>
        <p className="text-medium-gray text-lg mb-12">
          Explore our portfolio of cutting-edge engineering solutions
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (

            <div
              key={project.title}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-light-gray hover:border-brand-blue group"
              style={{ backgroundColor: "#0B2A4A" }}
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200">{project.description}</p>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center mb-12">
          <a
            href="/projects"
            className="inline-block bg-gold-orange text-dark-gray px-8 py-3 rounded-lg font-semibold hover:bg-amber-hover transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            More projects & Gallery
          </a>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center p-12 rounded-lg border shadow-lg" style={{ backgroundColor: "#0B2A4A", borderColor: "transparent" }}>
          <div>
            <p className="text-3xl font-bold text-gold-orange">40+</p>
            <p className="text-gray-200 mt-2">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gold-orange">9+</p>
            <p className="text-gray-200 mt-2">Years of Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gold-orange">10+</p>
            <p className="text-gray-200 mt-2">Counties Served</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gold-orange">15+</p>
            <p className="text-gray-200 mt-2">Team Members</p>
          </div>
        </div>
      </div>
    </section>
  )
}
