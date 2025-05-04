import { useEffect, useState } from "react"

//stars will have id,size,x,y,opacity , animationduration
export const Starbackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  const generatemeteors = () => {
    const numberofMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberofMeteors; i++) {
      newMeteors.push({  // ✅ fixed incorrect variable name `newStars.push`
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);  // ✅ correctly sets `meteors`
  };

  const generatestars = () => {
    const numberofStars = Math.floor((window.innerWidth * window.innerHeight) / 1000);
    const newStars = [];

    for (let i = 0; i < numberofStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  useEffect(() => {
    generatemeteors();
    generatestars();
    const handleResize = () =>{
        generatestars();
        generatemeteors();
    };
    window.addEventListener('resize',handleResize);
    return ()=> window.removeEventListener("resize",handleResize)
  }, []);

  

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            position: "absolute",
          }}
        />
      ))}
      {meteors.map((meteor) => (  // ✅ was mistakenly using `stars.map` here
        <div
          key={`meteor-${meteor.id}`}
          className="meteor animate-meteor"
          style={{
            width: meteor.size*50 + "px",
            height: meteor.size*2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            position: "absolute",
          }}
        />
      ))}
    </div>
  );
};
