import React from 'react'
import { FaBuilding, FaCheckCircle, FaEdit, FaStreetView, FaTrash } from 'react-icons/fa';
import { MdLocationCity, MdPinDrop, MdPublic } from "react-icons/md";
import { useDispatch } from 'react-redux'

const AddressList = ({ addresses, setSelectedAddress, setOpenAddressModal }) => {
    const dispatch = useDispatch();
    const selectedUserAddress = addresses[1];

    const onEditButtonHandler = (addresses) => {
        setSelectedAddress(addresses);
        setOpenAddressModal(true);
    };

    const onDeleteButtonHandler = (addresses) => {
        setSelectedAddress(addresses);
    };

    const handleAddressSelection = (addresses) => {

    };

  return (
    <div className='space-y-4'>
        {addresses.map((address) => (
            <div
                key={address.addressId}
                onClick={() => handleAddressSelection(address)}
                className={`p-4 border rounded-md cursor-pointer relative ${
                    selectedUserAddress?.addressId === address.addressId
                    ? "bg-green-100"
                    : "bg-white"
                }`}>
                <div className="flex items-start">
                    <div className="space-y-1">
                        <div className="flex items-center ">
                            <FaBuilding size={14} className='mr-2 text-gray-600' />
                            <p className='font-semibold'>{address.buildingName}</p>
                            {selectedUserAddress?.addressId === address.addressId && (
                                <FaCheckCircle className='text-green-500 ml-2' />
                            )}
                        </div>

                        <div className="flex items-center ">
                            <FaStreetView size={17} className='mr-2 text-gray-600' />
                            <p>{address.street}</p>
                        </div>

                        <div className="flex items-center ">
                            <MdLocationCity size={17} className='mr-2 text-gray-600' />
                            <p>{address.city}, {address.state}</p>
                        </div>

                        <div className="flex items-center ">
                            <MdPinDrop size={17} className='mr-2 text-gray-600' />
                            <p>{address.pincode}</p>
                        </div>

                        <div className="flex items-center ">
                            <MdPublic size={17} className='mr-2 text-gray-600' />
                            <p>{address.country}</p>
                        </div>
                    </div>
                </div>


                <div className="flex gap-3 absolute top-4 right-2">
                    <button onClick={() => onEditButtonHandler(address)}>
                        <FaEdit size={18} className="text-teal-700" />
                    </button>
                    <button onClick={() => onDeleteButtonHandler(address)}>
                        <FaTrash size={17} className="text-rose-600" />
                    </button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default AddressList