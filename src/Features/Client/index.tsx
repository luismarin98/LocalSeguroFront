import { FC } from "react";
import { Input } from "../../components/Input";

export const ClientFeature: FC = () => {
    return (
        <div className="flex flex-row flex-wrap justify-around gap-2 items-center h-full w-full">
            <form className="w-1/3 shadow-md shadow-neutral-800 p-3 rounded-md flex flex-col gap-3 bg-blue-500">
                <Input title="Dni dueño" />
                <Input title="Nombres del dueño" />
                <Input title="Nombre del local" />
                <Input title="Telefono" />
                <Input title="Ubicacion del local" />
                <Input title="Foto de visita al local" />
            </form>
            <div className="w-3/5 bg-slate-500 h-5/6 rounded-md"></div>
        </div>
    )
}