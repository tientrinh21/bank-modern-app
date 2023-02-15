import { features } from '../constants'
import Button from './Button'

const Business = () => {
  return (
    <section id="features" className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1 flex justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className="font-poppins font-normal text-white text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with the
          hundreds of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className="flex-1 flex justify-center items-center flex-col md:ml-10 ml-0 md:mt-0 mt-10 relative">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  )
}

const FeatureCard = ({ icon, title, content }) => (
  <div className="flex flex-row p-6 rounded-[20px] mb-6 last-of-type:mb-0 feature-card">
    <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-dimBlue">
      <img
        src={icon}
        alt={`${icon}-icon`}
        className="w-[50%] h-[50%] object-contain"
      />
    </div>

    <div className="flex-1 flex flex-col ml-5">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[30px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
)

export default Business
