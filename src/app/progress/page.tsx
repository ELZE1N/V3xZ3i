import Link from 'next/link';

export default function Progress() {
    // Calculate days since starting security studies
    const startDate = new Date('2024-02-28');
    const today = new Date();
    const daysSinceStart = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

    return (
        <div className="min-h-screen">
            <div className="terminal-header">
                <div><Link href="/">[Home]</Link> <Link href="/projects">[Projects]</Link> [Progress]</div>
            </div>

            <section className="mb-8">
                <h1 className="text-xl mb-4"># Learning Progress</h1>
                <p className="mb-4">
                    Tracking my journey in cybersecurity and bug hunting. Started on February 28, 2024.
                    Currently at Day {daysSinceStart} of my learning journey.
                </p>

                <div className="mb-8">
                    <h2 className="text-lg mb-2">## Current Focus</h2>
                    <ul className="list-none">
                        <li className="blog-entry">Web Application Security</li>
                        <li className="blog-entry">API Security Testing</li>
                        <li className="blog-entry">Recon Methodology</li>
                        <li className="blog-entry">Bug Bounty Hunting</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-lg mb-2">## Achievements</h2>
                    <ul className="list-none">
                        <li className="blog-entry">Started Bug Hunting Journey - Feb 2024</li>
                        <li className="blog-entry">First Bug Report Submitted</li>
                        <li className="blog-entry">Completed Basic Web Security Course</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-lg mb-2">## Learning Resources</h2>
                    <ul className="list-none">
                        <li className="blog-entry">PortSwigger Web Security Academy</li>
                        <li className="blog-entry">HackerOne CTF Challenges</li>
                        <li className="blog-entry">TryHackMe Rooms</li>
                        <li className="blog-entry">Bug Bounty Reports Digest</li>
                    </ul>
                </div>

                <div className="ascii-art mb-4">
                    {`    ⌐■-■
   (҂◡_◡) 
    /|_/|
   |  |  |
   |___|___|
   Learning & Hacking`}
                </div>
            </section>
        </div>
    );
} 