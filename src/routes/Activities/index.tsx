import { ActivitiesFeature } from "../../Features/Activities"
import { ActivitiesProvider } from "../../Features/Activities/provider"

export const Activities = () => {
    return <ActivitiesProvider>
        <ActivitiesFeature />
    </ActivitiesProvider>
}