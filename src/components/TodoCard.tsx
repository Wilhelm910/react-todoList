import React from "react"
import "./styles.css"
import { Todo } from "../model"
import SingleTodo from "./Todo"

interface Props {
    todoList: Todo[]
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}



export default function TodoCard(props: Props) {
    const drawTodos = props.todoList.map((item) => {
        return (
            <SingleTodo
                key={item.id}
                todo={item}
                todoList={props.todoList}
                setTodoList={props.setTodoList}
            />
        )
    })
    return (
        <div className="todo--container">
            {drawTodos}
        </div>
    )
}