import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
            <div className="text-center">
                <div className="text-8xl mb-4">📝</div>
                <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-slate-700 mb-4">
                    Post Not Found
                </h2>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                    The post you're looking for doesn't exist or may have been deleted.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
