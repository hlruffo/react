'use client';
import Link from "next/link";
import { getData } from "../api/tmdb";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";

export function List({type}){

    const [itens, setItens] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadData(){
            try{
                const {data, error} = await getData(type);
                console.log(data);                      
                if(error){
                    console.log(error);
                    setError(error); 
                }else{
                    setItens(data);   
                    setLoading(false);                 
                }
            }
            catch(error){
                console.log(error);
            }
        }
        loadData();
    },[type]);

    if(error){
        console.log(`Erro ao carregar a lista  ${error.message}.`);
        return <h1>Erro ao carregar a lista de {type}.</h1>
    }

    if (loading) {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh", // Altura total da viewport
              width: "100vw", // Largura total da viewport
              backgroundColor: "#000", // Opcional: cor de fundo
            }}
          >
            <PacmanLoader color="#ffef5c" size={50} />
          </div>
        );
      }

    return(        
        
            //<h1>Listagem de {type}</h1>
        <div className="max-w-[1140px] mx-auto my-16 flex flex-wrap flex-col gap-7 lg:flex-row">
            {itens.map(item => (
                //console.log(`item: ${item}`),
                
            <div className="relative" key={item.id}>     
                <Link href={`/detalhes/${type}/${item.id}`} className="hover:brightness-150">           
                <Image className="w-[360px] h-[200px] object-cover rounded-lg opacity-50"
                    alt={`Imagem de ${type} ${item.title}`}
                    //src={`https://catalogofadrix.online/_data/i/upload/2023/01/03/20230103105643-7c5b0c49-la.jpg`} alt="Imagem de filme" 
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                    width={400} 
                    height={200} 
                    quality={75}/>
            
                <div className="absolute bottom-0 left-0">
                    <h4 className="text-2xl font-bold">{type == 'filmes'? item.title : item.name}</h4>
                    <h5>Ano: {type == 'filmes' ? item.release_date.substr(0,4) : item.first_air_date.substr(0,4)}</h5>
                    <span className="flex gap-x-3 text-brand-yellow"><Image alt="estrelas" width={16} height={16} src="/assets/star.svg"/>{item.vote_average.toFixed(2)}</span>
                </div>
                </Link>
            </div>               
        ))}
        </div>
    )
}