import image1 from "../assets/Feature1.png";
import image2 from "../assets/feature2.png";
import image3 from "../assets/feature3.png";

const Features = () => {
  return (
    <div className="flex flex-col w-full h-[85rem]">
      <h1
        className="text-center p-2 text-4xl tracking-wider font-extrabold"
      >
        Our Features
      </h1>
      {/* Feature 1 */}
      <div className="flex w-full justify-center items-center my-20">
        {/* image */}
        <div>
          <img
            className="mx-16 w-[450px] h-[350px]"
            src={image1}
            alt="Feature 1"
          />
        </div>
        {/* Investment Management */}
        <div
          className="bg-black w-[68rem] h-[320px] text-white"
          style={{
            clipPath:
              "polygon(10% 0%, 90% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%)",
          }}
        >
          <h3 className="text-2xl font-bold mt-12 mx-32">
            Investment Management
          </h3>
          <p className="text-gray-400 mb-6 my-6 mx-32 mr-40 text-md text-justify">
            Planning for retirement requires a strategic approach to ensure you
            can enjoy your golden years comfortably. At UPONLY, we offer
            tailored retirement solutions to help you achieve your long-term
            goals.
          </p>
          <button className="bg-blue-700 text-white text-lg px-4 py-2 rounded-md mx-32 hover:bg-blue-700 transition-all">
            learn more...
          </button>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex w-full justify-center items-center">
        {/* Financial Planning */}
        <div
          className="bg-black w-[65rem] h-[280px] text-white rounded-r-3xl flex flex-col"
          style={{
            clipPath:
              "polygon(0% 0%, 90% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)",
          }}
        >
          <h3 className="text-2xl font-bold mt-10 mx-72">
            Personalized Financial Planning
          </h3>
          <p className="text-gray-400 mb-6 my-4 mx-72 mr-40 text-md tracking-wider text-justify">
            Personalized financial planning is key to achieving your unique
            financial goals. At UPONLY , we believe in crafting a bespoke
            strategy tailored specifically to your needs and aspirations.
          </p>
          <button className="bg-blue-700 text-white text-lg px-2 py-2 rounded-md mx-72 w-40 hover:bg-blue-700 transition-all">
            Explore Pans...
          </button>
        </div>
        {/* image2 */}
        <div>
          <img
            className="mx-10 p-2 w-[450px] h-[300px]"
            src={image2}
            alt="Feature2"
          />
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex w-full justify-center items-center my-20">
        {/* image */}
        <div>
          <img
            className="mx-16 w-[450px] h-[350px]"
            src={image3}
            alt="Feature 1"
          />
        </div>
        {/* Retirement Solution*/}
        <div
          className="bg-black w-[68rem] h-[320px] text-white"
          style={{
            clipPath:
              "polygon(10% 0%, 90% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%)",
          }}
        >
          <h3 className="text-2xl font-bold mt-12 mx-32">
            Retirement Solutions
          </h3>
          <p className="text-gray-400 mb-6 my-6 mx-32 mr-96 tracking-wider text-md text-justify">
            Effective investment management is crucial for building and
            preserving wealth. At UPONLY, we provide expert guidance to help you
            navigate the complexities of investing and achieve your financial
            goals.
          </p>
          <button className="bg-blue-700 text-white text-lg px-4 py-2 rounded-md mx-32 hover:bg-blue-700 transition-all">
            Start Planning...
          </button>
        </div>
      </div>
      <hr className="bg-black h-2"/>
    </div>
  );
};

export default Features;
