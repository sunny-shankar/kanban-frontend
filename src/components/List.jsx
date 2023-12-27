import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import { useEffect, useState } from "react";
import axios from "axios";
import userStore from "../store/user";

export default function List({ title, id }) {
  const [tasks, setTask] = useState([]);
  const [value, setValue] = useState("");
  const { userToken, toggleLoading } = userStore();
  const { VITE_BASE_URL } = import.meta.env;

  const getTask = async () => {
    const response = await axios.get(
      VITE_BASE_URL + `/api/v1/task/list/${id}`,
      {
        headers: {
          access_token: userToken,
        },
      }
    );
    if (response.data.success) {
      setTask(response.data.data);
      console.log(tasks);
    }
  };

  const addTask = async ({ id, value }) => {
    const response = await axios.post(
      VITE_BASE_URL + `/api/v1/task/create`,
      {
        name: value,
        list_id: id,
      },
      {
        headers: {
          access_token: userToken,
        },
      }
    );
    if (response.data.success) {
      setTask([...tasks, response.data.data]);
      setValue("");
      console.log(response.data.message);
    }
  };
  const deleteTask = async (id) => {
    const response = await axios.delete(VITE_BASE_URL + `/api/v1/task/${id}`, {
      headers: {
        access_token: userToken,
      },
    });
    if (response.data.success) {
      console.log(response.data.message);
      const updatedTask = tasks.filter((task) => task.id != id);
      setTask(updatedTask);
    }
  };

  useEffect(() => {
    getTask();
  }, []);
  return (
    <div className="bg-neutral-content w-80 h-96 overflow-y-scroll rounded-md shadow-md no-scrollbar text-white mx-3">
      <h1 className="py-3 text-xl font-bold text-center bg-neutral rounded-sm">
        {title}
      </h1>
      <Droppable droppableId={`${id}`}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            className="p-1 flex-grow min-h-16"
          >
            {tasks.map((task, index) => (
              <Task
                task={task}
                key={task.id}
                index={task.id}
                deleteTask={deleteTask}
              />
            ))}
            <div className="border-r-4 p-2 bg-white text-gray-600 rounded-md shadow-md mb-2 min-h-16">
              <input
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (value != "") {
                      addTask({ id, value });
                      e.target.value = "";
                    }
                  }
                }}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </div>

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
