import { DragDropContext } from "react-beautiful-dnd";
import AddColumn from "./AddColumn";
import axios from "axios";
import userStore from "../store/user";
import { useEffect } from "react";
import Loading from "./Loading";
import List from "./List";

export default function KanbanBoard() {
  const { userToken, addLists, lists } = userStore();
  const { VITE_BASE_URL } = import.meta.env;

  const getUserLists = async () => {
    const { data } = await axios({
      url: VITE_BASE_URL + "/api/v1/user/list",
      method: "GET",
      headers: {
        access_token: userToken,
      },
    });
    addLists(data.data);
  };

  const updateTask = async (taskId, listId) => {
    const { data } = await axios.put(
      VITE_BASE_URL + `/api/v1/task/${taskId}`,
      {
        list_id: parseInt(listId),
      },
      {
        headers: {
          access_token: userToken,
        },
      }
    );
  };

  const handleDrag = (data) => {
    const { destination, draggableId } = data;
    const { droppableId } = destination;
    updateTask(draggableId, droppableId);
  };

  useEffect(() => {
    getUserLists();
  }, []);

  return lists ? (
    <DragDropContext onDragEnd={handleDrag}>
      <div className="flex  justify-evenly  flex-row items-center px-10 py-10">
        {lists.map((col) => (
          <List title={col.name} id={col.id} key={col.id} />
        ))}
        <AddColumn />
      </div>
    </DragDropContext>
  ) : (
    <Loading />
  );
}
