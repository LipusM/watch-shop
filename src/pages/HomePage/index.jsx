import "./style.scss";

import { NavLink } from "react-router-dom";
import {motion} from "framer-motion"

const HomePage = () => {
  return (
    <main id="home-page">
      <motion.button
      /* whileHover={{opacity: 0.8}} */
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.6)"}}
      whileTap={{scale: 0.9}}
      transition={{duration: 0.5}}
      >
        <b>
          <NavLink to="/watches">Discover</NavLink>
        </b>
      </motion.button>
    </main>
  );
};

export default HomePage;
