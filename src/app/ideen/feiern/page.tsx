import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import styles from './page.module.css';
import { PRICING, CAPACITY } from '@/constants';

export const metadata: Metadata = {
    title: 'Taufe, Babyparty & Familienfeiern in Hildesheim',
    description: 'Taufe feiern in Hildesheim, kinderfreundlich und entspannt. Babyparty, Familienfeier oder erster Geburtstag: Vier Elfen bietet den perfekten Rahmen.',
};

const faqItems = [
    {
        question: 'Können wir die Dekoration an unser Thema anpassen?',
        answer: 'Ja, absolut. Ob sanfte Pastelltöne für eine Taufe, bunte Ballons für eine Babyparty oder ein bestimmtes Farbschema für eine Familienfeier: Wir richten die Dekoration ganz nach euren Wünschen aus. Sprecht uns einfach bei der Buchung an.',
    },
    {
        question: 'Ist die Location auch für Taufen ohne viele Kinder geeignet?',
        answer: 'Ja. Auch wenn bei eurer Taufe nur wenige oder gar keine Kinder dabei sind, ist unsere Kinderlounge ein wundervoller Ort für intime Feiern. Die Atmosphäre ist warm und familiär, der Raum exklusiv für euch. Ihr könnt den Spielbereich natürlich nutzen oder einfach als zusätzlichen Raum einrichten.',
    },
    {
        question: 'Kann man eigenes Essen und Kuchen mitbringen?',
        answer: 'Ja, ihr dürft eigenes Essen, Kuchen und Snacks mitbringen. Unsere Küche steht euch zur Verfügung. Im Paket enthalten sind bereits 3 Liter Getränke und ein Knabbereien-Teller für die Kinder.',
    },
    {
        question: 'Wie lange dauert eine Feier?',
        answer: `Das Paket umfasst ${PRICING.party.duration} exklusive Nutzung. Ihr könnt ${PRICING.party.earlyArrival} früher anreisen, um alles vorzubereiten. Eine Verlängerung ist gegen Aufpreis jederzeit möglich, solange es der Tagesplan erlaubt.`,
    },
    {
        question: 'Gibt es die Möglichkeit, Animateure zu buchen?',
        answer: 'Aktuell bieten wir keine eigenen Animateure an. Ihr seid jedoch herzlich eingeladen, externe Animateure, Fotografen oder andere Dienstleister selbst mitzubringen. Sprecht uns gerne an, wenn ihr besondere Ideen habt.',
    },
];

export default function FeiernIdeen() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Taufe, Babyparty & Familienfeiern in Hildesheim',
        description: 'Taufe feiern in Hildesheim, kinderfreundlich und entspannt. Babyparty, Familienfeier oder erster Geburtstag: Vier Elfen bietet den perfekten Rahmen.',
        url: 'https://www.vierelfen.com/ideen/feiern',
        datePublished: '2026-03-30',
        dateModified: '2026-03-30',
        image: 'https://www.vierelfen.com/images/gallery-venue.jpg',
        inLanguage: 'de-DE',
        author: { '@type': 'Organization', name: 'Vier Elfen Kinderlounge', url: 'https://www.vierelfen.com' },
        publisher: {
            '@type': 'Organization',
            name: 'Vier Elfen Kinderlounge',
            url: 'https://www.vierelfen.com',
            logo: { '@type': 'ImageObject', url: 'https://www.vierelfen.com/images/Vier-Elfen-Kinderlounge-Hildesheim-Logo.png' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.vierelfen.com/ideen/feiern' },
    };

    return (
        <div className={styles.page}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Hero
                title="Feiern & besondere Momente"
                subtitlePrefix="Für eure "
                subtitlePhrases={[
                    'Taufe',
                    'Babyparty',
                    'Familienfeier',
                    'unvergesslichen Anlass',
                ]}
                backgroundImage="/images/gallery-venue.jpg"
                backgroundImageAlt="Veranstaltungsraum für Familienfeiern in der Vier Elfen Kinderlounge Hildesheim"
                variant="subpage"
            />

            {/* Intro */}
            <section className={styles.introSection}>
                <div className={styles.article}>
                    <div className={styles.prose}>
                        <p className={styles.leadText}>
                            Manche Momente im Leben sind einmalig. Die Taufe eures Kindes. Die Ankunft eines neuen
                            Geschwisterchens. Der erste Geburtstag. Das sind Augenblicke, die ihr nie vergessen werdet,
                            und die einen besonderen Rahmen verdienen.
                        </p>
                        <p>
                            Nur: Eine Familienfeier zu Hause zu organisieren, die sowohl für Erwachsene als auch für
                            Kinder funktioniert, ist alles andere als einfach. Die Kleinen werden unruhig, die
                            Einrichtung leidet, und ihr als Gastgeber könnt kaum entspannen. Das muss nicht so sein.
                        </p>
                        <p>
                            Bei Vier Elfen in Hildesheim bekommt ihr einen Raum, der genau für solche Momente gemacht
                            ist. Kinderfreundlich, geschmackvoll eingerichtet, und exklusiv für euch. Damit ihr feiern
                            könnt, ohne den ganzen Abend auf die Kinder achten zu müssen.
                        </p>
                    </div>
                </div>
            </section>

            {/* Warum eine Kinderlounge */}
            <section className={`${styles.section} ${styles.sectionAlt}`}>
                <div className={styles.article}>
                    <h2 className={styles.sectionTitle}>Warum eine Kinderlounge ideal für Familienfeiern ist</h2>
                    <div className={styles.prose}>
                        <p>
                            Wenn Kinder bei einer Feier dabei sind, verändert sich alles. Das ist wunderschön, aber
                            auch anspruchsvoll. Kleine Kinder brauchen Beschäftigung, Bewegungsfreiheit und eine
                            sichere Umgebung. Zu Hause bedeutet das: abgesperrte Zimmer, besorgte Blicke auf die
                            Vitrine, und Eltern, die mehr aufpassen als feiern.
                        </p>
                        <p>
                            Unsere Kinderlounge dreht das Verhältnis um. Der gesamte Spielbereich ist speziell für
                            Kinder eingerichtet, mit Spielzeug, Kletterstrukturen und einer Umgebung, die auf
                            Kinderglück ausgelegt ist. Die Kinder sind beschäftigt, sicher und glücklich. Und ihr
                            als Eltern oder Gastgeber könnt das tun, was ihr an diesem Tag tun solltet: feiern,
                            zusammensitzen und diese besonderen Momente genießen.
                        </p>
                        <p>
                            Dazu kommt ein wichtiger Punkt: Ihr habt die Location für euch alleine. Keine fremden
                            Familien, kein geteilter Raum, keine unbekannten Kinder, die mitspielen. Nur eure Familie,
                            eure Freunde und eure Feier. Alles ist sauber vorbereitet, die Dekoration ist aufgebaut,
                            der Tisch ist eingedeckt. Ihr kommt an und könnt sofort anfangen zu genießen.
                        </p>
                        <div className={styles.highlightBox}>
                            <p>
                                Entspannte Erwachsene und glückliche Kinder unter einem Dach. Genau das ist das
                                Versprechen von Vier Elfen bei jeder Familienfeier.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Taufe */}
            <section className={styles.section}>
                <div className={styles.article}>
                    <h2 className={styles.sectionTitle}>Taufe feiern: Feierlich und kindgerecht zugleich</h2>
                    <div className={styles.prose}>
                        <p>
                            Eine Taufe ist ein inniger, ruhiger Moment. Gleichzeitig ist es oft eine der größten
                            Familienzusammenkünfte im Leben eines Kindes. Großeltern reisen an, Onkel und Tanten
                            kommen von weiter weg, und die Altersgruppen könnten unterschiedlicher kaum sein.
                            Neugeborene liegen im Arm ihrer Eltern, Kleinkinder toben, Schulkinder suchen
                            Beschäftigung, und Erwachsene möchten in Ruhe miteinander reden.
                        </p>
                        <p>
                            Genau diese Kombination macht die Vier Elfen Kinderlounge zum idealen Ort für eine Taufe
                            in Hildesheim. Während die größeren Kinder im Spielbereich beschäftigt sind, können die
                            Erwachsenen diesen besonderen Moment in Ruhe miteinander teilen. Niemand wird nervös,
                            niemand muss ständig aufstehen. Die Feier kann ihren natürlichen, ruhigen Lauf nehmen.
                        </p>
                        <p>
                            Die Dekoration passen wir selbstverständlich an den feierlichen Anlass an. Sanfte Farben,
                            zarte Ballons, elegante Tischgestaltung. Eine Taufe muss nicht kitschig sein. Sie darf
                            schlicht und herzlich sein. Bis zu {CAPACITY.total} Gäste finden bei uns Platz, und ihr
                            habt den gesamten Raum exklusiv für euch. Kein Gedränge, keine fremden Stimmen, nur
                            eure Familie in einem warmen, geborgenen Rahmen.
                        </p>
                    </div>
                </div>
            </section>

            {/* Babyparty */}
            <section className={`${styles.section} ${styles.sectionAlt}`}>
                <div className={styles.article}>
                    <h2 className={styles.sectionTitle}>Babyparty: Den neuen Lebensabschnitt gemeinsam feiern</h2>
                    <div className={styles.prose}>
                        <p>
                            Die Babyparty hat sich in Deutschland in den letzten Jahren als schöner Brauch etabliert.
                            Ob vor der Geburt als Überraschungsparty für die werdende Mama, oder danach als
                            Willkommensfeier für das Neugeborene: Es ist ein Fest voller Herzlichkeit, Vorfreude
                            und Liebe. Und genau deshalb verdient es einen Ort, der diese Wärme widerspiegelt.
                        </p>
                        <p>
                            Was eine Babyparty so besonders macht, ist die Intimität. Es ist kein Massenauflauf,
                            sondern ein kleiner, ausgewählter Kreis aus engen Freundinnen und Familie. Eben genau
                            die Menschen, die für die neue Familie da sein werden. In diesem kleinen Kreis entstehen
                            Momente, die noch Jahre später erzählt werden.
                        </p>
                        <p>
                            Bei Vier Elfen habt ihr den perfekten Rahmen für solche Momente. Spiele, die zur
                            Babyparty gehören, funktionieren bei uns wunderbar: ein gemeinsamer Wunschzettel für
                            das Baby, das Bemalen von Babybody-Stramplern, oder Ratespiele rund um Namen und
                            Aussehen. Die Location lässt sich in zarten Pastelltönen dekorieren, mit Ballons,
                            Wimpelketten und persönlichen Akzenten. Und das Schönste: Wir übernehmen die Dekoration.
                            Ihr kommt an und alles ist bereit.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sonstige Familienfeiern */}
            <section className={styles.section}>
                <div className={styles.article}>
                    <h2 className={styles.sectionTitle}>Sonstige Familienfeiern: Wir sind für alle Anlässe da</h2>
                    <div className={styles.prose}>
                        <p>
                            Nicht jede besondere Feier hat einen Namen. Manchmal ist es der erste Geburtstag, bei
                            dem noch mehr Eltern als Kinder im Raum sind. Manchmal ist es die Einschulung, dieser
                            aufgeregte erste große Schritt ins Schulleben. Manchmal ist es einfach ein Familientreffen,
                            bei dem Cousinen und Cousins endlich wieder zusammenkommen.
                        </p>
                        <p>
                            Für all diese Anlässe ist Vier Elfen die richtige Adresse in Hildesheim. Wir sind flexibel,
                            was das Thema betrifft. Wir passen die Dekoration an euren Anlass an. Die Atmosphäre ist
                            immer herzlich, immer einladend, und immer auf Familien ausgerichtet. Egal ob vier Kinder
                            oder vierzehn Kinder, ob Nachmittagsfeier oder Abendveranstaltung: Wir gestalten die
                            Feier gemeinsam mit euch.
                        </p>
                        <div className={styles.highlightBox}>
                            <p>
                                Ihr sucht einen Partyraum in Hildesheim, der Kinder wirklich willkommen heißt?
                                Dann seid ihr bei uns genau richtig.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Was ist inklusive */}
            <section className={`${styles.section} ${styles.sectionAlt}`}>
                <div className={styles.article}>
                    <h2 className={styles.sectionTitle}>Was ist bei Familienfeiern alles inklusive?</h2>
                    <div className={styles.prose}>
                        <p>
                            Wir glauben, dass Feiern so unkompliziert wie möglich sein sollte. Deshalb ist in
                            unserem Paket alles enthalten, was ihr für eine schöne Familienfeier braucht.
                        </p>
                    </div>

                    <div className={styles.includesGrid}>
                        <div className={styles.includesCard}>
                            <h3>Im Paket enthalten</h3>
                            <ul className={styles.checkList}>
                                <li>Exklusive Nutzung für {PRICING.party.duration}</li>
                                <li>Dekoration passend zu eurem Anlass</li>
                                <li>Bis zu 100 Ballons</li>
                                <li>Eingedeckter Tisch für die Kinder</li>
                                <li>3 Liter Getränke (Wasser und Apfelschorle)</li>
                                <li>Knabbereien-Teller für die Kinder</li>
                                <li>Küche, WC und Sitzbereich inklusive</li>
                            </ul>
                        </div>

                        <div className={styles.includesCard}>
                            <h3>Preise</h3>
                            <div className={styles.priceList}>
                                <div className={styles.priceRow}>
                                    <span>{PRICING.party.weekday.label}</span>
                                    <strong>{PRICING.party.weekday.priceFormatted}</strong>
                                </div>
                                <div className={styles.priceRow}>
                                    <span>{PRICING.party.weekend.label}</span>
                                    <strong>{PRICING.party.weekend.priceFormatted}</strong>
                                </div>
                            </div>
                            <h3 className={styles.addonsHeading}>Extras zubuchbar</h3>
                            <div className={styles.addonsList}>
                                {PRICING.addons.map((addon) => (
                                    <div key={addon.name} className={styles.addonItem}>
                                        <span>{addon.name}</span>
                                        <strong>{addon.price}</strong>
                                    </div>
                                ))}
                            </div>
                            <p className={styles.capacityNote}>
                                Maximal {CAPACITY.total} Gäste
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className={styles.faqSection}>
                <div className={styles.article}>
                    <h2 className={styles.sectionTitle}>Häufige Fragen zur Familienfeier</h2>
                    <div className={styles.faqList}>
                        {faqItems.map((item) => (
                            <div key={item.question} className={styles.faqItem}>
                                <h3 className={styles.faqQuestion}>{item.question}</h3>
                                <p className={styles.faqAnswer}>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Bereit, euren besonderen Moment zu feiern?</h2>
                    <p>
                        Jeder Meilenstein im Leben eurer Familie verdient einen schönen Rahmen. Wir machen es
                        einfach, entspannt und unvergesslich. Meldet euch einfach bei uns, wir freuen uns auf eure
                        Feier.
                    </p>
                    <Button href="/kontakt" size="large">
                        Jetzt anfragen
                    </Button>
                </div>
            </section>

            <section className={styles.relatedSection}>
                <div className={styles.container}>
                    <h2 className={styles.relatedTitle}>Weitere Ideen aus der Ideenschmiede</h2>
                    <div className={styles.relatedGrid}>
                        <Link href="/ideen/kindergeburtstag" className={styles.relatedCard}>
                            <span className={styles.relatedIcon}>🎂</span>
                            <strong>Kindergeburtstag in Hildesheim feiern</strong>
                            <span>Mottos, Abläufe und alles zur Geburtstagsfeier bei Vier Elfen</span>
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
