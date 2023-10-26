import './gallerycard.css';
function GalleryCard({ image, label, onClick }) {
  return (
    <div className="gallery-card" onClick={onClick}>
      <img src={image} alt={label} className="gallery-card-image" />
      <span className="gallery-card-label">{label}</span>
    </div>
  );
}

export default GalleryCard;