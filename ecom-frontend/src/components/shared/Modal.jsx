import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { RxCross1 } from 'react-icons/rx';

function Modal({ open, setOpen, children, title = ""}) {
  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <DialogBackdrop className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0" />
        
        <div className="fixed inset-0 overflow-hidden">
            <div className='absolute inset-0 overflow-hidden'>
                <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                    <DialogPanel transition
                        className='pointer-events-auto relative w-screen max-w-[800px] transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700'>
                            <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                                <div className='px-4 sm:px-6'>
                                    <DialogTitle className='text-base font-semibold leading-6 text-gray-900'>
                                        Panel Title
                                    </DialogTitle>
                                </div>

                                <div className='relative mt-6 flex-1 p-8'>
                                    <div className='border-b pb-8 flex justify-between'>
                                        <h1 className='font-montserrat font-bold text-slate-800 text-2xl pt-4'>{title}</h1>
                                        <button onClick={() => setOpen(false)}>
                                            <RxCross1 className='text-slate-800 text-2xl'/>
                                        </button>
                                    </div>    
                                    {children}                                
                                </div>
                            </div>
                    </DialogPanel>
                </div>
            </div>
        </div>
      </Dialog>
    </>
  )
}


export default Modal;