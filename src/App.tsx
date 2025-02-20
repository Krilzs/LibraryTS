import Library, { BookType } from "./components/library/library";
import styles from "./App.module.css";
import Header from "./components/header/Header";
import ReadList from "./components/readlist/ReadList";
import Filter from "./components/filter/Filter";
import { useState } from "react";
function App() {
  const [myList, setMyList] = useState<string[]>([]);
  const [libros, setLibros] = useState<BookType[]>([]);
  const [filter, setFilter] = useState({
    pages: Number(1000),
    genre: String(""),
  });

  const handleFilter = (newpages: number, newgenre: string) => {
    setFilter({ pages: newpages, genre: newgenre });
  };

  const handleMyList = (newId: string) => {
    setMyList([...myList, newId]);
  };
  const removeMyList = (id: string) => {
    setMyList(myList.filter((item) => item !== id));
  };

  const handleLibros = (newlibros: BookType[]) => {
    setLibros(newlibros);
  };

  return (
    <main className={styles.app}>
      <Header />
      <article className={styles.libraryContainer}>
        <Filter changeFilter={handleFilter} />
        <Library
          addBookToML={handleMyList}
          filters={filter}
          handleLibros={handleLibros}
        />
        <ReadList myList={myList} libros={libros} removeMyList={removeMyList} />
      </article>
    </main>
  );
}

export default App;
