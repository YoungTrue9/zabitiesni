import React, { useState } from "react";
import CommonHeading from "../common/CommonHeading";
import { roomItems } from "../data/Data";

export default function Rooms() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (images) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImages([]);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Наши предложения"
            title="Номеров"
            subtitle="Выбор"
          />
          <div className="row g-4">
            {roomItems.map((item, key) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
                key={key}
              >
                <div className="room-item shadow rounded overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={item.img} alt="img" />
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {item.price}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{item.name}</h5>
                      <div className="ps-2">{item.star}</div>
                    </div>
                    <p className="text-body mb-3">{item.description}</p>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-sm btn-dark rounded py-2 px-4"
                        onClick={() => openModal(item.images)}
                      >
                        Посмотреть фото
                      </button>
                      <a
    href="https://wa.me/+79602090607" // Предполагаем, что в `item` есть свойство `link`
    className="btn btn-sm btn-primary rounded py-2 px-4"
    target="_blank"
    rel="noopener noreferrer"
  >
    Бронирование
  </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" style={{ display: "block", background: "rgba(0, 0, 0, 0.8)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Фотографии</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body" style={{ maxHeight: "80vh", overflowY: "auto" }}>
  {selectedImages.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`room-${index}`}
      className="img-fluid mb-2"
    />
  ))}
</div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
