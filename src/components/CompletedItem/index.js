import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import {MdDelete} from 'react-icons/md'
import {GrCompliance} from 'react-icons/gr'
import './index.css'

const CompletedItem = (props) => {
    const {todo,deleteTask,onCompleteTask} = props
    console.log(typeof(onCompleteTask))
    const {task,id} = todo
return(
    <Card>
    <Card.Body>
     <p>{task}</p>
      <MdDelete onClick={() => (deleteTask(id))}/>
      <GrCompliance onClick={() => (onCompleteTask(id))}/>
    </Card.Body>
  </Card>
)
}

export default CompletedItem