import Login from "./components/Login";
import Loading from "./components/Loading";

import userStore from "./store/user";

function App() {
  const { userToken, loading } = userStore();
  return loading ? (
    <Loading />
  ) : (
    <div className="flex h-screen justify-center items-center">
      {userToken ? "Logged in" : <Login />}
    </div>
  );
}

export default App;
