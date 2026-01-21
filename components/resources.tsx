"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ExternalLink, Download } from "lucide-react"
import { Badge } from "./ui/badge"
import EmailSubmitDialog from "./email-submit-dialog"

interface Resource {
  id: string
  title: string
  description: string
  category: string
  url: string
  icon?: string
  download?: boolean
}

const resources: Resource[] = [
  {
    id: "13",
    title: "VectorSpace Ltd Company Profile",
    description: "Download our comprehensive company profile showcasing our services, projects, team, and engineering capabilities.",
    category: "Documents",
    url: "/resources/vectorspace-company-profile.pdf",
    icon: "📄",
    download: true,
  },
  {
    id: "1",
    title: "Engineers Board of Kenya (EBK)",
    description: "Official regulatory body for professional engineers in Kenya. Access registration, CPD requirements, and engineering standards.",
    category: "Regulatory",
    url: "https://www.ebk.or.ke/",
    icon: "🏛️",
  },
  {
    id: "2",
    title: "National Construction Authority (NCA)",
    description: "Kenya's regulatory authority for the construction industry. Find contractor registration, compliance requirements, and industry standards.",
    category: "Regulatory",
    url: "https://www.nca.go.ke/",
    icon: "📋",
  },
  {
    id: "3",
    title: "Kenya Bureau of Standards (KEBS)",
    description: "Kenyan standards for construction materials, building codes, and quality assurance in engineering projects.",
    category: "Standards",
    url: "https://www.kebs.org/",
    icon: "✅",
  },
  {
    id: "4",
    title: "Institute of Architects Kenya (IAK)",
    description: "Professional body for architects in Kenya with resources on design standards, CPD, and architectural practices.",
    category: "Professional",
    url: "https://architectskenyainstitute.org/",
    icon: "🏢",
  },
  {
    id: "5",
    title: "Kenya Construction Industry Council",
    description: "Industry council promoting best practices, skills development, and standardization in Kenyan construction.",
    category: "Industry",
    url: "https://www.kcic.or.ke/",
    icon: "🤝",
  },
  {
    id: "6",
    title: "Building and Construction Authority (BCA) - JICA Resources",
    description: "Japanese-Kenyan collaboration providing construction technology training and EPS building technology resources for East Africa.",
    category: "Technology",
    url: "https://www.jica.go.jp/",
    icon: "🚀",
  },
  {
    id: "7",
    title: "Kenya National Bureau of Statistics",
    description: "Official statistics portal for economic data, construction industry reports, and project costing information.",
    category: "Reference",
    url: "https://www.knbs.or.ke/",
    icon: "📊",
  },
  {
    id: "8",
    title: "Ministry of Lands & Physical Planning",
    description: "Government resources on land acquisition, physical planning approvals, and building code compliance in Kenya.",
    category: "Regulatory",
    url: "https://www.lands.go.ke/",
    icon: "🗺️",
  },
  {
    id: "9",
    title: "Association of Kenya Contractors (AKC)",
    description: "Industry association supporting contractors with training, networking, and access to procurement opportunities.",
    category: "Professional",
    url: "https://www.akc.co.ke/",
    icon: "🔨",
  },
  {
    id: "10",
    title: "AutoCAD & Design Software - East Africa Distributors",
    description: "Local Kenyan distributors providing AutoCAD, design software, and technical support for engineering professionals.",
    category: "Tools",
    url: "https://www.autodesk.com/",
    icon: "🎨",
  },
  {
    id: "11",
    title: "Kenya National Safety and Health Council",
    description: "Occupational safety and health regulations, guidelines, and compliance standards for construction sites in Kenya.",
    category: "Safety",
    url: "https://www.knshc.go.ke/",
    icon: "⚠️",
  },
  {
    id: "12",
    title: "Project Management Institute Kenya Chapter",
    description: "Local PMI chapter offering certifications, training, and resources for project management in Kenyan engineering firms.",
    category: "Learning",
    url: "https://www.pmi.org/",
    icon: "📚",
  },
]

export default function Resources() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [submitDialogOpen, setSubmitDialogOpen] = useState(false)

  const categories = Array.from(new Set(resources.map((r) => r.category)))
  const filteredResources = selectedCategory
    ? resources.filter((r) => r.category === selectedCategory)
    : resources

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Engineering Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A curated collection of tools, standards, learning materials, and industry resources to support engineering excellence and professional development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-muted-foreground mb-4">Filter by category:</p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-gold-orange text-dark-gray"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              All Resources
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gold-orange text-dark-gray"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredResources.map((resource) => (
            <a
              key={resource.id}
              href={resource.url}
              {...(resource.download ? { download: resource.title } : { target: "_blank", rel: "noopener noreferrer" })}
              className="group rounded-lg border border-light-gray hover:border-brand-blue p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: "#0B2A4A" }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{resource.icon}</div>
                {resource.download ? (
                  <Download className="w-5 h-5 text-gray-200 group-hover:text-gold-orange transition-colors" />
                ) : (
                  <ExternalLink className="w-5 h-5 text-gray-200 group-hover:text-gold-orange transition-colors" />
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-orange transition-colors">
                {resource.title}
              </h3>

              <p className="text-gray-200 mb-4 line-clamp-2">
                {resource.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-600">
                <Badge variant="secondary" className="bg-gold-orange/20 text-gold-orange border border-gold-orange/30">
                  {resource.category}
                </Badge>
                <span className="text-xs font-semibold text-gold-orange group-hover:text-amber-hover transition-colors">
                  {resource.download ? "Download ↓" : "Visit →"}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center p-12 rounded-lg border border-light-gray" style={{ backgroundColor: "#0B2A4A" }}>
          <div>
            <p className="text-3xl font-bold text-gold-orange">{resources.length}+</p>
            <p className="text-gray-200 mt-2">Curated Resources</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gold-orange">{categories.length}</p>
            <p className="text-gray-200 mt-2">Categories</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gold-orange">100%</p>
            <p className="text-gray-200 mt-2">Free Access</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gold-orange">Updated</p>
            <p className="text-gray-200 mt-2">Regularly</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="rounded-lg p-8 border border-light-gray" style={{ backgroundColor: "#0B2A4A" }}>
            <h3 className="text-2xl font-bold text-white mb-3">
              Missing a Resource?
            </h3>
          <p className="text-gray-200 mb-6">
            If you know of a valuable engineering resource we should include, we&#39;d love to hear about it.
          </p>
            <button
              onClick={() => setSubmitDialogOpen(true)}
              className="inline-block bg-gold-orange text-dark-gray px-8 py-3 rounded-lg font-semibold hover:bg-amber-hover transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Suggest a Resource
            </button>

            <EmailSubmitDialog
              open={submitDialogOpen}
              onOpenChange={setSubmitDialogOpen}
              mailtoLink="mailto:info@vectorspace.co.ke?subject=Resource Suggestion - VectorSpace Engineering&body=Hello VectorSpace Team,%0A%0AI&#39;d like to suggest a valuable engineering resource for your resources page.%0A%0AResource Name:%0A%0AResource URL:%0A%0ACategory (Regulatory / Standards / Professional / Industry / Technology / Reference / Tools / Safety / Learning):%0A%0ADescription:%0A%0AWhy this resource is valuable:%0A%0AYour Name:%0A%0AThank you!"
              gmailLink="https://mail.google.com/mail/?view=cm&fs=1&to=info@vectorspace.co.ke&su=Resource%20Suggestion%20-%20VectorSpace%20Engineering&body=Hello%20VectorSpace%20Team,%0A%0AI&#39;d%20like%20to%20suggest%20a%20valuable%20engineering%20resource%20for%20your%20resources%20page.%0A%0AResource%20Name:%0A%0AResource%20URL:%0A%0ACategory%20(Regulatory%20/%20Standards%20/%20Professional%20/%20Industry%20/%20Technology%20/%20Reference%20/%20Tools%20/%20Safety%20/%20Learning):%0A%0ADescription:%0A%0AWhy%20this%20resource%20is%20valuable:%0A%0AYour%20Name:%0A%0AThank%20you!"
              title="Suggest a Resource"
              description="Choose how you&#39;d like to suggest a resource:"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
