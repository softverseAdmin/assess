import {Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import MenuLayout from "./layouts/MenuLayout";
import SignIn from "./components/auth/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./components/auth/SignUp";
import StudentSignUp from "./components/auth/StudentSignUp";
import ForgetPassword from "./components/auth/ForgetPassword";

function App() {

  return (
    <> 
    <ToastContainer />
        <Routes>
          <Route path="/" element={ <SignIn/> }/>
          <Route path="/forget-password" element={ <ForgetPassword/> }/>
          <Route path="/signup" element={ <SignUp/> }/>
          <Route path="/signup/student" element={ <StudentSignUp/> }/>
          <Route path="/menu/profile" element={<MenuLayout><div className="h-screen">Profile</div></MenuLayout> }/>
          <Route path="/menu/grammar" element={<MenuLayout><div className="h-screen">Grammar</div></MenuLayout> }/>
          <Route path="/menu/quiz" element={<MenuLayout><div className="h-screen">Quiz</div></MenuLayout> }/>
          <Route path="/menu/practice" element={<MenuLayout><div className="h-screen">Pratise</div></MenuLayout> }/>
          <Route path="/menu/tables" element={<MenuLayout><div className="h-screen">Tables</div></MenuLayout> }/>
          <Route path="/menu/charts" element={<MenuLayout><div className="h-screen">Charts</div></MenuLayout> }/>
          <Route path="*" element={<MenuLayout><div className="h-screen">Error Div</div></MenuLayout> }/>
        </Routes>
    </>
  )
}

export default App
