import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer group">
      <div className="flex justify-center items-center flex-col bg-primary w-full h-full rounded-full group-hover:bg-transparent">
        <div className="flex justify-center items-center flex-row">
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient group-hover:text-primary">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient text-primary">Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted
