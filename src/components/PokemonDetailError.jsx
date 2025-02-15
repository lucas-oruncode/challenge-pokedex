import Title from "./Title";
import BackButton from "./BackButton";


const titleInfo = {
    title: 'Sorry',
    subtitle: 'Pokemon not found'
}

export default function DetailError() {


    return (
        <div className="min-h-screen w-full bg-[url(/bg-img.jpg)] bg-cover bg-center bg-fixed flex flex-col items-center justify-center gap-[80px] p-6">
            <Title title={titleInfo.title} subtitle={titleInfo.subtitle} />
            <BackButton pathToReturn={'/'} />
        </div>
    );
}