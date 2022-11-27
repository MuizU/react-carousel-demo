export default function Card({name, image, description, price }) {
    return (
        <div className={style.card}>
            <div className={style.image}>
                <img src={image} alt={name} />
            </div>
            <div className={style.content}>
                <h3 className={style.title}>{name}</h3>
                <p className={style.description}>{description}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}