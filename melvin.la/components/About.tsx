import styles from "./About.module.scss";
import AngleRightIcon from "./svg/angle-right-icon.svg";

var React = require("react");

export default function About({
  title,
  content,
  resumeUrl,
  pictureUrl,
  blogUrl,
}: {
  title: string;
  content: string;
  resumeUrl: string;
  pictureUrl: string;
  blogUrl: string;
}) {
  return (
    <div>
      <div className={styles.about}>
        <div className={styles.content}>
          <h2> {title} </h2>
          <p> {content} </p>
          <div className={styles.links}>
            <a href={blogUrl} className={styles.blog}>
              Checkout my Blog
            </a>
            <a href={resumeUrl} className={styles.resume}>
              Download my Resume
            </a>
          </div>
        </div>
        <div className={styles.picture}>
          <img src={pictureUrl} alt="me" />
        </div>
      </div>
    </div>
  );
}
