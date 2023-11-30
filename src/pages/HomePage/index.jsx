import "./style.scss";

import { NavLink } from "react-router-dom";
import {motion} from "framer-motion"

const HomePage = () => {

  return (
    <main id="home-page">
      <NavLink to="/watches">
      <motion.button
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.6)"}}
      whileTap={{scale: 0.9}}
      transition={{duration: 0.3}}
      >
        <b>
          {/* <NavLink to="/watches">Discover</NavLink> */}
          Discover
        </b>
      </motion.button>
      </NavLink>
    </main>
  );
};

export default HomePage;
