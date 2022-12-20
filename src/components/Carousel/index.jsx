import { createRef, useCallback, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CarouselCard from "../CarouselCard";
import style from "./styles.module.sass";
import { cars } from "../../data/items.json";
export default function Carousel({ children }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("right");
  const items = [...cars];
  // TODO: Add into hook
  const generateItems = useCallback(() => {
    const cItems = []
    let currentItems = [...items];
    let level;
    for (let i = active - 1; i < active + 2; i++){
      var index = i;
      if (i < 0) {
        index = currentItems.length + i;
      } else if (i >= currentItems.length) {
        index = i % currentItems.length;
      }
      level = active - i;
      const currentItem = currentItems[index];
      if (!!currentItem) {
        cItems.push({ level, ...currentItem });
      }
    }
    return cItems;
  }, [active, items]);

  const moveRight = useCallback(() => {
    setActive(active === 0 ? items.length - 1 : active - 1);
    setDirection("left");
  }, [active, items]);

  const moveLeft = useCallback(() => {
    setActive((active + 1) % items.length);
    setDirection("right");
  }, [active, items]);

  return (
    <div className={style.noselect} id={style.carousel}>
      <div
        onClick={moveLeft}
        className={style.arrow + " " + style["arrow-left"]}
      >
        &#8592;
      </div>
      <TransitionGroup
              classNames={direction}
      >
        {generateItems().map((child, _index) => {
          const itemRef = createRef();
          return (
            <CSSTransition
              nodeRef={itemRef}
              key={child.id}
              classNames={direction}
              timeout={500}
            >
              <CarouselCard
              {...child}
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
