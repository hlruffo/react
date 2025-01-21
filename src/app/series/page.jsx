import { Banner } from "@/components/Banner";
import { List } from "@/components/List";
export const metadata = {
    title: "Series",
    description: "As melhores series de todos os tempos",
}; 

export default function PageSeries() {
  return (
    <div>
      <Banner title="Séries" type="series"/>      
      <List type="series" />
    </div>
  );
}