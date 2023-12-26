import { DragDropContext } from "react-beautiful-dnd";
import AddColumn from "./AddColumn";

export default function KanbanBoard() {
  return (
    <DragDropContext>
      <div className="flex  justify-evenly   flex-row items-center px-10 py-10">
        <AddColumn />
      </div>
    </DragDropContext>
  );
}
