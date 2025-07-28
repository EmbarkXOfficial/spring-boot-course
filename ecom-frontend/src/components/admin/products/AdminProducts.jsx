import React, { useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../shared/Loader';
import { FaBoxOpen } from 'react-icons/fa';
import { DataGrid } from '@mui/x-data-grid';
import { adminProductTableColumn } from '../../helper/tableColumn';
import { useDashboardProductFilter } from '../../../hooks/useProductFilter';
import Modal from '../../shared/Modal';
import AddProductForm from './AddProductForm';
import DeleteModal from '../../shared/DeleteModal';
import { deleteProduct } from '../../../store/actions';
import toast from 'react-hot-toast';
import ImageUploadForm from './ImageUploadForm';
import ProductViewModal from '../../shared/ProductViewModal';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const AdminProducts = () => {
  // const products = [{ "productId": 52, "productName": "iPad Pro", "image": "http://localhost:8080/images/7a7b38c4-2342-4d10-89e9-2c5b3c4fdb44.png", "description": "High-performance Tablet with a 4K display and powerful camera", "quantity": 30, "price": 1800.0, "discount": 43.0, "specialPrice": 1026.0 }, { "productId": 2, "productName": "iPhone 16 Pro Max", "image": "http://localhost:8080/images/22185fd1-024a-4708-9a10-832b8a50bfde.png", "description": "High-performance phone with a 4K display and powerful camera", "quantity": 19, "price": 1400.0, "discount": 23.0, "specialPrice": 1078.0 }];
  // const pagination = { pageNumber: 0, pageSize: 50, totalElements: 11, totalPages: 1, lastPage: true };
  
  const {products, pagination} = useSelector((state) => state.products);
  const { isLoading, errorMessage } = useSelector((state) => state.errors);
  const [currentPage, setCurrentPage] = useState(
      pagination?.pageNumber + 1 || 1
    );

  const dispatch = useDispatch();
  
  const [selectedProduct, setSelectedProduct] = useState('');
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openProductViewModal, setOpenProductViewModal] = useState(false);
  const [openImageUploadModal, setOpenImageUploadModal] = useState(false);

  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = useLocation().pathname;

  const { user } = useSelector((state) => state.auth);
  const isAdmin = user && user?.roles?.includes("ROLE_ADMIN");

  useDashboardProductFilter();

  const tableRecords = products?.map((item) => {
  return {
    id: item.productId,
    productName: item.productName,
    description: item.description,
    discount: item.discount,
    image: item.image,
    price: item.price,
    quantity: item.quantity,
    specialPrice: item.specialPrice,
  }
});

const handleEdit = (product) => {
  setSelectedProduct(product);
  setOpenUpdateModal(true);
};

const handleDelete = (product) => {
  setSelectedProduct(product);
  setOpenDeleteModal(true);
};

const handleImageUpload = (product) => {
  setSelectedProduct(product);
  setOpenImageUploadModal(true);
};

const handleProductView = (product) => {
  setSelectedProduct(product);
  setOpenProductViewModal(true);
};


const handlePaginationChange = (paginationModel) => {
  const page = paginationModel.page + 1;
  setCurrentPage(page);
  params.set("page", page.toString());
  navigate(`${pathname}?${params}`)
};


const onDeleteHandler = () => {
  dispatch(deleteProduct(setLoader, selectedProduct?.id, toast, setOpenDeleteModal, isAdmin));
};

  const emptyProduct = !products || products?.length ===0;
  return (
    <div>
      <div className='pt-6 pb-10 flex justify-end'>
        <button
          onClick={() => setOpenAddModal(true)}
          className='bg-custom-blue hover:bg-blue-800 text-white font-semibold py-2 px-4 flex items-center gap-2 rounded-md shadow-md transition-colors hover:text-slate-300 duration-300'>
          <MdAddShoppingCart className='text-xl' />
          Add Product
        </button>
      </div>


    {!emptyProduct && (
      <h1 className='text-slate-800 text-3xl text-center font-bold pb-6 uppercase'>
        All Products</h1>
    )}
    {isLoading ? (
      <Loader />
    ) : (
      <>
      {emptyProduct ? (
        <div className='flex flex-col items-center justify-center text-gray-600 py-10'>
          <FaBoxOpen size={50} className='mb-3'/>
          <h2 className='text-2xl font-semibold'>
            No products created yet  
          </h2>
        </div>
      ) : (
        <div className='max-w-full'>
          <DataGrid
            className='w-full'
            rows={tableRecords}
            columns={adminProductTableColumn(
              handleEdit,
              handleDelete,
              handleImageUpload,
              handleProductView)}
            paginationMode='server'
            rowCount={pagination?.totalElements || 0}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: pagination?.pageSize || 10,
                  page: currentPage - 1,
                },
              },
            }}
            onPaginationModelChange={handlePaginationChange}
            disableRowSelectionOnClick
            disableColumnResize
            pageSizeOptions={[pagination?.pageSize || 10]}
            pagination
            paginationOptions={{
              showFirstButton: true,
              showLastButton: true,
              hideNextButton: currentPage === pagination?.totalPages,
            }}
            />
        </div>
      )}
      </>
    )}

    <Modal
      open={openUpdateModal || openAddModal}
      setOpen={openUpdateModal ? setOpenUpdateModal : setOpenAddModal}
      title={openUpdateModal ? "Update Product" : "Add Product"}>
        <AddProductForm 
          setOpen={openUpdateModal ? setOpenUpdateModal : setOpenAddModal}
          product={selectedProduct}
          update={openUpdateModal}
          />
    </Modal>


    <Modal
      open={openImageUploadModal}
      setOpen={setOpenImageUploadModal}
      title="Add Product Image">
        <ImageUploadForm 
          setOpen={setOpenImageUploadModal}
          product={selectedProduct}
          />
    </Modal>


    <DeleteModal
      open={openDeleteModal}
      setOpen={setOpenDeleteModal}
      loader={loader}
      title="Delete Product"
      onDeleteHandler={onDeleteHandler} />

      <ProductViewModal 
        open={openProductViewModal}
        setOpen={setOpenProductViewModal}
        product={selectedProduct}
      />
    </div>
  )
}

export default AdminProducts