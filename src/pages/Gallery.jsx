// Import Dependencies/Hooks
import { useEffect, useRef, useState, useContext } from "react";
import  ParksContext  from "../context/ParksContext.jsx";

function Gallery() {
    // ✅ Get images from ParksContext
    const { getAllParkImages } = useContext(ParksContext);
    const images = getAllParkImages(); 

    // ✅ Handle empty images array
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const intervalRef = useRef(null);

    // ✅ Function to go to the next image
    const nextImage = () => {
        if (images.length === 0) return;
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFade(false);
        }, 500);
    };

    // ✅ Function to go to the previous image
    const prevImage = () => {
        if (images.length === 0) return;
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
            setFade(false);
        }, 500);
    };

    // ✅ Auto-slide images every 2 seconds
    useEffect(() => {
        if (images.length === 0) return;
        
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            nextImage();
        }, 2000);

        return () => clearInterval(intervalRef.current);
    }, [currentIndex, images.length]);

    return (
        <div>
            <div className="img-gallery">
                <div className="btnPrev">   
                    <button onClick={prevImage}>⏮️</button>
                </div>
                <div className="imgContainer">
                    <h1> Image Gallery </h1>
                    {/* ✅ Check if images exist before displaying */}
                    {images.length > 0 ? (
                        <>
                            <img 
                                className={`fade ${fade ? "fade-out" : "fade-in"}`}
                                src={images[currentIndex]} 
                                alt={`Image ${currentIndex + 1}`} 
                            />
                            <p> Image {currentIndex + 1} of {images.length} </p>
                        </>
                    ) : (
                        <p>No images available</p>
                    )}
                </div>
                <div className="btnNext">
                    <button onClick={nextImage}>⏭️</button>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
