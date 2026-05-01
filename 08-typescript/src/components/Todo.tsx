import { IoMdRemoveCircle } from "react-icons/io";
import { CiEdit } from "react-icons/ci";




//gösterilecek todo lar
const Todo = () => {
  return (
    <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:'16px',borderRadius:'8px',marginTop:'25px',border:'1px solid lightgray'}}>
        <div>Ben ilk todo yum</div>
        <div>
            {/* span ile sarmaladık yoksa classname açmıyo*/ }
            <span className="icons" style={{marginRight:'5px'}}>
                 <IoMdRemoveCircle/>
            </span>
            
             <span className="icons">
                 <CiEdit />
            </span>
             
            
        </div>


    </div>
  )
}

export default Todo