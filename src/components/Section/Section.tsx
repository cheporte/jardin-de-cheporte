import React from 'react';

import './Section.sass';

type SectionProps = {
    title?: string
    children?: React.ReactNode
}

const Section: React.FC = ({ title, children }: SectionProps) => {
    return (
        <section className="section">
            {title && <h2 className="section-title">{title}</h2>}
            <div className="section-content">{children}</div>
        </section>
    );
}

export default Section;