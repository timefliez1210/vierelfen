import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import styles from './page.module.css';
import { CONTACT } from '@/constants';

export const metadata: Metadata = {
    title: 'Spieltermin & offenes Spielen in Hildesheim',
    description: 'Offenes Spielen in Hildesheim: Kinder spielen sicher, Eltern entspannen. Spieltermin bei Vier Elfen Kinderlounge ab 10 € pro Kind.',
};

export default function SpielterminIdeen() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Spieltermin & offenes Spielen in Hildesheim',
        description: 'Offenes Spielen in Hildesheim: Kinder spielen sicher, Eltern entspannen. Spieltermin bei Vier Elfen Kinderlounge ab 10 € pro Kind.',
        url: 'https://www.vierelfen.com/ideen/spieltermin',
        datePublished: '2026-03-30',
        dateModified: '2026-03-30',
        image: 'https://www.vierelfen.com/images/gallery-playarea.jpg',
        inLanguage: 'de-DE',
        author: { '@type': 'Organization', name: 'Vier Elfen Kinderlounge', url: 'https://www.vierelfen.com' },
        publisher: {
            '@type': 'Organization',
            name: 'Vier Elfen Kinderlounge',
            url: 'https://www.vierelfen.com',
            logo: { '@type': 'ImageObject', url: 'https://www.vierelfen.com/images/Vier-Elfen-Kinderlounge-Hildesheim-Logo.png' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.vierelfen.com/ideen/spieltermin' },
    };

    return (
        <div className={styles.page}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Hero
                title="Spieltermin & Kaffeepause"
                subtitlePrefix="Für "
                subtitlePhrases={[
                    'spielende Kinder',
                    'entspannte Eltern',
                    'echte Kaffeepausen',
                    'gemeinsame Momente',
                ]}
                backgroundImage="/images/gallery-playarea.jpg"
                backgroundImageAlt="Kinder spielen im Spielbereich der Vier Elfen Kinderlounge Hildesheim"
                variant="subpage"
            />

            {/* Introduction */}
            <section className={styles.section}>
                <div className={styles.article}>
                    <p className={styles.intro}>
                        Stellt euch vor: Ihr sitzt mit einer Freundin zusammen, haltet eine warme Tasse Kaffee
                        in der Hand und führt tatsächlich ein Gespräch bis zum Ende. Kein Kind zieht euch am
                        Ärmel, kein Turm aus Bausteinen fällt mit lautem Getöse um, niemand braucht dringend
                        einen Saft. Klingt nach einem Traum? Bei Vier Elfen Kinderlounge in Hildesheim ist
                        das ganz normaler Alltag.
                    </p>
                    <p className={styles.prose}>
                        Kinder zu Hause bespielen ist schön, aber ehrlich gesagt auch anstrengend. Jeden Tag
                        neu überlegen, was man macht, den Spieltisch abräumen, damit der Esstisch wieder Platz
                        hat, und nebenbei versuchen, wenigstens eine Tasse Kaffee warm zu trinken. Und ein
                        Spieldate bei jemandem zuhause? Nett gemeint, aber meistens bedeutet das: doppelt
                        so viel Chaos, zu laute Kinder in zu kleinen Räumen und ein Gespräch, das alle
                        drei Minuten unterbrochen wird.
                    </p>
                    <p className={styles.prose}>
                        Genau für diese Momente gibt es das offene Spielen bei Vier Elfen. Ein Ort, an dem
                        Kinder wirklich spielen können, sicher und mit Begeisterung, während ihr daneben
                        sitzt und die Welt mal kurz stehen lassen dürft.
                    </p>
                </div>
            </section>

            {/* Was ist offenes Spielen */}
            <section className={styles.section}>
                <div className={styles.article}>
                    <h2 className={styles.sectionTitle}>Was ist offenes Spielen bei Vier Elfen?</h2>
                    <p className={styles.prose}>
                        Offenes Spielen bedeutet: Ihr kommt zu uns in die Vier Elfen Kinderlounge in
                        Hildesheim, die Kinder haben freien Zugang zum gesamten Spielbereich und ihr
                        müsst nicht aktiv Unterhaltungsprogramm liefern. Das klingt simpel, ist aber
                        für viele Eltern eine kleine Revolution.
                    </p>
                    <p className={styles.prose}>
                        Unsere Kinderlounge bietet altersgerechte Spielzonen mit Kletterstrukturen,
                        Rollenspiel-Ecken, Bau- und Kreativbereichen sowie gemütlichen Rückzugsorten
                        für kleinere Kinder. Die Umgebung ist so gestaltet, dass Kinder ab Laufalter
                        bis etwa 8 Jahre eigenständig spielen, entdecken und sich austoben können,
                        ohne dass ihr jeden Schritt begleiten müsst.
                    </p>
                    <p className={styles.prose}>
                        Ihr bleibt natürlich dabei und habt eure Kinder immer im Blick. Aber „dabei sein"
                        fühlt sich hier anders an als zuhause: entspannt, nicht gehetzt.
                    </p>

                    <div className={styles.priceBox}>
                        <h3 className={styles.priceBoxTitle}>Preise für offenes Spielen</h3>
                        <div className={styles.priceGrid}>
                            <div className={styles.priceItem}>
                                <span className={styles.priceLabel}>Kind</span>
                                <span className={styles.priceValue}>10 €</span>
                                <span className={styles.priceSub}>pro Besuch</span>
                            </div>
                            <div className={styles.priceItem}>
                                <span className={styles.priceLabel}>Erwachsener</span>
                                <span className={styles.priceValue}>5 €</span>
                                <span className={styles.priceSub}>pro Besuch</span>
                            </div>
                        </div>
                        <p className={styles.priceNote}>
                            Dauer: ca. 2 Stunden. Bonuskarte verfügbar (mehr dazu weiter unten).
                        </p>
                    </div>
                </div>
            </section>

            {/* Wie läuft ein Spieltermin ab */}
            <section className={`${styles.section} ${styles.sectionAlt}`}>
                <div className={styles.article}>
                    <h2 className={styles.sectionTitle}>Kinder spielen, Eltern entspannen: So läuft ein Spieltermin ab</h2>
                    <p className={styles.prose}>
                        Ihr kommt an, die Kinder sehen die Spiellandschaft und sind innerhalb von etwa
                        45 Sekunden spurlos verschwunden. Das ist, ehrlich gesagt, der schönste Moment
                        des Tages. Ihr sucht euch einen bequemen Platz, holt euch einen Kaffee, und
                        dann passiert etwas Seltsames: Ihr könnt einfach reden.
                    </p>
                    <p className={styles.prose}>
                        Die Atmosphäre bei Vier Elfen ist bewusst gemütlich gehalten. Kein steriles
                        Spielcenter-Feeling, keine lärmende Halle. Die Kinderlounge ist so konzipiert,
                        dass Kinder genug Anreize haben, um sich selbst zu beschäftigen, ohne dass
                        ihr nach zwei Minuten wieder gefragt werdet, was man denn jetzt spielen soll.
                    </p>
                    <p className={styles.prose}>
                        Ihr könnt in Ruhe miteinander sprechen, Themen besprechen, die bei euch
                        zuhause immer zu kurz kommen, gemeinsam lachen, Pläne schmieden oder
                        einfach mal gar nichts planen. Das Indoor Spielen für Kinder in Hildesheim
                        funktioniert genau dann am besten, wenn Eltern auch wirklich loslassen können.
                        Und das gelingt leichter, wenn die Kinder offensichtlich Spaß haben.
                    </p>

                    <div className={styles.highlightBox}>
                        <h3>Was ist noch möglich?</h3>
                        <ul className={styles.highlightList}>
                            <li>Kaffeemaschine vorhanden: All-you-can-drink für Gruppen (30 €)</li>
                            <li>Popcornmaschine: 20 € für frisches Popcorn nach Herzensluft</li>
                            <li>Kaffeepauschale kann auch als Zusatzoption bei anderen Buchungen gebucht werden</li>
                        </ul>
                        <p className={styles.highlightClose}>
                            So sieht „ich brauche mal eine Pause" in der Praxis aus.
                        </p>
                    </div>
                </div>
            </section>

            {/* Für wen ist es ideal */}
            <section className={styles.section}>
                <div className={styles.article}>
                    <h2 className={styles.sectionTitle}>Für wen ist der Spieltermin in Hildesheim ideal?</h2>
                    <p className={styles.prose}>
                        Kurze Antwort: für fast alle Eltern kleiner Kinder. Lange Antwort:
                    </p>

                    <div className={styles.audienceGrid}>
                        <div className={styles.audienceCard}>
                            <span className={styles.audienceIcon}>👶</span>
                            <h3>Neue Eltern</h3>
                            <p>
                                Wer ein kleines Kind hat, weiß, wie wertvoll der Kontakt zu anderen
                                Eltern ist, die gerade dasselbe durchmachen. Der Spieltermin ist ein
                                unkomplizierter Weg, um Anschluss zu finden.
                            </p>
                        </div>
                        <div className={styles.audienceCard}>
                            <span className={styles.audienceIcon}>🤝</span>
                            <h3>Krabbelgruppen und Spielgruppen Hildesheim</h3>
                            <p>
                                Ihr sucht als Spielgruppe einen festen Treffpunkt mit Platz, Spielzeug
                                und Atmosphäre? Vier Elfen bietet sich als regelmäßiger Veranstaltungsort
                                für bestehende Gruppen an.
                            </p>
                        </div>
                        <div className={styles.audienceCard}>
                            <span className={styles.audienceIcon}>👭</span>
                            <h3>Freundinnen mit Kindern im gleichen Alter</h3>
                            <p>
                                Ihr wollt euch sehen, aber der Kaffee soll diesmal nicht kalt werden.
                                Dann lasst die Kinder spielen und genießt die Zeit zusammen, ohne
                                ständig umzuräumen oder den Lärmpegel zu managen.
                            </p>
                        </div>
                        <div className={styles.audienceCard}>
                            <span className={styles.audienceIcon}>🌿</span>
                            <h3>Eltern in der Elternzeit</h3>
                            <p>
                                Elternzeit ist schön und gleichzeitig intensiv. Erwachsene Unterhaltung
                                kommt manchmal zu kurz. Der Spieltermin bei Vier Elfen gibt euch
                                beides: Zeit mit dem Kind und echte Auszeit vom Dauerbetrieb.
                            </p>
                        </div>
                        <div className={styles.audienceCard}>
                            <span className={styles.audienceIcon}>🧓</span>
                            <h3>Großeltern mit Enkeln</h3>
                            <p>
                                Oma und Opa wollen Zeit mit den Enkeln verbringen, brauchen aber
                                keinen vollgepackten Tag mit Planung und Programm. Eine Runde
                                offenes Spielen ist genau richtig: entspannt, abwechslungsreich,
                                und alle sind danach glücklich.
                            </p>
                        </div>
                        <div className={styles.audienceCard}>
                            <span className={styles.audienceIcon}>📚</span>
                            <h3>Familien, die zuhause unterrichten</h3>
                            <p>
                                Homeschooling-Familien, die einen sozialen Spielraum für ihre Kinder
                                suchen, finden bei Vier Elfen eine offene, stimulierende Umgebung,
                                in der Kinder miteinander spielen und sich frei entfalten können.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Indoor Spielplatz Alternative */}
            <section className={`${styles.section} ${styles.sectionAlt}`}>
                <div className={styles.article}>
                    <h2 className={styles.sectionTitle}>Auf der Suche nach einem Indoor-Spielplatz in Hildesheim?</h2>
                    <p className={styles.prose}>
                        Regen, Wind, Erkältungswelle oder schlicht keine Lust auf Schlamm und nasse Jacken:
                        Klassische Spielplätze haben ihren Charme, aber manchmal braucht man eine Alternative,
                        die drinnen funktioniert. In solchen Momenten suchen Eltern in Hildesheim nach einem
                        Indoor-Spielplatz oder einem Spielparadies, das Kinder wirklich begeistert und nicht
                        nur halbherzig beschäftigt.
                    </p>
                    <p className={styles.prose}>
                        Vier Elfen ist genau das: ein liebevoll eingerichteter Toberaum mit Kletterstrukturen,
                        Rollenspiel-Ecken, Bausteinen und Kreativbereichen, der speziell für kleine Kinder bis
                        etwa 8 Jahre gestaltet wurde. Kein steriles Spielcenter, keine Warteschlangen, keine
                        fremden Kinder, die irgendwann auftauchen und die Dynamik verändern. Stattdessen ein
                        geborgener Raum, in dem euer Kind wirklich ankommen und sich frei entfalten kann.
                    </p>
                    <p className={styles.prose}>
                        Der Unterschied zu klassischen Indoor-Spielplätzen in der Region: Bei Vier Elfen habt
                        ihr die Location für euch. Ob zu zweit oder als kleine Gruppe mit Freunden: Die
                        Atmosphäre bleibt ruhig, überschaubar und angenehm. Ideal für Kinder, die in größeren
                        Spielhallen schnell überstimuliert werden, und für Eltern, die in Ruhe dabei sitzen
                        möchten, ohne den Überblick zu verlieren.
                    </p>
                </div>
            </section>

            {/* Buchen */}
            <section className={styles.section}>
                <div className={styles.article}>
                    <h2 className={styles.sectionTitle}>So bucht ihr euren Spieltermin</h2>
                    <p className={styles.prose}>
                        Für das offene Spielen ist eine vorherige Anmeldung erforderlich. Meldet euch
                        einfach per Telefon oder E-Mail bei uns, damit wir gemeinsam einen passenden
                        Termin finden und sicherstellen können, dass die Lounge für euch frei ist.
                    </p>
                    <p className={styles.prose}>
                        Ihr möchtet mit einer größeren Gruppe kommen oder die gesamte Location exklusiv
                        nutzen? Auch das ist möglich. Eine Privatbuchung des Kinderlounge-Raums lässt sich
                        flexibel vereinbaren, egal ob für eine Spielgruppe, ein Elterncafé Hildesheim
                        oder einen gemütlichen Nachmittag mit mehreren Familien.
                    </p>
                    <p className={styles.prose}>
                        Keine langen Formulare, kein komplizierter Prozess. Einfach kurz melden,
                        Termin klären, und fertig.
                    </p>

                    <div className={styles.contactBox}>
                        <h3 className={styles.contactTitle}>Kontakt</h3>
                        <div className={styles.contactGrid}>
                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>Telefon</span>
                                <a href={`tel:${CONTACT.phoneLink}`} className={styles.contactValue}>{CONTACT.phone}</a>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>E-Mail</span>
                                <a href={`mailto:${CONTACT.email}`} className={styles.contactValue}>{CONTACT.email}</a>
                            </div>
                            <div className={styles.contactItem}>
                                <span className={styles.contactLabel}>Adresse</span>
                                <span className={styles.contactValue}>{CONTACT.address.full}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bonuskarte */}
            <section className={styles.section}>
                <div className={styles.article}>
                    <h2 className={styles.sectionTitle}>Die Bonuskarte: Für alle, die öfter kommen</h2>
                    <p className={styles.prose}>
                        Wenn der Spieltermin einmal zur lieben Gewohnheit geworden ist, und das wird er,
                        lohnt sich die Bonuskarte. Damit spart ihr bei regelmäßigen Besuchen und bekommt
                        sogar ein bisschen mehr als ihr bezahlt habt.
                    </p>

                    <div className={styles.bonusGrid}>
                        <div className={styles.bonusCard}>
                            <span className={styles.bonusIcon}>🧒</span>
                            <h3>Bonuskarte Kinder</h3>
                            <p className={styles.bonusPrice}>100 €</p>
                            <p className={styles.bonusDetail}>10 Besuche bezahlt, 2 gratis dazu. Das macht 12 Besuche gesamt.</p>
                        </div>
                        <div className={styles.bonusCard}>
                            <span className={styles.bonusIcon}>🧑</span>
                            <h3>Bonuskarte Erwachsene</h3>
                            <p className={styles.bonusPrice}>50 €</p>
                            <p className={styles.bonusDetail}>10 Besuche bezahlt, 2 gratis dazu. Das macht 12 Besuche gesamt.</p>
                        </div>
                    </div>

                    <p className={styles.prose}>
                        Perfekt für alle, die den Spieltermin bei Vier Elfen zu ihrem festen Wochenprogramm
                        machen möchten. Und ehrlich gesagt, warum auch nicht?
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={`${styles.section} ${styles.sectionAlt}`}>
                <div className={styles.article}>
                    <h2 className={styles.sectionTitle}>Häufige Fragen zum Spieltermin</h2>

                    <div className={styles.faqSection}>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Ab welchem Alter ist offenes Spielen geeignet?</h3>
                            <p className={styles.faqAnswer}>
                                Generell ab Laufalter, also ungefähr ab einem Jahr. Die Spielbereiche sind
                                so gestaltet, dass auch die Kleinsten sicher erkunden können. Nach oben
                                gibt es keine strenge Grenze, aber besonders schön ist es für Kinder bis
                                etwa 8 Jahre. Geschwisterkinder unterschiedlicher Altersgruppen sind
                                natürlich herzlich willkommen.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Muss ich vorher einen Termin vereinbaren?</h3>
                            <p className={styles.faqAnswer}>
                                Ja, eine Voranmeldung ist notwendig. Die Lounge ist nicht ohne Termin
                                zugänglich, da sie häufig für private Feiern gebucht ist. Ein kurzer
                                Anruf oder eine E-Mail genügt, und wir finden gemeinsam einen passenden
                                Zeitpunkt für euch.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Kann ich eigene Snacks und Getränke mitbringen?</h3>
                            <p className={styles.faqAnswer}>
                                Ja, das ist kein Problem. Ihr könnt eigene Snacks und Getränke mitbringen.
                                Wenn ihr möchtet, könnt ihr auch die Kaffeepauschale oder die Popcornmaschine
                                dazubuchen. Beides sorgt für eine besonders gemütliche Atmosphäre.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Wie lange darf ich bleiben?</h3>
                            <p className={styles.faqAnswer}>
                                Eine offene Spielsession dauert in der Regel etwa 2 Stunden. Das ist
                                erfahrungsgemäß die optimale Zeit: lang genug für echte Entspannung,
                                kurz genug damit die Kinder noch voller Energie nach Hause gehen. Sprecht
                                uns einfach an, wenn ihr besondere Wünsche habt.
                            </p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Kann ich die Location auch exklusiv für eine Spielgruppe buchen?</h3>
                            <p className={styles.faqAnswer}>
                                Absolut. Wer mit einer größeren Gruppe kommt oder die Lounge lieber
                                ganz für sich haben möchte, kann eine Exklusivbuchung anfragen. Das
                                eignet sich besonders für bestehende Spielgruppen Hildesheim, Krabbelgruppen
                                oder Gruppen aus dem Elterncafé-Kontext. Einfach Kontakt aufnehmen und
                                gemeinsam einen Termin finden.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA / Conclusion */}
            <section className={styles.cta}>
                <div className={styles.article}>
                    <h2 className={styles.ctaTitle}>Genug gelesen. Jetzt Termin sichern.</h2>
                    <p className={styles.ctaText}>
                        Ihr habt euren Kaffee heute schon dreimal aufgewärmt und trotzdem kalt getrunken?
                        Das kennen wir. Beim nächsten Mal kommt zu uns: Die Kinder spielen, ihr
                        entspannt, und der Kaffee bleibt warm. Versprochen. Wir freuen uns auf euch
                        in der Vier Elfen Kinderlounge in Hildesheim.
                    </p>
                    <Button href="/kontakt" size="large">
                        Spieltermin anfragen
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
                        <Link href="/ideen/feiern" className={styles.relatedCard}>
                            <span className={styles.relatedIcon}>🎊</span>
                            <strong>Taufe, Babyparty & Familienfeiern</strong>
                            <span>Besondere Familienmomente in der Kinderlounge feiern</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
