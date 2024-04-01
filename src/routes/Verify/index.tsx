import { VerifyFeature } from "../../Features/Verify"
import { VerifyProvider } from "../../Features/Verify/provider"

export const Verify = () => {
    return <VerifyProvider>
        <VerifyFeature />
    </VerifyProvider>
}