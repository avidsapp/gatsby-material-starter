import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Home",
      leftIcon: <FontIcon forceSize>home</FontIcon>,
      component: Link,
      to: "/"
    },
  ];

  NavList.push({
    primaryText: "About",
    leftIcon: <FontIcon forceSize>person</FontIcon>,
    component: Link,
    to: "/about/"
  });

  NavList.push({
    primaryText: "Blog",
    leftIcon: <FontIcon forceSize>book</FontIcon>,
    component: Link,
    to: "/blog/"
  });

  NavList.push({ divider: true });

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }
  return NavList;
}
export default GetNavList;
