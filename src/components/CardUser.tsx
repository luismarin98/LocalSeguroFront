import { UserRequest } from "../Interfaces/UserRequest";

export const CardUser = (data: UserRequest) => {
    return (
        <div className="flex flex-row gap-2 justify-center items-center bg-neutral-700 rounded-md w-1/3 p-2">
            <img src={data.photo} alt={data.username} width={70} height={70} className="rounded-full bg-white" />
            <div className="w-full">
                <p><strong>Usuario:</strong> {data.username}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Telefono:</strong> +593 {data.phone}</p>
                <p><strong>Estado:</strong> {data.isAdmin ? 'Administrador' : 'Cliente'}</p>
            </div>
        </div>
    )
}