import React from "react";
import Navbar from "../components/Atoms/Navbar";
import Sidebar from "../components/Atoms/Sidebar";
import Articles1 from "../components/Atoms/Articles";

const Articles = () => (
  <div>
    <Navbar namapaage={"Articles"} />
    <Sidebar>
      <Articles1 />
    </Sidebar>
  </div>
);

export default Articles;
