import { IoMdRemoveCircle } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoSlice";
import { useState } from "react";

interface TodoProps {
  todoProps: TodoType;
}

//gösterilecek todo lar
const Todo = ({ todoProps }: TodoProps) => {
  const { id, content } = todoProps;

  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo,
    };
    dispatch(updateTodo(payload));
    setEditable(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        borderRadius: "8px",
        marginTop: "25px",
        border: "1px solid lightgray",
      }}
    >
      {editable ? (
        <input
          type="text"
          style={{
            width: "400px",
            border: "none",
            borderBottom: "1px solid lightgray",
            outline: "none",
          }}
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div>{content}</div>
      )}
      <div>
        {/* span ile sarmaladık yoksa classname açmıyo*/}
        <span
          className="icons"
          style={{ marginRight: "5px" }}
          onClick={handleRemoveTodo}
        >
          <IoMdRemoveCircle />
        </span>

        {
          editable ? (
            <span className="icons" onClick={handleUpdateTodo}>
              <FaCheckCircle />
            </span> 
          ) : (
            <span className="icons" onClick={() => setEditable(true)}>
              <CiEdit />
            </span>
          ) 
        }
      </div>
    </div>
  );
};

export default Todo;
