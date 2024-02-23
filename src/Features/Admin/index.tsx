import { FC } from "react";
import { UserRequest } from "../../Interfaces/UserDomain";
import getItem from "../../components/StorageFunctions";

export const AdminFeature: FC = () => {

    const userLocal: UserRequest | null = getItem('user');

    return <div className="grid grid-rows-3 grid-flow-col gap-4 h-full w-full overflow-x-auto scroll-m-4 no-scrollbar items-center">
        {
            userLocal!.localsData === null ? (
                <p>Puede que no hayan datos registrados</p>
            ) : userLocal!.localsData?.map((data, i) => (
                <button key={i} className="bg-gray-200 rounded-md ring-1 m-2 ring-black w-[40vh] h-[20vh] hover:shadow-md hover:shadow-neutral-800 hover:scale-105 transition-all duration-100">
                    <div className="flex flex-row gap-2 w-full items-center justify-around">
                        <p>{data.linkPhoto}</p>
                        <div className="flex flex-col gap-2">
                            <p>{data.nameOwner}</p>
                            <p>{data.localName}</p>
                        </div>
                    </div>
                </button>
            ))
        }
    </div>
}