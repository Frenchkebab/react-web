import { useState } from 'react';

const App = () => {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  console.log(toDo);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }

    /* This does not work */
    // setToDos((current) => {
    //   current.push(toDo);
    // });

    setToDo('');
    setToDos((currentArray) => [toDo, ...currentArray]); // state always has to be new!
  };
  console.log(toDos);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={toDo} placeholder="Write your to do..." onChange={onChange} />
        <button>Add To Do</button>
      </form>
    </div>
  );
};

export default App;
