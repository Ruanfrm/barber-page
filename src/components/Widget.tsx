import { ChatTeardropDots } from "phosphor-react";
import { Popover } from '@headlessui/react'
import { WidgetForm } from "./WidgetFom/Index";


export function Widget() {

  return (
    <Popover className="fixed bottom-4 right-4 flex flex-col items-end" >
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>  

      <Popover.Button
        className="bg-brand-100 rounded-full px-3 h-12 text-zinc-800 flex items-center group"
      >
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}