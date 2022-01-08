// import './index.css';
import { Routes, Route, Link } from "react-router-dom";
import { Login } from "./Login";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}


export const Home = () => {
  return (
    <h1>Home Page</h1>
  )
}

export default App;

      
        // This example requires updating your template:
        // <html class="h-full bg-gray-50">
        // <body class="h-full">

      





