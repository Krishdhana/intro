import styles from "./Skills.module.scss";

import Animation from "../../shared/Animation/Animation";

const Skills = () => {
  return (
    <Animation>
      <div className={`fw-bold title fs-2 pt-5 ${styles.title}`}>Skills</div>
      <div className="ms-5 pt-5 text-orange"> Front-End Frameworks </div>
      <div className="row pt-5 text-center">
        <div className="col-3">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
              width={100}
              height={100}
            ></img>
            <p className="mt-2">Angular</p>
          </div>
        </div>
        <div className="col-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            width={120}
            height={100}
          ></img>
          <p className="mt-2">React JS</p>
        </div>
      </div>
      <div className="ms-5 pt-5 text-orange">
        CSS Preprocessors and Frameworks
      </div>
      <div className="row pt-5 text-center">
        <div className="col-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png"
            width={120}
            height={100}
          ></img>
          <p className="mt-2">SCSS</p>
        </div>
        <div className="col-3">
          <img
            src="https://laroybafi.my.id/techstack/bootstrap.png"
            width={100}
            height={100}
          ></img>
          <p className="mt-2">Bootstrap</p>
        </div>
      </div>
      <div className="ms-5 pt-5 text-orange"> Android Development </div>
      <div className="row pt-5 text-center">
        <div className="col-3">
          <img
            src="https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png"
            width={100}
            height={100}
          ></img>
          <p className="mt-2">Flutter</p>
        </div>
      </div>
      <div className="ms-5 pt-5 text-orange"> Back-End Frameworks</div>
      <div className="row pt-5 text-center">
        <div className="col-3">Developing Skills :)</div>
        {/* <div className="col-3">Angular</div>
          <div className="col-3">Angular</div>
          <div className="col-3">Angular</div> */}
      </div>
    </Animation>
  );
};

export default Skills;
