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


  const ujenziProject = {
    title: "3-Bedroom Bungalow",
    description: "This completed project is a 3-bedroom bungalow located in Chakol, Busia County. It involved structural design and full supervision, utilizing EPS Building Technology for the load-bearing walls and a flat roof terrace. The project was successfully delivered with a total value of KSh 4 million",
    images: [
      "/projects/project 4/ujenzi 1.jpeg",
      "/projects/project 4/ujenzi 2.jpeg",
      "/projects/project 4/ujenzi 3.jpeg",
      "/projects/project 4/ujenzi 4.jpeg",
      "/projects/project 4/ujenzi 5.jpeg",
      "/projects/project 4/ujenzi 6.jpeg",
      "/projects/project 4/ujenzi 7.jpeg",
      "/projects/project 4/ujenzi 8.jpeg",
      "/projects/project 4/ujenzi 9.jpeg",
      "/projects/project 4/ujenzi 10.jpeg",
      "/projects/project 4/ujenzi 11.jpeg",
      "/projects/project 4/ujenzi 12.jpeg",
      "/projects/project 4/ujenzi 13.jpeg",
      "/projects/project 4/ujenzi 14.jpeg",
      "/projects/project 4/ujenzi 15.jpeg",
    ]
  }


  const houseProject = {
    title: "5-bedroom villa and two 3-bedroom",
    description: "This project, located in Naivasha, Nakuru County, comprises a 5-bedroom villa and two 3-bedroom bungalows. The scope included structural design, supervision, and partial construction on a sub-contract basis. The bungalows were constructed using EPS Building Technology for the load-bearing walls, while the villa (maisonette) utilized infill wall panels and suspended slab panels, featuring a lounge with a 10m by 8m clear ceiling achieved with an EPS ribbed slab panel. The bungalows have been completed, and finishing works are ongoing for the maisonette, with a total project value of KSh 45 million.",
    images: [
      "/projects/project 5/house 1.jpeg",
      "/projects/project 5/house 2.jpeg",
      "/projects/project 5/house 3.jpeg",
      "/projects/project 5/house 4.jpeg",
      "/projects/project 5/house 5.jpeg",
      "/projects/project 5/house 6.jpeg",
      "/projects/project 5/house 7.jpeg",
      "/projects/project 5/house 8.jpeg",
      "/projects/project 5/house 9.jpeg",
      "/projects/project 5/house 10.jpeg",
      "/projects/project 5/house 11.jpeg",
      "/projects/project 5/house 12.jpeg",
    ]
  }


  const nyumbaProject = {
    title: "structural retrofitting",
    description: "This completed project involved the structural retrofitting of reinforced concrete columns in Gacharage, Kiambu County. The scope included the machine application of structural shotcrete to strengthen columns that were not originally designed to support additional floors. Following the consulting engineer's proposal, the columns at the basement and ground floor levels were retrofitted using jacketing techniques, with VectorSpace Ltd providing the shotcrete application solution. The project was successfully delivered at a value of KSh 1.0 million.",
    images: [
      "/projects/project 6/nyumba 1.jpeg",
      "/projects/project 6/nyumba 2.jpeg",
      "/projects/project 6/nyumba 3.jpeg",
      "/projects/project 6/nyumba 4.jpeg",
      "/projects/project 6/nyumba 5.jpeg",
      "/projects/project 6/nyumba 6.jpeg",
      "/projects/project 6/nyumba 7.jpeg",
      "/projects/project 6/nyumba 8.jpeg",
      "/projects/project 6/nyumba 9.jpeg",
    ]
  }

  const project7Project = {
    title: "4-bedroom maisonette",
    description: "This completed project is a 4-bedroom maisonette located in Shimba Hills, Kwale County. The scope included structural design, training the main contractor on EPS Building Technology, and full site supervision. The development was executed using the full EPS system, incorporating load-bearing wall panels, EPS ribbed suspended slabs and flat roof terrace, as well as an EPS panel staircase. Notably, the maisonette features a double-volume lounge with walls spanning up to 7 meters in clear height. The project was delivered at a total value of KSh 20 million.",
    images: [
      "/projects/project 7/project 1.jpeg",
      "/projects/project 7/project 2.jpeg",
      "/projects/project 7/project 3.jpeg",
      "/projects/project 7/project 4.jpeg",
      "/projects/project 7/project 5.jpeg",
      "/projects/project 7/project 6.jpeg",
      "/projects/project 7/project 7.jpeg",
      "/projects/project 7/project 8.jpeg",
      "/projects/project 7/project 9.jpeg",
      "/projects/project 7/project 10.jpeg",
      "/projects/project 7/project 11.jpeg",
      "/projects/project 7/project 12.jpeg",
      "/projects/project 7/project 13.jpeg",
      "/projects/project 7/project 14.jpeg",
      "/projects/project 7/project 15.jpeg",
    ]
  }

  const project8Project = {
    title: "Structural Retrofitting Works",
    description: "This completed assignment involved structural retrofitting works in Spring Valley and Ruaka, as well as a structural integrity assessment in Karen End. The scope covered jacketing and structural shotcrete application in Spring Valley, mesh installation and shotcreting works in Ruaka, and rebar scanning with detailed reporting in Karen End. The projects were identified as having deficiencies in structural considerations, and our role was to implement the rectifying measures proposed by the project consultants, ensuring compliance and improved structural performance.",
    images: [
      "/projects/project 8/project 1.jpeg",
      "/projects/project 8/project 2.jpeg",
      "/projects/project 8/project 3.jpeg",
      "/projects/project 8/project 4.jpeg",
      "/projects/project 8/project 5.jpeg",
      "/projects/project 8/project 6.jpeg",
      "/projects/project 8/project 7.jpeg",
      "/projects/project 8/project 8.jpeg",
      "/projects/project 8/project 9.jpeg",
      "/projects/project 8/project 10.jpeg",
      "/projects/project 8/project 11.jpeg",
      "/projects/project 8/project 12.jpeg",
    ]
  }

  const project9Project = {
    title: "Residential Luxury Villas & DSQs - Kilifi County",
    description: "This project involves the structural design and analysis of residential luxury villas and DSQs across Kilifi County. The scope covered detailed structural analysis, preparation of structural calculations, and production of comprehensive structural drawings. VectorSpace has designed and submitted multiple projects in locations including Watamu, Mambrui, and Malindi, with implementation carried out by Coast Design & Build. Some of these developments have been completed, while others are currently ongoing.",
    images: [
      "/projects/project 9/1.jpeg",
      "/projects/project 9/2.jpeg",
      "/projects/project 9/3.jpeg",
      "/projects/project 9/4.jpeg",
      "/projects/project 9/5.jpeg",
      "/projects/project 9/6.jpeg",
      "/projects/project 9/7.jpeg",
      "/projects/project 9/8.jpeg",
      "/projects/project 9/9.jpeg",
      "/projects/project 9/10.jpeg",
    ]
  }

  return (

    <div className="min-h-screen bg-background text-foreground dark">
      <Header />

      <main className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">{project.title}</h1>
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

            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border border-border">
                  <img src={ujenziProject.images[0]} alt="Ujenzi project image" className="w-full h-64 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">{ujenziProject.title}</h3>
                    <p className="text-muted-foreground">{ujenziProject.description}</p>
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground">Click to view project gallery</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-2">{ujenziProject.title}</h2>
                    <p className="text-muted-foreground">{ujenziProject.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ujenziProject.images.map((image, index) => (

                      <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg border border-border">
                        <img src={image} alt={`Ujenzi project image ${index + 1}`} className="w-full h-48 object-cover" />
                      </div>
                    ))}

                  </div>
                </div>

              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border border-border">
                  <img src={houseProject.images[0]} alt="House project image" className="w-full h-64 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">{houseProject.title}</h3>
                    <p className="text-muted-foreground">{houseProject.description}</p>
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground">Click to view project gallery</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-2">{houseProject.title}</h2>
                    <p className="text-muted-foreground">{houseProject.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {houseProject.images.map((image, index) => (
                      <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg border border-border">
                        <img src={image} alt={`House project image ${index + 1}`} className="w-full h-48 object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border border-border">
                  <img src={nyumbaProject.images[0]} alt="Nyumba project image" className="w-full h-64 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">{nyumbaProject.title}</h3>
                    <p className="text-muted-foreground">{nyumbaProject.description}</p>
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground">Click to view project gallery</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-2">{nyumbaProject.title}</h2>
                    <p className="text-muted-foreground">{nyumbaProject.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {nyumbaProject.images.map((image, index) => (
                      <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg border border-border">
                        <img src={image} alt={`Nyumba project image ${index + 1}`} className="w-full h-48 object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border border-border">
                  <img src={project7Project.images[0]} alt="Project 7 image" className="w-full h-64 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">{project7Project.title}</h3>
                    <p className="text-muted-foreground">{project7Project.description}</p>
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground">Click to view project gallery</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-2">{project7Project.title}</h2>
                    <p className="text-muted-foreground">{project7Project.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project7Project.images.map((image, index) => (
                      <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg border border-border">
                        <img src={image} alt={`Project 7 image ${index + 1}`} className="w-full h-48 object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border border-border">
                  <img src={project8Project.images[0]} alt="Project 8 image" className="w-full h-64 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">{project8Project.title}</h3>
                    <p className="text-muted-foreground">{project8Project.description}</p>
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground">Click to view project gallery</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-2">{project8Project.title}</h2>
                    <p className="text-muted-foreground">{project8Project.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project8Project.images.map((image, index) => (
                      <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg border border-border">
                        <img src={image} alt={`Project 8 image ${index + 1}`} className="w-full h-48 object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border border-border">
                  <img src={project9Project.images[0]} alt="Project 9 image" className="w-full h-64 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">{project9Project.title}</h3>
                    <p className="text-muted-foreground">{project9Project.description}</p>
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground">Click to view project gallery</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-2">{project9Project.title}</h2>
                    <p className="text-muted-foreground">{project9Project.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project9Project.images.map((image, index) => (
                      <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg border border-border">
                        <img src={image} alt={`Project 9 image ${index + 1}`} className="w-full h-48 object-cover" />
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
