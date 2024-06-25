import { useEffect, useState } from "react";
import SingleUser from "./SingleUser";
import Spinner from "../../Loading/Spinner";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/users")
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
        <h6>All User List</h6>
        <p className="text-lg text-slate-500 font-medium">
          Authenticated users
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        {loading && <Spinner />}
        {users.map((user) => (
          <SingleUser key={user._id} user={user} handleUserId={handleUserId} />
        ))}
      </div>
    </div>
  );
};

export default Users;
