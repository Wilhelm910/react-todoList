import React from "react"
import "./styles.css"
import { Todo } from "../model"
import SingleTodo from "./Todo"

interface Props {
    todoList: Todo[]
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}



export default function TodoCard(props: Props) {
    console.log(props)
    const drawTodos = props.todoList.map((item) => {
        console.log(item)
        return (
            <div>
                <SingleTodo
                    key={item.id}
                    todo={item.todo}
                    todoList={props.todoList}
                    setTodoList={props.setTodoList}
                />
            </div>
        )
    })
    return (
        <div className="todo--container">
            {drawTodos}
        </div>
    )
}