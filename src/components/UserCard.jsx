import { Link } from "react-router-dom";
import "./userCard.css";

function UserCard(props) {
  const user = props.user;

  return (
    <div className="card">
      <h3 className="card__name">{user.name}</h3>
      <p className="card__username">username: {user.username}</p>
      <p className="card__email">email: {user.email}</p>
      <p className="card__phone">phone: {user.phone}</p>

      <Link to={"/users/" + user.id} className="card__btn">
        Подробнее
      </Link>
    </div>
  );
}

export default UserCard;