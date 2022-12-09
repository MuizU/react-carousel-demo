import style from "./style.module.sass";
export default function Card({
    make,
    model,
    image,
    description,
    price,
    level,
}) {
    const className = "level" + level;
    return (
        <div className={style.card + " " + style[className]}>
            <img src={image} alt={`${make} ${model}`} />
            <h3 className={style.description}>
                {make} {model}
            </h3>
            <p className={style.description}>{description}</p>
            <p>{price}</p>
        </div>
    );
}
