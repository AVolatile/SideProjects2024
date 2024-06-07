import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userService from "../services/userService";

interface User {
  id: number;
  username: string;
}

const UserProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await userService.getUserById(Number(id));
      setUser(fetchedUser);
    };
    fetchUser();
  }, [id]);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.username}</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
