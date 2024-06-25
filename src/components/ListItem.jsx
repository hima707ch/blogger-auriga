import { memo } from "react";
import { Link } from "react-router-dom";

const ListItem = memo(({ username }) => {
  console.log("rendered");
  return (
    <li>
      <Link to={`/details/${username}`} className="user-link">
        {username}
      </Link>
    </li>
  );
});

export default ListItem;
