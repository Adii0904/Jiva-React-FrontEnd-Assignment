import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
      text: "Your Health, Our Priority",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1681966907271-1e350ec3bb95?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1193",
      text: "Expert Doctors You Can Trust",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1681966907271-1e350ec3bb95?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1193",
      text: "Expert Doctors You Can Trust",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      className="h-[70vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative w-full h-[70vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay for dark effect */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Centered text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-3xl md:text-5xl font-bold bg-black/40 px-6 py-3 rounded-lg">
                {slide.text}
              </h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
