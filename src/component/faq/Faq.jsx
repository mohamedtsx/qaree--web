import React from "react";
import p1 from "./22.jpeg";
import p2 from "./OIP.jpeg";
import p3 from "./images.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed",
      image: p1,
      text: "The qaree publishing platform has changed my life! I can now easily publish my work and reach a wider audience.",
    },
    {
      name: "Youssef",
      image: p2,
      text: "Quality and ease of use are what make qaree stand out. It's truly the perfect platform for every writer.",
    },
    {
      name: "Maryam",
      image: p3,
      text: "As a writer, I found qaree to be the ideal place to share my stories and achieve the reach I aspired for.",
    },
  ];

  return (
    <div className=" py-8 mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          What Our Users Say
        </h2>
        <div className="flex flex-wrap justify-center mt-24">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 px-2 mb-4">
              <div
                className="bg-xf rounded shadow py-2"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <img
                  className="w-24 h-24 rounded-full mx-auto -mt-12 border-4 border-white"
                  src={testimonial.image}
                  alt={`Image of ${testimonial.name}`}
                />
                <div className="px-6">
                  <p className="text-gray-800 text-base mt-5">
                    {testimonial.text}
                  </p>
                  <p className="text-gray-600  mt-4 text-center text-xl">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
