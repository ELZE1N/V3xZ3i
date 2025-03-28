import Link from 'next/link';

const WRITE_UPS = [
  {
    slug: 'sample-write-up',
    title: 'Sample Write-up: XSS Vulnerability',
    date: '2024-03-20',
    tags: ['xss'],
  },
  // Add more write-ups here as you create them
];

export default function Home() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();

  // Calculate days since starting security studies
  const startDate = new Date('2024-02-28');
  const today = new Date();
  const daysSinceStart = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  const asciiArt = `      _____       Z3iTremor
    \\-     -/     -------------------------
 \\_/         \\    Name:    Zein
 |        O O |   Study:   Security for ${daysSinceStart} days
 |_  <   )  3 )   Status:  Hunt
 / \\         /
    /-_____-\\`;

  return (
    <div className="min-h-screen">
      <div className="terminal-header">
        <div>[Home] <Link href="/projects">[Projects]</Link> <Link href="/progress">[Progress]</Link></div>
      </div>

      <section className="mb-8">
        <h1 className="text-xl mb-4">> Welcome</h1>
        <p className="intro-text">
          I'm Zein, also known as Z3iTremor. I'm a bug hunter and penetration tester.
          Here I share my progress, write up my findings, share my methodologies and knowledge.
          And yes, I love watching anime!
        </p>

        <div className="mb-4">
          <p className="find-me">Find me on:</p>
          <div className="links-list">
            <div>* <a href="https://x.com/ZElN_7" target="_blank" rel="noopener noreferrer">[Twitter (x.com/ZElN_7)]</a></div>
            <div>* <a href="mailto:mostafselzein@gmail.com">[Email (mostafselzein@gmail.com)]</a></div>
            <div>* <a href="https://hackerone.com/z3itremor" target="_blank" rel="noopener noreferrer">[HackerOne (hackerone.com/z3itremor)]</a></div>
            <div>* <a href="https://bugcrowd.com/Z3iTremor" target="_blank" rel="noopener noreferrer">[Bugcrowd (bugcrowd.com/Z3iTremor)]</a></div>
            <div>* <a href="https://medium.com/@z3itremor" target="_blank" rel="noopener noreferrer">[Medium (medium.com/@z3itremor)]</a></div>
          </div>
        </div>

        <div className="ascii-art mb-4" data-text={asciiArt}>
          {asciiArt}
        </div>
      </section>

      <section>
        <h2 className="text-lg mb-4">>> Write-ups</h2>
        <div className="blog-entry-container">
          {WRITE_UPS.length > 0 ? (
            <ul className="list-none space-y-2">
              {WRITE_UPS.map((post) => (
                <li key={post.slug} className="blog-entry">
                  <Link href={`/write-ups/${post.slug}`} className="hover:text-primary">
                    <span className="text-gray-400">{post.date}</span> - {post.title}
                  </Link>
                  <div className="mt-1">
                    <span className="text-xs text-primary mr-2">#xss</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm italic text-gray-400">Write-ups coming soon!</p>
          )}
        </div>
      </section>
    </div>
  );
}
