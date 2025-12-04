export default function Services() {
  const services = [
    {
      title: "Advanced Building Systems & Specialized Construction Works",
      description: "Innovative construction solutions using EPS Technology, Beam-and-Block systems, and Precast Building Systems to deliver faster, stronger, and cost-efficient structures.",
    },
    {
      title: "General Construction & Renovation Works",
      description: "Comprehensive building and refurbishment services for residential homes, commercial offices, industrial facilities, and mixed-use developments.",
    },
    {
      title: "Costings (BQs) & System-Based Cost Comparisons",
      description: "Detailed Bills of Quantities (BQs) and cost breakdowns comparing different construction systems to guide informed budgeting and project decisions.",
    },
    {
      title: "Structural Integrity Assessments, Geotechnical Studies & Retrofitting Works",
      description: "Expert evaluation of existing structures, subsurface investigations, and tailored retrofitting solutions to enhance safety, performance, and lifespan.",
    },
    {
      title: "Civil & Structural Engineering Services",
      description: "Design, analysis, and supervision to ensure compliance, stability, and quality throughout every project.",
    },
    {
      title: "Architectural Planning & Design Services",
      description: "Functional and aesthetic spaces tailored to client needs.",
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
