import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Feedback = () => {
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    fetch("feedback.json")
      .then((res) => res.json())
      .then((data) => {
        setFeedback(data);
      });
  }, []);

  console.log(feedback);
  return (
    <div>
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold my-10">Feedback</h2>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {feedback.map((feed) => (
          <SwiperSlide key={feed.id}>
            <div className="p-4 text-center ">
              <h3 className="text-xl font-bold text-gray-700 m2-4">
                {feed.name}
              </h3>
              <p className="mb-4">{feed.date}</p>
              <p className="text-lg text-gray-700">
                {feed.feedback.slice(0, 90)}...
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
