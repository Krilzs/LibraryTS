import React from "react";
import styles from "./Filter.module.css";

interface FilterProps {
  changeFilter: (newpages: number, genre: string) => void;
}

const Filter: React.FC<FilterProps> = ({ changeFilter }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.pages.value, e.target.genre.value);
    changeFilter(e.target.pages.value, e.target.genre.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="pages">
          <p>Max. Pages</p>
        </label>
        <input type="range" min="0" max="1200" name="pages" />
        <label htmlFor="genre">
          <p>Genre</p>
        </label>
        <select name="genre">
          <option value="Ciencia ficción">C. Ficcion</option>
          <option value="Zombies">Zombies</option>
          <option value="Fantasía">Fantasia</option>
          <option value="Terror">Terror</option>
        </select>
        <button type="submit">Filter</button>
      </form>
    </>
  );
};

export default Filter;
