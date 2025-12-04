export default function Services() {
  const services = [
    {
      title: "Structural & Civil Engineering Services",
      description: "Design, analysis, and supervision to ensure compliance and quality.",
    },
    {
      title: "Project Management Services",
      description: "End-to-end project oversight from concept to execution.",
    },
    {
      title: "Architectural Design Services",
      description: "Functional and aesthetic spaces tailored to client needs.",
    },
    {
      title: "Sustainable Construction Services",
      description: "Innovative green building technologies and materials.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
        <p className="text-muted-foreground text-lg mb-12">
          Comprehensive engineering solutions tailored to your specific needs
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="border-l-4 border-accent pl-6 py-4">
              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
