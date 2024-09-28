import Header from "./components/Header"
import Hero from "./components/Hero"
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { delay, motion } from "framer-motion"
import About from "./components/About";
import Projects from "./components/Projects";
function App() {

  return (
    <>
  {/* <motion.div
  animate={{
    x: 100,
    // backgroundColor: "#000",
    // boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
    // position: "fixed",
    // transitionEnd: {
    //   display: "none",
      
    // },
    
  }} > */}
  {/* <motion.div
  initial={{ x: "-100%" }}
  animate={{ x: "0" }}> */}
  <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}>
    <Header />
    <Hero />
    <About />
    <Projects />
    </motion.div>
    </>
  )
}

export default App
