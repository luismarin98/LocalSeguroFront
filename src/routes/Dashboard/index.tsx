import { DashboardFeature } from "../../Features/Dashboard"
import { DashboardProvider } from "../../Features/Dashboard/provider"

export const Dashboard = () => {
    return <DashboardProvider>
        <DashboardFeature />
    </DashboardProvider>
}