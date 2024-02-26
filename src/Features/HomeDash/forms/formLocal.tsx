import { MouseEvent, useContext } from "react"
import { Input } from "../../../components/Input"
import HomeDashContext, { IHomeDash } from "../provider"

export const FormLocal = () => {
    const { setOpenAddLocal, setOpen, openAddLocal } = useContext(HomeDashContext) as IHomeDash;

    const handlesave = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpenAddLocal(!openAddLocal);
        setOpen(false)
    }

    return <form className="w-full shadow-md shadow-neutral-800 rounded-md p-2 flex flex-col gap-3 bg-blue-500 items-center">
        <Input title="Dni dueño" />
        <Input title="Nombres del dueño" />
        <Input title="Nombre del local" />
        <Input title="Telefono" />
        <Input title="Ubicacion del local" />
        <Input title="Foto de visita al local" />
        <button onClick={handlesave} className="bg-neutral-800 rounded-md px-6 py-0.5 text-white hover:scale-105">Guardar local</button>
    </form>
}