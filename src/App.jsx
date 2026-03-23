import React, { useState } from "react";

const services = {
  tech: [
    {
      title: "Shopify Store Setup",
      desc: "Launch clean, conversion-focused Shopify stores for merchants ready to sell online.",
    },
    {
      title: "Store Redesign",
      desc: "Refresh outdated stores with stronger structure, clearer messaging, and better user experience.",
    },
    {
      title: "Maintenance & Support",
      desc: "Ongoing fixes, app troubleshooting, store updates, and merchant support when issues appear.",
    },
    {
      title: "Customer Support Setup",
      desc: "Help merchants improve customer experience with structured support systems and workflows.",
    },
  ],
  travel: [
    {
      title: "Hotel Booking",
      desc: "Help clients secure comfortable accommodation that matches budget, timing, and travel goals.",
    },
    {
      title: "Visa Assistance",
      desc: "Guide travelers through visa application steps, document preparation, and booking support.",
    },
    {
      title: "Destination Planning",
      desc: "Recommend great destinations based on budget, purpose, season, and travel style.",
    },
    {
      title: "Reservation Management",
      desc: "Coordinate bookings and travel details to reduce stress and keep plans organized.",
    },
  ],
};

const destinations = [
  { name: "Dubai", blurb: "Luxury, shopping, skyline, and unforgettable city experiences." },
  { name: "Paris", blurb: "Culture, romance, history, and iconic travel moments." },
  { name: "Bali", blurb: "Relaxation, adventure, and scenic escapes for every type of traveler." },
  { name: "Toronto", blurb: "A modern city base with culture, comfort, and global connections." },
  { name: "Istanbul", blurb: "A rich blend of history, food, architecture, and unforgettable views." },
  { name: "Cape Town", blurb: "Nature, coastline, and vibrant experiences in one destination." },
];

const testimonials = [
  {
    name: "Merchant Client",
    text: "The store redesign made our brand look more professional and easier for customers to navigate.",
  },
  {
    name: "Travel Client",
    text: "The booking and visa support made my travel planning far less stressful than doing everything alone.",
  },
  {
    name: "Support Client",
    text: "Fast troubleshooting, clear communication, and practical solutions. Exactly what we needed.",
  },
];

function Button({ children, onClick, type = "button" }) {
  return (
    <button type={type} onClick={onClick} className="btn">
      {children}
    </button>
  );
}

function OutlineButton({ children, onClick, type = "button" }) {
  return (
    <button type={type} onClick={onClick} className="btn btn-outline">
      {children}
    </button>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-text">{text}</p>
    </div>
  );
}

function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false);

  const go = (next) => {
    setPage(next);
    setOpen(false);
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand" onClick={() => go("home")}>
          <div className="brand-icon">T</div>
          <div>
            <p className="brand-top">Tech Solutions + Global Exploration</p>
            <h3>Techexploreservices</h3>
          </div>
        </div>

        <nav className="desktop-nav">
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("tech")}>Shopify Services</button>
          <button onClick={() => go("travel")}>Travel Services</button>
          <button onClick={() => go("destinations")}>Destinations</button>
          <button onClick={() => go("about")}>About</button>
          <button onClick={() => go("contact")}>Contact</button>
        </nav>

        <div className="desktop-cta">
          <Button onClick={() => go("contact")}>Get Started</Button>
        </div>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="mobile-nav container">
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("tech")}>Shopify Services</button>
          <button onClick={() => go("travel")}>Travel Services</button>
          <button onClick={() => go("destinations")}>Destinations</button>
          <button onClick={() => go("about")}>About</button>
          <button onClick={() => go("contact")}>Contact</button>
        </div>
      )}
    </header>
  );
}

function Hero({ setPage }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="badge">One brand with two service divisions.</div>
          <h1>Build better stores. Explore better trips.</h1>
          <p className="hero-text">
            We help merchants build and maintain Shopify stores, and help travelers plan smoother
            journeys with booking, visa, and destination support.
          </p>

          <div className="hero-actions">
            <Button onClick={() => setPage("tech")}>Start a Shopify Project</Button>
            <OutlineButton onClick={() => setPage("travel")}>Plan Your Travel</OutlineButton>
          </div>

          <div className="hero-mini-grid">
            <div className="mini-box">
              <h4>Shopify</h4>
              <p>Build, redesign, maintain</p>
            </div>
            <div className="mini-box">
              <h4>Support</h4>
              <p>Merchant & customer help</p>
            </div>
            <div className="mini-box">
              <h4>Travel</h4>
              <p>Booking, visa, destination</p>
            </div>
          </div>
        </div>

        <div className="hero-cards">
          <Card>
            <h3>Shopify Services</h3>
            <p>
              From store setup to redesign and app troubleshooting, we help merchants run stronger
              stores.
            </p>
            <button className="text-link" onClick={() => setPage("tech")}>
              Explore services
            </button>
          </Card>

          <Card>
            <h3>Travel Services</h3>
            <p>
              From hotel bookings to visa support and destination guidance, we simplify travel
              planning.
            </p>
            <button className="text-link" onClick={() => setPage("travel")}>
              Discover travel help
            </button>
          </Card>

          <Card>
            <div className="feature-list">
              <div>Clean modern branding</div>
              <div>Separate pages for clarity</div>
              <div>Built for trust and conversion</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid({ items }) {
  return (
    <div className="grid-4">
      {items.map((item) => (
        <Card key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </Card>
      ))}
    </div>
  );
}

function HomePage({ setPage }) {
  return (
    <main>
      <Hero setPage={setPage} />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="What we do"
            title="Two focused divisions under one modern brand"
            text="Instead of forcing everything onto one page, the business is structured to serve both merchants and travelers with clarity."
          />

          <div className="grid-2 top-space">
            <Card>
              <h3>For merchants</h3>
              <p>
                Shopify setup, redesign, maintenance, troubleshooting, and structured support for
                smoother ecommerce operations.
              </p>
              <Button onClick={() => setPage("tech")}>View Shopify Services</Button>
            </Card>

            <Card>
              <h3>For travelers</h3>
              <p>
                Hotel booking, visa guidance, reservation support, and destination recommendations
                for better travel planning.
              </p>
              <OutlineButton onClick={() => setPage("travel")}>View Travel Services</OutlineButton>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Featured destinations"
            title="Travel inspiration with structure"
            text="A dedicated destinations page helps the brand feel bigger, more useful, and more discoverable."
          />

          <div className="grid-3 top-space">
            {destinations.slice(0, 3).map((item) => (
              <Card key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.blurb}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Testimonials"
            title="Built on support, trust, and practical help"
            text="The strongest brands feel credible. This area can later be replaced with real client feedback."
          />

          <div className="grid-3 top-space">
            {testimonials.map((item) => (
              <Card key={item.name}>
                <p>“{item.text}”</p>
                <h4>{item.name}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function TechPage() {
  return (
    <main className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Shopify Services"
          title="Build, redesign, support, and maintain merchant stores"
          text="This page focuses fully on your ecommerce side so merchants immediately understand what you offer and why they should trust you."
        />

        <div className="top-space">
          <ServicesGrid items={services.tech} />
        </div>

        <div className="top-space large-box">
          <h3>Real Shopify problems we help solve</h3>
          <p>
            Techexploreservices is built around practical merchant support. This includes fixing
            store issues, improving layouts, supporting merchant operations, and helping stores run
            with less friction.
          </p>

          <div className="grid-4 top-space">
            <Card>
              <h3>Store Setup & Redesign</h3>
              <p>
                Build new Shopify stores from scratch or refresh outdated stores with cleaner
                structure, stronger sections, and better presentation.
              </p>
            </Card>
            <Card>
              <h3>App Conflict Troubleshooting</h3>
              <p>
                Investigate issues caused by apps affecting product pages, cart behavior, reviews,
                bundles, popups, and overall user experience.
              </p>
            </Card>
            <Card>
              <h3>Theme & Layout Fixes</h3>
              <p>
                Work through theme structure, Liquid sections, snippets, styling, and content
                placement to make stores look cleaner and function better.
              </p>
            </Card>
            <Card>
              <h3>Customer Support Systems</h3>
              <p>
                Support merchants with clearer customer service workflows, issue handling, merchant
                communication, and practical problem resolution.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

function TravelPage() {
  return (
    <main className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Travel Services"
          title="Help travelers plan smoother journeys"
          text="This page gives your travel division its own identity while keeping the full brand polished and professional."
        />

        <div className="top-space">
          <ServicesGrid items={services.travel} />
        </div>

        <div className="top-space large-box">
          <h3>We help remove the stress from travel planning</h3>
          <p>
            Instead of leaving travelers to manage everything alone, Techexploreservices helps
            organize the key parts of the journey from destination choice to hotel booking,
            reservations, and visa support.
          </p>

          <div className="grid-4 top-space">
            <Card>
              <h3>Destination Guidance</h3>
              <p>
                Get support choosing destinations based on budget, travel purpose, season, and
                overall experience goals.
              </p>
            </Card>
            <Card>
              <h3>Hotel & Reservation Support</h3>
              <p>
                Receive help finding and organizing accommodation and bookings that align with your
                travel plans.
              </p>
            </Card>
            <Card>
              <h3>Visa Application Assistance</h3>
              <p>
                Get practical guidance through travel requirements, application preparation, and
                booking-related steps.
              </p>
            </Card>
            <Card>
              <h3>Stress-Free Coordination</h3>
              <p>
                Keep your trip better organized with support that makes travel planning simpler and
                more manageable.
              </p>
            </Card>
          </div>
        </div>

        <div className="top-space large-box">
          <h3>How it works</h3>
          <div className="grid-4 top-space">
            <Card><h4>Step 1</h4><p>Choose a destination</p></Card>
            <Card><h4>Step 2</h4><p>Get travel guidance</p></Card>
            <Card><h4>Step 3</h4><p>Complete booking and visa steps</p></Card>
            <Card><h4>Step 4</h4><p>Travel with more confidence</p></Card>
          </div>
        </div>
      </div>
    </main>
  );
}

function DestinationsPage() {
  return (
    <main className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Destinations"
          title="Give the travel side depth, inspiration, and SEO value"
          text="A destinations page makes the business feel richer than a one-page site and creates room for future content and travel guides."
        />

        <div className="grid-3 top-space">
          {destinations.map((item) => (
            <Card key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.blurb}</p>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="section">
      <div className="container narrow">
        <SectionTitle
          eyebrow="About"
          title="One brand with two practical service paths"
          text="Techexploreservices combines digital support for merchants with travel assistance for people who want less stress and better planning."
        />

        <div className="large-box top-space">
          <p>
            The goal is simple: help businesses grow online through Shopify services, while also
            helping travelers move with more confidence through organized travel support.
          </p>
          <p>
            Instead of leaving everything on one crowded landing page, the new structure gives each
            side room to breathe, feel more professional, and convert visitors more clearly.
          </p>
        </div>
      </div>
    </main>
  );
}

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Shopify Services",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      service: "Shopify Services",
      message: "",
    });
  };

  return (
    <main className="section">
      <div className="container narrow">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s build or plan something better"
          text="Send your details through the form for now. Live email delivery can be connected later."
        />

        <form onSubmit={handleSubmit} className="large-box top-space form-box">
          <div className="grid-2">
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label>Service Needed</label>
            <select name="service" value={form.service} onChange={handleChange}>
              <option>Shopify Services</option>
              <option>Travel Services</option>
              <option>General Inquiry</option>
            </select>
          </div>

          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell us what you need help with"
            />
          </div>

          <Button type="submit">Submit Message</Button>

          {submitted && (
            <p className="success-text">
              Message captured successfully. Email integration will be connected later.
            </p>
          )}
        </form>

        <div className="grid-2 top-space">
          <Card>
            <h4>Direct Email</h4>
            <p>techexploreservice@outlook.com</p>
          </Card>
          <Card>
            <h4>Phone / WhatsApp</h4>
            <p>+44 7879 093682</p>
          </Card>
        </div>
      </div>
    </main>
  );
}

function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h3>Techexploreservices</h3>
          <p>Tech Solutions + Global Exploration</p>
        </div>

        <div className="footer-links">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("tech")}>Shopify</button>
          <button onClick={() => setPage("travel")}>Travel</button>
          <button onClick={() => setPage("destinations")}>Destinations</button>
          <button onClick={() => setPage("contact")}>Contact</button>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  let renderedPage;

  switch (page) {
    case "tech":
      renderedPage = <TechPage />;
      break;
    case "travel":
      renderedPage = <TravelPage />;
      break;
    case "destinations":
      renderedPage = <DestinationsPage />;
      break;
    case "about":
      renderedPage = <AboutPage />;
      break;
    case "contact":
      renderedPage = <ContactPage />;
      break;
    default:
      renderedPage = <HomePage setPage={setPage} />;
  }

  return (
    <div className="app">
      <Nav page={page} setPage={setPage} />
      {renderedPage}
      <Footer setPage={setPage} />
    </div>
  );
}