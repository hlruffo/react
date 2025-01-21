import { Banner } from "@/components/Banner";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>    
      <Banner title="Filmes & Séries" subtitle="Lista de filmes e séries da API The Movie DB.
                    Confira as produções mais populares do mundo" type="home"/>
      <div className="flex max-[850px] flex-col items-center gap-y-5 my-12 lg:flex-row lg:justify-center lg:gap-x-12"> 
        <div>
          <Link href='/filmes' className="hover:-translate-y-2 transition">
            <Image src="/assets/melhores-filmes-atuais-og.jpg" alt="Imagem de filme" width={600} height={200} quality={75}/>
          </Link>
          <h2 className="text-center">FILMES</h2>
        </div>
        <div>
          <Link href='/series' className="hover:-translate-y-2 transition">
            <Image src="/assets/3527c727d0.jpeg" alt="Imagem de filme" width={600} height={200} quality={75}/>
          </Link>
          <h2 className="text-center">SÉRIES</h2>
        </div>
      </div>
    </>

  );
}
