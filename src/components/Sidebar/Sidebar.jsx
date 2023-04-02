import React from "react";
import styles from "./Sidebar.module.scss";

import Icon, {
  UserOutlined,
  ApiFilled,
  CopyFilled,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { act } from "@testing-library/react";

const Sidebar = () => {
  const menuItems = [
    {
      key: "menu1",
      title: "Info",
      icon: UserOutlined,
      path: "/",
    },
    {
      key: "menu2",
      title: "Skills",
      icon: ApiFilled,
      path: "/skills",
    },
    {
      key: "menu3",
      title: "Apps",
      icon: AppstoreOutlined,
      path: "/apps",
    },
    {
      key: "menu4",
      title: "About",
      icon: CopyFilled,
      path: "about",
    },
  ];

  return (
    <React.Fragment>
      <ul className={styles.ul}>
        {menuItems.map((item) => {
          return (
            <li>
              <NavLink
                className={(data) => {
                  return data.isActive ? `${styles.active}` : "";
                }}
                key={item.key}
                to={item.path}
              >
                <Tooltip title={item.title} placement="right">
                  <Icon component={item.icon} className={styles.icons} />
                </Tooltip>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Sidebar;
