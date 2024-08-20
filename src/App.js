import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ToastProvider } from "./context/ToastProvider";
import Dashboard from "./components/Driver/Driverdashboard";
import User from "./components/Driver/Driver";
import Expensedashboard from "./components/Expenses/Expensedashboard";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import Expense from "./components/Expenses/Expense";
import Busdashboard from "./components/Buses/Busdashboard";
import Bus from "./components/Buses/Bus";
import Studentsdashboard from "./components/Students/Studentsdashboard";
import Student from "./components/Students/Student";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import Busupdateform from "./components/Buses/Busupdateform";
import Infoupdateform from "./components/Driver/Infoupdateform";
import Expenseupdateform from "./components/Expenses/Expenseupdateform";
import Studentupdateform from "./components/Students/Studentupdateform";
import Files from "./components/Expenses/Files";
function App() {
  const [users, setUsers] = useState();
  // const Navigate = useNavigate();
  onAuthStateChanged(auth, (currentUser) => {
    setUsers(currentUser);
  });
  function AdminElement() {
    if (users?.email === "admin@gmail.com") {
      return <Outlet />;
    } else {
      return <h1>not have access</h1>;
    }
  }
  function PublicOne() {
    if (users?.email == null) {
      return <>Loading</>;
    } else {
      return <Outlet />;
    }
  }
  return (
    <div className="App">
      <Router>
        <ToastProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PublicOne />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/main" element={<MainDashboard />} />
              <Route path="/buses" element={<Busdashboard />} />
              <Route path="/driver" element={<Dashboard />} />
              <Route path="/expense" element={<Expensedashboard />} />
              <Route path="/students" element={<Studentsdashboard />} />
              <Route path="/file/:url" element={<Files />} />
            </Route>
            <Route element={<AdminElement />}>
              <Route path="/driver/createdriver" element={<User />} />
              <Route path="/expense/create-expense" element={<Expense />} />
              <Route path="/buses/newbus" element={<Bus />} />
              <Route path="/students/createstudent" element={<Student />} />
              <Route
                path="/updateExpense/:id"
                element={<Expenseupdateform />}
              />
              <Route
                path="/updatestudent/:id"
                element={<Studentupdateform />}
              />
              <Route path="/updatebus/:id" element={<Busupdateform />} />
              <Route path="/updatedriver/:id" element={<Infoupdateform />} />
            </Route>
          </Routes>
        </ToastProvider>

        <Toaster />
      </Router>
    </div>
  );
}

export default App;
