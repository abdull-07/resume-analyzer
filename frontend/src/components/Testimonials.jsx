import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "This resume builder helped me land my dream job!",
  },
  {
    name: "David Lee",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "AI-based suggestions improved my resume significantly!",
  },
  {
    name: "Aisha Khan",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "The cover letter feature saved me so much time!",
  },
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "The AI-powered resume optimization is top-notch!",
  },
  {
    name: "Emily Smith",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "I love the job-specific resume suggestions!",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="testimonial-swiper"
      >
        <div className="p-5"></div>
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="p-4 bg-white rounded-lg text-center">
            <img
              src={testimonial.image}
              alt={`Photo of ${testimonial.name}`}
              className="w-16 h-16 rounded-full mx-auto border-2 border-blue-500"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150"; }}
            />
            <p className="text-lg italic mt-3">"{testimonial.text}"</p>
            <h3 className="font-bold mt-2">{testimonial.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
