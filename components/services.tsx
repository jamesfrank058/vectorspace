import { Building2, Hammer, Calculator, Shield, Wrench, Palette } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Advanced Building Systems & Specialized Construction Works",
      description: "Innovative construction solutions using EPS Technology, Beam-and-Block systems, and Precast Building Systems to deliver faster, stronger, and cost-efficient structures.",
    },
    {
      icon: Hammer,
      title: "General Construction & Renovation Works",
      description: "Comprehensive building and refurbishment services for residential homes, commercial offices, industrial facilities, and mixed-use developments.",
    },
    {
      icon: Calculator,
      title: "Costings (BQs) & System-Based Cost Comparisons",
      description: "Detailed Bills of Quantities (BQs) and cost breakdowns comparing different construction systems to guide informed budgeting and project decisions.",
    },
    {
      icon: Shield,
      title: "Structural Integrity Assessments, Geotechnical Studies & Retrofitting Works",
      description: "Expert evaluation of existing structures, subsurface investigations, and tailored retrofitting solutions to enhance safety, performance, and lifespan.",
    },
    {
      icon: Wrench,
      title: "Civil & Structural Engineering Services",
      description: "Design, analysis, and supervision to ensure compliance, stability, and quality throughout every project.",
    },
    {
      icon: Palette,
      title: "Architectural Planning & Design Services",
      description: "Functional and aesthetic spaces tailored to client needs.",
    },
  ]

  return (

    <section id="services" className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">Our Services</h2>
        <p className="text-medium-gray text-lg mb-12">
          Comprehensive engineering solutions tailored to your specific needs
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="border-l-4 border-gold-orange pl-6 py-4 rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-blue" style={{ backgroundColor: "#0B2A4A" }}>
              <div className="flex items-center gap-3 mb-3">
                <service.icon className="w-6 h-6 text-gold-orange" />
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-200">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
