import Header from "../../components/header"
import Footer from "../../components/footer"
import Resources from "../../components/resources"

export const metadata = {
  title: "Resources | VectorSpace Engineering",
  description: "Curated engineering resources, tools, standards, and learning materials for construction professionals.",
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <Resources />
      </main>
      <Footer />
    </div>
  )
}
