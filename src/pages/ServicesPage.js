import React from "react";
import Heading from "../components/common/Heading";
import Services from "../components/home/Service";
import Sliders from "../components/home/Slider";

export default function Service() {
  return (
    <>
      <Heading heading="Сервисы" title="Главная" subtitle="Сервисы" />
      <Services />
      <Sliders />
    </>
  );
}
