import './RecipeCards.css'

export default function RecipeCard({name, image, rating, difficulty, prepTimeMinutes, cookTimeMinutes, tags}) {
  return (
    <div className='recipe-card'>
        <img className='recipe-card__image' src={image} alt={name} />
        <div className='recipe-card__info'>
            <p className='recipe-card__title'>{name}</p>
            <div className="recipe-card__meta">
                <span className="recipe-card__rating">★ {rating}</span>
                <span className="recipe-card__difficulty">{difficulty}</span>
            </div>
            <div>Cooking time: {prepTimeMinutes + cookTimeMinutes} minutes</div>
            <div className='recipe-card__tags'>{tags?.join(", ")}</div>
        </div>
    </div>
  );
}