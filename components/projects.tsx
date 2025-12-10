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
    <section id="projects" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Key Projects</h2>
        <p className="text-muted-foreground text-lg mb-12">
          Explore our portfolio of cutting-edge engineering solutions
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border border-border"
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <a
            href="/projects"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            More
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-card p-12 rounded-lg border border-border">
          <div>
            <p className="text-3xl font-bold text-accent">60+</p>
            <p className="text-muted-foreground mt-2">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-accent">9+</p>
            <p className="text-muted-foreground mt-2">Years of Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-accent">10+</p>
            <p className="text-muted-foreground mt-2">Counties Served</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-accent">30+</p>
            <p className="text-muted-foreground mt-2">Team Members</p>
          </div>
        </div>
      </div>
    </section>
  )
}
