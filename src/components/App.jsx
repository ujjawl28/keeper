import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [item, setItem] = useState([]);

  function addItem(str) {
    setItem([...item, str]);
  }

  function deletedItem(id) {
    setItem(
      item.filter((it, idx) => {
        return id !== idx;
      })
    );
  }
  return (
    <div>
      <Header />
      <CreateArea onChecked={addItem} />
      {item.map((it, idx) => {
        return (
          <Note
            key={idx}
            id={idx}
            title={it.title}
            content={it.content}
            del={deletedItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
