import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ContentLibrary({ t }) {
    const [activeTab, setActiveTab] = useState("visual");
    const [selectedItem, setSelectedItem] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const videoRefs = useRef([]);

    // Preload image before opening modal
    const openModal = (item) => {
        setIsLoading(true);
        
        // Determine first image to preload
        let firstImageSrc = null;
        if (item.media && item.media.length > 0) {
            // For stories/reels - preload first media item if it's an image
            if (item.media[0].type === 'image') {
                firstImageSrc = item.media[0].src;
            }
        } else if (item.image || item.mainImage) {
            // For visual - preload main image
            firstImageSrc = item.image || item.mainImage;
        }

        if (firstImageSrc) {
            const img = new Image();
            img.onload = () => {
                setSelectedItem(item);
                setIsLoading(false);
            };
            img.onerror = () => {
                // Even if image fails, open modal
                setSelectedItem(item);
                setIsLoading(false);
            };
            img.src = firstImageSrc;
        } else {
            // No image to preload (video first), open immediately
            setSelectedItem(item);
            setIsLoading(false);
        }
    };

    // Force video play when modal opens or slide changes
    useEffect(() => {
        if (selectedItem && selectedItem.media) {
            // Small delay to ensure DOM is ready
            const timer = setTimeout(() => {
                const currentVideo = videoRefs.current[currentSlide];
                if (currentVideo && currentVideo.tagName === 'VIDEO') {
                    currentVideo.muted = true;
                    currentVideo.playsInline = true;
                    currentVideo.load(); // Force reload
                    currentVideo.play().catch(err => {
                        console.log('Video autoplay blocked:', err);
                    });
                }
            }, 150);
            return () => clearTimeout(timer);
        }
    }, [selectedItem, currentSlide]);

    // Handle slide change to autoplay videos
    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.activeIndex);

        // Pause all videos
        videoRefs.current.forEach((video) => {
            if (video && video.tagName === 'VIDEO') {
                video.pause();
                video.currentTime = 0;
            }
        });

        // Play current video if it exists
        const currentVideo = videoRefs.current[swiper.activeIndex];
        if (currentVideo && currentVideo.tagName === 'VIDEO') {
            setTimeout(() => {
                currentVideo.muted = true;
                currentVideo.play().catch(err => {
                    console.log('Video autoplay prevented:', err);
                    // Fallback: try to play on next tick
                    requestAnimationFrame(() => {
                        currentVideo.play().catch(e => console.log('Still blocked:', e));
                    });
                });
            }, 150);
        }
    };

    const tabs = [
        { id: "visual", label: t("content_library_tab_visual") },
        { id: "stories", label: t("content_library_tab_stories") },
        { id: "reels", label: t("content_library_tab_reels") },
    ];

    // Content data with real images
    const content = {
        visual: [
            { id: 1, type: "visual", mainImage: "/visual/visual1-main.JPG", image: "/visual/visual1.PNG", category: "Marketing Agency" },
            { id: 2, type: "visual", mainImage: "/visual/visual2-main.JPG", image: "/visual/visual2.PNG", category: "Nail Bar" },
            { id: 3, type: "visual", mainImage: "/visual/visual3-main.JPG", image: "/visual/visual3.PNG", category: "Parfume Bar" },
            { id: 4, type: "visual", mainImage: "/visual/visual4-main.JPEG", image: "/visual/visual4.PNG", category: "Personal Brand" },
            { id: 5, type: "visual", mainImage: "/visual/visual5-main.JPEG", image: "/visual/visual5.PNG", category: "Korean Beauty" },
        ],
        stories: [
            {
                id: 1,
                type: "story",
                mainImage: "/stories/story1-main.PNG",
                media: [
                    { type: "image", src: "/stories/story1-1.PNG" },
                    { type: "image", src: "/stories/story1-2.PNG" },
                    { type: "image", src: "/stories/story1-3.PNG" },
                    { type: "video", src: "/stories/story1-4.MP4" },
                    { type: "video", src: "/stories/story1-5.MP4" }
                ],
                category: "Nails Stories"
            },
            {
                id: 2,
                type: "story",
                mainImage: "/stories/story2-main.PNG",
                media: [
                    { type: "image", src: "/stories/story2-1.PNG" },
                    { type: "image", src: "/stories/story2-2.PNG" },
                    { type: "image", src: "/stories/story2-3.PNG" },
                    { type: "image", src: "/stories/story2-4.PNG" },
                    { type: "image", src: "/stories/story2-5.PNG" }
                ],
                category: "Parfume Stories"
            },
            {
                id: 3,
                type: "story",
                mainImage: "/stories/story3-main.PNG",
                media: [
                    { type: "image", src: "/stories/story3-1.JPG" },
                    { type: "image", src: "/stories/story3-2.JPG" },
                    { type: "image", src: "/stories/story3-3.JPG" },
                    { type: "image", src: "/stories/story3-5.JPG" },
                    { type: "image", src: "/stories/story3-4.JPG" }
                ],
                category: "Nail Bar Stories"
            },
            {
                id: 4,
                type: "story",
                mainImage: "/stories/story4-main.PNG",
                media: [
                    { type: "image", src: "/stories/story4-1.JPG" },
                    { type: "image", src: "/stories/story4-2.JPG" },
                    { type: "image", src: "/stories/story4-3.JPG" }
                ],
                category: "Beauty Salon Stories"
            },
            {
                id: 5,
                type: "story",
                mainImage: "/stories/story5-main.PNG",
                media: [
                    { type: "image", src: "/stories/story5-1.JPG" },
                    { type: "image", src: "/stories/story5-2.JPG" },
                    { type: "image", src: "/stories/story5-3.JPG" },
                    { type: "image", src: "/stories/story5-4.JPG" },
                    { type: "video", src: "/stories/story5-5.MP4" }
                ],
                category: "Korean Beauty Stories"
            },
        ],
        reels: [
            {
                id: 1,
                type: "reel",
                mainImage: "/reels/reels1-main.PNG",
                media: [
                    { type: "video", src: "/reels/reels1.MP4" }
                ],
                category: "Nail Bar Reels"
            },
            {
                id: 2,
                type: "reel",
                mainImage: "/reels/reels2-main.PNG",
                media: [
                    { type: "video", src: "/reels/reels2.MP4" }
                ],
                category: "Parfume Reels"
            },
            {
                id: 3,
                type: "reel",
                mainImage: "/reels/reels3-main.PNG",
                media: [
                    { type: "video", src: "/reels/reels3.MP4" }
                ],
                category: "Nail Bar Reels"
            },
            {
                id: 4,
                type: "reel",
                mainImage: "/reels/reels4-main.PNG",
                media: [
                    { type: "video", src: "/reels/reels4.MP4" }
                ],
                category: "Parfume Reels"
            },
            {
                id: 5,
                type: "reel",
                mainImage: "/reels/reels5-main.PNG",
                media: [
                    { type: "video", src: "/reels/reels5.MP4" }
                ],
                category: "Massage Reels"
            },
            {
                id: 6,
                type: "reel",
                mainImage: "/reels/reels6-main.PNG",
                media: [
                    { type: "video", src: "/reels/reels6.MP4" }
                ],
                category: "Korean Beauty Reels"
            },
            {
                id: 7,
                type: "reel",
                mainImage: "/reels/reels7-main.PNG",
                media: [
                    { type: "video", src: "/reels/reels7.MP4" }
                ],
                category: "Korean Beauty Reels"
            },
        ],
    };

    const currentContent = content[activeTab];

    // Preload first 5 images when tab changes
    useEffect(() => {
        const preloadImages = currentContent.slice(0, 5);
        preloadImages.forEach(item => {
            const imgSrc = item.mainImage || item.image;
            if (imgSrc) {
                const img = new Image();
                img.src = imgSrc;
            }
        });
    }, [activeTab, currentContent]);

    return (
        <section className="content-library-section" id="content-library" style={{ position: 'relative' }}>
            {/* Decorative Flower */}
            <div className="decorative-flower flower-large flower-delay-2" style={{ top: '15%', right: '4%' }}>
                <img src="/flowers/flower3.PNG" alt="" />
            </div>

            <div className="content-library-inner">
                {/* Header */}
                <motion.div
                    className="content-library-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="content-library-title">{t("content_library_title")}</h2>
                    <p className="content-library-subtitle">
                        {t("content_library_subtitle")}
                    </p>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    className="content-library-tabs"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`content-tab ${activeTab === tab.id ? "active" : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <motion.div
                                    className="tab-indicator"
                                    layoutId="activeTab"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Content Slider for all tabs */}
                <AnimatePresence mode="wait">
                    {/* Swiper for Visual, Stories and Reels */}
                    <motion.div
                        key={activeTab}
                        className="content-library-swiper-container"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
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
                            className={`content-swiper ${activeTab === "visual" ? "visual-swiper" : ""}`}
                        >
                            {currentContent.map((item, index) => (
                                <SwiperSlide key={item.id}>
                                    <div
                                        className={`content-card ${activeTab === "visual" ? "visual" : "story"}`}
                                        onClick={() => openModal(item)}
                                    >
                                        <div className="content-card-inner">
                                            <div className="content-card-media">
                                                {(item.mainImage || item.image) && (
                                                    <img 
                                                        src={item.mainImage || item.image} 
                                                        alt={item.category}
                                                        loading={index < 5 ? "eager" : "lazy"}
                                                        fetchpriority={index < 3 ? "high" : "auto"}
                                                        decoding="async"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            display: 'block',
                                                            border: 'none',
                                                            outline: 'none'
                                                        }}
                                                    />
                                                )}
                                            </div>
                                            <div className="content-card-overlay">
                                                <span className="content-card-category">{item.category}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Loading indicator */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        className="content-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <div style={{
                            width: '50px',
                            height: '50px',
                            border: '3px solid rgba(233, 166, 181, 0.3)',
                            borderTop: '3px solid var(--brndz-pink)',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite'
                        }} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedItem && !isLoading && (
                    <motion.div
                        className="content-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                    >
                        {/* Decorative flowers on modal backdrop */}
                        <div className="modal-flower" style={{ top: '8%', left: '5%', width: '280px', height: '280px' }}>
                            <img src="/flowers/flower1.PNG" alt="" />
                        </div>
                        <div className="modal-flower" style={{ top: '10%', right: '8%', width: '520px', height: '520px' }}>
                            <img src="/flowers/flower2.PNG" alt="" />
                        </div>
                        <div className="modal-flower" style={{ bottom: '5%', left: '10%', width: '300px', height: '300px' }}>
                            <img src="/flowers/flower3.PNG" alt="" />
                        </div>

                        {/* Background text watermark */}
                        <div className="modal-backdrop-text">
                            KAIRUXS NOT JUST SMM
                        </div>

                        <motion.div
                            className="content-modal-inner"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="content-modal-close"
                                onClick={() => setSelectedItem(null)}
                            >
                                ✕
                            </button>

                            <div className="content-modal-media">
                                {/* For stories with multiple media - show Swiper */}
                                {selectedItem.media && selectedItem.media.length > 0 ? (
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                        className="content-modal-swiper"
                                        onSlideChange={handleSlideChange}
                                        onSwiper={(swiper) => {
                                            // Clear refs
                                            videoRefs.current = [];
                                            setCurrentSlide(0);

                                            // Autoplay first slide if it's video after a delay
                                            setTimeout(() => {
                                                const firstVideo = videoRefs.current[0];
                                                if (firstVideo && firstVideo.tagName === 'VIDEO') {
                                                    firstVideo.muted = true;
                                                    firstVideo.playsInline = true;
                                                    firstVideo.load();
                                                    firstVideo.play().catch(err => {
                                                        console.log('Initial video autoplay prevented:', err);
                                                    });
                                                }
                                            }, 250);
                                        }}
                                    >
                                        {selectedItem.media.map((mediaItem, index) => (
                                            <SwiperSlide key={index}>
                                                {mediaItem.type === 'video' ? (
                                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                                        <video
                                                            ref={el => {
                                                                if (el) {
                                                                    videoRefs.current[index] = el;
                                                                }
                                                            }}
                                                            src={mediaItem.src}
                                                            className="content-modal-video"
                                                            loop
                                                            muted
                                                            playsInline
                                                            autoPlay
                                                            controls={false}
                                                            preload="auto"
                                                            disablePictureInPicture
                                                            disableRemotePlayback
                                                            onLoadedData={(e) => {
                                                                console.log(`Video ${index} loaded:`, mediaItem.src);
                                                                if (index === currentSlide) {
                                                                    e.target.muted = true;
                                                                    e.target.play().catch(err => console.log('Autoplay failed:', err));
                                                                }
                                                            }}
                                                            onPause={(e) => {
                                                                // Prevent pausing - restart immediately
                                                                if (index === currentSlide) {
                                                                    e.target.play().catch(err => console.log('Resume failed:', err));
                                                                }
                                                            }}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                // Force play if somehow paused
                                                                if (e.target.paused) {
                                                                    e.target.play();
                                                                }
                                                            }}
                                                            onContextMenu={(e) => e.preventDefault()}
                                                            style={{ cursor: 'default', pointerEvents: 'none' }}
                                                        />
                                                    </div>
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
                                ) : (
                                    /* For single images (visual) */
                                    (selectedItem.image || selectedItem.mainImage) ? (
                                        <img
                                            src={selectedItem.image || selectedItem.mainImage}
                                            alt={selectedItem.category}
                                            className="content-modal-image"
                                        />
                                    ) : (
                                        <div className="content-modal-placeholder">
                                            <span>{selectedItem.category}</span>
                                        </div>
                                    )
                                )}
                            </div>

                            <div className="content-modal-info">
                                <h3 className="content-modal-title">{selectedItem.category}</h3>
                                {selectedItem.media && selectedItem.media.length > 0 && (
                                    <p className="content-modal-counter">
                                        {selectedItem.media.length} stories
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

