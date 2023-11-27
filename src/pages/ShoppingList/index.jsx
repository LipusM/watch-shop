
import "./style.scss"

import {motion} from "framer-motion"

const ShoppingList = () => {

    return (
        <motion.main
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 5}}
        >
        <h1>Shopping list</h1>
        fasdfasdfasdfasdf
        </motion.main>
    )
}

export default ShoppingList