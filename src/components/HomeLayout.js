import CardList from "./CardList";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Title from "./Title";

export default function HomeLayout() {
    return (
        <div className="min-h-screen w-full bg-[url(/bg-img.jpg)] bg-cover bg-center bg-fixed flex flex-col items-center justify-between">
           <NavBar />
           <Title />
           <CardList />
           <Footer />
        </div>
    );
}