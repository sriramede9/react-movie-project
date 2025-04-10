import "../../css/Rating.css";

export default function Rating({ rating }) {
    const stars = Math.round(rating / 2);
    const starElements = [];

    for (let i = 1; i <= 5; i++) {
        starElements.push(
            <span key={i} className={`star ${i <= stars ? "filled" : ""}`}>
               ★
            </span>
        );
    }
    return (
        <div className="rating">
            {starElements}
        </div>
    );
}