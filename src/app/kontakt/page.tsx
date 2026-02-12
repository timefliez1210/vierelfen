'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import { de } from 'date-fns/locale/de';
import 'react-datepicker/dist/react-datepicker.css';
import Hero from '@/components/Hero';
import styles from './page.module.css';
import { CONTACT, OPENING_HOURS, MAP_EMBED_URL, EVENT_TYPES, CAPACITY } from '@/constants';

registerLocale('de', de);

export default function Kontakt() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const myForm = e.currentTarget;
        const formData = new FormData(myForm);

        // Add the date from DatePicker if selected
        if (selectedDate) {
            formData.set('date', selectedDate.toLocaleDateString('de-DE'));
        }

        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as any).toString(),
            });
            setFormSubmitted(true);
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Es gab ein Problem beim Senden der Anfrage. Bitte versuchen Sie es erneut.');
        }
    };

    if (formSubmitted) {
        return (
            <div className={styles.page}>
                <Hero
                    title="Vielen Dank!"
                    subtitle="Eure Anfrage wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei euch!"
                    backgroundImage="/images/zoo-playarea.jpg"
                    variant="subpage"
                />
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
            <Hero
                title="Kontakt & Buchung"
                subtitle="Habt ihr Fragen oder möchtet eine Feier buchen? Füllt einfach das Formular aus!"
                backgroundImage="/images/zoo-playarea.jpg"
                variant="subpage"
            />

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
                                        selected={selectedDate}
                                        onChange={(date: Date | null) => setSelectedDate(date)}
                                        dateFormat="dd.MM.yyyy"
                                        locale="de"
                                        placeholderText="Datum auswählen"
                                        minDate={new Date()}
                                        className={styles.input}
                                        autoComplete="off"
                                    />
                                    <input
                                        type="hidden"
                                        name="date"
                                        value={selectedDate ? selectedDate.toLocaleDateString('de-DE') : ''}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="event-type" className={styles.label}>Art der Feier</label>
                                    <select id="event-type" name="event-type" className={styles.select}>
                                        <option value="">Bitte auswählen</option>
                                        {EVENT_TYPES.map((type) => (
                                            <option key={type.value} value={type.value}>{type.label}</option>
                                        ))}
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
                                        max={CAPACITY.total}
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
                                    Anfrage senden
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className={styles.infoColumn}>
                            <div className={styles.infoCard}>
                                <h3>📍 Adresse</h3>
                                <p>
                                    {CONTACT.businessName}<br />
                                    {CONTACT.address.street}<br />
                                    {CONTACT.address.zip} {CONTACT.address.city}
                                </p>
                            </div>

                            <div className={styles.infoCard}>
                                <h3>📞 Direkter Kontakt</h3>
                                <p>
                                    <a href={`tel:${CONTACT.phoneLink}`}>{CONTACT.phone}</a>
                                </p>
                                <p>
                                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                                </p>
                            </div>

                            <div className={styles.infoCard}>
                                <h3>🕐 Öffnungszeiten</h3>
                                <p>
                                    Feiern: {OPENING_HOURS.events}<br />
                                    Spätestens bis {OPENING_HOURS.closingTime}<br />
                                    <small>({OPENING_HOURS.note})</small>
                                </p>
                            </div>

                            {/* Map placeholder */}
                            <div className={styles.mapPlaceholder}>
                                <iframe
                                    src={MAP_EMBED_URL}
                                    width="100%"
                                    height="200"
                                    style={{ border: 0, borderRadius: 'var(--radius-xl)' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Standort ${CONTACT.businessName}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
