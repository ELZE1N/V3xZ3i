import Link from 'next/link';

export default function Projects() {
    return (
        <div className="min-h-screen">
            <div className="terminal-header">
                <div>
                    <Link href="/">[Home]</Link> [Projects] <Link href="/progress">[Progress]</Link>
                </div>
            </div>

            <section className="mb-8">
                <h1 className="text-xl mb-4"># Security Projects</h1>
                <p className="mb-4">
                    A collection of my security tools, write-ups, and research projects.
                </p>

                <div className="mb-6">
                    <h3 className="font-bold">Recon Automation Script</h3>
                    <p className="mb-2">A Python script for automating initial reconnaissance in bug bounty hunting.</p>
                    <p className="text-sm mb-4">
                        <span className="text-accent">Tech:</span> Python, SubFinder, Amass, httpx
                    </p>
                    <p>
                        <Link href="https://github.com/yourusername/recon-tool" target="_blank">[Source Code]</Link>
                    </p>
                </div>

                <div className="mb-6">
                    <h3 className="font-bold">Bug Bounty Methodology</h3>
                    <p className="mb-2">A comprehensive guide detailing my approach to bug hunting.</p>
                    <p className="text-sm mb-4">
                        <span className="text-accent">Focus:</span> Web App Security, API Testing, OWASP Top 10
                    </p>
                    <p>
                        <Link href="https://medium.com/@z3itremor/methodology" target="_blank">[Read More]</Link>
                    </p>
                </div>

                <div className="mb-6">
                    <h3 className="font-bold">Security Lab Setup</h3>
                    <p className="mb-2">Documentation of my personal security testing environment.</p>
                    <p className="text-sm mb-4">
                        <span className="text-accent">Tools:</span> Burp Suite, OWASP ZAP, Docker, Kali Linux
                    </p>
                    <p>
                        <Link href="https://github.com/yourusername/security-lab" target="_blank">[Documentation]</Link>
                    </p>
                </div>

                <div className="mb-6">
                    <h3 className="font-bold">CTF Write-ups</h3>
                    <p className="mb-2">Collection of my CTF challenge solutions and explanations.</p>
                    <p className="text-sm mb-4">
                        <span className="text-accent">Platforms:</span> HackTheBox, TryHackMe, VulnHub
                    </p>
                    <p>
                        <Link href="https://medium.com/@z3itremor/ctf-writeups" target="_blank">[Read Write-ups]</Link>
                    </p>
                </div>

                <div className="ascii-art mb-4">
                    {`    _____
   |     |
   | ^ ^ |  
   |  _  |  Security
   |_____|  Research`}
                </div>
            </section>

            <footer className="mt-12 text-sm text-center text-secondary">
                © {new Date().getFullYear()} Your Name - Built with Next.js
            </footer>
        </div>
    );
} 