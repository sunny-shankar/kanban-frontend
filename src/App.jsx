import Login from "./components/Login";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import userStore from "./store/user";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  const { userToken, loading } = userStore();
  return loading ? (
    <Loading />
  ) : userToken ? (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center items-center">
        <KanbanBoard />
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <Login />
    </div>
  );
}

export default App;
