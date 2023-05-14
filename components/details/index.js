import React, { Fragment } from "react";
import styles from "./details.module.css";

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, selected } = this.props;

    return (
      <Fragment>
        {data.map((x, index) => {
          return (
            <div
              style={{ display: selected === x.id ? "block" : "none" }}
              key={index}
            >
              <div className={styles.RoleContainer}>
                <div className={`${styles.RoleText} ${styles.TextFont}`}>
                  {x.role}
                </div>
                `&nbsp;`
                <div className={`${styles.WorkPlaceText} ${styles.TextFont}`}>
                  {x.wp}
                </div>
              </div>
              <div className={styles.PeriodContainer}>
                <div className={styles.PeriodText}>{x.period}</div>
              </div>
              <div className={styles.ListContainer}>
                <ul>
                  {x.info.map((y, index2) => {
                    return <li key={x + index2}>{y}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default Details;
