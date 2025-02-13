import CardList from "./CardList";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Title from "./Title";

const titleInfo = {
    title: 'Welcome to Pokedex',
    subtitle: 'Click on the cards to see more details'
}
export default function HomeLayout() {
    return (
        <div className="min-h-screen w-full bg-[url(/bg-img.jpg)] bg-cover bg-center bg-fixed flex flex-col items-center justify-between">
           <NavBar />
           <Title title={titleInfo.title} subtitle={titleInfo.subtitle}/>
           <CardList />
           <Footer />
        </div>
    );
}