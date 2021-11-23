import React, { useState, useMemo } from 'react';
import { Label, FormGroup, Input, Button } from 'reactstrap';
import { Loader, Eye, EyeOff } from 'react-feather'
import { translate } from 'react-switch-lang'
import UserRequest from '../../../request/auth/public/userRequest';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router'

const StepChangePassword = ({ t, email }) => {

    const userRequest = new UserRequest({ translate: t })

    const router = useRouter();

    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({})
    const [show_password, setShowPassword] = useState(false);
    const [current_loading, setCurrentLoading] = useState(false)

    const handleInput = ({ name, value }) => {
        setForm(prev => ({ ...prev, [name]: value }))
        setErrors(prev => ({ ...prev, [name]: [] }))
    }

    const togglePassword = () => setShowPassword((prev) => (!prev))

    const componentTooglePassword = useMemo(() => {
        let propsPassword = { onClick: togglePassword, className: "cursor-pointer" };
        return show_password ? <EyeOff {...propsPassword}/> : <Eye {...propsPassword}/>
    }, [show_password])

    const canSubmit = useMemo(() => {
        let required = ['code', 'password', 'password_confirmation'];
        for (let attr of required) {
            let value = form[attr]
            if (!value) return false;
        }
        return true
    }, [form]);

    const handleChangePassword = async () => {
        setCurrentLoading(true)
        await userRequest.changePassword(email, form)
        .then(async () => {
            await Swal.fire({ icon: 'success', text: t("auth.formResetPassword.success_password") });
            router.push('/login');
        }).catch(err => {
            Swal.fire({ icon: 'error', text: err.message })
            setErrors(err.errors || {})
        })
        setCurrentLoading(false)
    }

    return (
        <>
            <FormGroup>
                <Label className="col-form-label">{t('auth.formResetPassword.code')}</Label>
                <Input className={`form-control`} 
                    type="text"
                    name="code"
                    value={`${form?.code || ''}`}
                    onChange={(e) => handleInput(e.target)}
                    placeholder="A-0000"
                    disabled={current_loading}
                />
                <label>{errors?.code?.[0] || ''}</label>
            </FormGroup>

            <FormGroup>
                <Label className="col-form-label">{t('auth.formResetPassword.password')}</Label>
                <Input className={`form-control`}
                    name="password"
                    type={show_password ? 'text' : 'password'}
                    value={`${form?.password || ''}`}
                    onChange={(e) => handleInput(e.target)}
                    placeholder="*********"
                    disabled={current_loading}
                />
                
                <div className="show-hide pt-2">
                    {componentTooglePassword}
                </div>

                <label>{errors?.password?.[0] || ''}</label>
            </FormGroup>

            <FormGroup>
                <Label className="col-form-label">{t('auth.formResetPassword.confirm_password')}</Label>
                <Input className={`form-control`}
                    name="password_confirmation"
                    type={show_password ? 'text' : 'password'}
                    value={`${form?.password_confirmation || ''}`}
                    onChange={(e) => handleInput(e.target)}
                    placeholder="*********"
                    disabled={current_loading}
                />
                <label>{errors?.password_confirmation?.[0] || ''}</label>
            </FormGroup>

            <div className="form-group mb-0 mt-5">
                <Button color="primary" 
                    className="btn-block"
                    disabled={!canSubmit || current_loading}
                    onClick={handleChangePassword}
                >
                    {current_loading ? <Loader/> : t('auth.formResetPassword.submit')} 
                </Button>
            </div>
        </>
    )
}

export default translate(StepChangePassword);