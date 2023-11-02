import './gallerycard.css';

function InfoCard({ label }) {
  return (
    <div className="info-card">
      {label}
    </div>
  );
}

function GalleryCard({ cardDataFull, image, label, onSelect }) {
  return (
    <div className="gallery-card">
      <img src={image} alt={label} className="gallery-card-image" />
      <InfoCard label={label} />
      <button onClick={() => onSelect(cardDataFull)}> Select</button>
    </div>
  );
}

export default GalleryCard;