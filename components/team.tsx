export default function Team() {
  const teamMembers = [
    {
      name: "Milton Mulwa",
      role: "Chief Executive Officer",
      title: "Civil & Structural Engineer",
      qualifications: "BSc, EBK, IEK",
      details: {
        position: "Strategic leadership & company vision",
        education: "BSc Civil Engineering",
        experience: "9+ years in construction",
        specialization: "Civil Engineering & Project Management",
        achievement: "Led 50+ successful projects across East Africa",
      },
      image: "/ceo-milton-mulwa-professional-headshot.jpg",
    },
    {
      name: "Brian Kinyanjui",
      role: "Structural Engineer",
      qualifications: "BSc, EBK, IEK",
      details: {
        position: "Structural design and analysis",
        education: "BSc Civil Engineering",
        experience: "5+ years in construction",
        specialization: "Structural Analysis & Design",
        achievement: "High-rise buildings & commercial structures",
      },
      image: "/structural-engineer-brian-kinyanjui.jpg",
    },
    {
      name: "Diana Adhiambo",
      role: "Quantity Surveyor",
      qualifications: "BSc QS",
      details: {
        position: "Cost management and budgeting",
        education: "Bachelor of Science in Quantity Surveying",
        experience: "5+ years in construction",
        specialization: "Cost estimation and project budgeting",
        achievement: "Expert in financial project planning",
      },
      image: "/quantity-surveyor-diana-adhiambo.jpg",
    },
    {
      name: "Wycliffe Njeru",
      role: "Marketing Officer",
      qualifications: "BSc, Actuarial Science",
      details: {
        position: "Data analysis and digital marketing",
        education: "Bachelor of Science in Actuarial Science",
        experience: "4+ years in digital marketing",
        specialization: "Data-driven marketing strategies",
        achievement: "Market analysis and strategy development",
      },
      image: "/marketing-officer-wycliffe-njeru.jpg",
    },
    {
      name: "Judy Maina",
      role: "Accountant",
      qualifications: "BSc, CPA",
      details: {
        position: "Financial management",
        education: "Bachelor of Science in Accounting",
        experience: "6+ years in financial management",
        specialization: "Financial reporting and analysis",
        achievement: "Expert in construction accounting",
      },
      image: "/accountant-judy-maina-professional.jpg",
    },
  ]


  return (
    <section id="team" className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">Our Leadership Team</h2>
          <p className="text-medium-gray text-lg">Meet the experts driving our success</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-light-gray hover:border-brand-blue group"
            >
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-gray mb-1 group-hover:text-brand-blue transition-colors duration-300">{member.name}</h3>
                <p className="text-gold-orange font-semibold mb-1">{member.role}</p>
                <p className="text-medium-gray text-sm mb-4">{member.qualifications}</p>

                <div className="space-y-2 text-sm text-medium-gray">
                  <p>
                    <strong className="text-dark-gray">Role:</strong> {member.details.position}
                  </p>
                  <p>
                    <strong className="text-dark-gray">Education:</strong> {member.details.education}
                  </p>
                  <p>
                    <strong className="text-dark-gray">Experience:</strong> {member.details.experience}
                  </p>
                  <p>
                    <strong className="text-dark-gray">Specialization:</strong> {member.details.specialization}
                  </p>
                  <p>
                    <strong className="text-dark-gray">Key Achievement:</strong> {member.details.achievement}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
