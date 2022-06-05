import { Card, Button } from "antd";
import { motion } from "framer-motion";
import React from "react";

const Apps = () => {
  const apps = [
    {
      title: "To-Do Web (HTMl, CSS and JavaScript)",
      link: "https://krishdhana.github.io/to-do-web",
    },
    {
      title: "Gradient Generator (HTMl, CSS and JavaScript)",
      link: "https://krishdhana.github.io/gradient-generator/",
    },
    {
      title: "Find Your IP Address",
      link: "https://find-ip-roan.vercel.app/",
    },
  ];

  return (
    <React.Fragment>
      <div className="pt-5 text-orange fs-3">Apps developed while learning</div>
      <div className="row">
        {apps.map((data) => {
          return (
            <div className="col-auto  pt-5">
              <a href={data.link} target="_blank">
                <motion.div
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="card">{data.title}</Card>
                </motion.div>
              </a>
            </div>
          );
        })}
        {/* <div className="col-3 pt-5">
          <Card className="card" style={{ width: 300 }}>
            <a
              href="https://krishdhana.github.io/to-do-web"
              target="_blank"
            ></a>
          </Card>
        </div> */}
      </div>
    </React.Fragment>
    // <div className="row vh-100">
    //   <div className="col-6 pt-5">
    //     <Card className="card" style={{ width: 300 }}>
    //       <a href="https://krishdhana.github.io/to-do-web" target="_blank">
    //         To-Do Web (HTMl, CSS and JavaScript)
    //       </a>
    //     </Card>
    //   </div>
    // </div>
  );
};

export default Apps;
