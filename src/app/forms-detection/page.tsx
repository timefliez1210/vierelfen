// This page is used by Netlify to detect forms during build time
// It will not be visible to users
export default function FormsDetection() {
    return (
        <div style={{ display: 'none' }}>
            <form name="kontakt" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="kontakt" />
                <input type="text" name="bot-field" />
                <input type="text" name="name" />
                <input type="email" name="email" />
                <input type="tel" name="phone" />
                <input type="text" name="date" />
                <select name="event-type">
                    <option value="kindergeburtstag">Kindergeburtstag</option>
                    <option value="babyparty">Babyparty</option>
                    <option value="taufe">Taufe</option>
                    <option value="sonstige">Sonstige Feier</option>
                </select>
                <input type="number" name="guests" />
                <textarea name="message" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
