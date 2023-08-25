import React, { useRef } from "react"
import "./styles.css"

interface Props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    addTodo: (e: React.FormEvent) => void
}

export default function InputField(props: Props) {

    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form className="form" onSubmit={(e) => {
            props.addTodo(e);
            inputRef.current?.blur()
        }}>
            <input
                ref={inputRef}
                className="form--input"
                type="text"
                placeholder="Enter a task"
                value={props.todo}
                onChange={(e) => { props.setTodo(e.target.value) }}
            />
            <button className="form--btn" type="submit">Go</button>
        </form>
    )
}