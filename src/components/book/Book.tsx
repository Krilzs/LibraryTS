import React from "react";
import styles from "./Book.module.css";
//import { useState } from "react";

interface bookProps {
  addBookToML?: (newId: string) => void;
  removeMyList?: (id: string) => void;
  title: string;
  cover: string;
  synopsis: string;
  id: string;
}

const Book: React.FC<bookProps> = ({
  title,
  cover,
  synopsis,
  id,
  addBookToML,
  removeMyList,
}) => {
  //Funcion para mostrar la
  /*const [showInfo, setShowInfo] = useState(false);

  const handleMoreInfo = () => {
    setShowInfo(!showInfo);
  };*/

  const handleAB = () => {
    if (addBookToML) {
      addBookToML(id);
    }
  };

  const handleRB = () => {
    if (removeMyList) {
      removeMyList(id);
    }
  };

  const Rbutton = () => {
    return (
      <button className={styles.Rbutton} onClick={handleRB}>
        Remove
      </button>
    );
  };

  const Abutton = () => {
    return (
      <button className={styles.Abutton} onClick={handleAB}>
        Add
      </button>
    );
  };

  return (
    <>
      <div className={styles.book} id={id}>
        <p>{title}</p>
        <img className={styles.cover} src={cover} alt="Cover" />
        <p className={styles.moreInfo}>{synopsis}</p>
        {addBookToML ? Abutton() : Rbutton()}
      </div>
    </>
  );
};

export default Book;
