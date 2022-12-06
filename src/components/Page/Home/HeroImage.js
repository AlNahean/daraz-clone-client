import React, { useState, useEffect } from "react";
import { heroImages } from "../../ul-data";

const HeroImage = () => {
  const [heroImageName, setHeroImageName] = useState(heroImages[0].src);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const checkImage = (number) => {
    if (number > heroImages.length - 1) {
      return 0;
    }
    if (number < 0) {
      return heroImages.length - 1;
    }
    return number;
  };
  const nextImage = () => {
    setHeroImageIndex((index) => {
      let newIndex = index + 1;

      return checkImage(newIndex);
    });
  };

  const changeHeroImage = (e) => {
    setHeroImageIndex(e);
  };
  useEffect(() => {
    setHeroImageName(heroImages[heroImageIndex].src);
  }, [heroImageIndex]);

  useEffect(() => {
    let ImageNext = setInterval(() => {
      // alert("changing");
      nextImage();
    }, 5000);

    return () => clearInterval(ImageNext);
  }, []);
  return (
    <div className="hero-image-container">
      <div className="hero-image-container-2 full-size no-scrollbar">
        <img className="hero-image" src={heroImageName} alt="sdsd" />
      </div>
      <div className="circle-change-container">
        {heroImages.map((item) => {
          const chk = item.id === heroImageIndex;
          return (
            <div key={item.id}>
              <div
                className="hero-circle"
                onMouseOver={() => {
                  changeHeroImage(item.id);
                }}
                style={{
                  backgroundColor: `${chk ? "#ff7402a9" : "white"}`,
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroImage;
