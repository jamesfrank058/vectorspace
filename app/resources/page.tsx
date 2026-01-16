import Header from "../../components/header"
import Footer from "../../components/footer"
import Resources from "../../components/resources"
import Blog from "../../components/blog"

export const metadata = {
  title: "Resources | VectorSpace Engineering",
  description: "Curated engineering resources, tools, standards, learning materials, case studies, and construction technology insights for professionals.",
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <Resources />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
