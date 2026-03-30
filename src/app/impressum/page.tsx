import { Metadata } from "next";
import styles from "./page.module.css";
import { CONTACT } from "@/constants";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Vier Elfen Kinderlounge Hildesheim",
};

export default function Impressum() {
  return (
    <div className={styles.page}>
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <h1>Impressum</h1>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h2>Angaben gemäß § 5 TMG</h2>

            <h3>Betreiber</h3>
            <p>
              {CONTACT.legalName}
              <br />
              {CONTACT.operatorName}
              <br />
              {CONTACT.address.street}
              <br />
              {CONTACT.address.zip} {CONTACT.address.city}
            </p>

            <h3>Kontakt</h3>
            <p>
              Telefon: {CONTACT.phone}
              <br />
              E-Mail: {CONTACT.email}
            </p>

            <h3>Umsatzsteuer-ID</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              {CONTACT.vatId}
            </p>

            <h3>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
            <p>
              Quelle:{" "}
              <a
                href="https://www.erecht24.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                eRecht24
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
