import { FaTimes } from "react-icons/fa";

const Task = ({ task }) => {
  return (
    <>
      <div className="task">
        <h3 key={task.id}>
          {task.text} <FaTimes />
        </h3>
        <p key={task.id}>{task.day}</p>
      </div>
    </>
  );
};

export default Task;
