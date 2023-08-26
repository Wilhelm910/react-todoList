import React, { useState, useRef, useEffect } from "react";
import { Todo } from "../model";
import "./styles.css"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"

interface Props {
    todoList: Todo[]
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
    todo: Todo
    key: number
}


export default function SingleTodo(props: Props) {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(props.todo.todo)





    function handleDone(id: number) {
        props.setTodoList(prevState => {
            return prevState.map((item) => {
                return item.id === id ? { ...item, isDone: !item.isDone } : item
            })
        })
    }


    function handleDelete(id: number) {
        props.setTodoList(prevState => {
            return prevState.filter((item) => {
                return item.id !== id
            })
        })
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.blur()
        inputRef.current?.focus()
    }, [edit])

    function handleEdit(e: React.FormEvent, id: number) {
        e.preventDefault()
        props.setTodoList(prevState => {
            return prevState.map((item) => {
                return item.id === id ? { ...item, todo: editTodo } : item
            })
        })
        setEdit(false)
    }


    return (

        <form className="todo--todo" onSubmit={(e) => {
            handleEdit(e, props.todo.id);
            //  inputRef.current?.blur()
        }}>

            {edit ? (
                <input
                    className="edit--input"
                    type="text"
                    value={editTodo}
                    onChange={(e) => { setEditTodo(e.target.value) }}
                />
            ) :
                (
                    props.todo.isDone ? (
                        <s> {props.todo.todo}</s>
                    ) : (
                        <span>{props.todo.todo}</span>
                    )
                )
            }
            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !props.todo.isDone) {
                        setEdit(!edit)
                    } else {
                        setEdit(!edit)
                    }
                }}>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(props.todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(props.todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form >

    )
}