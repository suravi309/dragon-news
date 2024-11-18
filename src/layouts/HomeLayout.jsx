import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavber from "../components/layout-commne/LeftNavber";
import RightNav from "../components/layout-commne/RightNav";
import Navbar from "../components/navbar";
// import CategoryNews from "../pages/CategoryNews";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12">
        <aside className="left col-span-3">
          <LeftNavber></LeftNavber>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="left col-span-3">
          <RightNav></RightNav> 
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;