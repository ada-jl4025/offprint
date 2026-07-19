// ─────────────────────────────────────────────────────────────────────────────
// Everything editable lives here. Change a name, add a paper, rebuild.
//
// Nothing at the top of this file is decorative: `site` and `person` feed the
// <head>, the JSON-LD, the sitemap, and robots.txt on every page. Work down
// from the top and the rest of the site follows.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  // The canonical URL. Canonical tags, the sitemap, robots.txt, and the
  // off-site link check all read it, so it has to be right before you deploy.
  url: 'https://example.com',
  lang: 'en',
  // Used as the <meta name="description"> wherever a page doesn't set its own.
  description:
    'Personal site of a researcher — publications, current work, and a CV.',
  // For twitter:creator, with the @. Set to null to leave the tag off.
  twitter: null,
};

export const person = {
  name: 'Your Name',
  // The one sentence. Rewrite this in your own voice — it is the most-read line
  // on the whole site, and the only one most visitors will finish.
  tagline:
    'I work on the parts of the problem everyone agrees are someone else’s job.',
  location: 'Cambridge & Berlin',
  email: 'you@example.com',
  orcid: '0000-0000-0000-0000',
  cv: { href: '/cv.pdf', updated: 'January 2026' },
  photo: {
    src: '/img/portrait.jpg',
    // Describe the photograph, not the person — a reader using a screen reader
    // wants to know what is in the frame.
    alt: 'Placeholder portrait — replace with a photograph of yourself',
    caption: 'Somewhere worth standing.',
  },

  // ── Structured data ───────────────────────────────────────────────────────
  // Emitted as schema.org JSON-LD in <head>: this is what search engines and
  // reference managers read. Empty an array and it is left out of the markup.
  jobTitle: 'Postdoctoral Researcher',
  // `type` defaults to a generic Organization — say CollegeOrUniversity for a
  // degree-granting body and the structured data gets usefully more specific.
  affiliation: [
    { name: 'Example University', url: 'https://example.edu', type: 'CollegeOrUniversity' },
  ],
  alumniOf: [{ name: 'Another University', type: 'CollegeOrUniversity' }],
  knowsAbout: ['Your field', 'A method you use', 'A thing you are known for'],
};

// The colophon at the foot of every page — the printer's note saying what the
// book was set in and who made it. Set this to null and the line disappears.
// Keeping it is appreciated, never required.
export const template = {
  name: 'offprint',
  href: 'https://github.com/ada-jl4025/offprint',
};

// The running head. Drop an entry and the page stops being linked; delete the
// matching file in src/pages/ to remove it altogether. `note` is the gloss the
// 404 page shows beside each link, and is never shown in the head itself.
export const nav = [
  { label: 'Research', href: '/research/', note: 'The questions and what came of them' },
  { label: 'Publications', href: '/publication/', note: 'Papers, preprints, and talks' },
  { label: 'CV', href: '/curriculum-vitae/', note: 'The long version' },
  { label: 'Beyond', href: '/beyond/', note: 'Teaching, service, and everything else' },
];

// Shown under the tagline on the front page, and used for `sameAs` in the
// structured data — which is how a search engine works out that all these
// profiles belong to one person.
export const links = [
  { label: 'Email', href: 'mailto:you@example.com' },
  { label: 'GitHub', href: 'https://github.com/yourhandle' },
  { label: 'Scholar', href: 'https://scholar.google.com/citations?user=XXXXXXXX' },
  { label: 'ORCID', href: 'https://orcid.org/0000-0000-0000-0000' },
];

// ── Now ─────────────────────────────────────────────────────────────────────
// Dated, present-tense, 3–4 items. This is the single most effective
// proof-of-life element on the page — it is how a reader tells a site that is
// maintained from one abandoned in 2019. Prune it when it goes stale.
export const now = [
  {
    date: '2026',
    body: 'Writing up the second half of the thesis, which is the half nobody warned me about.',
  },
  {
    date: '2026',
    body: 'Running the reading group on <a href="https://example.edu">something adjacent to my field</a>, Thursdays.',
  },
  {
    date: '2025',
    body: 'Maintaining a small open-source tool that has more users than my papers have readers.',
  },
];

// ── Selected work ───────────────────────────────────────────────────────────
// The things that aren't papers: tools, software, side projects. `note` is for
// a prize, a venue, or a funder — leave it off and nothing is rendered.
export const work = [
  {
    title: 'A tool people actually use',
    what:
      'Two or three sentences on what it does and, more to the point, why it had to exist. Resist listing features. The reader is deciding whether you are worth an email, and the interesting part is always the problem, not the solution.',
    stack: 'Python · PostgreSQL · a great deal of regex',
    note: 'Best paper, Some Workshop 2025',
    linkset: [
      { label: 'Repo', href: 'https://github.com/yourhandle/project' },
      { label: 'Docs', href: 'https://example.com/docs' },
    ],
  },
  {
    title: 'The side project',
    what:
      'The one with nothing to do with your funding and everything to do with why you got into this. Keep it — it is usually the entry that starts conversations.',
    stack: 'TypeScript · WebGL',
    linkset: [{ label: 'Site', href: 'https://example.com' }],
  },
];

// ── Publications ────────────────────────────────────────────────────────────
// `me: true` bolds the author — set it on yourself. Keep `status` honest:
// "under review" is not a publication, and a reader who checks will know.
// Order is preserved as written; newest first is the convention.
export const publications = [
  {
    status: 'published',
    authors: [
      { name: 'Y. Name', me: true },
      { name: 'A. Colleague' },
      { name: 'B. Supervisor' },
    ],
    title: 'A Title That Says What The Paper Found, Not What It Was About',
    venue: 'Journal of Relevant Things',
    detail: 'vol. 12, no. 3, pp. 45–67',
    year: 2025,
    linkset: [{ label: 'DOI', href: 'https://doi.org/10.0000/example' }],
  },
  {
    status: 'published',
    authors: [{ name: 'A. Colleague' }, { name: 'Y. Name', me: true }],
    title: 'The Conference Paper, Which Came First And Is Shorter',
    venue: 'Proceedings of a Conference With a Long Name (ACRONYM)',
    detail: 'Berlin, Germany',
    year: 2024,
    linkset: [{ label: 'arXiv', href: 'https://arxiv.org/abs/0000.00000' }],
  },
  {
    status: 'under review',
    authors: [{ name: 'Y. Name', me: true }, { name: 'B. Supervisor' }],
    title: 'The One Currently Sitting With Reviewer 2',
    venue: 'Under review',
    year: null,
    linkset: [{ label: 'Preprint', href: 'https://arxiv.org/abs/0000.00000' }],
  },
];

// Rendered as HTML so the separators can't pick up JSX whitespace — otherwise
// you get "Name , A. Colleague" with a space before the comma.
export function authorsHtml(authors) {
  return authors
    .map((a) => (a.me ? `<span class="pub__me">${a.name}</span>` : a.name))
    .join(', ');
}

// `full` adds volume/page detail — used on the publications and CV pages, left
// off the homepage where the list is a summary.
export function venueLine(p, { full = true } = {}) {
  return [p.venue, full ? p.detail : null, p.year].filter(Boolean).join(', ');
}

// ── Experience ──────────────────────────────────────────────────────────────
// `note` is rendered as HTML, so you can link a supervisor or a lab.
export const experience = [
  {
    when: '2025 —',
    role: 'Postdoctoral Researcher',
    org: 'Example University',
    where: 'Cambridge, UK',
    note: 'One line on what you actually do there, with <a href="https://example.edu">whoever you do it with</a>.',
  },
  {
    when: '2024 – 2025',
    role: 'Research Intern',
    org: 'Some Lab',
    where: 'Berlin, Germany',
    note: 'What the project was, and what you were responsible for within it.',
  },
];

export const education = [
  {
    when: '2021 – 2025',
    org: 'Another University',
    where: 'Berlin, Germany',
    what: 'PhD, Your Discipline',
    note: 'Thesis title, or the one-line version of it.',
  },
  {
    when: '2017 – 2021',
    org: 'Undergraduate University',
    where: 'Somewhere, Country',
    what: 'BSc (Hons), Your Subject',
    note: 'A distinction, a prize, or nothing at all.',
  },
];

export const awards = [
  { year: '2025', what: 'A Fellowship Or Grant You Won' },
  { year: '2024', what: 'Best Poster, Conference Acronym' },
  { year: '2021', what: 'Departmental Prize For Something' },
];

// Shown at the foot of the CV page. Empty the array to drop the section.
export const languages = ['English', 'German', 'Enough Python to be dangerous'];
