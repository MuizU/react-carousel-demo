import style from './index.sass'
export default function Card({make,model, image, description, price, level }) {
    return (
        <div className={style.card}>
            <div className={style.card_image}>
                <img src={image} alt={`${make} ${model}`} height={'126px'} width={'250px'}/>
            </div>
            <div className={style.card_content}>
                <h3 className={style.description}>{make} {model}</h3>
                <p className={style.description}>{description}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}