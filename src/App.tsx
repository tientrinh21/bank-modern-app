import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  NavBar,
  Stats,
  Testimonials,
} from './components'

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className="flex justify-center items-center sm:px-16 px-6">
      <div className="xl:max-w-[1280px] w-full">
        <NavBar />
      </div>
    </div>

    <div className="flex justify-center items-start bg-primary">
      <div className="xl:max-w-[1280px] w-full">
        <Hero />
      </div>
    </div>

    <div className="flex justify-center items-start bg-primary sm:px-16 px-6">
      <div className="xl:max-w-[1280px] w-full">
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
)

export default App
