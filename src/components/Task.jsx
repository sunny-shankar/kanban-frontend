import { Draggable } from "react-beautiful-dnd";
import DeleteIcon from "../assets/DeleteIcon";
export default function Task({ task, index, deleteTask }) {
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className="border-r-4 p-2 bg-white text-gray-600 rounded-md shadow-md mb-2 min-h-16 flex justify-evenly items-center px-5"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div
            className=" cursor-pointer"
            onClick={(e) => {
              deleteTask(task.id);
            }}
          >
            <DeleteIcon />
          </div>
          <div className="mx-auto text-center font-bold text-xl">
            {task.name}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
}
