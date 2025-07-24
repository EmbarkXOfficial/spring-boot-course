import React, { useRef, useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import Spinners from '../../shared/Spinners';
import { Button } from '@mui/material';
import toast from 'react-hot-toast';

const ImageUploadForm = () => {
    const [loader, setLoader] = useState(false);
    const fileInputRef = useRef();
    const [previewImage, setPreviewImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const onHandleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && ["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
            setSelectedFile(file);
        } else {
            toast.error("Please select a valid image file (.jpeg, .jpg, .png)");
            setPreviewImage(null);
            setSelectedFile(null);
        }

    };

    const addNewImageHandler = () => {

    };

    const handleClearImage = () => {
        setPreviewImage(null);
        setSelectedFile(null);
        fileInputRef.current.value = null;
    };

  return (
    <div className='py-5 relative h-full'>
        <form className='space-y-4' onSubmit={addNewImageHandler}>
            <div className='flex flex-col gap-4 w-full'>
                <label className='flex items-center gap-2 cursor-pointer text-custom-blue border border-dashed border-custom-blue rounded-md p-3 w-full justify-center'>
                    <FaCloudUploadAlt size={24}/>
                    <span>Upload Product Image</span>
                    <input 
                        type='file'
                        ref={fileInputRef}
                        onChange={onHandleImageChange}
                        className='hidden'
                        accept='.jpeg, .jpg, .png'/>
                </label>

                {previewImage && (
                    <div>
                        <img
                            src={previewImage}
                            alt='Image Preview'
                            className='h-60 rounded-md mb-2'/>

                        <button
                            type='button'
                            onClick={handleClearImage}
                            className='bg-rose-600 text-white px-2 py-1 rounded-md'>Clear Image</button>
                    </div>
                )}
            </div>

            <div className='flex w-full justify-between items-center absolute bottom-14'>
            <Button disabled={loader}
                    onClick={() => setOpen(false)}
                    variant='outlined'
                    className='text-white py-[10px] px-4 text-sm font-medium'>
                Cancel
            </Button>

            <Button
                disabled={loader}
                type='submit'
                variant='contained'
                color='primary'
                className='bg-custom-blue text-white  py-[10px] px-4 text-sm font-medium'>
                {loader ? (
                    <div className='flex gap-2 items-center'>
                        <Spinners /> Loading...
                    </div>
                ) : (
                    "Update"
                )}
            </Button>
        </div>
        </form>
    </div>
  )
}

export default ImageUploadForm