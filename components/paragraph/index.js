import React from "react";
import styles from "./paragraph.module.css";

class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      index: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.typeWriter();
    }, this.props.delay);
  }

  typeWriter() {
    const { sentence, speed } = this.props;
    const { index } = this.state;

    const typewriter = setInterval(() => {
      if (index < sentence.length) {
        this.setState((prevState) => ({
          text: prevState.text + sentence.charAt(prevState.index),
          index: prevState.index + 1,
        }));
      } else clearInterval(typewriter);
    }, speed);
  }

  render() {
    return <div className={styles.characters}>{this.state.text}</div>;
  }
}

export default Paragraph;
