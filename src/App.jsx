import React, { useState } from "react";
import logoImg from "./assets/logo.jpeg";
import heroTech from "./assets/hero-tech.jpeg";
import heroTravel from "./assets/hero-travel.jpeg";
import shopifyImg from "./assets/shopify-service.jpeg";
import travelImg from "./assets/travel-service.jpeg";
import dubaiImg from "./assets/dubai.jpeg";
import parisImg from "./assets/paris.jpeg";
import baliImg from "./assets/bali.jpeg";
import torontoImg from "./assets/toronto.jpeg";
import istanbulImg from "./assets/istanbul.jpeg";
import capeTownImg from "./assets/capetown.jpeg";

const services = {
  tech: [
    {
      title: "Shopify Store Setup",
      desc: "We build clean, conversion-ready Shopify stores for brands that want a strong online presence, clear product presentation, and a smoother path to sales.",
      image: shopifyImg,
      cta: "Launch Your Store",
    },
    {
      title: "Store Redesign",
      desc: "We refresh existing Shopify stores with better structure, stronger visuals, improved messaging, and a more polished shopping experience.",
      image: shopifyImg,
      cta: "Upgrade Your Store",
    },
    {
      title: "Maintenance & Support",
      desc: "We provide ongoing Shopify support including store updates, bug fixes, app issue resolution, and practical help to keep your store running smoothly.",
      image: shopifyImg,
      cta: "Get Ongoing Support",
    },
    {
      title: "Customer Experience Support",
      desc: "We help improve the way your store supports customers through clearer workflows, smoother issue handling, and better service touchpoints.",
      image: shopifyImg,
      cta: "Improve Customer Experience",
    },
  ],
  travel: [
    {
      title: "Hotel Booking",
      desc: "We help travelers secure accommodation that matches their destination, budget, comfort level, and travel schedule.",
      image: travelImg,
      cta: "Book Accommodation",
    },
    {
      title: "Visa Assistance",
      desc: "We provide guidance through visa-related steps, document preparation, and travel support to help clients move forward with more clarity.",
      image: travelImg,
      cta: "Get Visa Support",
    },
    {
      title: "Destination Planning",
      desc: "We recommend destinations based on travel goals, budget, season, and the type of experience each client wants to enjoy.",
      image: travelImg,
      cta: "Plan Your Destination",
    },
    {
      title: "Travel Coordination",
      desc: "We help organize reservations and important travel details so journeys feel more structured, manageable, and less stressful.",
      image: travelImg,
      cta: "Organize My Trip",
    },
  ],
};

const destinations = [
  {
    name: "Dubai",
    blurb: "Luxury, shopping, skyline, and unforgettable city experiences.",
    image: dubaiImg,
  },
  {
    name: "Paris",
    blurb: "Culture, romance, history, and iconic travel moments.",
    image: parisImg,
  },
  {
    name: "Bali",
    blurb: "Relaxation, adventure, and scenic escapes for every type of traveler.",
    image: baliImg,
  },
  {
    name: "Toronto",
    blurb: "A modern city base with culture, comfort, and global connections.",
    image: torontoImg,
  },
  {
    name: "Istanbul",
    blurb: "A rich blend of history, food, architecture, and unforgettable views.",
    image: istanbulImg,
  },
  {
    name: "Cape Town",
    blurb: "Nature, coastline, and vibrant experiences in one destination.",
    image: capeTownImg,
  },
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

function Nav({ setPage }) {
  const [open, setOpen] = useState(false);

  const go = (next) => {
    setPage(next);
    setOpen(false);
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand" onClick={() => go("home")}>
          <div className="logo-wrap">
            <img
              src={logoImg}
              alt="Techexploreservices logo"
              className="logo-image"
            />
          </div>

          <div className="brand-text">
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
            We help merchants build and maintain Shopify stores, while also
            helping travelers plan smoother journeys with booking, visa, and
            destination support.
          </p>

          <div className="hero-actions">
            <Button onClick={() => setPage("tech")}>
              Start a Shopify Project
            </Button>
            <OutlineButton onClick={() => setPage("travel")}>
              Plan Your Travel
            </OutlineButton>
          </div>

          <div className="hero-actions second-row">
            <Button onClick={() => setPage("contact")}>
              Book Free Consultation
            </Button>
          </div>

          <div className="hero-mini-grid">
            <div className="mini-box">
              <h4>Shopify</h4>
              <p>Build, redesign, and maintain high-performing stores.</p>
            </div>
            <div className="mini-box">
              <h4>Support</h4>
              <p>Merchant guidance and customer support solutions.</p>
            </div>
            <div className="mini-box">
              <h4>Travel</h4>
              <p>Booking, visa assistance, and destination planning.</p>
            </div>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img
            src={heroTech}
            alt="Shopify and travel services"
            className="hero-image"
          />
          <div className="hero-overlay-card">
            <h3>Ready to grow or travel better?</h3>
            <p>Get support tailored to your business goals or travel plans.</p>
            <Button onClick={() => setPage("contact")}>Contact Us Today</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid({ items, setPage }) {
  return (
    <div className="grid-4">
      {items.map((item) => (
        <Card key={item.title}>
          <img src={item.image} alt={item.title} className="card-image" />
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <Button onClick={() => setPage("contact")}>{item.cta}</Button>
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
            text="Techexploreservices supports growing businesses with Shopify services and helps travelers plan with clarity through structured travel assistance."
          />

          <div className="grid-2 top-space">
            <Card>
              <img
                src={shopifyImg}
                alt="Shopify services"
                className="card-image"
              />
              <h3>For merchants</h3>
              <p>
                Shopify setup, redesign, maintenance, troubleshooting, and
                structured support for smoother ecommerce operations.
              </p>
              <Button onClick={() => setPage("tech")}>
                View Shopify Services
              </Button>
            </Card>

            <Card>
              <img
                src={heroTravel}
                alt="Travel services"
                className="card-image"
              />
              <h3>For travelers</h3>
              <p>
                Hotel booking, visa guidance, reservation support, and
                destination recommendations for better travel planning.
              </p>
              <OutlineButton onClick={() => setPage("travel")}>
                View Travel Services
              </OutlineButton>
            </Card>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Featured destinations"
            title="Travel inspiration with structure"
            text="Discover destinations that inspire travel decisions while showcasing the planning and support available through our travel services."
          />

          <div className="grid-3 top-space">
            {destinations.slice(0, 3).map((item) => (
              <Card key={item.name}>
                <img src={item.image} alt={item.name} className="card-image" />
                <h3>{item.name}</h3>
                <p>{item.blurb}</p>
                <Button onClick={() => setPage("contact")}>
                  Inquire About {item.name}
                </Button>
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
            text="Our work is built around clarity, support, and practical results for both businesses and travelers."
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

      <section className="section">
        <div className="container cta-banner">
          <div>
            <h2>Ready to work with Techexploreservices?</h2>
            <p>Let’s help you launch, improve, or plan with confidence.</p>
          </div>
          <div className="hero-actions">
            <Button onClick={() => setPage("contact")}>Get Started Now</Button>
            <OutlineButton onClick={() => setPage("about")}>
              Learn More
            </OutlineButton>
          </div>
        </div>
      </section>
    </main>
  );
}

function TechPage({ setPage }) {
  return (
    <main className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Shopify Services"
          title="Build, improve, and support your Shopify store"
          text="We help Shopify brands launch, improve, and maintain stores that look professional, work smoothly, and support better customer experiences from product discovery to checkout."
        />

        <div className="top-space">
          <ServicesGrid items={services.tech} setPage={setPage} />
        </div>

        <div className="top-space large-box">
          <h3>Real Shopify problems we help solve</h3>
          <p>
            Techexploreservices is built around practical merchant support. We
            help fix store issues, improve layouts, support day-to-day
            operations, and reduce friction across the shopping experience.
          </p>

          <div className="grid-4 top-space">
            <Card>
              <h3>Store Setup & Redesign</h3>
              <p>
                Build new Shopify stores from scratch or refresh outdated stores
                with cleaner structure, stronger sections, and better
                presentation.
              </p>
            </Card>
            <Card>
              <h3>App Conflict Troubleshooting</h3>
              <p>
                Investigate issues caused by apps affecting product pages, cart
                behavior, reviews, bundles, popups, and overall user experience.
              </p>
            </Card>
            <Card>
              <h3>Theme & Layout Fixes</h3>
              <p>
                Work through theme structure, Liquid sections, snippets,
                styling, and content placement to make stores look cleaner and
                function better.
              </p>
            </Card>
            <Card>
              <h3>Customer Support Systems</h3>
              <p>
                Support merchants with clearer customer service workflows, issue
                handling, merchant communication, and practical problem
                resolution.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

function TravelPage({ setPage }) {
  return (
    <main className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Travel Services"
          title="Help travelers plan smoother journeys"
          text="We support travelers with destination planning, hotel booking, visa guidance, and practical coordination for smoother journeys."
        />

        <div className="top-space">
          <ServicesGrid items={services.travel} setPage={setPage} />
        </div>

        <div className="top-space large-box">
          <h3>We help remove the stress from travel planning</h3>
          <p>
            Instead of leaving travelers to manage everything alone,
            Techexploreservices helps organize the key parts of each journey,
            from destination choice to hotel booking, reservation management,
            and visa support.
          </p>

          <div className="grid-4 top-space">
            <Card>
              <h3>Destination Guidance</h3>
              <p>
                Get support choosing destinations based on budget, travel
                purpose, season, and the overall experience you want.
              </p>
            </Card>
            <Card>
              <h3>Hotel & Reservation Support</h3>
              <p>
                Receive help finding and organizing accommodation and bookings
                that align with your travel plans and comfort preferences.
              </p>
            </Card>
            <Card>
              <h3>Visa Application Assistance</h3>
              <p>
                Get practical guidance through travel requirements, application
                preparation, and booking-related steps.
              </p>
            </Card>
            <Card>
              <h3>Stress-Free Coordination</h3>
              <p>
                Keep your trip better organized with support that makes travel
                planning simpler, smoother, and easier to manage.
              </p>
            </Card>
          </div>
        </div>

        <div className="top-space large-box">
          <h3>How it works</h3>
          <div className="grid-4 top-space">
            <Card>
              <h4>Step 1</h4>
              <p>Choose your destination and travel goals.</p>
            </Card>
            <Card>
              <h4>Step 2</h4>
              <p>Receive guidance on booking and travel requirements.</p>
            </Card>
            <Card>
              <h4>Step 3</h4>
              <p>Complete hotel, reservation, and visa-related steps.</p>
            </Card>
            <Card>
              <h4>Step 4</h4>
              <p>Travel with more confidence and less stress.</p>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

function DestinationsPage({ setPage }) {
  return (
    <main className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Destinations"
          title="Explore featured destinations"
          text="Explore featured destinations designed to inspire travelers and create room for future guides, recommendations, and booking-focused content."
        />

        <div className="grid-3 top-space">
          {destinations.map((item) => (
            <Card key={item.name}>
              <img src={item.image} alt={item.name} className="card-image" />
              <h3>{item.name}</h3>
              <p>{item.blurb}</p>
              <Button onClick={() => setPage("contact")}>
                Plan a Trip to {item.name}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

function AboutPage({ setPage }) {
  return (
    <main className="section">
      <div className="container narrow">
        <SectionTitle
          eyebrow="About"
          title="One brand with two practical service paths"
          text="Techexploreservices is built to support brands that want stronger Shopify stores and travelers who want better planning support."
        />

        <div className="large-box top-space">
          <p>
            The goal is simple: help businesses grow online through Shopify
            services, while also helping travelers move with more confidence
            through organized travel support.
          </p>
          <p>
            Instead of leaving everything on one crowded landing page, this
            structure gives each side of the brand room to breathe, feel more
            professional, and convert visitors more clearly.
          </p>
          <div className="hero-actions">
            <Button onClick={() => setPage("contact")}>Work With Us</Button>
          </div>
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
          text="Whether you need Shopify support or travel assistance, use the form below to tell us how we can help."
        />

        <div className="contact-top-box top-space">
          <Card>
            <h4>Need Shopify help?</h4>
            <p>
              Store setup, redesign, support, troubleshooting, and
              growth-focused structure.
            </p>
          </Card>
          <Card>
            <h4>Need travel assistance?</h4>
            <p>
              Hotel booking, destination planning, reservation support, and
              visa guidance.
            </p>
          </Card>
        </div>

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
              Message captured successfully. Email integration will be connected
              later.
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
      renderedPage = <TechPage setPage={setPage} />;
      break;
    case "travel":
      renderedPage = <TravelPage setPage={setPage} />;
      break;
    case "destinations":
      renderedPage = <DestinationsPage setPage={setPage} />;
      break;
    case "about":
      renderedPage = <AboutPage setPage={setPage} />;
      break;
    case "contact":
      renderedPage = <ContactPage />;
      break;
    default:
      renderedPage = <HomePage setPage={setPage} />;
  }

  return (
    <div className="app">
      <Nav setPage={setPage} />
      {renderedPage}
      <Footer setPage={setPage} />
    </div>
  );
}