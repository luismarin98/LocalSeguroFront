import { ChangeEvent, MouseEvent, useContext, useRef, useState } from "react"
import ProfileContext, { IProfile } from "../provider"
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import toast from "react-hot-toast";
import { PhotoRequest } from "../../../Interfaces/PhotoRequest";
import { UserRequest } from "../../../Interfaces/UserRequest";
import { getSession } from "../../../components/StorageFunctions";
import Webcam from 'react-webcam';
import { buttonUploadStyle, butonStyle } from "../../../components/Styles";

export const FormUpdatePhoto = () => {
    const user: UserRequest | null = getSession('user');
    const initialValues: PhotoRequest = { photoData: null, name: null };
    const webcamRef = useRef<Webcam>(null);
    const methods = useForm({ defaultValues: initialValues });
    const [mode, setMode] = useState<boolean>();
    const [photo, setPhoto] = useState<PhotoRequest>();


    const { updatePhoto, setOpenModaPhoto, setCurrentCapture, currentCapture, photoData } = useContext(ProfileContext) as IProfile;

    const { handleSubmit, reset } = useForm<PhotoRequest>();

    const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        photoData!.append(user!.username, file);
        setPhoto({ photoData: file, name: user!.username });
    }

    const capturePhoto = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const imageSrc = webcamRef.current!.getScreenshot();
        setCurrentCapture(imageSrc);
        setMode(!mode);
    };

    const submit: SubmitHandler<PhotoRequest> = (data) => {
        if (mode === true) {
            if (photoData === undefined) return toast.error('Asegurate de seleccionar una foto');
            data.photoData = photo!.photoData;
        } else if (mode === false) {
            data.name = currentCapture!;
        }

        updatePhoto(data);
        reset();
        setOpenModaPhoto(false);
    }

    const handleMode = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setMode(!mode);
    }

    return <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submit)} className="bg-neutral-200 p-2 rounded-md flex flex-col items-center justify-center gap-3">
            <button {...butonStyle} onClick={handleMode}>{mode ? 'Cámara' : 'Subir foto'}</button>
            {
                mode ? (
                    <div className="flex flex-col gap-2 w-full h-full justify-center items-center">
                        <input className="hidden" name="photo" id="input_file" accept="image/*" type="file" onChange={handleUpload} />
                        <label className="w-full ring-1 ring-black rounded-md px-3 py-1 flex flex-row gap-2 justify-between items-center cursor-pointer" htmlFor="input_file">
                            <span {...buttonUploadStyle}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-upload"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 9l5 -5l5 5" /><path d="M12 4l0 12" /></svg> Subir foto</span>
                            {!photo ? 'Subir foto' : `${photo.name}.${photoData!.get(user!.username)!.toString()}`}
                        </label>
                    </div>
                ) : (
                    <div className="flex flex-col gap-2 w-full h-full justify-center items-center">
                        <div className="w-full h-full rounded-md shadow-lg shadow-neutral-700">
                            <Webcam ref={webcamRef} />
                        </div>
                        <button {...butonStyle} onClick={capturePhoto}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-camera"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" /><path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg></button>
                    </div>
                )
            }
            <button type="submit" className="bg-neutral-800 px-6 py-1 text-white transition-all ease-in-out hover:scale-105 hover:shadow-md rounded-md hover:shadow-neutral-800 flex flex-col gap-2 justify-center items-cente">Confirmar</button>
        </form>
    </FormProvider>
}