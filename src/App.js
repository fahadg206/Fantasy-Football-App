import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Apply from "./components/Apply";
import Schedule from "./components/Schedule";
import Standings from "./components/Standings";
import PowerRankings from "./components/PowerRankings";
import RedemptionLeague from "./components/RedemptionLeague";
import Articles from "./components/Articles";
import Week1 from "./components/WeeklyArticles/Week1";
import Layout from "./components/Layout";
import { FaCloudRain } from "react-icons/fa";
import RCL from "./images/rcl_final.png";

const App = () => {
  return (
    <div>
      <Router>
        <div className="flex justify-center p-2">
          <img src={RCL} className="w-[150px] h-[100px] lg:hidden" />
        </div>
        <div className="sticky top-0 lg:static z-50">
          <Layout />
        </div>
        <Routes>
          <Route path={"/"} exact element={<Home />} />
          <Route path={"/articles"} element={<Articles />} />
          <Route path={"/schedule"} element={<Schedule />} />
          <Route path={"/standings"} element={<Standings />} />
          <Route path={"/powerrankings"} element={<PowerRankings />} />
          <Route path={"/redemptionleague"} element={<RedemptionLeague />} />
          <Route path={"/apply"} element={<Apply />} />
          <Route path={"/articles/week1"} element={<Week1 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
