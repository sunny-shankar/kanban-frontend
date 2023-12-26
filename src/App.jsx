import Login from "./components/Login";
import Loading from "./components/Loading";

import userStore from "./store/user";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  const { userToken, loading } = userStore();
  return loading ? (
    <Loading />
  ) : (
    <div className="flex h-screen justify-center items-center">
      {userToken ? <KanbanBoard /> : <Login />}
    </div>
  );
}

export default App;
