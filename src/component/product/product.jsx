import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "./download (1).jpeg";
import img2 from "./download.jpeg";
import img3 from "./download.png";
import img4 from "./download (2).jpeg";
import img5 from "./download (3).jpeg";
import img6 from "./imas.png";
import img7 from "./OIP.jpeg";
import img8 from "./lila.jpeg";
import img9 from "./download (4).jpeg";
import img10 from "./amwag.jpeg";

import { FaStar } from "react-icons/fa";

const bookDate = [
  {
    id: 1,
    img: img1,
    title: "حارس الشمس",
    rating: 4.5,
    author: "ahmed fahmy",
  },
  {
    id: 2,
    img: img2,
    title: "دميه ادم",
    rating: 4.5,
    author: "Mahmoud nagy",
  },
  {
    id: 3,
    img: img3,
    title: "الحب من اول نظره",
    rating: 4.5,
    author: "ezz magdy",
  },
  {
    id: 4,
    img: img4,
    title: "الرقيه الشرعيه",
    rating: 4,
    author: "mohamed yaser",
  },
  {
    id: 5,
    img: img5,
    title: "The Moon",
    rating: 5,
    author: "Ali Mohamed",
  },
];
const bookDate2 = [
  {
    id: 1,
    img: img6,
    title: "العقل النشط",
    rating: 4.5,
    author: "zaid rawy",
  },
  {
    id: 2,
    img: img7,
    title:" مستعمره القمر",
    rating: 4.5,
    author: "Eslam Fathy",
  },
  {
    id: 3,
    img: img8,
    title: "تدوينه ليلي ",
    rating: 4.5,
    author: "Noal Fahd",
  },
  {
    id: 4,
    img: img9,
    title: "ما وراء الطبيعه",
    rating: 4,
    author: "Tark Yazn",
  },
  {
    id: 5,
    img: img10,
    title:"امواج في ليله مظلمه",
    rating: 4.5,
    author: "Ahmed Ashref",
  },
];

const Product = () => {
  const [aosInitialized, setAosInitialized] = useState(false);

  useEffect(() => {
    if (!aosInitialized) {
      AOS.init();
      setAosInitialized(true);
    }
  }, [aosInitialized]);

  return (
    <div className="mt-16 ">
      <div className="container " id="rate">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-4xl text-green-900 font-serif">
            Collect Your Book In One Place
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-serif mt-14 ">
            Top Rating
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-900"></p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 text-center">
            {bookDate.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 bg-xf p-5 rounded-xl"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold font-serif">{data.title}</h3>
                  <p className="text-sm text-green-800 font-serif">
                    {data.author}
                  </p>
                  <div className="flex items-center gap-1 text-center ml-10 text-gold">
                    <FaStar />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container " id="read">
        <div className="text-center mb-10 max-w-[600px] mx-auto mt-28">
          <h1 data-aos="fade-up" className="text-3xl font-serif mt-8 ">
            Top Reading
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-900"></p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 text-center">
            {bookDate2.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 bg-xf p-5 rounded-xl"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold font-serif">{data.title}</h3>
                  <p className="text-sm text-green-800 font-serif">
                    {data.author}
                  </p>
                  <div className="flex items-center gap-1 text-center ml-10 text-gold">
                    <FaStar />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
