"use client"

import { useState } from "react"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { Badge } from "./ui/badge"
import EmailSubmitDialog from "./email-submit-dialog"

interface BlogPostPreview {
  id: string
  title: string
  excerpt: string
  category: "Case Study" | "Technology" | "Industry News" | "Best Practices"
  date: string
  readTime: number
  featured?: boolean
}

const latestPosts: BlogPostPreview[] = [
  {
    id: "1",
    title: "EPS Technology Reduces Construction Costs by 35% at Thindigua Apartments",
    excerpt: "Discover how Expanded Polystyrene (EPS) technology combined with beam-and-block systems delivered a 12-storey residential project 40% faster.",
    category: "Case Study",
    date: "2024-12-15",
    readTime: 5,
    featured: true,
  },
  {
    id: "2",
    title: "Structural Assessment Prevents 200M Collapse Risk at Kimbo Hospital",
    excerpt: "A detailed structural integrity assessment revealed critical weaknesses in an aging hospital building.",
    category: "Case Study",
    date: "2024-11-20",
    readTime: 6,
    featured: true,
  },
  {
    id: "3",
    title: "Kenya's New Building Code 2024: What Engineering Firms Need to Know",
    excerpt: "The updated National Building Code brings significant changes to structural requirements, fire safety, and accessibility standards.",
    category: "Industry News",
    date: "2024-10-18",
    readTime: 8,
  },
]

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

export default function BlogPreview() {
  const [submitDialogOpen, setSubmitDialogOpen] = useState(false)
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <section id="blog-preview" className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">Latest Engineering Insights</h2>
          <p className="text-medium-gray text-lg max-w-2xl">
            Learn from our experience through case studies, technology insights, and industry best practices.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {latestPosts
            .filter((p) => p.featured)
            .map((post) => (
              <div
                key={post.id}
                className="group rounded-lg border border-light-gray overflow-hidden hover:border-gold-orange transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: "#0B2A4A" }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={`border ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-orange transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4 pb-4 border-b border-gray-700">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </div>
                    <span>{post.readTime} min read</span>
                  </div>

                  <Link
                    href="/resources#blog"
                    className="inline-flex items-center gap-2 text-gold-orange font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
        </div>

        {/* More Posts Preview */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-dark-gray mb-4">More Articles</h3>
          <div className="space-y-4">
            {latestPosts
              .filter((p) => !p.featured)
              .map((post) => (
                <div
                  key={post.id}
                  className="group flex items-start justify-between gap-4 p-4 rounded-lg border border-light-gray hover:border-gold-orange transition-all duration-300 hover:bg-white/50"
                  style={{ backgroundColor: "#0B2A4A" }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={`border text-xs ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-white group-hover:text-gold-orange transition-colors">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mt-2">
                      <span>{formatDate(post.date)}</span>
                      <span>•</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gold-orange group-hover:translate-x-1 transition-transform shrink-0 mt-1" />
                </div>
              ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <div>
            <Link
              href="/resources#blog"
              className="inline-block bg-gold-orange text-dark-gray px-8 py-3 rounded-lg font-semibold hover:bg-amber-hover transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View All Articles
            </Link>
          </div>
          <p className="text-medium-gray">or</p>
          <button
            onClick={() => setSubmitDialogOpen(true)}
            className="inline-block text-gold-orange font-semibold hover:text-amber-hover transition-colors underline"
          >
            Submit Article Idea
          </button>

          <EmailSubmitDialog
            open={submitDialogOpen}
            onOpenChange={setSubmitDialogOpen}
            mailtoLink="mailto:info@vectorspace.co.ke?subject=Article Idea Submission - VectorSpace Blog&body=Hello VectorSpace Team,%0A%0AI'd like to submit an article idea for your engineering blog.%0A%0AArticle Title:%0A%0AArticle Category (Case Study / Technology / Industry News / Best Practices):%0A%0ABrief Summary:%0A%0AAuthor Name:%0A%0AAre you an employee/partner or external contributor?:%0A%0AThank you!"
            gmailLink="https://mail.google.com/mail/?view=cm&fs=1&to=info@vectorspace.co.ke&su=Article%20Idea%20Submission%20-%20VectorSpace%20Blog&body=Hello%20VectorSpace%20Team,%0A%0AI'd%20like%20to%20submit%20an%20article%20idea%20for%20your%20engineering%20blog.%0A%0AArticle%20Title:%0A%0AArticle%20Category%20(Case%20Study%20/%20Technology%20/%20Industry%20News%20/%20Best%20Practices):%0A%0ABrief%20Summary:%0A%0AAuthor%20Name:%0A%0AAre%20you%20an%20employee/partner%20or%20external%20contributor?:%0A%0AThank%20you!"
            title="Submit Article Idea"
            description="Choose how you'd like to submit your article idea:"
          />
        </div>
      </div>
    </section>
  )
}
