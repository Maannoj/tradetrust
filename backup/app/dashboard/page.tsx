import { Card } from '../../components/ui/card';

export default function DashboardPage() {
  return (
    <section className="dashboard-page">
      <div className="dashboard-hero">
        <div>
          <p className="page-overline">Overview</p>
          <h1>Trade credit insights at a glance</h1>
          <p>Monitor credit risk, supplier trust, and dispute activity across your textile network.</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <Card className="dashboard-card">Overview tile</Card>
        <Card className="dashboard-card">Company risk score</Card>
        <Card className="dashboard-card">Claims activity</Card>
        <Card className="dashboard-card">Dispute progress</Card>
      </div>
    </section>
  );
}
