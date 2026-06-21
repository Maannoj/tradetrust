'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { SectionTitle } from '../components/ui/section-title';

const trustedMetrics = [
  { label: 'Suppliers verified', value: '1,260+' },
  { label: 'Claims reviewed', value: '18.4K' },
  { label: 'Daily risk signals', value: '4.6M' },
  { label: 'Platform uptime', value: '99.98%' },
];

const productShowcase = [
  {
    title: 'GSTIN-backed supplier identity',
    description:
      'Resolve textile suppliers, distributors, and exporters with authenticated company profiles before credit decisions.',
  },
  {
    title: 'Structured claim workflows',
    description:
      'Track invoices, inspection notes, and delivery evidence in a single source of truth for faster dispute resolution.',
  },
  {
    title: 'Live exposure intelligence',
    description:
      'Monitor payment trends, overdue exposure, and portfolio concentration across trading corridors.',
  },
];

const riskFeatures = [
  'Credit grade with payment history signal',
  'Document provenance and dispute traceability',
  'Custom threshold alerts for export and domestic trade',
  'Portfolio heatmaps for buyer-supplier exposure',
];

const tradeScoreItems = [
  'Creditworthiness',
  'Claims reliability',
  'Supplier stability',
  'Financial resilience',
];

const pricingPlans = [
  {
    name: 'Foundation',
    price: '₹24,999',
    cadence: 'per month',
    description: 'For wholesale teams starting supplier verification and claim operations.',
    bullets: ['GSTIN company lookup', 'Claims tracking', '10 seats', 'Email alerts'],
  },
  {
    name: 'Growth',
    price: '₹55,000',
    cadence: 'per month',
    description: 'For risk and treasury teams managing broader textile portfolios.',
    bullets: ['Advanced risk insights', 'Dispute workflows', '20 seats', 'Priority onboarding'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'tailored plan',
    description: 'For large manufacturers and trading houses with bespoke compliance needs.',
    bullets: ['API access', 'Unlimited seats', 'Dedicated success', 'SLA-backed support'],
  },
];

export default function HomePage() {
  return (
    <main className="landing-shell">
      <section className="landing-nav">
        <div className="landing-brand">TradeTrust</div>
        <nav className="landing-links">
          <Link href="#metrics">Metrics</Link>
          <Link href="#showcase">Platform</Link>
          <Link href="#risk">Risk</Link>
          <Link href="#pricing">Pricing</Link>
        </nav>
        <Button variant="ghost">Request demo</Button>
      </section>

      <section className="landing-hero" id="hero">
        <div className="landing-hero-copy">
          <Badge>Fintech-grade textile intelligence</Badge>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Enterprise credit intelligence for textile commerce.
          </motion.h1>
          <p>
            Verify supplier identity, capture evidence, and quantify counterparty exposure so trading teams can approve orders faster and manage credit with confidence.
          </p>
          <div className="landing-hero-actions">
            <Button size="large">Start free trial</Button>
            <Button variant="ghost">Book a walkthrough</Button>
          </div>
          <p className="landing-hero-support">
            Trusted by textile finance teams across mills, wholesalers, and export houses.
          </p>
        </div>

        <Card className="landing-hero-panel">
          <div className="hero-panel-top">
            <span>Supplier risk lookup</span>
            <Badge variant="subtle">GSTIN-backed</Badge>
          </div>
          <motion.div
            className="landing-search-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Input placeholder="GSTIN or company name" />
            <Button variant="gold" className="landing-search-button">Lookup</Button>
          </motion.div>
          <div className="hero-search-meta">
            <span>1,260+ textile suppliers verified</span>
            <span>4.6M risk signals updated daily</span>
          </div>
        </Card>
      </section>

      <section className="section trusted-metrics" id="metrics">
        <SectionTitle
          title="Trusted metrics that accelerate credit decisions"
          description="Measure supplier trust, claims momentum, and portfolio exposure with the intelligence finance teams need to move faster."
        />
        <div className="metrics-grid">
          {trustedMetrics.map((metric) => (
            <Card key={metric.label} className="metric-card">
              <p className="metric-value">{metric.value}</p>
              <p className="metric-label">{metric.label}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section showcase-section" id="showcase">
        <div className="showcase-copy">
          <SectionTitle
            title="A focused platform for textile credit workflows"
            description="From supplier verification to exposure monitoring, TradeTrust connects the data teams need with the workflows finance teams use."
          />
          <div className="showcase-list">
            {productShowcase.map((item) => (
              <Card key={item.title} className="showcase-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section how-it-works" id="how">
        <SectionTitle
          title="How TradeTrust supports textile credit decisions"
          description="A simple workflow for onboarding, documenting, and protecting trade relationships."
        />
        <div className="workflow-grid">
          <Card className="workflow-card">
            <span>1</span>
            <h3>Resolve identity</h3>
            <p>Link every buyer and supplier to an authenticated GSTIN profile.</p>
          </Card>
          <Card className="workflow-card">
            <span>2</span>
            <h3>Document claims</h3>
            <p>Attach invoices, delivery notes, and quality checks to each credit event.</p>
          </Card>
          <Card className="workflow-card">
            <span>3</span>
            <h3>Measure exposure</h3>
            <p>Track open disputes, overdue payments, and concentration across suppliers and buyers.</p>
          </Card>
        </div>
      </section>

      <section className="section risk-features" id="risk">
        <SectionTitle
          title="Risk intelligence for textile supply chains"
          description="A compact feature set designed to expose credit risk and build stronger trade relationships."
        />
        <div className="feature-list">
          {riskFeatures.map((feature) => (
            <Card key={feature} className="feature-item">
              <p>{feature}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section trade-score">
        <SectionTitle
          title="Trade Score system"
          description="A composite score that blends credit, claims quality, and supplier reliability for smarter approvals."
        />
        <div className="trade-score-grid">
          {tradeScoreItems.map((item) => (
            <Card key={item} className="score-card">
              <h3>{item}</h3>
            </Card>
          ))}
        </div>
      </section>

      <section className="section testimonials-placeholder">
        <Card className="testimonial-card">
          <p>
            TradeTrust is designed to feel like a modern enterprise finance platform, with a credit-first approach that supports textiles from mill to market.
          </p>
        </Card>
      </section>

      <section className="section pricing-section" id="pricing">
        <SectionTitle
          title="Pricing for enterprise textile finance teams"
          description="Flexible enterprise plans that support scaling supply chains and faster decision cycles."
        />
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              <div className="pricing-label">
                <span>{plan.name}</span>
                {plan.featured ? <Badge>Most popular</Badge> : null}
              </div>
              <div className="pricing-cost">
                <span>{plan.price}</span>
                <small>{plan.cadence}</small>
              </div>
              <p>{plan.description}</p>
              <ul className="pricing-bullets">
                {plan.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <Button variant={plan.featured ? 'gold' : 'secondary'} className="pricing-action">
                {plan.featured ? 'Start growth' : 'Choose plan'}
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <footer className="footer-panel">
        <div className="footer-inner">
          <div>
            <p className="footer-logo">TradeTrust</p>
            <p className="footer-copy">Credit intelligence for India’s textile ecosystem.</p>
          </div>
          <div className="footer-links">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Support</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
