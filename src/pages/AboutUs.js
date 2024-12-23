import React from "react";
import Heading from "../components/common/Heading";
import About from "../components/home/About";
import Team from "../components/home/Team";

export default function AboutUs() {
  return (
    <>
      <Heading heading="О нас" title="Главная" subtitle="О нас" />
      <About />
     
    </>
  );
}
