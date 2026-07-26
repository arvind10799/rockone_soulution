type Tech = { name: string; file: string };

const techRows: Tech[][] = [
  [
    { name: "Blockchain", file: "blockchain" },
    { name: "Docker", file: "docker" },
    { name: ".NET", file: "dotnet" },
    { name: "C++", file: "cplusplus" },
    { name: "Craft CMS", file: "craftcms" },
    { name: "CSS3", file: "css3" },
    { name: "DigitalOcean", file: "digitalocean" },
    { name: "Ruby on Rails", file: "rails" },
    { name: "React", file: "react" }
  ],
  [
    { name: "Gatsby", file: "gatsby" },
    { name: "Flutter", file: "flutter" },
    { name: "Sanity", file: "sanity" },
    { name: "PHP", file: "php" },
    { name: "Kubernetes", file: "kubernetes" },
    { name: "Python", file: "python" },
    { name: "Laravel", file: "laravel" },
    { name: "Jenkins", file: "jenkins" },
    { name: "TypeScript", file: "typescript" }
  ],
  [
    { name: "JavaScript", file: "javascript" },
    { name: "Java", file: "java" },
    { name: "iOS", file: "apple" },
    { name: "HubSpot", file: "hubspot" },
    { name: "HTML5", file: "html5" },
    { name: "Go", file: "go" },
    { name: "Next.js", file: "nextdotjs" },
    { name: "Node.js", file: "nodedotjs" }
  ]
];

export default function TechStackMarquee() {
  return (
    <section className="tech-section" aria-labelledby="tech-title">
      <div className="tech-head">
        <span className="section-kicker tech-kicker">Technologies we master</span>
        <h2 id="tech-title">
          Absolutely — we&rsquo;ve thoroughly mastered the technologies you prefer.
        </h2>
        <p>
          Our exceptionally skilled specialists are proficient in both classic and
          modern programming languages, as well as frameworks. We aim for excellence,
          working only with top-tier tools when building your product.
        </p>
      </div>

      <div className="tech-marquees">
        {techRows.map((row, rowIndex) => (
          <div className="tech-marquee" key={rowIndex}>
            <div
              className={`tech-marquee-track${rowIndex % 2 === 1 ? " is-reverse" : ""}`}
              style={{ ["--duration" as string]: `${40 + rowIndex * 6}s` }}
            >
              {[0, 1].map((copy) => (
                <div className="tech-marquee-group" key={copy} aria-hidden={copy === 1}>
                  {row.map((tech) => (
                    <span className="tech-pill" key={tech.name}>
                      <img
                        src={`/tech-logos/${tech.file}.svg`}
                        alt=""
                        className="tech-pill-logo"
                        width={22}
                        height={22}
                        loading="lazy"
                      />
                      {tech.name}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
