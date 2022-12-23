import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import {MdDelete} from 'react-icons/md'
import {GrCompliance} from 'react-icons/gr'
import './index.css'

const TodoItem = (props) => {
    const {todo,deleteTask,onCompleteTask,deleteCompletedTask} = props
    const {task,id,isCompleted} = todo
    const bg = isCompleted && 'completed-bg'
    const deleteButton = isCompleted ? (<button onClick={()=>(deleteCompletedTask(id))}>
      <MdDelete className='delete-icon' />
      </button>):(<button onClick={()=>(deleteTask(id))}>
      <MdDelete className='delete-icon' />
      </button>)
    
    
return(
    <Card className={bg}>
    <Card.Body>
     <p>{task}</p>
     <button onClick={()=>(deleteTask(id))}>
      <MdDelete className='delete-icon' />
      </button>
     {isCompleted ? null : (  <button>
     <GrCompliance className='tick-icon' onClick={() => (onCompleteTask(id))}/>
     </button>
      ) }
   
    </Card.Body>
  </Card>
)
}

export default TodoItem