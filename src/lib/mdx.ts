// This file is kept minimal for now, will be expanded when adding write-ups
export function getAllWriteUps() {
    return [];
}

export async function getWriteUpBySlug() {
    return {
        mdxSource: '# Coming Soon\n\nThis write-up is under construction.',
        frontMatter: {
            title: 'Coming Soon',
            date: new Date().toISOString().split('T')[0],
            tags: ['announcement'],
        },
    };
} 