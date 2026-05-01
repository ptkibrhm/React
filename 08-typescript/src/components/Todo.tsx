import { IoMdRemoveCircle } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById } from "../redux/todoSlice";

interface TodoProps{
  todoProps:TodoType,
}



//gösterilecek todo lar
const Todo = ({todoProps}:TodoProps) => {
  const {id ,content}=todoProps;

  const dispatch=useDispatch();

  const handleRemoveTodo=()=>{
    dispatch(removeTodoById(id))
  }

  return (
    <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:'16px',borderRadius:'8px',marginTop:'25px',border:'1px solid lightgray'}}>
        <div>{content}</div>
        <div>
            {/* span ile sarmaladık yoksa classname açmıyo*/ }
            <span className="icons" style={{marginRight:'5px'}} onClick={handleRemoveTodo}>
                 <IoMdRemoveCircle />
            </span>
            
             <span className="icons">
                 <CiEdit />
            </span>
             
            
        </div>


    </div>
  )
}

export default Todo;