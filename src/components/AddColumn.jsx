import axios from "axios";
import { useState } from "react";
import userStore from "../store/user";

const AddColumn = () => {
  const [column, setColumn] = useState("");
  const { VITE_BASE_URL } = import.meta.env;
  const { userToken, toggleLoading, addLists } = userStore();

  const addColumn = async () => {
    toggleLoading();
    const { data } = await axios({
      url: VITE_BASE_URL + "/api/v1/list/create",
      method: "POST",
      data: {
        name: column,
      },
      headers: {
        access_token: userToken,
      },
    });
    toggleLoading();
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Add Column
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form
            method="dialog"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add Column</h3>
          <div className="flex flex-col items-center justify-center my-8">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setColumn(e.target.value)}
              required
            />
            <form
              method="dialog"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <button
                className="btn btn-md mt-5 shadow-lg btn-primary"
                onClick={() => {
                  addColumn();
                }}
              >
                Add Column
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddColumn;
