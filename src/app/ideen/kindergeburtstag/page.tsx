import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Kindergeburtstag feiern in Hildesheim | Vier Elfen Kinderlounge',
    description: 'Kindergeburtstag feiern Hildesheim: Exklusiver Partyraum, Themendeko mit bis zu 100 Ballons, 4 Stunden Spaß. Stressfrei planen mit Vier Elfen Kinderlounge.',
};

export default function KindergeburtstagIdeen() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Kindergeburtstag feiern in Hildesheim',
        description: 'Kindergeburtstag feiern Hildesheim: Exklusiver Partyraum, Themendeko mit bis zu 100 Ballons, 4 Stunden Spaß. Stressfrei planen mit Vier Elfen Kinderlounge.',
        url: 'https://www.vierelfen.com/ideen/kindergeburtstag',
        datePublished: '2026-03-30',
        dateModified: '2026-03-30',
        image: 'https://www.vierelfen.com/images/showcase-party.jpg',
        inLanguage: 'de-DE',
        author: { '@type': 'Organization', name: 'Vier Elfen Kinderlounge', url: 'https://www.vierelfen.com' },
        publisher: {
            '@type': 'Organization',
            name: 'Vier Elfen Kinderlounge',
            url: 'https://www.vierelfen.com',
            logo: { '@type': 'ImageObject', url: 'https://www.vierelfen.com/images/Vier-Elfen-Kinderlounge-Hildesheim-Logo.png' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.vierelfen.com/ideen/kindergeburtstag' },
    };

    return (
        <div className={styles.page}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Hero
                title="Kindergeburtstag in Hildesheim"
                subtitlePrefix="Ideen für "
                subtitlePhrases={[
                    'unvergessliche Feiern',
                    'tolle Mottos',
                    'stressfreie Partys',
                    'glückliche Kinder',
                ]}
                backgroundImage="/images/showcase-party.jpg"
                backgroundImageAlt="Festlich dekorierter Kindergeburtstag in der Vier Elfen Kinderlounge Hildesheim"
                variant="subpage"
            />

            <article className={styles.article}>

                {/* Einleitung */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <p className={styles.lead}>
                            Der Geburtstag eures Kindes ist einer der schönsten Tage im Jahr. Ein Tag, an dem
                            große Augen leuchten, herzlich gelacht wird und Erinnerungen entstehen, die noch
                            Jahre später erzählt werden. Aber mal ehrlich: Die Planung zu Hause ist manchmal
                            alles andere als entspannt. Wohin mit den zwölf aufgedrehten Kindern? Wer räumt
                            nachher auf? Und woher kommen die Stühle?
                        </p>
                        <p className={styles.prose}>
                            Genau für solche Momente gibt es die Vier Elfen Kinderlounge in Hildesheim.
                            Hier könnt ihr Kindergeburtstag feiern, ohne euch um Vorbereitung, Dekoration
                            oder Aufräumen kümmern zu müssen. Ihr kommt, feiert und geht nach Hause.
                            Wir kümmern uns um den Rest.
                        </p>
                    </div>
                </section>

                {/* H2: Die richtige Location */}
                <section className={`${styles.section} ${styles.sectionAlt}`}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Die richtige Location für den Kindergeburtstag in Hildesheim wählen</h2>
                        <p className={styles.prose}>
                            Viele Eltern starten die Planung mit dem Gedanken: "Wir machen es einfach zu
                            Hause." Und das ist absolut verständlich. Doch je näher der große Tag rückt,
                            desto mehr Fragen tauchen auf. Passt die Wohnung für zehn oder mehr Kinder?
                            Wohin mit den Jacken, den Geschenken, dem Kuchen? Und vor allem: Wer macht
                            danach sauber?
                        </p>
                        <p className={styles.prose}>
                            Eine eigens dafür ausgestattete Kindergeburtstag Location in Hildesheim zu
                            mieten macht einen riesigen Unterschied. Bei uns in der Vier Elfen Kinderlounge
                            habt ihr den gesamten Raum exklusiv für euch. Keine fremden Gäste, keine
                            anderen Feiern, kein geteilter Bereich. Die Räumlichkeit ist vollständig für
                            euch und eure Familie reserviert.
                        </p>
                        <p className={styles.prose}>
                            Noch bevor ihr ankommt, ist alles vorbereitet: Die Dekoration zum gewählten
                            Motto hängt, der Kindertisch ist festlich gedeckt und die Luftballons warten
                            schon. Ihr bringt den Kuchen mit, ein paar persönliche Kleinigkeiten, und die
                            Feier kann losgehen. Nach der Party geht ihr entspannt nach Hause. Den Rest
                            übernehmen wir.
                        </p>
                        <p className={styles.prose}>
                            Wer schon einmal einen Kindergeburtstag zu Hause ausgerichtet hat, weiß wie
                            viel Energie allein die Vorbereitung kostet, noch bevor der erste Gast
                            geklingelt hat. Mit einem Partyraum für Kinder in Hildesheim könnt ihr euch
                            diese Energie sparen und sie stattdessen ganz euren Kindern und Gästen widmen.
                            Das macht den Unterschied zwischen einem stressigen Tag und einem wirklich
                            unvergesslichen Erlebnis.
                        </p>
                    </div>
                </section>

                {/* H2: Welches Motto */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Welches Motto passt zu eurem Kind?</h2>
                        <p className={styles.prose}>
                            Ein Motto macht aus einer netten Feier ein echtes Abenteuer. Kinder lieben es,
                            wenn alles zusammenpasst: die Deko, die Farben, der Tisch. Und die Auswahl an
                            möglichen Mottos ist riesig. Die Frage ist nur: Was begeistert euer Kind gerade
                            am meisten?
                        </p>
                        <p className={styles.prose}>
                            Für die Jüngsten zwischen 2 und 4 Jahren sind Tiere, der Bauernhof und Dinosaurier
                            zeitlose Favoriten. Diese Altersgruppe liebt kräftige Farben und einfache, klare
                            Formen. Eine Dino-Party mit grünen Ballons und Saurierfiguren auf dem Tisch
                            bringt kleine Augen zum Leuchten.
                        </p>
                        <p className={styles.prose}>
                            Im Alter zwischen 4 und 6 Jahren kommen die Klassiker: Prinzessinnen, Superhelden,
                            Meerjungfrauen und Einhörner. In diesem Alter entwickeln Kinder oft sehr klare
                            Vorstellungen davon, was ihre Traumparty ausmacht. Wer seinen Kindern genau
                            zuhört, findet das perfekte Motto ganz schnell.
                        </p>
                        <p className={styles.prose}>
                            Für Kinder zwischen 6 und 8 Jahren darf es etwas abenteuerlicher sein: Weltall,
                            Detektiv, Minecraft oder Fußball sind gerade sehr beliebt. In diesem Alter wird
                            die Party auch für die Freunde immer wichtiger. Ein cooles Motto sorgt für
                            Gesprächsstoff noch Wochen danach.
                        </p>
                        <p className={styles.prose}>
                            Das Schöne bei uns: Wir dekorieren den gesamten Partyraum passend zu eurem
                            gewählten Thema, inklusive bis zu 100 Ballons. Ihr müsst euch um nichts kümmern.
                            Teilt uns euer Wunschmotto bei der Buchung mit, und wir setzen es um.
                        </p>
                    </div>
                </section>

                {/* H2: Was ist im Paket dabei */}
                <section className={`${styles.section} ${styles.sectionAlt}`}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Was ist beim Geburtstagspaket alles dabei?</h2>
                        <p className={styles.prose}>
                            Damit ihr wisst, womit ihr rechnen könnt, findet ihr hier alles auf einen Blick.
                            Unser Paket ist so zusammengestellt, dass ihr wirklich entspannt feiern könnt.
                        </p>

                        <div className={styles.highlightBox}>
                            <h3 className={styles.highlightTitle}>Das ist im Paket enthalten:</h3>
                            <ul className={styles.packageList}>
                                <li>4 Stunden exklusive Raummiete (keine anderen Gäste, nur ihr)</li>
                                <li>Komplette Themendekoration passend zu eurem Motto</li>
                                <li>Bis zu 100 Luftballons</li>
                                <li>Dekorierter Kindertisch</li>
                                <li>3 Liter Getränke für die Kinder (Leitungswasser und Apfelschorle)</li>
                                <li>Snackteller für die Kinder</li>
                            </ul>
                            <h3 className={styles.highlightTitle}>Kapazität:</h3>
                            <p className={styles.highlightText}>
                                Bis zu 30 Gäste insgesamt, davon maximal 15 Kinder und maximal 15 Erwachsene.
                            </p>
                            <h3 className={styles.highlightTitle}>Optionale Extras:</h3>
                            <ul className={styles.packageList}>
                                <li>Kaffeemaschine für Erwachsene: 30 Euro</li>
                                <li>Popcornmaschine: 20 Euro</li>
                                <li>Betreuung vor Ort durch unser Team: 80 Euro</li>
                                <li>Animateur buchbar auf Anfrage</li>
                            </ul>
                        </div>

                        <p className={styles.prose}>
                            Ihr könnt natürlich euren eigenen Kuchen und eigenes Essen mitbringen. Wir
                            stellen die Grundversorgung, aber ihr dürft die Feier ganz nach euren
                            Vorstellungen gestalten.
                        </p>
                    </div>
                </section>

                {/* H2: Ablauf einer Feier */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Ablauf eines Kindergeburtstags bei Vier Elfen</h2>
                        <p className={styles.prose}>
                            Ihr fragt euch vielleicht, wie so ein Nachmittag bei uns genau abläuft. Hier
                            ein kleiner Einblick, damit ihr entspannt in den Tag starten könnt.
                        </p>
                        <p className={styles.prose}>
                            30 Minuten vor Partybeginn könnt ihr kommen, um persönliche Dinge aufzubauen:
                            den Kuchen aufzustellen, die Geschenke zu platzieren oder kleine Dekoideen
                            umzusetzen, die ihr selbst mitgebracht habt. In dieser Zeit könnt ihr alles
                            in Ruhe vorbereiten, bevor die ersten Gäste eintreffen.
                        </p>
                        <p className={styles.prose}>
                            Dann geht es los. Die Kinder toben im Spielbereich, die Kleinen entdecken
                            alles, was die Lounge zu bieten hat, und die Erwachsenen können sich in
                            Ruhe unterhalten. Kuchen, Geschenke und Spiele bestimmt ihr. Den Rahmen
                            stellen wir.
                        </p>
                        <p className={styles.prose}>
                            Das Wichtigste dabei: Ihr seid immer unter euch. Keine fremden Kinder, die
                            hereinlaufen, keine andere Party nebenan. Die Vier Elfen Kinderlounge gehört
                            während eurer Buchungszeit ausschließlich euch. Die maximale Endzeit für
                            Feiern ist 19:00 Uhr.
                        </p>
                        <p className={styles.prose}>
                            Wenn die Zeit um ist, verabschiedet ihr euch mit einem müden, glücklichen Kind
                            auf dem Arm und der Gewissheit, dass ihr nichts aufräumen müsst. Das erledigen
                            wir für euch.
                        </p>
                    </div>
                </section>

                {/* H2: Stressfrei buchen */}
                <section className={`${styles.section} ${styles.sectionAlt}`}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Stressfrei von Anfang an: So bucht ihr bei Vier Elfen</h2>
                        <p className={styles.prose}>
                            Die Buchung ist so einfach wie die Feier selbst. Ihr meldet euch bei uns per
                            Telefon unter 0174 4014141 oder per E-Mail an hallo@vierelfen.com. Wir
                            sprechen gemeinsam über euren Wunschtermin, das Motto und eventuelle Extras.
                        </p>
                        <p className={styles.prose}>
                            Mit einer Anzahlung von 150 Euro sichert ihr euren Termin verbindlich. Der
                            Restbetrag wird am Veranstaltungstag beglichen.
                        </p>

                        <div className={styles.highlightBox}>
                            <h3 className={styles.highlightTitle}>Preise im Überblick:</h3>
                            <ul className={styles.packageList}>
                                <li>Wochentags (Mo. bis Do.): 330 Euro</li>
                                <li>Wochenende und Feiertage (Fr. bis So. sowie Feiertage): 390 Euro</li>
                            </ul>
                            <p className={styles.highlightText}>
                                Anzahlung zur Buchungsbestätigung: 150 Euro
                            </p>
                        </div>

                        <p className={styles.prose}>
                            Unser Tipp: Beliebte Termine, vor allem Samstage und die Wochen rund um
                            Schulferien, sind schnell vergeben. Je früher ihr bucht, desto entspannter
                            könnt ihr die Vorfreude genießen. Wir empfehlen, mindestens 4 bis 6 Wochen
                            im Voraus zu planen.
                        </p>
                        <p className={styles.prose}>
                            Ihr habt noch Fragen oder seid unsicher, ob unsere Location für eure
                            Vorstellungen passt? Meldet euch einfach. Wir beraten euch gerne und freuen
                            uns auf eure Nachricht.
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section className={`${styles.section} ${styles.faqSection}`}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Häufige Fragen zum Kindergeburtstag in Hildesheim</h2>

                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Wie viele Kinder können teilnehmen?</h3>
                            <p className={styles.faqAnswer}>
                                Insgesamt können bis zu 30 Personen feiern, davon maximal 15 Kinder und
                                maximal 15 Erwachsene. So bleibt die Atmosphäre gemütlich und überschaubar,
                                ohne dass es zu eng wird.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Kann ich eigene Torte und eigenes Essen mitbringen?</h3>
                            <p className={styles.faqAnswer}>
                                Ja, auf jeden Fall. Ihr dürft euren selbst gebackenen oder bestellten
                                Geburtstagskuchen sowie eigene Speisen und Snacks mitbringen. Wir stellen
                                Snacks und Getränke für die Kinder, aber ihr könnt die Feier kulinarisch
                                ganz nach euren Wünschen gestalten.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Was passiert bei Krankheit?</h3>
                            <p className={styles.faqAnswer}>
                                Wir wissen, dass Kinder manchmal im ungünstigsten Moment krank werden. Sprecht
                                uns frühzeitig an, wenn sich eine Erkrankung abzeichnet. Wir versuchen gemeinsam
                                mit euch eine gute Lösung zu finden, sei es ein Alternativtermin oder eine
                                andere Regelung.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Wie weit im Voraus sollte ich buchen?</h3>
                            <p className={styles.faqAnswer}>
                                Wir empfehlen, mindestens 4 bis 6 Wochen im Voraus zu buchen, besonders
                                für Termine an Wochenenden oder in der Ferienzeit. Für kurzfristige Buchungen
                                unter der Woche gibt es manchmal noch freie Termine. Am besten
                                einfach anfragen.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Sind auch Kinder unter 2 Jahren willkommen?</h3>
                            <p className={styles.faqAnswer}>
                                Unsere Lounge ist auf Kinder ab 2 Jahren ausgerichtet, da der Spielbereich
                                für diese Altersgruppe ausgelegt ist. Kinder unter 2 Jahren sind als Gäste
                                natürlich herzlich willkommen, die Kapazitätsplanung orientiert sich jedoch
                                an Kindern ab 2 Jahren.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.cta}>
                    <div className={styles.container}>
                        <h2 className={styles.ctaTitle}>Bereit für eine unvergessliche Feier?</h2>
                        <p className={styles.ctaText}>
                            Ihr habt Lust bekommen, den nächsten Kindergeburtstag in der Vier Elfen
                            Kinderlounge zu feiern? Wir freuen uns auf eure Nachricht und helfen euch
                            gerne dabei, den perfekten Tag für euer Kind zu planen.
                        </p>
                        <Button href="/kontakt" size="large">
                            Jetzt Termin anfragen
                        </Button>
                    </div>
                </section>

            </article>

            <section className={styles.relatedSection}>
                <div className={styles.container}>
                    <h2 className={styles.relatedTitle}>Weitere Ideen aus der Ideenschmiede</h2>
                    <div className={styles.relatedGrid}>
                        <Link href="/ideen/feiern" className={styles.relatedCard}>
                            <span className={styles.relatedIcon}>🎊</span>
                            <strong>Taufe, Babyparty & Familienfeiern</strong>
                            <span>Besondere Familienmomente in der Kinderlounge feiern</span>
                        </Link>
                        <Link href="/ideen/spieltermin" className={styles.relatedCard}>
                            <span className={styles.relatedIcon}>☕</span>
                            <strong>Spieltermin & Kaffeepause</strong>
                            <span>Kein Anlass nötig: einfach spielen lassen und entspannen</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
