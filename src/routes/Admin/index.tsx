import { AdminFeature } from "../../Features/Admin"
import { AdminProvider } from "../../Features/Admin/provider"

export const Admin = () => {
    return <AdminProvider>
        <AdminFeature />
    </AdminProvider>
}