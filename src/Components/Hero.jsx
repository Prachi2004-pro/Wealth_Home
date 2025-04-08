import heroImage from "../assets/HeroImage.png"

const Hero = () => {
  return (
    <div className="w-full flex">
        <div className="bg-black w-2/3 h-[650px] rounded-r-full text-white flex flex-col justify-center items-start tracking-wide gap-5">
          <p className="ml-64 mr-28 text-4xl font-bold">Achieve your Financial Goals With
          Expert Guidance</p>
          <p className="ml-64 text-blue-200 text-lg">Tailored strategies to grow and protect your wealth </p>
          <button className="ml-64 mr-28 bg-blue-700 p-2 rounded-md text-center">Get started</button>
        </div>
        
        <div className="flex justify-center">
          <img className="p-4 mr-12" src={heroImage} alt="Image" />
        </div>
    </div>
  )
}

export default Hero