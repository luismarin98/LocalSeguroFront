import { Input } from "../../../components/Input"

export const FormLocal = () => {
    return <form className="w-1/3 shadow-md shadow-neutral-800 p-3 rounded-md flex flex-col gap-3 bg-blue-500">
        <Input title="Dni dueño" />
        <Input title="Nombres del dueño" />
        <Input title="Nombre del local" />
        <Input title="Telefono" />
        <Input title="Ubicacion del local" />
        <Input title="Foto de visita al local" />
    </form>
}