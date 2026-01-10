'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import { de } from 'date-fns/locale/de';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './page.module.css';

registerLocale('de', de);

export default function Kontakt() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
            });
            setFormSubmitted(true);
        } catch (error) {
            console.error('Form submission error:', error);
        }
    };

    if (formSubmitted) {
        return (
            <div className={styles.page}>
                <section className={styles.pageHeader}>
                    <div className={styles.container}>
                        <h1>✅ Vielen Dank!</h1>
                        <p>Eure Anfrage wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei euch!</p>
                    </div>
                </section>
                <section className={styles.thankYou}>
                    <div className={styles.container}>
                        <a href="/" className={styles.backButton}>← Zurück zur Startseite</a>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            {/* Page Header */}
            <section className={styles.pageHeader}>
                <div className={styles.container}>
                    <h1>📬 Kontakt & Buchung</h1>
                    <p>
                        Habt ihr Fragen oder möchtet eine Feier buchen? Füllt einfach das Formular aus!
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.contactGrid}>
                        {/* Contact Form */}
                        <div className={styles.formCard}>
                            <h2>Anfrage senden</h2>
                            <form
                                name="kontakt"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                            >
                                <input type="hidden" name="form-name" value="kontakt" />
                                <p className={styles.hidden}>
                                    <label>
                                        Don&apos;t fill this out: <input name="bot-field" />
                                    </label>
                                </p>

                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.label}>Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className={styles.input}
                                        placeholder="Euer Name"
                                    />
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.label}>E-Mail *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className={styles.input}
                                            placeholder="email@beispiel.de"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone" className={styles.label}>Telefon</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className={styles.input}
                                            placeholder="0176 12345678"
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="date" className={styles.label}>Gewünschtes Datum 📅</label>
                                    <DatePicker
                                        id="date"
                                        name="date"
                                        selected={selectedDate}
                                        onChange={(date: Date | null) => setSelectedDate(date)}
                                        dateFormat="dd.MM.yyyy"
                                        locale="de"
                                        placeholderText="Datum auswählen"
                                        minDate={new Date()}
                                        className={styles.input}
                                        autoComplete="off"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="event-type" className={styles.label}>Art der Feier</label>
                                    <select id="event-type" name="event-type" className={styles.select}>
                                        <option value="">Bitte auswählen</option>
                                        <option value="kindergeburtstag">Kindergeburtstag</option>
                                        <option value="babyparty">Babyparty</option>
                                        <option value="taufe">Taufe</option>
                                        <option value="sonstige">Sonstige Feier</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="guests" className={styles.label}>Anzahl Gäste (ca.)</label>
                                    <input
                                        type="number"
                                        id="guests"
                                        name="guests"
                                        className={styles.input}
                                        placeholder="z.B. 20"
                                        min="1"
                                        max="30"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>Nachricht</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className={styles.textarea}
                                        placeholder="Erzählt uns von euren Wünschen und Ideen..."
                                        rows={5}
                                    />
                                </div>

                                <button type="submit" className={styles.submitButton}>
                                    Anfrage senden 🎉
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className={styles.infoColumn}>
                            <div className={styles.infoCard}>
                                <h3>📍 Adresse</h3>
                                <p>
                                    Vier Elfen Kinderlounge<br />
                                    Junkersstraße 11A<br />
                                    31137 Hildesheim
                                </p>
                            </div>

                            <div className={styles.infoCard}>
                                <h3>📞 Direkter Kontakt</h3>
                                <p>
                                    <a href="tel:+4917659960500">0176 59960500</a>
                                </p>
                                <p>
                                    <a href="mailto:hallo@vierelfen.com">hallo@vierelfen.com</a>
                                </p>
                            </div>

                            <div className={styles.infoCard}>
                                <h3>🕐 Öffnungszeiten</h3>
                                <p>
                                    Feiern: Nach Vereinbarung<br />
                                    Spätestens bis 19:00 Uhr<br />
                                    <small>(andere Zeiten nach Absprache)</small>
                                </p>
                            </div>

                            {/* Map placeholder */}
                            <div className={styles.mapPlaceholder}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.8!2d9.95!3d52.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEwJzEyLjAiTiA5wrA1NycwMC4wIkU!5e0!3m2!1sde!2sde!4v1234567890"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Standort Vier Elfen Kinderlounge"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
