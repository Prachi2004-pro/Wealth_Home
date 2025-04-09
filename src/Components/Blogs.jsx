import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const Blogs = () => {
  const blogsData = [
    {
      image: blog1,
      title: "Secure your future",
      para: "Securing your future involves more than just saving money; it requires a proactive approach to managing risks and planning for uncertainties. At Uponly , we believe that a comprehensive strategy for insuring your future is vital for achieving long-term financial stability and peace of mind.",
      link: "/",
    },
    {
      image: blog2,
      title: "Retirement Planning Reimagined",
      para: "Retirement planning is evolving, and at Uponly, we re at the forefront of innovative strategies designed to secure your financial future. As traditional methods give way to new approaches, it s essential to adapt and explore creative solutions for a comfortable and fulfilling retirement.",
      link: "/",
    },
    {
      image: blog3,
      title: "The Importance of Estate Planning",
      para: "Estate planning is often an overlooked but essential aspect of financial management. we believe that effective estate planning is crucial for ensuring that your assets are managed and distributed according to your wishes, and that your loved ones are taken care of. Here s why estate planning matters and how you can get started.",
      link: "/",
    },
  ];

  return (
    <div className="w-full h-[850px] text-black">
      <div className=" m-10 p-2 tracking-wider">
        <h1 className="text-4xl font-extrabold text-center">Recent Blogs</h1>
        <div className="flex justify-between gap-20 my-12">
          {blogsData.map((blog, index) => (
            <div
              key={index}
              className={`bg-black flex flex-col justify-between gap-5 text-white p-5 shadow-gray-500 shadow-lg rounded-xl w-96 h-fit ${
                index % 2 == 0 && "mt-20"
              }`}
            >
              <img
                className="rounded-xl h-1/2"
                src={blog.image}
                alt="blog img"
              />
              <h1 className="text-xl font-bold my-2">{blog.title}</h1>
              <p className="text-sm tracking-wider">{blog.para}</p>
              <div className="flex justify-center my-4">
                <a
                  href={blog.link}
                  className="bg-blue-700 p-2 rounded-full w-28 text-center"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
