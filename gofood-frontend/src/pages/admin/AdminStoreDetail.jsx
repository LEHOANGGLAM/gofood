import React, { useEffect, useState } from "react";
import img from "../../assets/img/default-image.jpg";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import StoreService from "../../services/StoreService";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
};

const AdminStoreDetail = () => {
    useEffect(() => {
        document.title = "Store Detail";
    }, []);

    const navigate = useNavigate();
    const { id } = useParams();
    const [store, setStore] = useState({});
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getStore = async (id) => {
        await StoreService.getStoreById(id).then((res) => {
            setStore(res.data)
        },
            (err) => {
                if (err.response.status === 404)
                    navigate(`/notfound/`);
            }
        )
    }

    const handleApprove = () => {
        handleOpen()
        StoreService.approveStore(id).then((res) => {
            console.log(res.data);
        })
    }

    const handleCancel = () => {
        navigate(`/admin/stores`);
    }

    useEffect(() => {
        getStore(id);
    }, [])

    return (
        <main>
            <div class="table-data" style={{ minHeight: '600px' }}>
                <h3 style={{ marginBottom: "-200px" }}>Store id: {store.id}</h3>
                <div class="col-lg-12 col-md-12">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="checkout__input">
                                <p>Store name<span>*</span></p>
                                <input type="text" value={store.name} disabled />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="checkout__input">
                                <p>Name<span>*</span></p>
                                <input type="text" value={store.name} disabled />
                            </div>
                        </div>
                    </div>
                    <div class="checkout__input">
                        <p>Headquater address<span>*</span></p>
                        <input type="text" value={store.address} disabled />
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <div class="checkout__input">
                                <p>Phone<span>*</span></p>
                                <input type="text" value={store.phone} disabled />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="checkout__input">
                                <p>Email<span>*</span></p>
                                <input type="text" value={store.email} disabled />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center gap-2">
                        <button type="button" class="btn btn-outline-success btn-sm mx-1" onClick={() => { handleApprove() }}> <i class="bi bi-check me-1"></i>Approve</button>
                        <button type="button" class="btn btn-outline-danger btn-sm" onClick={() => { handleCancel() }}> Cancel</button>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className="text-center mb-3">
                        Approved successfully
                    </Typography>
                    <Typography id="modal-modal-description" className="text-success text-center">
                        <i class="bi bi-check-circle-fill fs-2"></i>   Approved successfully

                        <button type="button" class="btn btn-outline-success btn-sm fs-2"  onClick={() => { handleCancel() }}> Back   </button>
                    </Typography>
                </Box>
            </Modal>
        </main>
    );
};

export default AdminStoreDetail;
