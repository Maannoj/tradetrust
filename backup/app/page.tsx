import Link from 'next/link';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { SectionTitle } from '../components/ui/section-title';

const featureItems = [
  {
    title: 'GSTIN-backed identity',
    description: 'Verify textile suppliers and buyers with a reliable legal identity layer.',
  },
  {
    title: 'Evidence-friendly claims',
    description: 'Attach invoices, inspection reports, and shipment documents to every claim.',
  },
  {
    title: 'Real-time risk signals',
    description: 'Monitor payment behavior, disputes, and credit health continuously.',
  },
  {
    title: 'Enterprise workflows',
    description: 'Manage approvals, dispute resolution, and audit-ready reporting from one dashboard.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Resolve suppliers',
    description: 'Search companies by GSTIN and align them to verified textile market profiles.',
  },
  {
    step: '02',
    title: 'Capture claims',
    description: 'Log evidence-backed claims with supporting documentation and business context.',
  },
  {
    step: '03',
    title: 'Monitor risk',
    description: 'Track emerging disputes, stress signals, and credit exposure across your network.',
  },
];

const pricingPlans = [
  {
    name: 'Core',
    price: '₹19,999',
    cadence: 'per month',
    description: 'Foundational intelligence for textile wholesalers and traders.',
    bullets: ['Supplier trust scoring', 'Claim tracking', '5 seats', 'Email alerts'],
  },
  {
    name: 'Enterprise',
    price: '₹49,999',
    cadence: 'per month',
    description: 'Advanced workflows for manufacturers and multi-location distributors.',
    bullets: ['Custom dashboards', 'Audit-ready reports', '20 seats', 'Priority support'],
    featured: true,
  },
  {
    name: 'Elite',
    price: 'Custom',
    cadence: 'tailored plan',
    description: 'Full platform scope for large trading networks and financing teams.',
    bullets: ['Dedicated success team', 'API access', 'Unlimited seats', 'SLA commitment'],
  },
];

export default function HomePage() {
  return (
    <main className="landing-shell">
      <section className="landing-hero section">
        <div className="landing-hero-copy">
          <Badge variant="subtle">Textile trade intelligence</Badge>
          <h1>TradeTrust delivers credit clarity for textile commerce.</h1>
          <p>
            Built for wholesalers, saree manufacturers and fabric traders who need verified supplier trust, evidence-backed claims, and resilient credit workflows.
          </p>
          <div className="landing-hero-actions">
            <Button size="large">Request a demo</Button>
            <Link href="#pricing">
              <Button variant="ghost">View pricing</Button>
            </Link>
          </div>
          <div className="landing-highlight">
            <span>99.98%</span>
            <p>platform availability for mission-critical trade teams</p>
          </div>
        </div>

        <Card className="landing-hero-panel">
          <div className="hero-panel-label">
            <span>Company search</span>
            <Badge>GSTIN validation</Badge>
          </div>
          <h2>Find textile companies instantly</h2>
          <p>Search by GSTIN to surface financial health, risk signals, and supplier reputation in seconds.</p>
          <div className="landing-search-card">
            <Input placeholder="Enter company GSTIN" />
            <Button className="landing-search-button">Search</Button>
          </div>
          <div className="search-metadata">
            <span>1.3K+ companies indexed</span>
            <span>4.8M daily risk updates</span>
          </div>
        </Card>
      </section>

      <section className="section search-cta">
        <SectionTitle
          title="Search companies with confidence"
          description="GSTIN-backed company resolution for every supplier and buyer in your textile network."
        />
        <Card className="search-cta-card">
          <div>
            <h3>Start with a GSTIN lookup</h3>
            <p>Validate identities quickly and uncover credit insights before you approve a new trading relationship.</p>
          </div>
          <div className="search-cta-form">
            <Input placeholder="GSTIN or company identifier" />
            <Button variant="gold">Search now</Button>
          </div>
        </Card>
      </section>

      <section className="section features-section">
        <SectionTitle
          title="Features built for textile finance teams"
          description="A single platform for supplier trust, claims validation, and credit decisioning."
        />
        <div className="features-grid">
          {featureItems.map((feature) => (
            <Card key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <SectionTitle title="How TradeTrust works" description="A simple, repeatable workflow for managing trade credit and supplier risk." />
        <div className="process-grid">
          {processSteps.map((step) => (
            <Card key={step.step} className="process-card">
              <span className="process-step">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="pricing" className="section pricing-section">
        <SectionTitle title="Pricing for growing textile businesses" description="Flexible, enterprise-ready plans that scale with your trade network." />
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              <div className="pricing-headline">
                <span>{plan.name}</span>
                {plan.featured ? <Badge>Most popular</Badge> : null}
              </div>
              <div className="pricing-amount">
                <span>{plan.price}</span>
                <small>{plan.cadence}</small>
              </div>
              <p>{plan.description}</p>
              <ul>
                {plan.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <Button variant={plan.featured ? 'gold' : 'secondary'} className="pricing-action">
                {plan.featured ? 'Get started' : 'Choose plan'}
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <footer className="footer-panel">
        <div className="footer-inner">
          <div>
            <p className="footer-logo">TradeTrust</p>
            <p className="footer-copy">Enterprise-grade trade credit intelligence for the textile ecosystem.</p>
          </div>
          <div className="footer-links">
            <Link href="#">Platform</Link>
            <Link href="#">Security</Link>
            <Link href="#">Contact us</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
