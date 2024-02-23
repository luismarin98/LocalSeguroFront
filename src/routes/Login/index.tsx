import { LoginFeature } from "../../Features/Login"
import { LoginProvider } from "../../Features/Login/provider"

export const Login = () => {
    return (
        <LoginProvider>
            <LoginFeature />
        </LoginProvider>
    )
}