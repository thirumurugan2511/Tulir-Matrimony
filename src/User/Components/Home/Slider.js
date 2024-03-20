import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
   <>
   <div className='w-3/4 m-auto'>
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
            <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
              <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p className="text-center">{d.review}</p>
              <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
    
   </>
  )
}

const data = [
        {
          name: `John Morgan`,
          img: `https://e0.pxfuel.com/wallpapers/250/932/desktop-wallpaper-anu-shiv-tamil-model-flash-graphy.jpg`,
          review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
          name: `Ellie Anderson`,
          img: `https://c1.wallpaperflare.com/preview/834/844/966/smile-happy-bangle-blue.jpg`,
          review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
          name: `Nia Adebayo`,
          img: `https://e1.pxfuel.com/desktop-wallpaper/317/420/desktop-wallpaper-pin-on-beautiful-brides-couples-wedding-ideas-tamil-girls.jpg`,
          review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
          name: `Rigo Louie`,
          img: `https://artriva.com/images/portfolio/matrimonial/matrimonial_3.jpg`,
          review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        {
          name: `Mia Williams`,
          img: `https://qph.cf2.quoracdn.net/main-thumb-605613498-200-pdrwnvywgyjnpklhlnohthrdvdkhxird.jpeg`,
          review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        },
        
      ];

export default Slider