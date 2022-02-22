import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import Message from "./components/Message";
import Addtask from "./components/Addtask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting At School",
      day: "Feb 6th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    console.log(task);
    // set the new task
    const newTask = { id, ...task };

    // set tasks to the previous tasks ...tasks and concate the new one newTask
    setTasks([...tasks, newTask]);
  };

  // // toggle add btn
  // const toggleAddBtn = () => {
  //   // setShowAddTask(!showAddTask);
  //   console.log("log");
  // };

  return (
    <div className="container">
      <Header
        addBtnHandler={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {/* && is shorthand of terrnary operator without else */}
      {showAddTask && <Addtask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          toggleReminder={toggleReminder}
        />
      ) : (
        <Message type="warning" text="No task to show" />
      )}
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from class</h1>;
//   }
// }

export default App;
