import style from './style.module.sass'
export default function Card({make,model, image, description, price, level }) {
    const className = 'level' + level
    return (
        <div className={style.card + ' '+ style[className]}>
            <div className={style.card_image}>
                <img src={image} alt={`${make} ${model}`}/>
            </div>
            <div className={style.card_content}>
                <h3 className={style.description}>{make} {model}</h3>
                <p className={style.description}>{description}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}