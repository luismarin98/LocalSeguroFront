import { HomeDashFeature } from "../../Features/HomeDash"
import { HomeDashProvider } from "../../Features/HomeDash/provider"

export const HomeDash = () => {
    return <HomeDashProvider>
        <HomeDashFeature />
    </HomeDashProvider>
}