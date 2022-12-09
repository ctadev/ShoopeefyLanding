import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <main className={s.carousel}>
      <section
        className={s.image_container}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className={s.images}>
          <img
            className={s.image}
            src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
            className={s.image}
            src="https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
            className={s.image}
            src="https://images.unsplash.com/photo-1554342321-0776d282ceac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8S2lkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </section>
      <section className={s.controls}>
        <div className={s.icons} onClick={prevSlide}>
          <ArrowBackIcon />
        </div>
        <div className={s.icons} onClick={nextSlide}>
          <ArrowForwardIcon />
        </div>
      </section>
    </main>
  );
};

export default Slider;

const s = {
  carousel:
    "min-h-[500px] sm:h-[calc(100vh-64px)] relative lg:h-[calc(100vh-61px)] overflow-hidden",
  image_container: "absolute left-0 top-0 h-full min-w-full transition-all",
  images: "flex",
  image: "h-full min-w-full object-cover",
  controls:
    "absolute left-0 right-0 m-auto bottom-[150px] flex gap-4 w-[120px]",
  icons:
    "border-2 border-white py-1 px-3 cursor-pointer text-white hover:border-cyan-400 hover:text-cyan-400",
};
