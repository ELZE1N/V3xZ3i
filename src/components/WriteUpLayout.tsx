import Link from 'next/link';

interface WriteUpLayoutProps {
    title: string;
    date: string;
    tags?: string[];
    children: React.ReactNode;
}

export default function WriteUpLayout({ title, date, tags, children }: WriteUpLayoutProps) {
    return (
        <div className="min-h-screen p-4 max-w-4xl mx-auto">
            <div className="terminal-header mb-8">
                <div>
                    <Link href="/" className="text-primary hover:underline">[Home]</Link>
                    <span className="mx-2">→</span>
                    <span>[Write-up: {title}]</span>
                </div>
            </div>

            <article className="prose prose-invert max-w-none">
                <h1 className="text-3xl font-bold mb-2">{title}</h1>
                <div className="text-sm text-gray-400 mb-8">
                    <time>{date}</time>
                    {tags && (
                        <div className="mt-2">
                            {tags.map((tag) => (
                                <span key={tag} className="mr-2 text-primary">#{tag}</span>
                            ))}
                        </div>
                    )}
                </div>
                <div className="write-up-content">
                    {children}
                </div>
            </article>
        </div>
    );
} 