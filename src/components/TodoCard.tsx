import React from "react"
import "./styles.css"
import { Todo } from "../model"

interface Props {
    todoList: Todo[]
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}



export default function TodoCard(props: Props) {
    const drawTodos = props.todoList.map((item) => {
        return (
            <div>{item.todo}</div>
        )
    })
    return (
        <div className="todo--container">
            {drawTodos}
        </div>
    )
}