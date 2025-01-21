import Link from "next/link";

export function Header() {
    return (
        <header className="bg-brand-dark flex flex-col items-center justify-center gap-y-2 
                            md:flex-row md:justify-between">
            <img src="/assets/logo.png" className="ml-4 mb-4" />
            <nav className="flex gap-x-16 mb-2 justify-center mr-5 items-center">
                <Link href="/" className="hover:text-brand-blue-light">Home</Link>
                <Link href="/filmes" className="hover:text-brand-blue-light">Filmes</Link>
                <Link href="/series" className="hover:text-brand-blue-light">Séries</Link>
            </nav>
        </header>
    );
}