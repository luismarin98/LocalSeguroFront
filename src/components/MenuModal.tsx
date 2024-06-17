import { Menu, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'

interface MenuModalProps {
    children: ReactNode;
    title?: string;
}

export const MenuModal = (props: MenuModalProps) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="rounded-md bg-neutral-50 text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:bg-neutral-200 hover:text-black px-6 py-0.5 hover:scale-105 transition-all ease-in-out duration-100">{props.title}</Menu.Button>
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