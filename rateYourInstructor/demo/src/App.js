import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Home from "../src/components/Home";
import Login from "../src/components/Login";
import Signup from "../src/components/Signup";
import AboutUs from "../src/components/AboutUs";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import TopTeacher from "../src/components/TopTeachers";
import Services from "../src/components/Services";
import Contact from "../src/components/Contact";
import TeacherList from "../src/components/TeachersList";
import RatingForm from "./components/RatingForm"; // Import the Rating Form
import ProfessorCard from "./components/ProfessorCard"; // Import the Rating Form

function App() {
  return (
    <Router>
      <div className="home-bg"> {/* Apply the animated background here */}
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/topteacher" element={<TopTeacher />} />
            <Route path="/service" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/teachers" element={<TeacherList />} /> {/* New route for teachers */}
            <Route path="/rate/:teacher_id" element={<RatingForm />} /> {/* New route for rating */}
            <Route path="/Professor/:id" element={<ProfessorCard />} /> {/* New route for professor */}
          </Routes>
        </div>
        <Footer />
        <ToastContainer /> {/* Add ToastContainer here */}
      </div>
    </Router>
  );
}

export default App;
