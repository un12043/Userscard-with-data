import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./userDetails.css";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
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

        const newUser = {
          ...data,
          name: names[id - 1],
          username: "login" + (1000 + (id - 1)),
          email: names[id - 1].toLowerCase().replace(" ", ".") + "@gmail.com",
          phone: "+996 555 000 0" + (id - 1)
        };

        setUser(newUser);
      });
  }, [id]);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="details">
      <Link to="/users">Назад</Link>

      <h1>{user.name}</h1>

      <p>ID: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
}

export default UserDetails;