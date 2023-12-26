import { DragDropContext } from "react-beautiful-dnd";
import AddColumn from "./AddColumn";
import axios from "axios";
import userStore from "../store/user";
import { useEffect } from "react";
import Loading from "./Loading";

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
  useEffect(() => {
    getUserLists();
  }, []);
  return lists ? (
    <DragDropContext>
      <div className="flex  justify-evenly  flex-row items-center px-10 py-10">
        <AddColumn />
      </div>
    </DragDropContext>
  ) : (
    <Loading />
  );
}
