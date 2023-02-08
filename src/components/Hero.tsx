import { discount, robot } from '../assets'

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col sm:py-16 py-6`}>
    <div className="flex flex-1 justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
          <span className="text-white">20%</span> Discount For{' '}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-semibold ss:text-[72px] text-[52px] text-white">
          The Next <br className="sm:block hidden" />
          <span className="text-gradient">Generation</span> Payment Method.
        </h1>
      </div>
    </div>
  </section>
)

export default Hero