import React from "react";
import { Todo } from "../model";

interface Props {
    todoList: Todo[]
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
    todo: string
    key: number
}


export default function SingleTodo(props: Props) {
    return (
        <div></div>
    )
}