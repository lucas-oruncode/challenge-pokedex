import Link from "next/link";

export default function BackButton({ pathToReturn }) {
    return (
        <Link href={pathToReturn} className=" px-6 py-3 bg-red-700/80 hover:bg-red-700 text-white font-semibold rounded-full shadow-md transition-transform hover:scale-105">
            ← Voltar
        </Link>
    );
}