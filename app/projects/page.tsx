import Header from "../../components/header"
import Footer from "../../components/footer"
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog"

export default function ProjectsPage() {
  const project = {
    title: "VectorSpace Engineering Projects",
    description: "Explore our portfolio of innovative engineering solutions across East Africa. From residential developments to healthcare facilities, we deliver sustainable and cost-effective infrastructure.",
    images: [
      "/project 1.jpeg",
      "/project 2.jpeg",
      "/project 3.jpeg",
      "/project 4.jpeg",
      "/project 5.jpeg",
      "/project 6.jpeg",
      "/project 7.jpeg",
      "/project 8.jpeg",
    ]
  }

  const kaziProject = {
    title: "4 Bedroom Maisonette",
    description: "This ongoing project is located in Kwa Maiko, Kiambu County, and involves comprehensive architectural and structural design, council approvals, as well as full construction and supervision. The development utilizes EPS Building Technology for both walls and slabs, incorporating a flat roof design to enhance efficiency and modern aesthetics. The project has an estimated value of KSh 10 million and is currently under active implementation.",
    images: [
      "/kazi 1.jpeg",
      "/kazi 2.jpeg",
      "/kazi 3.jpeg",
      "/kazi 4.jpeg",
      "/kazi 5.jpeg",
      "/kazi 6.jpeg",
      "/kazi 7.jpeg",
      "/kazi 8.jpeg",
      "/kazi 10.jpeg",
      "/kazi 11.jpeg",
      "/kazi 12.jpeg",
    ]
  }

  const jobProject = {
    title: "5 Bedroom Maisonette",
    description: "This completed project is located in Kahaini, Murang’a County, and involved structural design and full supervision. The development utilized EPS Building Technology for both walls and slabs, featuring a flat roof design that ensured structural efficiency and durability. The project was successfully delivered with a total value of KSh 18 million.",
    images: [
      "/job 1.jpeg",
      "/job 2.jpeg",
      "/job 3.jpeg",
      "/job 4.jpeg",
      "/job 5.jpeg",
      "/job 6.jpeg",
      "/job 7.jpeg",
    ]
  }

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Header />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{project.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border border-border">
                  <img src={project.images[5]} alt="Main project image" className="w-full h-64 object-cover" />
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground">This completed Ground + 3 Storey apartment project involved full structural design, council approvals, and thorough site supervision. Built using EPS Building Technology for both walls and slabs, the development also required specialized foundation treatment due to 2.4m of black cotton soil. Valued at KSh 60 million, the project was successfully delivered to high standards using efficient and modern construction methods.</p>
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground">Click to view project gallery</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-2">{project.title}</h2>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.images.map((image, index) => (
                      <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg border border-border">
                        <img src={image} alt={`Project image ${index + 1}`} className="w-full h-48 object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border border-border">
                  <img src={kaziProject.images[0]} alt="Kazi project image" className="w-full h-64 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">{kaziProject.title}</h3>
                    <p className="text-muted-foreground">{kaziProject.description}</p>
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground">Click to view project gallery</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-2">{kaziProject.title}</h2>
                    <p className="text-muted-foreground">{kaziProject.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {kaziProject.images.map((image, index) => (
                      <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg border border-border">
                        <img src={image} alt={`Kazi project image ${index + 1}`} className="w-full h-48 object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border border-border">
                  <img src={jobProject.images[0]} alt="Job project image" className="w-full h-64 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">{jobProject.title}</h3>
                    <p className="text-muted-foreground">{jobProject.description}</p>
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground">Click to view project gallery</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-2">{jobProject.title}</h2>
                    <p className="text-muted-foreground">{jobProject.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {jobProject.images.map((image, index) => (
                      <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg border border-border">
                        <img src={image} alt={`Job project image ${index + 1}`} className="w-full h-48 object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
