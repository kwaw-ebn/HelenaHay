const contacts = [
  { label: "0244837234", number: "233244837234" },
  { label: "0244448077", number: "233244448077" },
];

function whatsapp(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

const steps = [
  ["Send your request", "Share a photo or link, the specifications, and how many you need."],
  ["Review the actual item", "When we find an option, we send you photos or a video of the item so you can check the details."],
  ["Approve the purchase", "We buy the item after you approve it and share updates as it makes its way to Ghana."],
];

export default function Home() {
  const primary = contacts[0].number;
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="wrap nav">
        <a className="brand" href="/">HelenaHay</a>
        <nav aria-label="Main navigation">
          <a href="#shop">Shop in Ghana</a>
          <a href="#sourcing">China sourcing</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main id="main">
        <section className="hero">
          <div className="wrap hero-inner">
            <div>
              <p className="eyebrow">Ghana retail · China sourcing</p>
              <h1>Shop in Ghana or source from China with confidence.</h1>
              <p>Ask about products available in Ghana, or let us find an item for you in China. See a real product video before you approve your purchase.</p>
              <div className="actions">
                <a className="button" href="#shop">Shop available products</a>
                <a className="button outline" href="#sourcing">Source from China</a>
              </div>
            </div>
            <aside className="note">
              <p className="eyebrow">Product inspection</p>
              <p className="statement">See the item before we buy it for you.</p>
              <p>Tell us what details you want to see when you send your request.</p>
            </aside>
          </div>
        </section>
        <section id="shop" className="wrap section">
          <p className="eyebrow">Local stock</p>
          <h2>Shop in Ghana</h2>
          <p>Products haven’t been listed online yet. Message us to check current stock, prices in Ghana cedis and delivery options.</p>
          <a className="button outline" href={whatsapp(primary, "Hello HelenaHay, what products are currently available in Ghana?")}>Ask about stock on WhatsApp</a>
        </section>
        <section id="sourcing" className="band">
          <div className="wrap section">
            <p className="eyebrow">Personal sourcing</p>
            <h2>How China sourcing works</h2>
            <ol className="steps">
              {steps.map(([title, detail], index) => <li key={title}>
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{title}</h3><p>{detail}</p>
              </li>)}
            </ol>
            <a className="button" href={whatsapp(primary, "Hello HelenaHay, I’d like to request an item from China. Item: ")}>Request sourcing on WhatsApp</a>
          </div>
        </section>
        <section className="wrap section">
          <h2>China trips and common questions</h2>
          <details><summary>When do you travel to China?</summary><p>We typically travel twice a year. Contact us to confirm current dates and request deadlines.</p></details>
          <details><summary>Can I see the item before you buy it?</summary><p>Yes. We share actual product photos or video for your review before you approve the purchase.</p></details>
          <details><summary>How do I confirm the price and delivery?</summary><p>Send us the item details and your delivery location so we can discuss the cost and timing with you.</p></details>
        </section>
      </main>
      <footer id="contact">
        <div className="wrap section">
          <h2>Contact HelenaHay</h2>
          <p>Reach us on WhatsApp or use these numbers to find us on WeChat.</p>
          <div className="actions">{contacts.map(({ label, number }) => <a key={number} className="button outline" href={whatsapp(number, "Hello HelenaHay, I have an inquiry.")}>WhatsApp {label}</a>)}</div>
        </div>
      </footer>
    </>
  );
}
