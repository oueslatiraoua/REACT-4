import React from "react";
import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import profilphoto from "./profil.jpg";
const ProfilePhoto = () => {
  return (
    <Figure className="Fg">
      <Figure.Image width={171} height={180} alt="171x180" src={profilphoto} />
    </Figure>
  );
};

export default ProfilePhoto;
