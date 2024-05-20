import React from 'react'
import banimg from'./155.png'
const Pan = () => {
  return (
    <div className="min-h-[220px] flex sm:py-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center ">
        <div data-aos="zoom-in">
          <img
            src={banimg}
            className="max-w-[440px] max-h-[400px] ml-36 max-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover h-[300px]"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 sm:pt-0">
          <h1 className="text-3xl sm:text-4xl font-serif ml-48 mb-9" data-aos="fade-up">
            Qaree
          </h1>
          <p className="text-lg mr-28 tracking-wider ">
            Qaree is a platform connecting readers and writers, facilitating
            seamless engagement and discovery. It offers diverse features for
            building personal libraries, communicating with authors, exploring
            genres, and customizing the reading experience. Whether you're a
            reader or writer, Qaree meets your literary needs, fostering a
            vibrant community of literature enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pan;