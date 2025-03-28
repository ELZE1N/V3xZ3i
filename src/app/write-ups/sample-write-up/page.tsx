import WriteUpLayout from '@/components/WriteUpLayout';

export default function SampleWriteUp() {
    return (
        <WriteUpLayout
            title="Sample Write-up: XSS Vulnerability"
            date="2024-03-20"
            tags={["xss", "web-security", "bug-bounty"]}
        >
            <h2 className="text-xl font-bold mt-6 mb-3">Overview</h2>
            <p className="my-4">
                This is a sample write-up to demonstrate the HTML format. You can include:
            </p>
            <ul className="list-disc pl-6 my-4">
                <li className="my-1">Text formatting with <strong>bold</strong>, <em>italic</em>, and <code className="bg-[#282c34] rounded px-1 py-0.5">code</code></li>
                <li className="my-1">Code blocks with syntax highlighting</li>
            </ul>

            <h2 className="text-xl font-bold mt-6 mb-3">Code Example</h2>
            <pre className="bg-[#282c34] rounded p-4 my-4 overflow-x-auto">
                <code>{`const payload = '<script>alert("XSS")</script>';
document.body.innerHTML = payload;`}</code>
            </pre>

            <h2 className="text-xl font-bold mt-6 mb-3">Steps to Reproduce</h2>
            <ol className="list-decimal pl-6 my-4">
                <li className="my-1">First step</li>
                <li className="my-1">Second step</li>
                <li className="my-1">Third step</li>
            </ol>

            <h2 className="text-xl font-bold mt-6 mb-3">Impact</h2>
            <p className="my-4">
                Describe the security impact here...
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Timeline</h2>
            <ul className="list-disc pl-6 my-4">
                <li className="my-1">2024-03-20: Issue discovered</li>
                <li className="my-1">2024-03-21: Report submitted</li>
                <li className="my-1">2024-03-22: Issue confirmed</li>
                <li className="my-1">2024-03-23: Issue fixed</li>
            </ul>

            <h2 className="text-xl font-bold mt-6 mb-3">References</h2>
            <ul className="list-disc pl-6 my-4">
                <li className="my-1">
                    <a href="https://owasp.org/www-project-cheat-sheets/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"
                        className="text-primary hover:underline">
                        OWASP XSS Prevention Cheat Sheet
                    </a>
                </li>
                <li className="my-1">
                    <a href="https://portswigger.net/web-security/cross-site-scripting"
                        className="text-primary hover:underline">
                        PortSwigger XSS Tutorial
                    </a>
                </li>
            </ul>
        </WriteUpLayout>
    );
} 