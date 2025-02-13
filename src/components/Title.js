export default function Title({ title, subtitle }) {
    return (
        <div className="flex flex-col p-10 border border-white/80 rounded-xl items-center justify-center bg-black/90">
            <h1 className="text-2xl md:text-3xl text-white font-bold">{title}</h1>
            <p className="text-1xl text-white">{subtitle}</p>
        </div>
    );
}