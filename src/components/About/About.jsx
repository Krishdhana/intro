import Animation from "../../shared/Animation/Animation";

import { Button } from "antd";

const About = () => {
  const links = [
    {
      name: "Github",
      link: "https://github.com/Krishdhana",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/dhanakrish0",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/krish_cad420/?hl=en",
    },
  ];

  return (
    <Animation>
      <div className="text-mine fs-2 pt-5">About Me</div>
      <div className="row h-75">
        <div className="col-6 my-auto">
          <div>
            <p>
              As a <span className="text-orange" >self-taught Developer</span>, currently working as a Frontend
              developer at Habile Technologies, in Chennai.
            </p>
            <p>
              As I am currently learning <span className="text-orange" >Springboot</span>, which is backend as I am always wanted to become a <span className="text-orange" >Fullstack developer</span> in near future.
            </p>
          </div>
          <div>
            <p className="mt-5 text-orange">Connect with me on</p>
            <div className="row">
              {links.map((data) => {
                return (
                  <div className="col-2">
                    <a href={data.link} target="_blank">
                      {data.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* <div className="offset-1 col-5 my-auto">ww</div> */}
      </div>
    </Animation>
  );
};

export default About;
