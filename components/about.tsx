import { Award, Lightbulb, Trophy, Users, Eye, Target } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who We Are</h2>
            <p className="text-foreground mb-4 text-lg">
              <strong>Engineering, Precision & Innovation since 2014</strong>
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              VectorSpace Limited is a multidisciplinary engineering, construction, and consultancy firm specializing in
              structural and architectural design, project management, and alternative building technologies. Our team
              of Engineers, Architects, and Project Managers delivers cost-effective, sustainable, and high-quality
              infrastructure solutions across Kenya and East Africa.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div>
                <p className="text-3xl font-bold text-accent">10+</p>
                <p className="text-muted-foreground">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">9+</p>
                <p className="text-muted-foreground">Years</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">10+</p>
                <p className="text-muted-foreground">Counties</p>
              </div>
            </div>
          </div>
          <div className="bg-secondary h-96 rounded-lg flex items-center justify-center">
            <img
              src="/engineering-team-reviewing-architectural-plans.jpg"
              alt="VectorSpace engineering team"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="bg-card p-12 rounded-lg border border-border">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading force in innovative, sustainable, and cost-effective engineering solutions transforming
                built environments across East Africa.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Deliver high-quality, structurally sound infrastructure through cutting-edge design, project management
                excellence, and alternative building technologies.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-8">Why Choose VectorSpace?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-3">
              <Award className="w-6 h-6 text-accent mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Technical Excellence</h4>
                <p className="text-muted-foreground">Registered with NCA and accredited by EBK & IEK</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-accent mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Innovation-Driven</h4>
                <p className="text-muted-foreground">Pioneering Alternative Building Materials & Technologies</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Trophy className="w-6 h-6 text-accent mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Proven Track Record</h4>
                <p className="text-muted-foreground">60+ projects completed across 10+ counties</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 text-accent mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Client-Centric</h4>
                <p className="text-muted-foreground">Transparent communication and tailored solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Integrity", desc: "Upholding the highest ethical standards with honesty and accountability" },
              { title: "Innovation", desc: "Embracing sustainable practices and emerging technologies" },
              { title: "Quality", desc: "Committed to excellence that exceeds industry standards" },
              { title: "Safety", desc: "Adhering to all regulatory requirements and best practices" },
            ].map((value) => (
              <div key={value.title} className="bg-secondary p-6 rounded-lg border border-border">
                <h4 className="font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
