
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import banner1 from '../../../assets/banner/kids-football.jpg'
import banner2 from '../../../assets/banner/kids-basketball.jpg'
import banner3 from '../../../assets/banner/kids-cricket.jpg'
import banner4 from '../../../assets/banner/kids-swim.jpg'
import banner5 from '../../../assets/banner/kids-volleyball.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const Banner = () => {

  return (
    <div className='w-5/6 mx-auto hover:shadow-xl shadow-lg transition-all mb-10'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="hero w-full h-[500px]" style={{ backgroundImage: `url(${banner1})` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content w-5/6 mx-auto flex-col text-white">
              <p className="text-5xl uppercase font-semibold mb-5">football for kids</p>
              <p className="text-white text-justify text-xl">Playing football offers numerous benefits for children, including physical fitness, teamwork and cooperation, and improved social interaction. It promotes discipline, focus, and goal setting, boosting confidence and perseverance. Additionally, football enhances problem-solving skills, instills healthy habits, and provides opportunities for cultural exchange, all while offering fun and enjoyment for children.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero w-full h-[500px]" style={{ backgroundImage: `url(${banner2})` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content w-5/6 mx-auto flex-col text-white">
              <p className="text-5xl uppercase font-semibold mb-5">basketball for kids</p>
              <p className="text-white text-justify text-xl">Playing basketball offers numerous benefits for children. It promotes physical fitness through running, jumping, and quick movements, improving cardiovascular health and overall athleticism. Additionally, basketball is a team sport that fosters teamwork, communication, and collaboration, as players work together towards a common goal. Moreover, the sport enhances motor skills and hand-eye coordination through activities such as dribbling, shooting, and passing. These combined benefits make basketball an excellent choice for children, providing opportunities for physical activity, social interaction, and skill development.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero w-full h-[500px]" style={{ backgroundImage: `url(${banner3})` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content w-5/6 mx-auto flex-col text-white">
              <p className="text-5xl uppercase font-semibold mb-5">cricket for kids</p>
              <p className="text-white text-justify text-xl">Playing cricket provides several positive benefits for children. It promotes physical fitness, hand-eye coordination, and strategic thinking. Additionally, cricket encourages teamwork, discipline, and sportsmanship, fostering character development and social skills. Overall, cricket offers an engaging and rewarding experience for children, combining physical activity with mental acuity and interpersonal growth.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero w-full h-[500px]" style={{ backgroundImage: `url(${banner4})` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content w-5/6 mx-auto flex-col text-white">
              <p className="text-5xl uppercase font-semibold mb-5">swim for kids</p>
              <p className="text-white text-justify text-xl">Swimming offers numerous benefits for children. It is a great form of exercise that promotes cardiovascular health, muscular strength, and overall physical fitness. Additionally, swimming enhances coordination, balance, and flexibility, while also providing a fun and refreshing way for children to stay active. Moreover, swimming is a vital life skill that promotes water safety and confidence in the water, making it an invaluable activity for kids.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero w-full h-[500px]" style={{ backgroundImage: `url(${banner5})` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content w-5/6 mx-auto flex-col text-white">
              <p className="text-5xl uppercase font-semibold mb-5">volleyball for kids</p>
              <p className="text-white text-justify text-xl">Playing volleyball offers several positive benefits for children. It improves physical fitness by enhancing cardiovascular endurance, agility, and coordination. Additionally, volleyball promotes teamwork, communication, and cooperation as players work together to achieve a common goal. Moreover, the sport develops motor skills, reflexes, and spatial awareness, making it a fun and engaging activity for children that combines physical activity with strategic thinking.</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner