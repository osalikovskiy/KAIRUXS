import {
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { contentLibraryData } from "../data/contentLibrary";
import DecorativeFlower from "./ui/DecorativeFlower";
import SectionHeader from "./ui/SectionHeader";
import { useReveal } from "../lib/reveal";
import { lenis } from "../lib/lenis";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function getPreviewSource(item) {
  if (item.mainImage || item.image) {
    return item.mainImage || item.image;
  }

  return item.media?.find((mediaItem) => mediaItem.type === "image")?.src ?? null;
}

export default function ContentLibrary({ t }) {
  const [activeTab, setActiveTab] = useState("visual");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const videoRefs = useRef([]);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);
  const modalPrevRef = useRef(null);
  const modalNextRef = useRef(null);
  const dialogTitleId = useId();
  const [sectionRef, sectionVisible] = useReveal({ threshold: 0.15 });

  const tabs = [
    { id: "visual", label: t("content_library_tab_visual") },
    { id: "stories", label: t("content_library_tab_stories") },
    { id: "reels", label: t("content_library_tab_reels") },
  ];

  const currentContent = contentLibraryData[activeTab];

  const closeModal = () => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });
    videoRefs.current = [];
    setCurrentSlide(0);
    setSelectedItem(null);
  };

  const openModal = (item) => {
    setIsLoading(true);

    const firstImageSrc = getPreviewSource(item);

    if (!firstImageSrc) {
      setSelectedItem(item);
      setIsLoading(false);
      return;
    }

    const img = new Image();
    img.onload = () => {
      setSelectedItem(item);
      setIsLoading(false);
    };
    img.onerror = () => {
      setSelectedItem(item);
      setIsLoading(false);
    };
    img.src = firstImageSrc;
  };

  useEffect(() => {
    if (!selectedItem?.media) return undefined;

    const timer = setTimeout(() => {
      const currentVideo = videoRefs.current[currentSlide];

      if (!currentVideo) return;

      currentVideo.muted = true;
      currentVideo.playsInline = true;
      currentVideo.play().catch(() => {
        // Browsers may block autoplay; controls stay available as fallback.
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [selectedItem, currentSlide]);

  useEffect(() => {
    if (!selectedItem) return undefined;

    previousFocusRef.current = document.activeElement;
    lenis.stop();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      lenis.start();
      previousFocusRef.current?.focus?.();
    };
  }, [selectedItem]);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);

    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === swiper.activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {
          // Controls remain available if autoplay is blocked.
        });
      } else {
        video.pause();
      }
    });
  };

  return (
    <section
      ref={sectionRef}
      className={`content-library-section section-shell reveal-section ${sectionVisible ? "is-visible" : ""}`}
      id="content-library"
    >
      <DecorativeFlower
        imageSrc="/flowers/flower3.PNG"
        sizeClass="flower-large"
        delayClass="flower-delay-2"
        style={{ top: "15%", right: "4%" }}
      />

      <div className="content-library-inner">
        <SectionHeader
          className="content-library-header"
          title={t("content_library_title")}
          description={t("content_library_subtitle")}
          titleClassName="content-library-title"
          descriptionClassName="content-library-subtitle"
        />

        <div className="content-library-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`content-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div key={activeTab} className="content-library-swiper-container">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={activeTab === "visual" ? 1.5 : 2}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: activeTab === "visual" ? 2 : 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: activeTab === "visual" ? 2.8 : 5,
                spaceBetween: 24,
              },
            }}
            className={`content-swiper ${
              activeTab === "visual" ? "visual-swiper" : ""
            }`}
          >
            {currentContent.map((item, index) => (
              <SwiperSlide key={item.id}>
                <button
                  type="button"
                  className={`content-card ${
                    activeTab === "visual" ? "visual" : "story"
                  }`}
                  onClick={() => openModal(item)}
                  aria-haspopup="dialog"
                  aria-label={`Open ${item.category}`}
                >
                  <div className="content-card-inner">
                    <div className="content-card-media">
                      <img
                        src={getPreviewSource(item)}
                        alt={item.category}
                        loading={index === 0 ? "eager" : "lazy"}
                        fetchPriority={index === 0 ? "high" : "auto"}
                        decoding="async"
                      />
                    </div>
                    <div className="content-card-overlay">
                      <span className="content-card-category">{item.category}</span>
                    </div>
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {createPortal(
        <>
          {isLoading && (
            <div className="content-modal content-modal-loading">
              <div className="content-loading-spinner" role="status" aria-live="polite" />
            </div>
          )}

          {selectedItem && !isLoading && (
            <div className="content-modal" onClick={closeModal}>
              <button
                ref={closeButtonRef}
                type="button"
                className="content-modal-close"
                onClick={closeModal}
                aria-label="Close content preview"
              >
                ✕
              </button>

              <div
                ref={modalRef}
                className="content-modal-inner"
                role="dialog"
                aria-modal="true"
                aria-labelledby={dialogTitleId}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="content-modal-media">
                  {selectedItem.media?.length ? (
                    <div className="content-modal-swiper-wrap">
                      <div className="modal-nav-buttons">
                        <button ref={modalPrevRef} type="button" className="modal-nav-btn modal-nav-prev" aria-label="Previous">
                          <svg width="14" height="14" viewBox="0 0 10 10" fill="none"><path d="M6.5 1.5 3 5l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                        <button ref={modalNextRef} type="button" className="modal-nav-btn modal-nav-next" aria-label="Next">
                          <svg width="14" height="14" viewBox="0 0 10 10" fill="none"><path d="M3.5 1.5 7 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                      </div>
                    <Swiper
                      modules={[Navigation, Pagination]}
                      spaceBetween={16}
                      slidesPerView={1}
                      navigation={{ prevEl: modalPrevRef.current, nextEl: modalNextRef.current }}
                      pagination={{ clickable: true }}
                      className="content-modal-swiper"
                      onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = modalPrevRef.current;
                        swiper.params.navigation.nextEl = modalNextRef.current;
                      }}
                      onSlideChange={handleSlideChange}
                      onSwiper={(swiper) => {
                        videoRefs.current = [];
                        setCurrentSlide(0);
                      }}
                    >
                      {selectedItem.media.map((mediaItem, index) => (
                        <SwiperSlide key={index}>
                          {mediaItem.type === "video" ? (
                            <video
                              ref={(element) => {
                                if (element) {
                                  videoRefs.current[index] = element;
                                }
                              }}
                              src={mediaItem.src}
                              poster={mediaItem.poster || selectedItem.mainImage}
                              className="content-modal-video"
                              loop
                              muted
                              playsInline
                              controls
                              preload="metadata"
                              disablePictureInPicture
                              disableRemotePlayback
                            />
                          ) : (
                            <img
                              src={mediaItem.src}
                              alt={`${selectedItem.category} ${index + 1}`}
                              className="content-modal-image"
                            />
                          )}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    </div>
                  ) : (
                    <img
                      src={selectedItem.image || selectedItem.mainImage}
                      alt={selectedItem.category}
                      className="content-modal-image"
                    />
                  )}
                </div>

                <div className="content-modal-footer">
                  <span id={dialogTitleId} className="content-modal-category">
                    {selectedItem.category}
                  </span>
                  {selectedItem.media?.length > 1 && (
                    <span className="content-modal-counter">
                      {currentSlide + 1}&thinsp;/&thinsp;{selectedItem.media.length}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </>,
        document.body
      )}
    </section>
  );
}
