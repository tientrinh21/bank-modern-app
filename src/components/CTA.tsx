import Button from './Button'

const CTA = () => (
  <section className="flex justify-center items-center sm:flex-row flex-col sm:px-16 px-6 sm:py-12 py-8 sm:my-16 my-6 bg-black-gradient-2 rounded-[20px] box-shadow">
    <div className="flex-1 flex flex-col">
      <h2 className="font-poppins font-semibold text-white xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full">
        Let's try our service now!
      </h2>
      <p className="font-poppins font-normal text-dimWhite test-[18px] leading-[30.8px] max-w-[470px] mt-5">
        Everything you need to accept card payments and grow your business anywhere on the planet.
      </p>
    </div>

    <div className="sm:ml-10 ml-0 sm:mt-0 mt-10">
      <Button styles="mt-0" />
    </div>
  </section>
)

export default CTA
