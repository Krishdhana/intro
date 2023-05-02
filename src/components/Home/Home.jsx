import React, { useState } from "react";
import {motion} from 'framer-motion';

import styles from "./Home.module.scss";
import Animation from "../../shared/Animation/Animation";
import KrishImg from "../../own-pics/home-1.webp";


const Home = () => {
  const getGreeting = () => {
    let time = new Date().getHours();
    if (time < 12) return "Good Morning !";
    else if (time >= 12 && time < 17) return "Good Afternoon !!";
    else if (time >= 17 && time < 21) return "Good Evening :)";
    else return "Hope you have a nice Day:), Good Night";
  };

  let [activeImg, setActiveImg] = useState(0);

  // useEffect(() => {
  //   // debugger;
  //   setInterval(() => {
  //     console.log(activeImg == imageArray.length - 1);
  //     // activeImg === imageArray.length - 1
  //     //   ? setActiveImg(0)
  //     //   : setActiveImg(activeImg++);
  //     // console.log(activeImg);
  //     if (activeImg ==  ) setActiveImg(0);
  //     else setActiveImg(activeImg + 1);
  //   }, 2000);
  // }, []);

  return (
    <Animation>
      <div className="row vh-100 text-center overflow-hidden">
        <motion.div initial={{ y : '100vh'}} animate={{y : 0}} transition={{type : 'spring'}} className="col-6 my-auto">
          <div className="mb-5">{getGreeting()}</div>
          <div className={`${styles.name}`}>
            Hi<span>,</span> This <span>is</span> Kri<span>shna</span> Dh
            <span>ana</span>
          </div>
          <div className={`${styles["info-text"]} fs-5 mt-3`}>
            Currently as Angular Dev, I am seeking to Secure a responsible
            career opportunity to fully utilize my training and skills, while
            making a significant contribution to the success of the company.
          </div>
        </motion.div>
        <motion.div initial={{ y : '-100vh'}} animate={{y : 0}} transition={{type : 'spring', delay: 1}} className="col-6 my-auto">
          <img
            src={KrishImg}
            className={`${styles["img-path"]}`}
            alt="Image of Krishna Dhana"
          />
        </motion.div>
      </div>
    </Animation>
  );
};

export default Home;
