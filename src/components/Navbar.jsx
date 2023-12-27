import userStore from "../store/user";

const Navbar = () => {
  const { removeUserToken, userEmail } = userStore();
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Welcome {userEmail}</a>
      </div>
      <div className="flex-none">
        <a
          className="btn"
          onClick={() => {
            removeUserToken();
          }}
        >
          Logout
        </a>
      </div>
    </div>
  );
};

export default Navbar;
