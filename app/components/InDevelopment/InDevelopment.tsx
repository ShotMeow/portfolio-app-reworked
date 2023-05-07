import {type FC} from 'react';
import {Particles} from "@/app/components/Particles";
import Link from "next/link";
import {Arrow} from "@/app/components/Arrow";

export const InDevelopment: FC = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-6 overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <Link href="/" className="absolute top-10 left-40"><Arrow /></Link>
            <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
           <h1 className="text-5xl md:text-8xl font-display">In development</h1>
            <p className="text-gray">Данная страница находится в разработке. Зайдите сюда позже</p>
        </div>
    );
};