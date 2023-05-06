import React from "react";
import styles from "./experiences.module.css";
import Data from "./data.module.js";
import Details from "../details";

class Experiences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Exact ADC",
    };
  }

  render() {
    const { workplace, details } = Data;
    const { selected } = this.state;

    return (
      <div className={styles.MainContainer}>
        <div className={styles.TabList}>
          {workplace.map((place, index) => {
            return (
              <button
                key={index}
                value={place}
                onClick={(e) => {
                  this.setState({ selected: e.target.value });
                }}
              >
                {place}
              </button>
            );
          })}
        </div>
        <div className={styles.DetailsContainer}>
          <Details data={details} selected={selected} />
        </div>
      </div>
    );
  }
}

export default Experiences;
