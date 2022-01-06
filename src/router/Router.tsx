import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../components/organisms/layout/Header";
import { About } from "../components/pages/About";
import { Contact } from "../components/pages/Contact";
import { History } from "../components/pages/History";
import { Home } from "../components/pages/Home";
import { Products } from "../components/pages/Products";
import { Skill } from "../components/pages/Skill";

export const Router: VFC = memo(() => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
});
