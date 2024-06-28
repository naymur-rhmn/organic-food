import Spinner from "../../Loading/Spinner";
import SingleUser from "./SingleUser";
import { useEffect, useState } from "react";

const DeleteUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://organic-food-server-beige.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, [users]);

  const handleUserId = (id) => {
    const filteredData = users.filter((user) => user._id !== id);
    setUsers(filteredData);
  };

  return (
    <div>
      <div className="text-center mb-10">
        <h6>Delete User</h6>
        <p className="text-lg text-slate-500 font-medium">
          Delete user from Database
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        {loading && <Spinner />}
        {users.map((user) => (
          <SingleUser
            key={user._id}
            user={user}
            isDelete={true}
            handleUserId={handleUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default DeleteUser;
