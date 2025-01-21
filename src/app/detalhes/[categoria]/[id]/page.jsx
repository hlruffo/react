export const metadata = {
    title: "Detalhes",
    description: "Detalhes do item selecionado",
}; 


export default function PageDetalhes({params}) {
    
    return (
        <div>
            <h1>Detalhes: {params.id}</h1>
        </div>
    );
}