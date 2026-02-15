import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import "./usersPage.css";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        const names = [
          "Usonkulov Umar",
          "Aliev Damir",
          "Egizbaev Salman",
          "Igumnova Viktorya",
          "Sazonov Artur",
          "Malikova Bermet",
          "Salihova Taya",
          "Maksatova Milena",
          "Ivanova Marya"
        ];

        const fakeUsers = data.slice(0, names.length).map((user, index) => {
          return {
            ...user,
            name: names[index],
            username: "login" + (1000 + index),
            email: names[index].toLowerCase().replace(" ", ".") + "@gmail.com",
            phone: "+996 555 000 0" + index
          };
        });

        setUsers(fakeUsers);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="loading">Loading...</h2>;

  return (
    <div className="users-page">
      <h1 className="users-page__title">Users</h1>

      <div className="users-page__grid">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UsersPage;