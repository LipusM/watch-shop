import "./style.scss";

import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <main id="home-page">
      <button>
        <b>
          <NavLink to="/watches">Discover</NavLink>
        </b>
      </button>
    </main>
  );
};

export default HomePage;
