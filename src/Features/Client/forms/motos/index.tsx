import { Input } from "../../../../components/Input"

export const FormMotos = () => {
    return (
        <div className="w-full shadow-md shadow-neutral-800 rounded-md p-2 flex flex-col gap-3 bg-blue-500 items-center text-white">
            <Input title="N° de mototaxi" />
            <Input title="Nombre de conductor" />
            <Input title="Cooperativa" />
            <Input title="Ubicación" />
            <Input title="Ubicación" />
            <button type="submit" className="bg-neutral-800 rounded-md px-6 py-0.5 text-white hover:scale-105">Guardar moto</button>
        </div>
    )
}