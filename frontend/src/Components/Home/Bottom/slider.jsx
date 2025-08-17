import React from "react";
import { Carousel } from "antd";
import img1 from "../Bottom/TajMahal.jpg";
import img2 from "../Bottom/Goa.jpg";
import img3 from "../Bottom/JammuandKashmir.jpg";
import img4 from "../Bottom/Sunderbans.jpg";
import img5 from "../Bottom/Dharamshala.jpg";
import { Slidercontent } from "./slidercontent";
import "./slider.css";
export default function SimpleSlider() {
  const contentStyle = {
    margin: 0,
    height: "450px",
    color: "black",
    lineHeight: "160px",
    textAlign: "center",
    background: "white",
    textAlign: "center",
  };
  const sliderdata = [
    {
      image: img1,
      heading: "Taj Mahal",
      imagecontent:
        "The Taj Mahal is considered the finest example of Mughal architecture, a style that combines elements from Persian, Indian, and Islamic architectural styles. In 1983, the Taj Mahal became a UNESCO World Heritage Site and was cited as the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.The Taj! An awe-inspiring poetry in marble stands high and serene by the banks of the River Yamuna is an inspiring result of the application of architectural and scientific research.",
    },
    {
      image: img2,
      heading: "Goa",
      imagecontent:
        "When in Goa, do as the Goans do; leave your watch at home. For honestly speaking, time is not of too much importance in this small state of India. Goa, an emerald land, is a ‘state’ of mind. A mind that is completely relaxed, content and jubilant. Located on the West Coast of India in the Konkan Region, Goa is a major tourist attraction for domestic and foreign tourists alike. Panaji, a picturesque city by the river Mandovi is the capital of Goa.  With endless stretches of white sand, palm fringed beaches, brightly painted houses and Portugese heritage, Goa is breathtaking. Water sports, river cruises, ayurvedic massage centres, live music, restaurants, mouth watering sea food, Goa has it all.",
    },
    {
      image: img3,
      heading: "Jammu And Kashmir",
      imagecontent:
        "Jammu & Kashmir is a newly created Union Territory in India consisting of two divisions: Jammu Division & Kashmir Division, both of which are administered by the Central Government of India. It is located to the north of Himachal Pradesh & Punjab and to the west of Ladakh. Jammu is known as the City of Temples & offers plentiful sightseeing opportunities with its gardens, palaces, forts & religious attractions, the most famous of which is Mata Vaishno Devi in Katra. Kashmir Valley is famous for its meadows, lakes, high altitude passes, hill stations, Mughal Gardens, Dal Lake, Shikara Ride & ancient religious sites.",
    },
    {
      image: img4,
      heading: "Sunderbans",
      imagecontent:
        "The Sundarbans mangrove forest, one of the largest such forests in the world (140,000 ha), lies on the delta of the Ganges, Brahmaputra and Meghna rivers on the Bay of Bengal. It is adjacent to the border of India’s Sundarbans World Heritage site inscribed in 1987. The site is intersected by a complex network of tidal waterways, mudflats and small islands of salt-tolerant mangrove forests, and presents an excellent example of ongoing ecological processes. The area is known for its wide range of fauna, including 260 bird species, the Bengal tiger and other threatened species such as the estuarine crocodile and the Indian python.",
    },
    {
      image: img5,
      heading: "Dharamshala",
      imagecontent:
        "Dharamshala is a headquarter of the northern Indian state of Himachal Pradesh in Kangra district. It is located in the shadow of Dhauladhar mountain Ranges, at a height of 1,457 meters above from the sea level, covering an area of almost 8.51 km (3.29 sq mi).Dharamshala also has lush tea gardens which produce its popular Kangra tea. Traditionally known for Kangra green tea, Dharamshala Tea Company conducts guided tours of the tea gardens and tea factory",
    },
  ];
  return (
    <>
      <div className="slider-parent">
        <Carousel infinite={true} autoplay>
          {sliderdata.map((data) => {
            return (
              <div>
                {/* <h3 style={contentStyle}>1</h3> */}
                <Slidercontent
                  image={data.image}
                  heading={data.heading}
                  imagecontent={data.imagecontent}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
