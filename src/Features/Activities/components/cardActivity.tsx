import { MouseEvent, useContext } from "react";
import { UserRequest } from "../../../Interfaces/UserRequest";
import ActivitiesContext, { IActivities } from "../provider";

interface CardProps {
    img?: {
        src: string;
        alt: string;
    };
    description?: string;
    user?: UserRequest;
}

export const CardActivity = (props: CardProps) => {

    const { setOpenModal, openModal } = useContext(ActivitiesContext) as IActivities;

    const handleModal = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setOpenModal(!openModal);
    }

    return <div className="flex flex-row gap-2 justify-center items-center dark:bg-white bg-green-400 dark:text-black text-white rounded-md p-3">
        {/* <img src={props.img!.src} alt={props.img!.alt} width={20} className="rounded-full" /> */}
        <div className="w-[40px] h-[40px] rounded-full bg-black" />
        <p className="text-md">{props.description}</p>
        <div className="flex items-center justify-center">
            <button onClick={handleModal} className="dark:text-white bg-neutral-800 rounded-md p-2 hover:scale-105 hover:shadow-neutral-800 shadow-md">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-list-search"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M18.5 18.5l2.5 2.5" />
                    <path d="M4 6h16" />
                    <path d="M4 12h4" />
                    <path d="M4 18h4" />
                </svg>
            </button>
        </div>
    </div>
}