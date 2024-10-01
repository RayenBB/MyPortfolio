import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({item}) => {
  return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <a 
  href={item.id === 1 ? "#testimontials" : item.id === 2 ? "#simac" : item.id === 3 ? "#bug" : "#"}
  className="project__button"
>
  Demo <HiOutlineArrowSmRight className="project__button-icon" />
</a>
        </div>
    );
}

export default ProjectItems;