import { ClientFeature } from "../../Features/Client"
import { ClientProvider } from "../../Features/Client/provider"

export const Client = () => {
    return (
        <ClientProvider>
            <ClientFeature />
        </ClientProvider>
    )
}