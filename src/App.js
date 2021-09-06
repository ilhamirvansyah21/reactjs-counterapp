import { useState } from "react";
// import classnames from "classnames";

import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import SearchInput from "./components/SearchInput";
import Info from "./components/Info";
import Todos from "./components/Todos";
import Empty from "./components/Empty";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "Mie Sedap", count: 1 },
    { title: "Mie Rebus", count: 1 },
    { title: "Telur", count: 1 },
  ]);

  const handleAdditionCount = (index) => {
    // [...todos] => Spread Operator dari Array Todos
    const newTodos = [...todos];

    newTodos[index].count = newTodos[index].count + 1;

    setTodos(newTodos);
  };

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos];

    if (newTodos[index].count > 0) {
      // Selama jumlah count masih diatas 0
      // Bisa lakuin pengurangan
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      // Kalo udah 0 dan masih di kurangi juga
      // Hapus array value dengan index yang sesuai
      newTodos.splice(index, 1);
    }

    setTodos(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No Blank List!");
      return;
    }

    const addedTodos = [
      ...todos,
      {
        title: value,
        count: 1,
      },
    ];

    setTodos(addedTodos);
    setValue("");
  };

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count;
    }, 0);

    return totalCounts;
  };

  return (
    <>
      <Navbar />

      <Container>
        <SearchInput
          onSubmit={handleSubmit}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />

        <Info
          todosLength={todos.length}
          totalCounts={getTotalCounts()}
          onDelete={() => setTodos([])}
        />

        {todos.length > 0 ? (
          <Todos
            todos={todos}
            onSubstraction={(index) => handleSubstractionCount(index)}
            onAddition={(index) => handleAdditionCount(index)}
          />
        ) : (
          <Empty />
        )}
      </Container>
    </>
  );
}

export default App;
