import React from "react";
import Heading from "../components/common/Heading";
import CommonHeading from "../components/common/CommonHeading";
import { contact } from "../components/data/Data";

export default function Contact() {
  return (
    <>
      <Heading heading="Контакты" title="Главная" subtitle="Контакты" />

      <div class="container-xxl py-5">
        <div class="container">
          <CommonHeading
            heading="Наши Контакты"
            subtitle="Контакты "
            title="для ваших вопросов"
          />
          <div class="row g-4">
            <div class="col-12">
              <div class="row gy-4">
                {contact.map((item, index) => (
   <div className="col-md-4" key={index}>
   <h6 className="section-title text-start text-primary text-uppercase">
     {item.title}
   </h6>
   <p>
     {item.icon}{" "}
     <a href={`mailto:${item.email}`} className="text-dark text-decoration-none">
       {item.email}
     </a>
   </p>
 </div>
                ))}
              </div>
            </div>
            <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <iframe
                class="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d373.9661207423222!2d33.25194957600313!3d57.97984256968342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b9a33ea84b9b0f%3A0x4a26aef8c65c951f!2z0YPQuy4g0JvQtdC90LjQvdCwLCAz0LAsINCS0LDQu9C00LDQuSwg0J3QvtCy0LPQvtGA0L7QtNGB0LrQsNGPINC-0LHQuy4sINCg0L7RgdGB0LjRjywgMTc1NDAw!5e0!3m2!1sru!2srs!4v1734458261776!5m2!1sru!2srs"
                frameborder="0"
                style={{ minHeight: "350px", border: "0" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
            <div class="col-md-6">
              <div class="wow fadeInUp" data-wow-delay="0.2s">
                <form>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Введите имя"
                        />
                        <label for="name">Ваше имя</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Введите почту"
                        />
                        <label for="email">Ваша почта</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="Тема сообщения"
                        />
                        <label for="subject">Тема</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <textarea
                          class="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "150px" }}
                        ></textarea>
                        <label for="message">Сообщение</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100 py-3" type="submit">
                        Отправить
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
