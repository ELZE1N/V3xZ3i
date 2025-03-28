import Link from 'next/link';
import '../globals.css';

const WRITE_UPS = [
    {
        slug: 'sample-write-up',
        title: 'Sample Write-up: XSS Vulnerability',
        date: '2024-03-20',
        tags: ['xss'],
    },
];

export default function WriteUps() {
    return (
        <div className="min-h-screen p-4 max-w-4xl mx-auto">
            <div className="terminal-header mb-8">
                <div>
                    <Link href="/" className="text-primary hover:underline">[Home]</Link>
                    <span className="mx-2">→</span>
                    <span>[Write-ups]</span>
                </div>
            </div>

            <section>
                <h2 className="text-lg mb-4">{`>> Write-ups`}</h2>
                <div className="blog-entry-container">
                    {WRITE_UPS.length > 0 ? (
                        <ul className="list-none space-y-2">
                            {WRITE_UPS.map((post) => (
                                <li key={post.slug} className="blog-entry">
                                    <div className="hover:text-primary">
                                        <span className="text-gray-400">{post.date}</span> - {post.title}
                                    </div>
                                    <div className="mt-1">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="text-xs text-primary mr-2">#{tag}</span>
                                        ))}
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