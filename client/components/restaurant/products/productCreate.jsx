import React, { useEffect, useState } from 'react';
import { SimpleModal } from '../../utils/modals'
import ProductForm from './productForm';
import { Button } from 'reactstrap'
import ProductRequest from '../../../request/restaurant/productRequest'
import { translate } from 'react-switch-lang'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { addProducts } from '../../../redux/thunks/productThunk'

const ProductCreate = ({ t, isOpen = false, toggle = null }) => {

    const productRequest = new ProductRequest({ translate: t });

    // redux
    const dispatch = useDispatch()

    const [current_loading, setCurrentLoading] = useState(false)
    const [form, setForm] = useState({})

    const handleInput = ({ name, value }) => {
        setForm(prev => ({ ...prev, [name]: value }));
    }

    const handleSave = async () => {
        setCurrentLoading(true);
        await productRequest.store(form)
        .then(async ({ data }) => {
            await Swal.fire({ icon: 'success', text: 'Los datos se guardarón correctamente!' });
            setForm({});
            dispatch(addProducts([data]))
            if (typeof toggle == 'function') toggle();
        }).catch(err => {
            Swal.fire({ icon: 'error', text: err.message });
        })
        setCurrentLoading(false);
    }

    useEffect(() => {
        if (!isOpen) setForm({});
    }, [isOpen])

    return (
        <SimpleModal title={"Create Product"}
            size="lg"
            isOpen={isOpen}
            toggle={toggle}
            centered
            footer={
                <Button color="primary"
                    onClick={handleSave}
                    disabled={current_loading}
                >
                    Guardar
                </Button> 
            }
        >
            <ProductForm form={form}
                disabled={current_loading}
                onChange={handleInput}
            />
        </SimpleModal>
    )
}

export default translate(ProductCreate)