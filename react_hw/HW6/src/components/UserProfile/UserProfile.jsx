import axios from "axios";
import { useEffect, useState } from "react";
import style from "./UserProfile.module.css";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const responce = await axios.get("https://randomuser.me/api");
      console.log(responce.data.results[0]);
      setUser(responce.data.results[0]);
    } catch (error) {
      console.error("Here is some error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className={style.container}>
      <div className={style.user_card}>
        <img className={style.avatar} src={user.picture.large} alt="avatar" />
        <h2 className={style.full_name}>
          {user.name.title} {user.name.first} {user.name.last}
        </h2>
        <p>{user.email}</p>
        <p>
          Country: {user.location.country} City: {user.location.city}
        </p>
        <button className={style.change_btn} onClick={fetchUser}>
          Swipe
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
