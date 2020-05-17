import { Contact as ContactModel } from "../models";
import Map from "./Map";
import styles from "./Contact.module.scss";

export default function Contact({
  email,
  linkedInHandle,
  githubHandle,
}: ContactModel) {
  return (
    <div className={styles.root}>
      <div className={styles.center}>
        <h2> Get In Touch </h2>

        <div className={styles.items}>
          <span className="email">
            <a href={`mailto:${email}`}>{email}</a>
          </span>

          <span className="email">
            <a
              href={`https://linkedin.com/in/${linkedInHandle}`}
              className="linkedIn"
            >
              in/{linkedInHandle}
            </a>
          </span>

          <span className="email">
            <a href={`https://github.com/${githubHandle}`} className="github">
              @{githubHandle}
            </a>
          </span>
        </div>
      </div>
      <Map
        className={styles.map}
        initialCenter={{ lat: 34.0218593, lng: -118.498265 }}
      />
    </div>
  );
}
