import React from "react";
import TagCloud from "TagCloud";
import styles from "./cloud.module.css";

class Cloud extends React.Component {
  constructor(props) {
    super(props);
    this.tagCloudRef = React.createRef();
    this.tagCloud = null;
  }

  componentDidMount() {
    if (this.tagCloud === null) {
      const options = {
        keep: true,
        radius: 200,
        maxSpeed: "fast",
        initSpeed: "fast",
        itemClass: styles.itemClass,
      };
      const tags = [
        "JavaScript",
        "CSS",
        "HTML",
        "MSSQL",
        "C#",
        "Visual Basic",
        "ReactJS",
        "NextJS",
        "ASP.NET",
        "MongoDB",
        "NoSQL",
        "RestAPI",
        "Boostrap",
        "ReduxJS",
        "ExpressJS",
        "NodeJS",
        "JQuery",
      ];
      this.tagCloud = new TagCloud(this.tagCloudRef.current, tags, options);
    }
  }

  render() {
    return <div ref={this.tagCloudRef}></div>;
  }
}

export default Cloud;
