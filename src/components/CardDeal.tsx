import { card } from '../assets'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1 flex justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold text-white xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full">
          Find a better card deal <br className="sm:block hidden" />
          in few easy steps.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          Easy to register your credit cards, great analysis of your incomes & expenses, intergration with various payment methods.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
        <img src={card} alt="card" className="w-[100%] h-[100%] object-contain" />
      </div>
    </section>
  )
}

export default CardDeal
