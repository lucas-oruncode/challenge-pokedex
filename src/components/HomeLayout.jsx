import CardList from "./CardList";
import Title from "./Title";

const titleInfo = {
    title: 'Welcome to Pokedex',
    subtitle: 'Click on the cards to see more details'
}
export default function HomeLayout() {
    return (
        <div className="min-h-screen w-full bg-[url(/bg-img.jpg)] bg-cover bg-center bg-fixed flex flex-col items-center justify-between">
           <Title title={titleInfo.title} subtitle={titleInfo.subtitle} />
           <CardList />
        </div>
    );
}