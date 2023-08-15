import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DetailCharacter from "../pages/DetailCharacter";
import DetailLocation from "../pages/DetailLocation";
import DetailEpisode from "../pages/DetailEpisode";



const MyRoutes = () => {

  return (

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/detailsCharacter/:id" element={<DetailCharacter />} />
      <Route exact path="/detailsLocation/:id" element={<DetailLocation />} />
      <Route exact path="/detailsEpisode/:id" element={<DetailEpisode />} />
    </Routes>



  );
};

export default MyRoutes;