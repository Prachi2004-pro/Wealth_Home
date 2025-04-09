import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Rohini Patil",
    title: "Web Developer",
    image: "",
    message:
      "Lorem ipsum dolor sit amet consectetur. Nunc adipiscing egestas et id sed. Lorem ipsum dolor sit amet consectetur.",
  },
  {
    name: "Akash Dalvi",
    title: "Web Developer",
    image: "",
    message:
      "Lorem ipsum dolor sit amet consectetur. Nunc adipiscing egestas et id sed. Lorem ipsum dolor sit amet consectetur.",
  },
  {
    name: "Rohini Patil",
    title: "Web Developer",
    image: "",
    message:
      "Lorem ipsum dolor sit amet consectetur. Nunc adipiscing egestas et id sed. Lorem ipsum dolor sit amet consectetur.",
  },
];

const Customer = () => {
  return (
    <div className="w-full h-[650px]">
      <h1 className="text-center p-4 text-3xl tracking-wider font-extrabold">
        Listen to our Happy Customers
      </h1>
      <div className="w-full px-6 py-12 bg-white flex justify-center">
        <div className="flex flex-wrap gap-28 justify-center max-w-full">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-black text-white rounded-2xl p-6 w-[400px] min-h-[240px] flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-white text-3xl mb-4" />

              {/* Testimonial Text */}
              <p className="text-xs pr-12 text-justify leading-relaxed">
                {t.message}
              </p>

              {/* Profile Info */}
              <div className="mt-4">
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-300">{t.title}</p>
              </div>

              {/* Overlapping Image */}
              <img
                className="w-40 h-40 bg-black rounded-full object-cover border-4 border-black absolute top-1/2 right-[-90px] transform -translate-y-1/2"
              />
            </div>
          ))}
        </div>
      </div>
      <form className="w-full max-w-4xl">
        {/* Name & Email Row */}
        <div className="flex flex-col md:flex-row gap-8 mb-6 mx-12">
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="mb-2 font-semibold text-black">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-md px-4 py-1 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="mb-2 font-semibold text-black">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md px-4 py-1 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col mb-8 mx-12">
          <label htmlFor="message" className="mb-2 font-semibold text-black">
            Message
          </label>
          <input
            id="message"
            placeholder="Enter your message"
            className="border border-gray-300 rounded-md px-4 py-1   focus:outline-none focus:ring-2 focus:ring-black"
          ></input>
        </div>
      </form>
      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-black text-white w-40 px-6 py-2 rounded-md text-sm transition"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Customer;
