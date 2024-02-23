import { RegisterFeature } from "../../Features/Register"
import { RegisterProvider } from "../../Features/Register/provider"

export const Register = () => {
    return (
        <RegisterProvider>
            <RegisterFeature />
        </RegisterProvider>
    )
}