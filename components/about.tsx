import { Award, Lightbulb, Trophy, Users, Eye, Target } from "lucide-react"

export default function About() {
  return (

    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">Who We Are</h2>
            <p className="text-dark-gray mb-4 text-lg">
              <strong>Engineering, Precision & Innovation since 2014</strong>
            </p>
            <p className="text-medium-gray mb-6 leading-relaxed">
              VectorSpace Limited is a multidisciplinary engineering, construction, and consultancy firm specializing in
              structural and architectural design, project management, and alternative building technologies. Our team
              of Engineers, Architects, and Project Managers delivers cost-effective, sustainable, and high-quality
              infrastructure solutions across Kenya and East Africa.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div>
                <p className="text-3xl font-bold text-gold-orange">40+</p>
                <p className="text-medium-gray">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold-orange">9+</p>
                <p className="text-medium-gray">Years</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold-orange">10+</p>
                <p className="text-medium-gray">Counties</p>
              </div>
            </div>
          </div>
          <div className="bg-off-white h-96 rounded-lg flex items-center justify-center">
            <img
              src="/engineering-team-reviewing-architectural-plans.jpg"
              alt="VectorSpace engineering team"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>


        <div className="p-12 rounded-lg border shadow-lg" style={{ backgroundColor: "#0B2A4A", borderColor: "transparent" }}>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-gold-orange" />
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                To be a leading force in innovative, sustainable, and cost-effective engineering solutions transforming
                built environments across East Africa.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-brand-blue" />
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Deliver high-quality, structurally sound infrastructure through cutting-edge design, project management
                excellence, and alternative building technologies.
              </p>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-8">Why Choose VectorSpace?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-3">
              <Award className="w-6 h-6 text-gold-orange mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-2">Technical Excellence</h4>
                <p className="text-gray-200">Registered with NCA and accredited by EBK & IEK</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-brand-blue mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-2">Innovation-Driven</h4>
                <p className="text-gray-200">Pioneering Alternative Building Materials & Technologies</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Trophy className="w-6 h-6 text-deep-blue mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-2">Proven Track Record</h4>
                <p className="text-gray-200">60+ projects completed across 10+ counties</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 text-gold-orange mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-2">Client-Centric</h4>
                <p className="text-gray-200">Transparent communication and tailored solutions</p>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-12">
          <h3 className="text-2xl font-bold text-dark-gray mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Integrity", desc: "Upholding the highest ethical standards with honesty and accountability" },
              { title: "Innovation", desc: "Embracing sustainable practices and emerging technologies" },
              { title: "Quality", desc: "Committed to excellence that exceeds industry standards" },
              { title: "Safety", desc: "Adhering to all regulatory requirements and best practices" },
            ].map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-lg border-l-4 border-gold-orange hover:border-brand-blue transition-colors duration-300 group"
                style={{ backgroundColor: "#0B2A4A" }}
              >
                <h4 className="font-bold text-white mb-2 group-hover:text-gold-orange transition-colors duration-300">{value.title}</h4>
                <p className="text-gray-200 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
