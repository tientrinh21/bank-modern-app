import { apple, bill, google } from '../assets'

const Billing = () => {
  return (
    <section
      id="product"
      className="flex md:flex-row-reverse flex-col sm:py-16 py-6"
    >
      <div className="flex-1 flex justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Easily control your <br className="sm:block hidden" />
          billing & invoicing.
        </h2>
        <p className="font-poppins font-normal text-[18px] text-dimWhite leading-[30.8px] max-w-[470px] mt-5">
          Everything can be easily managed just by a click of a button. All of
          the transactions are securely recorded with encrypted keys to protect
          your data.
        </p>
        <div className="flex flex-row flex-wrap md:mt-10 mt-6">
          <img
            src={apple}
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain cursor-pointer mr-5"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[128px] h-[42px] object-contain cursor-pointer mr-5"
          />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[2] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
    </section>
  )
}

export default Billing
