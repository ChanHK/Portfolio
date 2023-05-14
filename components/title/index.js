import React from "react";
import styles from "./title.module.css";

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text } = this.props;
    return (
      <div className={styles.main}>
        {text.split("").map((char, index) => {
          if (char === " ") return <div key={index}>`&nbsp;&nbsp;&nbsp;`</div>;
          return (
            <div key={index} className={styles.title}>
              {char}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Title;
