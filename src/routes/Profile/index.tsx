import { ProfileFeature } from "../../Features/Profile"
import { ProfileProvider } from "../../Features/Profile/provider"

export const Profile = () => {
    return <ProfileProvider>
        <ProfileFeature />
    </ProfileProvider>
}