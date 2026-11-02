'use client';

import { useState } from 'react';

const certificates = [
  { id: 248, title: 'Cybersecurity', issuer: 'Asian Development Bank Institute (ADBI) e-Learning', detail: 'Certificate of Completion · 28 October 2026 · Certificate ID 210611-179-318-3953', year: '2026', category: 'Technology' },
  { id: 237, title: 'Internship Completion', issuer: 'Pulsing with the Purpose of Medical and Life Sciences', detail: 'Completed a one-month internship program', year: '2026', category: 'Experience' },
  { id: 236, title: 'Graphic Design', issuer: 'KMD', detail: 'Competence in Photoshop, Illustrator and AI-assisted image editing', year: '2026', category: 'Technology' },
  { id: 235, title: 'Information & Communication Technology', issuer: 'Telenor', detail: 'Certificate of competence; included at least 11 hours of hands-on experience', year: '', category: 'Technology' },
  { id: 234, title: 'Vocational Course', issuer: 'Dual Tech Institute of Vocational Education', detail: 'Certificate of appreciation for successful course completion', year: '', category: 'Technology' },
  { id: 238, title: 'Animal Agents Review Competition', issuer: 'British Council · Reading Agency', detail: 'Third Prize, Grade 6-D', year: '', category: 'Achievement' },
  { id: 245, title: 'Animal Agents Reading Challenge', issuer: 'British Council · Reading Agency', detail: 'Participation certificate', year: '', category: 'Achievement' },
  { id: 246, title: 'Space Chase Reading Challenge', issuer: 'British Council · Reading Agency', detail: 'Participation certificate', year: '2019', category: 'Achievement' },
  { id: 247, title: 'Primary Plus 6', issuer: 'British Council', detail: 'Student progress and learning record', year: '2019', category: 'Education' },
  ...[231,232,233,239,240,241,242,243,244].map((id, i) => ({
    id, title: `Academic Certificate ${i + 1}`, issuer: 'Myanmar · Academic record',
    detail: 'Scanned academic certificate included in the supplied collection', year: '', category: 'Education'
  }))
];

const filters = ['All', 'Technology', 'Experience', 'Achievement', 'Education'];

export default function Home() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const shown = certificates.filter(c => filter === 'All' || c.category === filter);

  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#">KZT<span>.</span></a>
        <div className="navlinks"><a href="#about">About</a><a href="#work">Projects</a><a href="#academic">Academic journey</a><a href="#certificates">Certificates</a></div>
      </nav>

      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><i/> PORTFOLIO · 2026</div>
          <h1>Curious mind.<br/><em>Digital builder.</em></h1>
          <p className="intro">I’m <strong>Kyaw Zin Thu</strong>, an aspiring cybersecurity and technology student from Myanmar. I’m building a foundation in digital security while creating practical web and learning projects and pursuing international scholarship opportunities.</p>
          <div className="hero-actions"><a className="button primary" href="#work">Explore my work <span>↗</span></a><a className="text-link" href="#certificates">View certificates ↓</a></div>
          <div className="hero-meta"><span>BASED IN MYANMAR</span><span>CYBERSECURITY · WEB · DESIGN</span></div>
        </div>
        <div className="hero-art" aria-label="Decorative abstract graphic">
          <div className="orb orb-one"/><div className="orb orb-two"/>
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          <div className="art-center"><span>BUILD</span><b>✳</b><span>LEARN · CREATE</span></div>
          <div className="art-tag tag-top">01 / ALWAYS LEARNING</div><div className="art-tag tag-bottom">IDEAS INTO IMPACT ↗</div>
        </div>
      </section>

      <section className="ticker"><div>CYBERSECURITY <b>✳</b> WEB DEVELOPMENT <b>✳</b> CREATIVE TECHNOLOGY <b>✳</b> CONTINUOUS LEARNING <b>✳</b> CYBERSECURITY <b>✳</b> WEB DEVELOPMENT <b>✳</b></div></section>

      <section className="section wrap" id="about">
        <div className="section-kicker">01 / ABOUT</div>
        <div className="about-grid"><h2>Technology is<br/>better when it<br/><em>solves something.</em></h2>
          <div className="about-text"><p>I’m developing my skills across information technology, cybersecurity, web development and digital design. I’m especially interested in understanding how systems work, how they can be protected, and how technology can make everyday tasks easier.</p><p>My approach is simple: stay curious, build consistently, and learn from every project.</p>
            <div className="chips"><span>Cybersecurity</span><span>Web development</span><span>Problem solving</span><span>Digital design</span></div>
          </div>
        </div>
      </section>

      <section className="section academic-section" id="academic"><div className="wrap">
        <div className="section-kicker">02 / ACADEMIC JOURNEY</div>
        <div className="section-head"><h2>Learning with <em>purpose.</em></h2><p>Academic opportunities and independent learning that are shaping my next steps.</p></div>
        <div className="journey-grid">
          <article className="journey-card journey-featured">
            <div className="journey-label">ADMISSION & SCHOLARSHIP OFFER · 2026</div>
            <h3>Vietnam Maritime University (VMU)</h3>
            <p className="journey-subtitle">Undergraduate Marine Engineering · English-taught programme</p>
            <p>I was offered admission to VMU for the October 2026–October 2030 study period, with a scholarship covering tuition, dormitory fees if required, and student medical insurance. The admission notice states that airfare, textbooks, documents, and visa-approval costs are not covered.</p>
            <div className="journey-note"><strong>Why I could not enroll</strong><p>Although I was deeply grateful for this opportunity, my grandfather’s illness created an urgent family responsibility. I needed to remain with him and help care for his health while I still had the opportunity to do so. After careful consideration, I made the very difficult decision to forgo this scholarship and my planned enrollment at VMU so that I could support my grandfather during this important time. This decision was made out of love and responsibility for my family, and it does not diminish my gratitude to VMU. I sincerely appreciate the university’s support throughout the admission and visa application processes, and I remain committed to pursuing higher education when my circumstances allow.</p></div>
            <div className="journey-actions"><a href="/documents/vmu-admission-notice-redacted.pdf" target="_blank" rel="noreferrer">View redacted admission notice ↗</a></div>
            <span className="journey-foot">Status: Unable to enroll for the 2026 intake</span>
          </article>
          <article className="journey-card journey-learning">
            <div className="journey-label">CONTINUOUS LEARNING · 28 OCT 2026</div>
            <h3>Cybersecurity Certificate</h3>
            <p className="journey-subtitle">ADBI Institute e-Learning</p>
            <p>Completed the ADBI e-Learning course titled <em>Cybersecurity</em>. This certificate is one step in my ongoing effort to build foundational knowledge in digital security.</p>
            <div className="journey-actions"><a href="/documents/adbi-cybersecurity-certificate.pdf" target="_blank" rel="noreferrer">View original certificate ↗</a><a href="https://elearning-adbi.org/certificate-verifier/?&code=210611-179-318-3953" target="_blank" rel="noreferrer">Verify certificate ↗</a></div>
          </article>
        </div>
      </div></section>

      <section className="section work-section" id="work"><div className="wrap">
        <div className="section-kicker">03 / SELECTED WORK</div><div className="section-head"><h2>Things I’m <em>building.</em></h2><p>Projects that reflect my curiosity and interest in creating useful digital experiences.</p></div>
        <div className="project-grid">
          <article className="project-card project-dark"><div className="project-top"><span>01 — PLATFORM</span><span>IN PROGRESS ↗</span></div><div className="project-visual visual-tso"><div className="tso-mark">TSO<span>.</span></div><div className="visual-caption">TALENT · SKILLS · OPPORTUNITY</div><div className="floating-card">Find your<br/><b>next opportunity.</b></div></div><h3>TalentShowOff</h3><p>A platform concept connecting people with job opportunities, learning resources and community-driven opportunities.</p><div className="tags"><span>Web platform</span><span>Community</span><span>Product thinking</span></div></article>
          <article className="project-card project-light"><div className="project-top"><span>02 — LEARNING</span><span>IN PROGRESS ↗</span></div><div className="project-visual visual-edu"><div className="edu-window"><div className="window-bar"><i/><i/><i/></div><div className="edu-title">Learn. Practice.<br/><b>Improve.</b></div><div className="edu-lines"><i/><i/><i/></div><div className="edu-pill">AI-ASSISTED LEARNING</div></div></div><h3>TSO Edu</h3><p>An English-learning experience focused on grammar practice, writing support and AI-assisted learning tools.</p><div className="tags"><span>EdTech</span><span>AI learning</span><span>English</span></div></article>
        </div>
      </div></section>

      <section className="section wrap skills-section">
        <div className="section-kicker">04 / INTERESTS & SKILLS</div><div className="skills-grid"><h2>What I’m<br/><em>focused on.</em></h2><div className="skill-list">
          {[['01','Cybersecurity','Learning security fundamentals, safe computing and how to protect digital systems.'],['02','Web development','Building responsive websites and exploring modern frontend workflows.'],['03','Digital design','Creating visual content and working with graphic-design tools.'],['04','English & communication','Improving communication skills for international learning and collaboration.']].map(([n,t,d])=><div className="skill-row" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><b>↗</b></div>)}
        </div></div>
      </section>

      <section className="section cert-section" id="certificates"><div className="wrap">
        <div className="section-kicker">05 / LEARNING RECORD</div><div className="section-head"><h2>Certificates & <em>milestones.</em></h2><p>A selection of certificates and learning records from my academic, technology and extracurricular journey.</p></div>
        <div className="filters">{filters.map(f=><button key={f} onClick={()=>setFilter(f)} className={filter===f?'active':''}>{f}</button>)}</div>
        <div className="cert-grid">{shown.map(c=><button className="cert-card" key={c.id} onClick={()=>setSelected(c)}><div className="cert-thumb"><img src={`/certificates/${c.id}.jpg`} alt={`${c.title} certificate`} loading="lazy"/><span>VIEW ↗</span></div><div className="cert-info"><div className="cert-meta"><span>{c.category}</span><span>{c.year || 'CERTIFICATE'}</span></div><h3>{c.title}</h3><p>{c.issuer}</p></div></button>)}</div>
        <p className="cert-note">Select a certificate to view its scan. The ADBI Cybersecurity certificate is available as an original PDF above. Some academic records are in Burmese.</p>
      </div></section>

      <section className="contact-section" id="contact"><div className="wrap contact-inner"><div className="section-kicker">06 / CONTACT</div><h2>Have an idea?<br/><em>Let’s connect.</em></h2><p>I’m open to learning opportunities, collaborations and conversations about technology.</p><a className="button primary" href="#academic">Review academic journey <span>↗</span></a><small>For scholarship applications, please use the contact details provided in my application documents.</small></div></section>
      <footer className="footer wrap"><a className="brand" href="#">KZT<span>.</span></a><span>Designed with curiosity · © 2026 Kyaw Zin Thu</span><a href="#">BACK TO TOP ↑</a></footer>

      {selected && <div className="modal" role="dialog" aria-modal="true" onClick={()=>setSelected(null)}><div className="modal-inner" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelected(null)} aria-label="Close">×</button><img src={`/certificates/${selected.id}.jpg`} alt={`${selected.title} original certificate`}/><div className="modal-caption"><div><h3>{selected.title}</h3><p>{selected.issuer} · {selected.detail}</p></div><a href={`/certificates/${selected.id}.jpg`} target="_blank" rel="noreferrer">Open original ↗</a></div></div></div>}
    </main>
  );
}
