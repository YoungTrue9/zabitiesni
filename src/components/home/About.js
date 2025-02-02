import React from "react";
import Heading from "../common/Heading";
import { about } from "../data/Data";
import { Link } from "react-router-dom"; // Импортируем Link

export default function About() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase">
                О нас
              </h6>
              <h1 className="mb-4">
                Добро Пожаловать{" "}
                <span className="text-primary text-uppercase">Забытые сны</span>
              </h1>
              <p className="mb-4">
                Гостевой дом Валдай Ленина 3 это два отдельных дома на одной
                территории в центре Валдая, рядом с набережной озера. Есть общий
                закрытый двор с парковкой на 6 авто, зоной барбекю, мангалом и
                удобной беседкой. Рядом находятся все достопримечательности
                Валдая, прогулочная зона набережной озера с прекрасным видом на
                Иверский монастырь, детский комплекс "поляна сказок" и центр с
                кафе "место Валдай". Также в 100 -200 метрах магазины и кафе.
                <br />
                У нас вы можете забронировать дом на выбор 120м2 с 3 мя
                спальнями, общей вместимостью до 14 человек с 2мя сан узлами и
                гостинной или забронировать дом с 4 мя спальнями, общей
                вместимостью до 14 человек с 2мя сан узлами.
                <br/>
                Недавно у нас открылся новый семейный номер оснащеный WIFI, телевизором, собственным туалетом, отоплением, вмещающим себя 4 человека.
              </p>
              <div className="row g-3 pb-4">
                {about.map((item, key) => (
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        {item.icon}
                        <h2 className="mb-1" data-toggle="counter-up">
                          {item.count}
                        </h2>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Заменяем <a> на Link */}
              <a className="btn btn-primary py-3 px-5 mt-2" href="https://wa.me/+79602090607">
                Забронировать
              </a>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="/assets/img/about-1.jpg"
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="/assets/img/about-2.jpg"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-50 wow zoomIn"
                    data-wow-delay="0.5s"
                    src="/assets/img/about-3.jpg"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="/assets/img/about-4.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
