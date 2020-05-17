import { Logo as LogoInfo } from "../models";
import Logo from "./Logo";
import styles from "./Tech.module.scss";

export default function Tech({
  title,
  logos,
  content,
  inverted = false,
}: {
  title: string;
  logos: LogoInfo[];
  content: string[];
  inverted?: boolean;
}) {
  return (
    <div className={`${styles.root} ${inverted ? styles.inverted : ""}`}>
      <div className={styles.logos}>
        {logos.map((logo) => (
          <a
            key={logo.name}
            href={logo.url}
            className={`${styles.logo} simplified-svg-logo`}
          >
            <Logo name={logo.img} />
          </a>
        ))}
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        {content.map((c, i) => (
          <p key={i}>{c}</p>
        ))}
      </div>
    </div>
  );
}
