import { MouseEvent } from "react"
import { butonStyle } from "./Styles"
import xlsx from "json-as-xlsx"
import { UserRequest } from "../Interfaces/UserRequest"
import { LocalsRequest } from "../Interfaces/LocalRequest"
import { MotosRequest } from "../Interfaces/MotosRequest"
import { ActData } from "../Interfaces/ActivityRequest"
import moment from 'moment';

export const downloadUserActivities = ({ user, name, local, moto }: { user?: UserRequest[] | undefined, local?: LocalsRequest[] | undefined, moto?: MotosRequest[] | undefined, name?: string }) => {
    const format = [
        {
            sheet: 'Locales',
            columns: [
                { label: "DNI", value: "DNI" },
                { label: "Dueño", value: "Dueño" },
                { label: "Local", value: "Local" },
                { label: "Telefono", value: "Telefono" },
                { label: "Localidad", value: "Localidad" },
                { label: "Sector", value: "Sector" },
            ],
            content: local!.map(local => {
                return {
                    DNI: local.dniOnwer,
                    Dueño: local.nameOwner,
                    Local: local.localName,
                    Telefono: local.phone,
                    Localidad: local.location,
                    Sector: local.sector
                }
            })
        },
        {
            sheet: 'Usuarios',
            columns: [
                { label: "Usuario", value: "Usuario" },
                { label: "Email", value: "Email" },
                { label: "Telefono", value: "Telefono" },
                { label: "Privilegios", value: "Privilegios" },
                { label: "FechaCreacion", value: "FechaCreacion" }
            ],
            content: user!.map(user => {
                return { Usuario: user.username, Email: user.email, Telefono: user.phone, Privilegios: user.isAdmin ? 'Administrador' : 'Usuario', FechaCreacion: moment(user.createdAt!).format("dd/mm/yyyy") }
            })
        },
        {
            sheet: 'Motos',
            columns: [
                { label: "Moto", value: "Moto" },
                { label: "Conductor", value: "Conductor" },
                { label: "Cooperativa", value: "Cooperativa" },
                { label: "Ubicacion", value: "Ubicacion" },
            ],
            content: moto!.map(moto => {
                return {
                    Moto: moto.num_moto,
                    Conductor: moto.conductor,
                    Cooperativa: moto.cooperativa,
                    Ubicacion: moto.ubicacion
                }
            })
        }
    ]
     xlsx(format, { fileName: name });
}

export const DownloadExcel = ({ user, name, activity, local, moto }: { user?: UserRequest[] | undefined, local?: LocalsRequest[] | undefined, moto?: MotosRequest[] | undefined, activity?: ActData[] | undefined, name?: string }) => {
    const handleDownload = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const userData = [];
        const activityData = [];
        const motoData = [];
        const localData = [];

        if (user !== undefined) {
            userData.push({
                sheet: name,
                columns: [
                    { label: "Usuario", value: "Usuario" },
                    { label: "Email", value: "Email" },
                    { label: "Telefono", value: "Telefono" },
                    { label: "Privilegios", value: "Privilegios" },
                    { label: "FechaCreacion", value: "FechaCreacion" }
                ],
                content: user!.map(user => {
                    return { Usuario: user.username, Email: user.email, Telefono: user.phone, Privilegios: user.isAdmin ? 'Administrador' : 'Usuario', FechaCreacion: moment(user.createdAt!).format("dd/mm/yyyy") }
                })
            });
            xlsx(userData, { fileName: name });
        }
        if (activity !== undefined) {
            activityData.push({
                sheet: name,
                columns: [
                    { label: "Usuario", value: "Usuario" },
                    { label: "Email", value: "Email" },
                    { label: "Telefono", value: "Telefono" },
                    { label: "Actividad", value: "Actividad" }
                ],
                content: activity!.map(act => {
                    return {
                        Usuario: act.username,
                        Email: act.email,
                        Telefono: `+593 ${act.phone}`,
                        Actividad: act.type === "Add User" ? "Añadio un usuario" : act.type === "Add Local" ? "Añadio un local" : act.type === "Add Moto" ? "Añadio una moto" : null,
                    }
                })
            });
            xlsx(activityData, { fileName: name });
        }
        if (moto !== undefined) {
            motoData.push({
                sheet: name,
                columns: [
                    { label: "Moto", value: "Moto" },
                    { label: "Conductor", value: "Conductor" },
                    { label: "Cooperativa", value: "Cooperativa" },
                    { label: "Ubicacion", value: "Ubicacion" },
                ],
                content: moto!.map(moto => {
                    return {
                        Moto: moto.num_moto,
                        Conductor: moto.conductor,
                        Cooperativa: moto.cooperativa,
                        Ubicacion: moto.ubicacion
                    }
                })
            });
            xlsx(motoData, { fileName: name });
        }
        if (local !== undefined) {
            localData.push({
                sheet: name,
                columns: [
                    { label: "DNI", value: "DNI" },
                    { label: "Dueño", value: "Dueño" },
                    { label: "Local", value: "Local" },
                    { label: "Telefono", value: "Telefono" },
                    { label: "Localidad", value: "Localidad" },
                    { label: "Sector", value: "Sector" },
                ],
                content: local!.map(local => {
                    return {
                        DNI: local.dniOnwer,
                        Dueño: local.nameOwner,
                        Local: local.localName,
                        Telefono: local.phone,
                        Localidad: local.location,
                        Sector: local.sector
                    }
                })
            });
            xlsx(localData, { fileName: name });
        }
    }


    return <button {...butonStyle} onClick={handleDownload} >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-type-xls"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><path d="M4 15l4 6" /><path d="M4 21l4 -6" /><path d="M17 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" /><path d="M11 15v6h3" /></svg>
    </button>
}