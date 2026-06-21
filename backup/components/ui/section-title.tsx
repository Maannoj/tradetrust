import * as React from 'react';

interface SectionTitleProps {
  title: string;
  description: string;
}

export function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="section-title">
      <p className="section-overline">Premium trade credit intelligence</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}
