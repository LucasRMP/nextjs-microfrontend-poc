import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div
      style={{
        background: "black",
        width: "100%",
        height: "100px",
        color: "white",
        textAlign: "center",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        fontSize: "24px",
        paddingLeft: "15px",
      }}
    >
      Hello Zan
    </div>
  );
};

export default Header;
