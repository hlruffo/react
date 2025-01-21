import { Banner } from "@/components/Banner";
import { List } from "@/components/List";
export const metadata = {
    title: "Filmes",
    description: "Os melhores filmes de todos os tempos",
};  


export default function PageFilmes() {
    return (
        <div>            
            <Banner title="Filmes" type="filmes"/>
            <List type="filmes"/>
        </div>
    );
    }