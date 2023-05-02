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
              As a self-taught Developer, currently working as a Angular
              developer in TVM Infotech Pvt Ltd, located in Chennai.
            </p>
            <p>
              Currently learning Flutter, which is powered by Dart language is
              used to built beautiful mobile applications
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
