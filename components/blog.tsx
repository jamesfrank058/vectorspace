"use client"

import { useState } from "react"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import { Badge } from "./ui/badge"
import EmailSubmitDialog from "./email-submit-dialog"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: "Case Study" | "Technology" | "Industry News" | "Best Practices"
  author: string
  date: string
  readTime: number
  image?: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "EPS Technology Reduces Construction Costs by 35% at Thindigua Apartments",
    excerpt: "Discover how Expanded Polystyrene (EPS) technology combined with beam-and-block systems delivered a 12-storey residential project 40% faster while maintaining premium quality standards.",
    content: `EPS (Expanded Polystyrene) technology is revolutionizing residential construction in East Africa. At Thindigua Apartments, we implemented this innovative system to build a 12-storey residential complex with remarkable efficiency.

## The Challenge
Traditional concrete construction methods were proving time-consuming and cost-prohibitive. The client needed a faster timeline without compromising structural integrity.

## The Solution
We integrated EPS blocks with beam-and-block systems, creating lightweight yet incredibly strong structural elements. This approach:
- Reduced construction time from 18 months to 10.5 months
- Cut material waste by 40%
- Lowered overall project costs by 35%
- Improved thermal insulation (energy savings of ~25% annually)

## Key Results
- **Timeline**: 40% faster completion
- **Cost Savings**: KES 18.5M in reduced expenses
- **Quality**: Zero structural defects identified
- **Sustainability**: 60% reduction in construction waste

This project demonstrates that EPS technology isn't just cost-effective—it's environmentally responsible and delivers superior building performance.`,
    category: "Case Study",
    author: "VectorSpace Engineering Team",
    date: "2024-12-15",
    readTime: 5,
    featured: true,
  },
  {
    id: "2",
    title: "Structural Assessment Prevents 200M Collapse Risk at Kimbo Hospital",
    excerpt: "A detailed structural integrity assessment revealed critical weaknesses in an aging hospital building. Learn how targeted retrofitting prevented potential disaster.",
    content: `Structural integrity assessments are essential for aging buildings. This case study reveals how professional evaluation saved lives and infrastructure.

## Initial Inspection
Kimbo Hospital, a 15-year-old facility, showed visible signs of distress including wall cracks and foundation settlement. The building was put under restricted use pending investigation.

## What We Found
Our geotechnical and structural assessment revealed:
- Differential foundation settlement (up to 45mm)
- Concrete strength below design specifications
- Inadequate reinforcement in key load-bearing columns
- Potential progressive failure risk if left unaddressed

## Retrofit Solution
We implemented a comprehensive retrofitting program:
- Foundation underpinning with grouted micropiles
- Column strengthening using fiber-reinforced polymers (FRP)
- Wall injections and crack stabilization
- Structural monitoring system installation

## Outcome
- Building restored to full operational capacity
- Safety margin improved by 340%
- Estimated 20+ year additional service life
- Avoided estimated KES 500M+ in replacement costs

This project showcases the critical importance of professional structural assessment in healthcare and critical infrastructure.`,
    category: "Case Study",
    author: "Eng. Moses Kipchoge",
    date: "2024-11-20",
    readTime: 6,
    featured: true,
  },
  {
    id: "3",
    title: "The Future of Construction: How EPS Technology is Transforming East Africa",
    excerpt: "Expanded Polystyrene technology offers unprecedented advantages in speed, cost, and sustainability. Here's why major developers are switching.",
    content: `EPS technology represents a paradigm shift in construction methodology across East Africa. As a leading adopter, we're witnessing transformative changes.

## Why EPS is the Future

### Speed
- Prefabrication reduces on-site construction time by 40-50%
- Parallel construction of multiple floors possible
- Weather-independent installation

### Cost Efficiency
- 30-40% reduction in material costs
- Lower labor requirements
- Minimal waste (recyclable materials)
- Faster project cash flow

### Quality & Durability
- Uniform building quality
- Reduced defects and rework
- Superior thermal performance
- Excellent waterproofing

### Environmental Benefits
- Recyclable materials
- Reduced carbon footprint (70% less waste)
- Energy-efficient buildings reduce operational emissions
- Sustainable sourcing practices

## Market Adoption
We're seeing increased uptake across:
- Residential developments (multistory apartments)
- Commercial buildings (office complexes)
- Healthcare facilities (hospitals and clinics)
- Educational institutions (schools and universities)

## What's Next
The future of construction in East Africa will be characterized by:
1. Hybrid construction methods (combining EPS with traditional techniques)
2. Digital integration (BIM, IoT monitoring)
3. Prefabrication factories regional deployment
4. Standardized building codes for innovative systems

Early adopters like VectorSpace are positioning themselves at the forefront of this revolution.`,
    category: "Technology",
    author: "Arch. Sarah Ochieng",
    date: "2024-11-05",
    readTime: 7,
  },
  {
    id: "4",
    title: "Kenya's New Building Code 2024: What Engineering Firms Need to Know",
    excerpt: "The updated National Building Code brings significant changes to structural requirements, fire safety, and accessibility standards. Here's a comprehensive overview.",
    content: `Kenya's revised National Building Code (2024) introduces substantial updates affecting all engineering and construction professionals.

## Key Changes

### Structural Requirements
- Enhanced seismic design standards for buildings in high-risk zones
- Updated load factors and safety coefficients
- Stricter requirements for geotechnical investigations

### Fire Safety
- Improved emergency egress requirements
- Enhanced compartmentalization standards
- Updated sprinkler system specifications

### Accessibility
- Universal design principles (now mandatory)
- Improved provisions for persons with disabilities
- Accessible parking and circulation spaces

### Energy Efficiency
- Mandatory energy performance certificates
- Minimum insulation requirements
- Renewable energy integration guidelines

### Environmental Compliance
- Green building certification recognition
- Stormwater management requirements
- Waste management during construction

## Compliance Timeline
- Phase 1 (Immediate): All new projects
- Phase 2 (12 months): Existing buildings over 5 years
- Phase 3 (24 months): Full implementation

## Preparation Steps for Firms
1. Update design standards and specifications
2. Train engineering staff on new requirements
3. Revise project templates and checklists
4. Implement new compliance documentation
5. Engage with regulatory bodies early

VectorSpace is fully compliant with the 2024 code and actively guides clients through the transition.`,
    category: "Industry News",
    author: "Eng. Dr. Julius Kariuki",
    date: "2024-10-18",
    readTime: 8,
  },
  {
    id: "5",
    title: "Cost Estimating Best Practices: Creating Accurate Bills of Quantities",
    excerpt: "Accurate BQs are critical for project success. Learn the professional methodologies that minimize overruns and ensure fair bidding.",
    content: `Bills of Quantities (BQs) are fundamental to construction project success. Inaccurate estimates lead to disputes, delays, and financial losses.

## The BQ Process

### 1. Design Review
- Detailed study of architectural and structural drawings
- Understanding of project specifications and standards
- Clarification of scope inclusions/exclusions

### 2. Quantity Measurement
- Systematic measurement following standard methods
- Double-checking all calculations
- Identifying quantities at each building stage

### 3. Rate Analysis
- Material cost research (current market rates)
- Labor cost assessment by skill level
- Equipment and overhead allocation
- Contingency percentage determination

### 4. Comparative Costing
- Analyzing alternative construction methods
- Cost implications of material choices
- Design optimization opportunities
- Lifecycle cost analysis

## Common Errors to Avoid
- Incomplete measurements (missing items)
- Outdated market rates
- Inadequate contingency allowances
- Unclear specification references
- Inconsistent measurement standards

## Best Practices
1. Use standardized measurement methods (SMM7 or equivalent)
2. Cross-reference with design documents
3. Conduct market surveys for accurate rates
4. Include detailed specifications
5. Peer review before submission
6. Document assumptions clearly

## Our Methodology
At VectorSpace, we combine:
- Experienced quantity surveyors
- Market-based rate analysis
- Comparative cost studies
- Risk assessment
- Lifecycle costing

This ensures clients receive accurate, competitive, and defensible cost estimates.`,
    category: "Best Practices",
    author: "Qty Surveyor James Mwangi",
    date: "2024-09-25",
    readTime: 6,
  },
  {
    id: "6",
    title: "Geotechnical Investigation: Why It&apos;s Critical Before Breaking Ground",
    excerpt: "Foundation failures represent one of the most costly construction disasters. Here's why professional soil investigation is non-negotiable.",
    content: `Geotechnical investigations are often overlooked, yet they're among the most critical project phases. Failures here cascade into catastrophic problems.

## What Goes Wrong Without Proper Investigation

### Historical Examples in East Africa
- Foundation collapse in Nairobi CBD project (2019): KES 800M loss
- Hospital structural failure in Western Kenya (2021): Lives endangered
- Residential complex damage in Kisumu (2022): Uninsurable loss

## What We Investigate

### Soil Properties
- Soil classification and composition
- Bearing capacity determination
- Settlement analysis
- Strength characteristics

### Environmental Factors
- Groundwater levels and fluctuation
- Soil chemistry (sulfates, carbonates)
- Expansive soil potential
- Collapsible soil risk

### Hazards
- Seismic activity and liquefaction risk
- Slope stability concerns
- Subsurface voids or cavities
- Contamination issues

## Investigation Methods

1. **Borehole Drilling**: Deep soil samples, stratification
2. **Laboratory Testing**: Comprehensive soil analysis
3. **In-situ Testing**: CPT, SPT for field verification
4. **Groundwater Assessment**: Monitoring and analysis
5. **Geological Mapping**: Surface features and risk zones

## Foundation Design Based on Data
Investigation findings inform:
- Foundation type selection (shallow vs. deep)
- Foundation depth requirements
- Bearing capacity design
- Settlement calculations
- Remedial measures if needed

## Cost-Benefit Analysis
- Investigation cost: ~KES 500K - 2M (0.5-1% of project)
- Potential foundation failure cost: KES 100M+ (uninsurable)
- ROI on investigation: >50x

Never skip geotechnical investigation. The cost of knowledge is infinitesimal compared to the cost of ignorance.`,
    category: "Best Practices",
    author: "Geotechnical Eng. Dr. Peter Kimani",
    date: "2024-08-30",
    readTime: 7,
  },
]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [submitDialogOpen, setSubmitDialogOpen] = useState(false)

  const categories = Array.from(new Set(blogPosts.map((p) => p.category)))
  
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter((p) => p.featured).slice(0, 2)
  const regularPosts = filteredPosts.filter((p) => !p.featured)

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Case Study":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case "Technology":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      case "Industry News":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "Best Practices":
        return "bg-amber-500/20 text-amber-300 border-amber-500/30"
      default:
        return "bg-gold-orange/20 text-gold-orange border-gold-orange/30"
    }
  }

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Engineering Insights & Case Studies
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Learn from our experience. Explore case studies, construction technology insights, industry trends, and engineering best practices.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-light-gray bg-secondary text-foreground placeholder-muted-foreground focus:outline-none focus:border-gold-orange transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-3">Filter by category:</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === null
                    ? "bg-gold-orange text-dark-gray"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                All Articles
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
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && selectedCategory === null && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group rounded-lg border border-light-gray overflow-hidden hover:border-gold-orange transition-all duration-300 hover:shadow-xl"
                  style={{ backgroundColor: "#0B2A4A" }}
                >
                  {post.image && (
                    <div className="h-48 bg-linear-to-br from-brand-blue to-blue-900 flex items-center justify-center overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={`border ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-400">Featured</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold-orange transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4 pb-4 border-b border-gray-700">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>

                    <button className="inline-flex items-center gap-2 text-gold-orange font-semibold group-hover:gap-3 transition-all duration-300">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {selectedCategory ? `${selectedCategory} Articles` : "All Articles"}
          </h2>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="group rounded-lg border border-light-gray p-6 hover:border-gold-orange transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ backgroundColor: "#0B2A4A" }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={`border ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-orange transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div>{post.readTime} min read</div>
                      </div>
                    </div>

                    <button className="inline-flex items-center gap-2 text-gold-orange font-semibold whitespace-nowrap group-hover:gap-3 transition-all duration-300 mt-4 md:mt-0">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-lg p-8 border border-light-gray text-center" style={{ backgroundColor: "#0B2A4A" }}>
          <h3 className="text-2xl font-bold text-white mb-3">
            Want to Share Your Engineering Story?
          </h3>
          <p className="text-gray-300 mb-6">
            Have a project success story or engineering insight? We&#39;d love to feature it.
          </p>
          <button
            onClick={() => setSubmitDialogOpen(true)}
            className="inline-block bg-gold-orange text-dark-gray px-8 py-3 rounded-lg font-semibold hover:bg-amber-hover transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Submit Article Idea
          </button>

            <EmailSubmitDialog
            open={submitDialogOpen}
            onOpenChange={setSubmitDialogOpen}
            mailtoLink="mailto:info@vectorspace.co.ke?subject=Article Idea Submission - VectorSpace Blog&body=Hello VectorSpace Team,%0A%0AI&#39;d like to submit an article idea for your engineering blog.%0A%0AArticle Title:%0A%0AArticle Category (Case Study / Technology / Industry News / Best Practices):%0A%0ABrief Summary:%0A%0AAuthor Name:%0A%0AAre you an employee/partner or external contributor?:%0A%0AThank you!"
            gmailLink="https://mail.google.com/mail/?view=cm&fs=1&to=info@vectorspace.co.ke&su=Article%20Idea%20Submission%20-%20VectorSpace%20Blog&body=Hello%20VectorSpace%20Team,%0A%0AI&#39;d%20like%20to%20submit%20an%20article%20idea%20for%20your%20engineering%20blog.%0A%0AArticle%20Title:%0A%0AArticle%20Category%20(Case%20Study%20/%20Technology%20/%20Industry%20News%20/%20Best%20Practices):%0A%0ABrief%20Summary:%0A%0AAuthor%20Name:%0A%0AAre%20you%20an%20employee/partner%20or%20external%20contributor?:%0A%0AThank%20you!"
            title="Submit Article Idea"
            description="Choose how you&#39;d like to submit your article idea:"
          />
        </div>
      </div>
    </section>
  )
}
