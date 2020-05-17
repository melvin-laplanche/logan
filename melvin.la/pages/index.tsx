import { GetStaticProps } from "next";
import Head from "next/head";

import Section from "../components/Section";
import Header from "../components/Header";
import About from "../components/About";
import Tech from "../components/Tech";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import db from "./db.json";
import { DB } from "../models";

export default function Home({ pages }: DB) {
  return (
    <div>
      <Head>
        <title>Melvin Laplanche</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Section>
        <Header />
      </Section>

      <Section>
        <About
          title={pages.about.title}
          content={pages.about.content}
          resumeUrl={pages.about.resumeUrl}
          pictureUrl={pages.about.pictureUrl}
        />
      </Section>

      <Section>
        <Tech
          title={pages.backendOps.title}
          content={pages.backendOps.content}
          logos={pages.backendOps.logos}
        />
      </Section>

      <Section>
        <Tech
          title={pages.clientTech.title}
          content={pages.clientTech.content}
          logos={pages.clientTech.logos}
          inverted={true}
        />
      </Section>

      <Section fullScreen={true}>
        <Contact
          email={pages.contact.email}
          linkedInHandle={pages.contact.linkedInHandle}
          githubHandle={pages.contact.githubHandle}
        />
      </Section>

      <Section>
        <Footer />
      </Section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...db,
    },
  };
};
