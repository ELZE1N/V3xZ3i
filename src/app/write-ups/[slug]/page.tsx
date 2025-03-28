import { MDXRemote } from 'next-mdx-remote/rsc';
import { getWriteUpBySlug, getAllWriteUps } from '@/lib/mdx';
import Link from 'next/link';
import '../../globals.css';

export async function generateStaticParams() {
    const posts = getAllWriteUps();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function WriteUp({ params }: { params: { slug: string } }) {
    const { mdxSource, frontMatter } = await getWriteUpBySlug(params.slug);

    return (
        <div className="min-h-screen p-4 max-w-4xl mx-auto">
            <div className="terminal-header mb-8">
                <div>
                    <Link href="/" className="text-primary hover:underline">[Home]</Link>
                    <span className="mx-2">→</span>
                    <span>[Write-up: {frontMatter.title}]</span>
                </div>
            </div>

            <article className="prose prose-invert max-w-none">
                <h1 className="text-3xl font-bold mb-2">{frontMatter.title}</h1>
                <div className="text-sm text-gray-400 mb-8">
                    <time>{frontMatter.date}</time>
                    {frontMatter.tags && (
                        <div className="mt-2">
                            {frontMatter.tags.map((tag: string) => (
                                <span key={tag} className="mr-2 text-primary">#{tag}</span>
                            ))}
                        </div>
                    )}
                </div>
                <div className="mdx-content">
                    <MDXRemote source={mdxSource} />
                </div>
            </article>
        </div>
    );
} 