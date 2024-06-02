import React, { useState, useEffect } from "react";
import img1 from "./Homehome.png";
import img2 from "./Reading View.png";
import img3 from "./Reading View2.png";
import img4 from "./category.png";
import img5 from "./chats.png";
import img6 from "./community.png";
import img7 from "./my profile.png";
import img8 from "./library.png";

function Features() {
  const componentsData = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img5 },
    { image: img6 },
    { image: img7 },
    { image: img8 },
  ];

  const Objectives = () => {
    const [visibleComponent, setVisibleComponent] = useState(0);
    const [displayedComponents, setDisplayedComponents] = useState([]);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
      const animate = () => {
        if (visibleComponent < componentsData.length) {
          setDisplayedComponents((prev) => [
            ...prev,
            componentsData[visibleComponent],
          ]);
          setVisibleComponent((prev) => prev + 1);
        } else {
          setAnimated(false);
          setDisplayedComponents([]);
          setVisibleComponent(0);
          setTimeout(() => {
            setAnimated(true);
          }, 1500);
        }
      };

      const animationInterval = setInterval(animate, 2000);

      return () => clearInterval(animationInterval);
    }, [visibleComponent]);

    useEffect(() => {
      setAnimated(true);
    }, []);
const FeatureCard = ({ title, children }) => (
  <div className=" rounded-xl p-4 shadow-md hover:shadow-white transition-shadow duration-300 ease-in-out">
    <h2 className="text-lg font-semibold text-indigo-600">{title}</h2>
    <p className="mt-2 text-gray-600">{children}</p>
  </div>
);
    return (
      <div>
        <div className="flex justify-between mt-20 items-center">
          <div className="bg-gray-100 min-h-[550px] flex flex-col items-center justify-center p-6">
            <h1 className="text-5xl font-bold text-indigo-700">
              Qaree: Uniting Readers and Writers
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mt-16">
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="bg-xf rounded-lg"
              >
                <FeatureCard title="Build Your Library">
                  Easily collect and access your favorite books
                </FeatureCard>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="1000"
                className="bg-xf rounded-lg"
              >
                <FeatureCard title="Communication">
                  Connect with authors and fellow readers
                </FeatureCard>
              </div>
              <div
                data-aos-delay="1500"
                data-aos="fade-up"
                className="bg-xf rounded-lg"
              >
                <FeatureCard title="Categorization">
                  Find books effortlessly with diverse categories
                </FeatureCard>
              </div>
              <div
                data-aos-delay="2000"
                data-aos="fade-up"
                className="bg-xf rounded-lg"
              >
                <FeatureCard title="Reading View">
                  Enjoy a smooth reading experience with full control
                </FeatureCard>
              </div>
            </div>
          </div>
          <div className="mr-36">
            {displayedComponents.map((component, index) => (
              <div
                key={index}
                className={`text-center ${animated && "animate-slide-in"} ${
                  index !== displayedComponents.length - 1 && "hidden"
                }`}
              >
                <img
                  src={component.image}
                  className="w-64 h-[400px]  mx-auto rounded-lg shadow-lg mb-4"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <Objectives />;
}

export default Features;
