export default function Team() {
  const teamMembers = [
    {
      name: "Milton Mulwa",
      role: "Strategic leadership, Project Design & Costing Oversight and Client Engagement.",
      title: "Civil & Structural Engineer",
      qualifications: "BSc, EBK, IEK",
      details: {
        position: "Strategic leadership & company vision",
        education: "BSc Civil Engineering",
        experience: "Over 9 years experience in Construction and Engineering practice",
        specialization: "Civil and Structural Engineering, Project Management, and Leadership",
        achievement: "Led 50+ successful projects across East Africa",
        Contribution: "Driving organizational growth and successful project delivery",
      },
      image: "/ceo-milton-mulwa-professional-headshot.jpg",
      imagePosition: "center 20%",
    },
    {
      name: "Brian Kinyanjui",
      role: "Structural Analysis & Design, Structural Drawings Drafting, and Determining Engineer's Quantities",
      qualifications: "BSc, EBK, IEK",
      details: {
        position: "Structural Analysis & Design Engineer",
        education: "BSc Civil Engineering",
        experience: "Over 5 years experience in structural engineering practice",
        specialization: "Structural Analysis and Design of Building Structures",
        contribution: "Delivering safe, efficient, and code-compliant structural solutions",
      },
      image: "/structural-engineer-brian-kinyanjui.jpg",
      imagePosition: "center 65%",
    },
    {
      name: "Diana Adhiambo",
      role: "Cost Planning & Management , Project Proposal Preparation and Business Development Support",
      qualifications: "BSc QS",
      details: {
        position: "Cost management and budgeting",
        education: "Bachelor of Science in Quantity Surveying",
        experience: "Over 3 years’ experience in construction cost management",
        specialization: "Project Cost Planning, Budgeting, and Financial Control",
        contribution: "Supporting technical delivery and business growth",
      },
      image: "/quantity-surveyor-diana-adhiambo.jpg",
    },
    {
      name: "Wycliffe Njeru",
      role: "Data and Marketing expert",
      qualifications: "BSc, Actuarial Science",
      details: {
        position: "Data analysis and digital marketing",
        education: "Bachelor of Science in Actuarial Science",
        experience: "4+ years",
        specialization: "Data analysis and Digital marketing",
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
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-light-gray hover:border-brand-blue group"
              style={{ backgroundColor: "#0B2A4A" }}
            >
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                style={{ objectPosition: member.imagePosition || 'center' }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gold-orange transition-colors duration-300">{member.name}</h3>
                <p className="text-gold-orange font-semibold mb-1">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.qualifications}</p>

                <div className="space-y-2 text-sm text-gray-200">
                  <p>
                    <strong className="text-gold-orange">Role:</strong> {member.details.position}
                  </p>
                  <p>
                    <strong className="text-gold-orange">Education:</strong> {member.details.education}
                  </p>
                  <p>
                    <strong className="text-gold-orange">Experience:</strong> {member.details.experience}
                  </p>
                  <p>
                    <strong className="text-gold-orange">Specialization:</strong> {member.details.specialization}
                  </p>
                  <p>
                    <strong className="text-gold-orange">Key Achievement:</strong> {member.details.achievement}
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
