import {Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Contact from "./components/contact";
import Projects from "./components/projects";
import About from "./components/about";
import Error404 from "./components/Error404";
import Specific_project_view from "./components/specific_project_view";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Admin from "./components/admin";
import Admin_view from "./components/Admin_view";



function App() {


  return (
    <>
      <Navbar/>
      {/* Routing Start ********************************************/}

      <div className="App">

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/projects/:id/view" element={<Specific_project_view />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
          <Route exact path="/admin/view" element={<Admin_view />}></Route>
          <Route exact path="/*" element={<Error404 />}></Route>
        </Routes>
      </div>

      {/* Routing End ********************************************/}

      {/* Footer start ********************************************/}
      <Footer/>
      {/* Footer End ********************************************/}

      

    </>
  );
}

export default App;
