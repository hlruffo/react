import Link from "next/link";

export function Header() {
    return (
        <header className="bg-brand-dark flex flex-col items-center justify-center gap-y-2 
                            md:flex-row md:justify-between">
            <img src="/assets/logo.png" className="ml-4 mb-4" />
            <nav className="flex space-x-4 mb-2 justify-between mr-5">
                <Link href="/">Home</Link>
                <Link href="/filmes">Filmes</Link>
                <Link href="/series">Séries</Link>
            </nav>
        </header>
    );
}