import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap'
import ProductForm from './productForm'
import { SimpleModal } from '../../utils/modals'
import { useDispatch, useSelector } from 'react-redux'
import { editProduct, editProducts } from '../../../redux/thunks/productThunk';
import ProductRequest from '../../../request/restaurant/productRequest'
import { translate } from 'react-switch-lang'
import Swal from 'sweetalert2';
import Show from '../../utils/show'

const UserEdit = ({ t, isOpen = false, toggle = null }) => {

    const productRequest = new ProductRequest({ translate: t })
    
    // redux
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.product);

    // states
    const [form, setForm] = useState({});
    const [is_edit, setIsEdit] = useState(false);
    const [current_loading, setCurrentLoading] = useState(false);

    const handleInput = ({ name, value }, edit = true) => {
        setForm(prev => ({ ...prev, [name]: value }))
        setIsEdit(edit)
    }

    const handleCancel = () => setIsEdit(false);

    const handleUpdate = async () => {
        setCurrentLoading(true);
        await productRequest.update(product.id, form)
        .then(async ({ data }) => {
            await Swal.fire({ icon: 'success', text: 'Los cambios se guardaron correctamente' })
            dispatch(editProduct(data))
            dispatch(editProducts(data))
            setIsEdit(false)
        }).catch(err => Swal.fire({ icon: 'error', text: err.message }))
        setCurrentLoading(false);
    }

    useEffect(() => {
        if (!is_edit && product) setForm(Object.assign({}, product));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [is_edit, product])

    return (
        <SimpleModal title={"Edit Person"}
            size="lg"
            isOpen={isOpen}
            toggle={toggle}
            centered
            footer={
                <>
                    <Show condicion={is_edit}>
                        <Button color="light"
                            className="mr-1"
                            disabled={current_loading}
                            onClick={handleCancel}
                        >
                            Cancelar
                        </Button>
                    </Show>
                    <Button color="primary"
                        disabled={current_loading}
                        onClick={handleUpdate}
                    >
                        Actualizar
                    </Button>
                </>
            }
        >
            <ProductForm form={form}
                isEdit
                disabled={current_loading}
                onChange={handleInput}
            />
        </SimpleModal>
    )
}

export default translate(UserEdit);