import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddForm from "./components/AddForm";
import Form from "./components/Form";
import UpdateForm from "./components/UpdateForm";

function App() {
  return (
    <div className="">
     <BrowserRouter>
     <Nav />
     <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/add" element={<AddForm />} />
          <Route path="/update/:id" element={<UpdateForm />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
