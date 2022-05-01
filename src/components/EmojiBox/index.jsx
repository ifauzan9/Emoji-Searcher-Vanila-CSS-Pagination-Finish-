import classNames from "classnames";
import { useState, useEffect } from "react";
import styles from "./EmojiBox.module.css";

const EmojiBox = ({ symbol, title }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setSelected(false);
    }, 500);

    return () => {
        clearTimeout(timer);
    }
  }, [selected]);

  return (
    <div
      className={classNames(styles.emojiBox, {
        [styles.selected]: selected
      })}
      onClick={() => {
        setSelected(true);
        navigator.clipboard.writeText(symbol);
      }}
      
    >
      <p
        className={styles.symbol}
        dangerouslySetInnerHTML={{
          __html: `&#${symbol.codePointAt(0)}`,
        }}
      />
      
      <p className={styles.title}>{ selected ? "'Copied'" : title}</p>      
    </div>
  );
};

export default EmojiBox;
