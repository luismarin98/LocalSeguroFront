import { Dispatch, ReactNode, SetStateAction } from "react";
import Drawer from '@mui/joy/Drawer';
import DialogTitle from '@mui/joy/DialogTitle';
import ModalClose from '@mui/joy/ModalClose';

interface drawProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    title?: string;
    children?: ReactNode;
}

export const Draw = (props: drawProps) => {
    const handleCloseOpen = () => {
        props.setOpen(false);
    }

    return <Drawer open={props.open} onClose={handleCloseOpen}>
        <ModalClose />
        <DialogTitle className="text-2xl uppercase">{props.title}</DialogTitle>
        <div className="w-full flex items-center justify-center h-full">{props.children}</div>
    </Drawer>
}