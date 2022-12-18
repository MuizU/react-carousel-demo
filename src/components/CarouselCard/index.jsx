import style from "./style.module.sass";
export default function Card({
    make,
    model,
    image,
    description,
    mileage,
    transmission,
    year,
    price,
    level,
}) {
    const className = "level" + level;
    return (
        <div className={style.card + " " + style[className]}>
            <img src={image} alt={`${make} ${model}`} />
            <h3>
                {make} {model}
            </h3>
            <p>{description}</p>
            <p>Mileage: {mileage}</p>
            <p>Transmission: {transmission}</p>
            <p>Year: {year}</p>
            <p>${price}</p>
        </div>
    );
}
