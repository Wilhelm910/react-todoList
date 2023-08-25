import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoCard from './components/TodoCard';


export default function App() {

  const [todo, setTodo] = useState<string>("")
  const [todoList, setTodoList] = useState<Todo[]>([])


  function addTodo(e: React.FormEvent) {
    e.preventDefault();

    if (todo) {
      setTodoList([...todoList,
      {
        id: Date.now(),
        todo: todo,
        isDone: false
      }])
      setTodo("")
    }
  }
  /*
    const drawTodos = todoList.map((item) => {
      return (
        <div>
          <TodoCard
           
          />
        </div>
      )
    })
  */
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        addTodo={addTodo}
      />
      <TodoCard
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </div>
  )
}







/*
function types() {

  let name: string;
  let age: number;
  let strORnum: string | number;
  let isStudent: boolean;
  let hobbies: string[];
  let role: [number, string];
  let personName: unknown

  type Person = {
    name: string;
    age: number;
    optional?: string;
  }
  let person: Person

  interface city {
    location: string;
    postCode: number;
  }

  interface country extends city {
    language: string;
  }

}
*/
