import styles from "./About.module.scss";
import AngleRightIcon from "./svg/angle-right-icon.svg";

var React = require("react");

export default function About({
  title,
  content,
  resumeUrl,
  pictureUrl,
}: {
  title: string;
  content: string;
  resumeUrl: string;
  pictureUrl: string;
}) {
  return (
    <div>
      <div className={styles.about}>
        <div className={styles.content}>
          <h2> {title} </h2>
          <p> {content} </p>
          <a href={resumeUrl} className={styles.resume}>
            <div className={styles["simplified-svg-logo"]}>
              <AngleRightIcon />
            </div>
            Download my Resume
          </a>
        </div>
        <div className={styles.picture}>
          <img src={pictureUrl} alt="me" />
        </div>
      </div>
    </div>
  );
}
