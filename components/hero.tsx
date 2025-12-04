export default function Hero() {
  return (
    <section className="bg-linear-to-br from-card to-secondary py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Engineering, Precision & Innovation
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Delivering innovative, sustainable, and cost-effective infrastructure across East Africa.
          </p>
          <a
            href="#projects"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}
