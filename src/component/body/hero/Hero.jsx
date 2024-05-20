import React from 'react'
import img1 from './44 (1).png'
import img2 from "./44 (2).png";
import img3 from "./122.png";
import Slider from'react-slick'
const imgList = [
  {
    id: 1,
    img: img1,
    title: "Literary Oasis: Embark on Your Qaree Journey",
    description:
      "Embark on a captivating journey through Qaree's curated collection, where each page holds the ",
  },
  {
    id: 2,
    img: img2,
    title: "Boundless Worlds Await: Welcome to Qaree's Realm",
    description:
      "Step into Qaree's realm, where endless adventures and boundless imagination converge within the pages ofevery book,offering you a world of infinite possibilities",
  },
  {
    id: 3,
    img: img3,
    title: "Unveiling Qaree: Your Gateway to Reading Delight",
    description:
      "Unveil the delights of Qaree, your ultimate gateway to a universe of reading pleasure. With each book, immerse yourself in captivating stories, insightful knowledge, and endless entertainment",
  },
];
const Hero = () => {
  const setting = {
    dots: 'false',
    arows: 'false',
    infite: 'true',
    speed: 800,
    slideTOScroll: 1,
    autoplay: 'true',
    autoplaySpeed: 4000,
    cssEasa: 'easa-in-out',
    pauseOnHover: 'false',
    pauseOnFoucs:'true'
  }
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center" id='hero'>
      <div className="h-[500px] w-[700px] bg-slate-900 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      <div className="container pb-8 sm:pb-0">
        <Slider {...setting}>
          {imgList.map((data) => (
            <div >
              <div className="grid grid-cols-1 sm:grid-cols-2 font-normal">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-center order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-dureation="500"
                    data-aos-once="true"
                    className="text-2xl sm:text-2xl lg:text-3xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-dureation="500"
                    data-aos-delay="100"
                    className="text-sm mt-3"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-dureation="500"
                    data-aos-delay="300"
                  >
                    <button className="bg-green-700  hover:scale-105 duration-200 py-2 px-4 rounded-full text-xl bg-xff mt-10">
                      Get Started
                    </button>
                  </div>
                </div>
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt="#"
                      className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto mt-16"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;