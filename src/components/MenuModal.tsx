import { Menu, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'

interface MenuModalProps {
    children: ReactNode;
    title?: string;
}

export const MenuModal = (props: MenuModalProps) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex w-full justify-center items-center rounded-md bg-black/20 px-6 py-0.5 text-md font-medium text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">{props.title}</Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute p-1 right-0 mt-1 w-56 origin-top-right divide-y divide-gray-500 rounded-md bg-gray-400 shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className='flex flex-col gap-1'>
                        {props.children}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}