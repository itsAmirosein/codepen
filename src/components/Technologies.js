import React from "react";
import * as sc from "./styles/technology";
import { TECHNOLOGY_DATA } from "./data/TechnologyData";
import { useState } from "react";

export default function Technologies() {
  const [description, setDescription] = useState(
    TECHNOLOGY_DATA[0].description
  );

  const handleShowDescription = (desc) => {
    setDescription(desc);
  };

  return (
    <>
      <sc.TechnoHeader>تکنولوژی ها</sc.TechnoHeader>
      <sc.TechnoWrapper>
        {TECHNOLOGY_DATA.map((technology) => {
          return (
            <sc.TechnoItem
              key={technology.id}
              onClick={() => handleShowDescription(technology.description)}
            >
              {!technology.inUse && (
                <sc.TechnoBackdrop>به زودی</sc.TechnoBackdrop>
              )}
              <img src={technology.img_link} alt={technology.name} />
            </sc.TechnoItem>
          );
        })}
      </sc.TechnoWrapper>
      {description && <sc.TechnoBody>{description}</sc.TechnoBody>}
    </>
  );
}
