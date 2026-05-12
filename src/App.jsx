import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const sections = [
  { id: "who", label: "Who I Am" },
  { id: "journey", label: "My Journey" },
  { id: "future", label: "Where I’m Going" },
  { id: "mission", label: "Mission & Vision" },
  { id: "designs", label: "Career Designs" },
  { id: "building", label: "How I’m Building It" },
];

const values = ["Faith", "Family", "Freedom", "Creativity", "Growth", "Purpose", "Service", "Impact"];

const iconMap = {
  arrow: "→",
  compass: "⌖",
  sparkles: "✦",
  heart: "♡",
  briefcase: "▣",
  map: "◇",
  mountain: "△",
  graduation: "◈",
  church: "✚",
  users: "◎",
  lightbulb: "◐",
  route: "↝",
  star: "★",
};

function IconBadge({ icon, className = "" }) {
  return <span aria-hidden="true" className={`icon-badge ${className}`}>{icon}</span>;
}

function Button({ children, href, variant = "primary" }) {
  return <a className={`button ${variant}`} href={href}>{children}</a>;
}

function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

const careerPaths = [
  {
    title: "Product Leader & Innovation Strategist",
    icon: iconMap.briefcase,
    text: "Using problem-solving, communication, systems thinking, and strategy to improve experiences for people and organizations.",
    steps: ["Lead strategic projects", "Build product skills", "Prototype through PO/PM conversations"],
  },
  {
    title: "Entrepreneur & Business Builder",
    icon: iconMap.sparkles,
    text: "Continuing to grow business ventures while creating practical solutions that serve others and build long-term independence.",
    steps: ["Scale service business", "Create systems", "Explore future wellness or beauty ventures"],
  },
  {
    title: "Lifestyle Designer",
    icon: iconMap.route,
    text: "Designing a flexible life that blends remote work, family, RV travel, content creation, creativity, and meaningful impact.",
    steps: ["Build flexibility", "Travel intentionally", "Create a family-centered lifestyle brand"],
  },
];

const compassValues = [
  { label: "Faith", angle: 0 },
  { label: "Family", angle: 45 },
  { label: "Freedom", angle: 90 },
  { label: "Creativity", angle: 135 },
  { label: "Growth", angle: 180 },
  { label: "Purpose", angle: 225 },
  { label: "Service", angle: 270 },
  { label: "Impact", angle: 315 },
];

const timeline = [
  {
    title: "A Nontraditional Beginning",
    text: "After high school, Kaela became a mother and began balancing college, work, and family responsibilities earlier than expected.",
  },
  {
    title: "Starting, Stopping, and Returning",
    text: "Through work, motherhood, financial pressure, and changing seasons, she kept returning to education even when the path was not easy.",
  },
  {
    title: "Building Resilience",
    text: "Layoffs, setbacks, and denied opportunities became fuel for perseverance, adaptability, and renewed purpose.",
  },
  {
    title: "Nearing Graduation",
    text: "Today, she is finishing her degree while working in technology and business analysis, carrying the lesson that success is not always a straight line.",
  },
];

const galleryImages = [
  {
    src: "/images/PSX_20160329_094926.jpg",
    alt: "Family moment",
    title: "Motherhood & Purpose",
    caption: "The experiences that shaped my resilience and motivation.",
    className: "feature",
  },
  {
    src: "/images/20160605_180940.jpg",
    alt: "CompTIA certification book",
    title: "Technology Journey",
    caption: "",
    className: "",
  },
  {
    src: "/images/20160627_180915.jpg",
    alt: "Sullivan University building",
    title: "Education & Growth",
    caption: "",
    className: "",
  },
  {
    src: "/images/IMG_7728.jpg",
    alt: "Choir and community",
    title: "Faith, Music & Community",
    caption: "",
    className: "wide",
  },
  {
    src: "/images/IMG_2360.jpeg",
    alt: "Family partnership",
    title: "Love & Partnership",
    caption: "",
    className: "",
  },
  {
    src: "/images/IMG_4179.jpeg",
    alt: "Travel memory",
    title: "Travel & Exploration",
    caption: "",
    className: "",
  },
];

export function portfolioSelfTests() {
  return {
    hasEightValues: values.length === 8,
    hasThreeOdysseyPaths: careerPaths.length === 3,
    everyPathHasSteps: careerPaths.every((path) => path.steps.length >= 3),
    compassAnglesAreValid: compassValues.every((value) => value.angle >= 0 && value.angle < 360),
    noExternalIconDependency: Object.values(iconMap).every((icon) => typeof icon === "string" && icon.length > 0),
    galleryUsesPublicImages: galleryImages.every((image) => image.src.startsWith("/images/")),
  };
}

export default function KaelaPDPWebsite() {
  return (
    <div className="site">
      <div className="glow glow-purple" />
      <div className="glow glow-gold" />

      <header className="header">
        <nav className="nav">
          <a href="#top" className="brand">Kaela Gerron</a>
          <div className="nav-links">
            {sections.map((item) => (
              <a key={item.id} href={`#${item.id}`}>{item.label}</a>
            ))}
          </div>
          <Button href="#final" variant="light">Final Message</Button>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="container hero-grid">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }}>
              <div className="eyebrow-pill"><IconBadge icon={iconMap.compass} /> Designing My Life Portfolio</div>
              <h1>I’m not just planning my life — <span>I’m designing it.</span></h1>
              <p className="lead">A personal development portfolio about faith, family, resilience, creativity, purpose, and building a future with intention.</p>
              <div className="button-row">
                <Button href="#who">Begin the Journey <IconBadge icon={iconMap.arrow} /></Button>
                <Button href="#designs" variant="outline">Explore Life Designs</Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }}>
              <Card className="hero-card">
                <div className="portrait-card">
                  <img src="/images/IMG_5136.jpeg" alt="Travel and life design" />
                  <div className="portrait-overlay" />
                  <div className="portrait-content">
                    <div>
                      <p className="mini-label">PDP Showcase</p>
                      <h2>Faith. Purpose. Growth. Service.</h2>
                    </div>
                    <div className="value-grid">
                      {values.slice(0, 6).map((value) => <div key={value}>{value}</div>)}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="gallery" className="section">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}>
              <p className="eyebrow">Moments That Shaped Me</p>
              <h2 className="section-title wide-title">My life has been built through family, growth, learning, faith, travel, and transformation.</h2>
            </motion.div>
            <div className="gallery">
              {galleryImages.map((image) => (
                <div key={image.src} className={`gallery-item ${image.className}`}>
                  <img src={image.src} alt={image.alt} />
                  <div className="gallery-overlay" />
                  <div className="gallery-caption">
                    <h3>{image.title}</h3>
                    {image.caption ? <p>{image.caption}</p> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="who" className="section">
          <motion.div className="container split" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}>
            <div>
              <p className="eyebrow">Who Am I?</p>
              <h2 className="section-title">A woman of faith, family, resilience, and creativity.</h2>
            </div>
            <Card>
              <p>My name is Kaela Gerron. I am happily married to Reggie, a mom of four, a grandmother of four, and I live in Westfield, Indiana. I currently work as a Senior IT Business Analyst for a local financial services firm in Indianapolis.</p>
              <p>My hobbies include traveling, camping, singing in the choir, and creating songs. My academic path began in computer programming, but through experience, growth, and several gap years, it evolved into General Studies — a path that reflects the full story of who I am becoming.</p>
            </Card>
          </motion.div>
        </section>

        <section id="journey" className="section muted">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="narrow">
              <p className="eyebrow">How Did I Get Here?</p>
              <h2 className="section-title">The longest journeys can teach the greatest lessons.</h2>
            </motion.div>
            <div className="timeline">
              {timeline.map((item, index) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.08 }}>
                  <Card>
                    <div className="number">{index + 1}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="future" className="section">
          <div className="container split">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}>
              <p className="eyebrow">Where Am I Going?</p>
              <h2 className="section-title">A future centered around freedom, creativity, faith, family, and impact.</h2>
              <p className="lead small">After years of surviving, adapting, and pushing through challenges, I am now intentionally creating a future that feels meaningful, balanced, and aligned with who I truly am.</p>
            </motion.div>
            <div className="mini-card-grid">
              {[
                [iconMap.mountain, "RV travel & exploration"],
                [iconMap.lightbulb, "Creative problem-solving"],
                [iconMap.users, "Family-centered living"],
                [iconMap.heart, "Wellness & positive impact"],
              ].map(([icon, text]) => (
                <Card key={text}>
                  <IconBadge icon={icon} className="large-icon" />
                  <h3>{text}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="mission" className="section muted">
          <motion.div className="container center narrow" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}>
            <IconBadge icon={iconMap.church} className="jumbo-icon" />
            <p className="eyebrow">Mission & Vision</p>
            <h2 className="section-title">To live rooted in faith, purpose, growth, and service.</h2>
            <p className="lead small">My mission is to create meaningful experiences for my family and others while continuing to grow personally and professionally. My vision is a balanced life where faith, family, creativity, and freedom work together rather than compete against one another.</p>
          </motion.div>

          <div className="container compass-grid">
            <motion.div initial={{ opacity: 0, rotate: -8, scale: 0.94 }} whileInView={{ opacity: 1, rotate: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="compass">
              <div className="ring outer" />
              <div className="ring middle" />
              <motion.div className="ring inner" animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} />
              <motion.div className="needle" animate={{ rotate: [0, 8, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
              <div className="center-dot" />
              <div className="compass-center">
                <IconBadge icon={iconMap.compass} className="jumbo-icon" />
                <h3>My Values Compass</h3>
                <p>What keeps me aligned</p>
              </div>
              {compassValues.map((value) => {
                const rad = (value.angle * Math.PI) / 180;
                const x = 50 + 42 * Math.sin(rad);
                const y = 50 - 42 * Math.cos(rad);
                return <motion.div key={value.label} className="compass-label" style={{ left: `${x}%`, top: `${y}%` }} whileHover={{ scale: 1.12 }}>{value.label}</motion.div>;
              })}
            </motion.div>

            <div className="value-list">
              {values.map((value, index) => (
                <motion.div key={value} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }}>
                  <Card className="value-row">
                    <div className="number small-number">{index + 1}</div>
                    <h3>{value}</h3>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="pursuit" className="section">
          <div className="container split">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}>
              <p className="eyebrow">My Life Pursuit</p>
              <h2 className="section-title">Learning, leading, creating, and growing with intention.</h2>
            </motion.div>
            <Card>
              <p>Academically, I plan to complete my bachelor’s degree and continue learning through certifications, leadership training, and hands-on experience.</p>
              <p>Professionally, I am drawn to Product Management, UX design, Agile leadership, and innovation strategy because they align with my strengths in problem-solving, creativity, and improving systems for others.</p>
              <p>Personally, I want to keep exploring balance, purpose, identity, spiritual growth, and lifestyle design as I enter new transitions in life.</p>
            </Card>
          </div>
        </section>

        <section id="designs" className="section muted">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="narrow">
              <p className="eyebrow">Career & Life Designs</p>
              <h2 className="section-title">Interactive Odyssey Paths</h2>
              <p className="lead small">Instead of searching for one perfect answer, I am designing multiple possible futures and testing them through conversations, experiences, and small experiments.</p>
            </motion.div>

            <div className="odyssey-grid">
              {careerPaths.map((path, index) => (
                <motion.div key={path.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -8 }}>
                  <Card className="path-card">
                    <div className="path-top">
                      <IconBadge icon={path.icon} className="large-icon" />
                      <span>Path {index + 1}</span>
                    </div>
                    <h3>{path.title}</h3>
                    <p>{path.text}</p>
                    <div className="steps">
                      {path.steps.map((step, stepIndex) => (
                        <div key={step} className="step">
                          <span>{stepIndex + 1}</span>
                          <p>{step}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div className="process" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              {[
                ["01", "Imagine", "Name the possible future."],
                ["02", "Prototype", "Test it through small actions."],
                ["03", "Iterate", "Keep what fits and redesign what does not."],
              ].map(([num, title, text]) => (
                <div key={num}>
                  <h3>{num}</h3>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="building" className="section">
          <div className="container split">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}>
              <p className="eyebrow">How I’m Building It</p>
              <h2 className="section-title">Through action, prototyping, relationships, and trust in the process.</h2>
              <p className="lead small">I am building my future by taking intentional action instead of waiting for everything to feel certain. Growth happens through experimentation, conversations, and real-life experiences.</p>
            </motion.div>
            <div className="build-list">
              {[
                [iconMap.graduation, "Complete my bachelor’s degree and continue learning through certifications and leadership development."],
                [iconMap.briefcase, "Take on more strategic product, technology, and leadership opportunities at work."],
                [iconMap.map, "Grow entrepreneurial ideas while exploring RV travel, content creation, and flexible lifestyle design."],
                [iconMap.users, "Use relationships, networking, mentorship, and community as part of the design process."],
              ].map(([icon, text]) => (
                <Card key={text} className="build-row">
                  <IconBadge icon={icon} className="build-icon" />
                  <p>{text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="final" className="section final-section">
          <motion.div className="container final-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}>
            <IconBadge icon={iconMap.star} className="jumbo-icon" />
            <p className="eyebrow">Final Message</p>
            <h2>I’m not just planning my life — I’m designing it.</h2>
            <p>This portfolio represents a life built through resilience, faith, creativity, family, growth, and intentional design.</p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
