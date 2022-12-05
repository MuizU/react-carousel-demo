import { createRef, useCallback, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CarouselCard from "../CarouselCard";
import style from "./styles.module.sass";
import { cars } from "../../data/items.json";
export default function Carousel({ children }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("right");
  const items = [...cars];
  const generateItems = useCallback(() => {
    const carItems = [];
    const cItems = [...cars];
    let level;
    for (let i = active - 1; i <= active + 2; i++) {
      let index = i;
      if (i < 0) {
        index = cItems.length + i;
      } else if (i >= cItems.length) {
        index = i % cItems.length;
      }
      level = i - active;
      carItems.push({ level, item: cItems[index] });
      return carItems;
    }
  }, [active, items]);

  const moveLeft = useCallback(() => {
    setActive(active === 0 ? items.length - 1 : active - 1);
    setDirection("left");
  }, [active, items]);

  const moveRight = useCallback(() => {
    setActive((active + 1) % items.length);
    setDirection("right");
  }, [active, items]);

  return (
    <div className={style.container}>
      <div
        onClick={moveLeft}
        className={style.arrow + " " + style["arrow-left"]}
      >
        &#8592;
      </div>
      <TransitionGroup>
        {generateItems().map((child, _index) => {
          const { level, item } = child;
          const { make, model, image, description, price } = item;
          const itemRef = createRef();
          return (
            <CSSTransition
              nodeRef={itemRef}
              key={item.id}
              classNames={direction}
              timeout={500}
            >
              <CarouselCard
                make={make}
                model={model}
                image={image}
                description={description}
                price={price}
                level={level}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
      <div
        onClick={moveRight}
        className={style.arrow + " " + style["arrow-right"]}
      >
        {" "}
        &#8594;
      </div>
    </div>
  );
}
