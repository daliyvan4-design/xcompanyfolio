import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
            <h2 className="text-9xl font-display mb-4">404</h2>
            <p className="text-xl text-neutral-500 mb-8">Page not found</p>
            <Link href="/" className="border-b border-white pb-1 hover:text-neutral-400 transition-colors">
                Return Home
            </Link>
        </div>
    );
}
