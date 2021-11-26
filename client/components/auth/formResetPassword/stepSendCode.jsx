import React, { useState, useMemo, useEffect }  from 'react'
import { Label, FormGroup, Input, Button } from 'reactstrap';
import { translate } from 'react-switch-lang'
import { Loader } from 'react-feather'
import Show from '../../utils/show'
import UserRequest from '../../../request/auth/public/userRequest';
import Swal from 'sweetalert2';
import Link from 'next/link'

const StepSendCode = ({ t, onCode = null }) => {

    const userRequest = new UserRequest({ translate: t })

    const [current_loading, setCurrentLoading] = useState(false) 
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({})
    const [send_code, setSendCode] = useState(false);
    const [counter, setCounter] = useState(0);

    let intervalCounter = null

    const canContinue = useMemo(() => {
        return email ? true : false
    }, [email])

    const displayCounter = useMemo(() => {
        return `${t('auth.formResetPassword.timer')}`.replace('{timer}', counter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [t, counter])

    const handleInput = ({ name, value }) => {
        setEmail(value)
        setErrors(prev => ({ ...prev, [name]: [] }))
    }

    const handleTimer = () => {
        intervalCounter = setInterval(() => {
            setCounter(prev => {
                let newCounter = prev - 1
                if (newCounter >= 0) return newCounter
                clearInterval(intervalCounter);
                return 0;
            });
        }, 1000);
    }

    const handleSendCode = async (e) => {
        e?.preventDefault();
        setCurrentLoading(true)
        await userRequest.resetPassword(email)
        .then(async () => {
            await Swal.fire({ icon: 'success', text: t('auth.formResetPassword.success_code') })
            setSendCode(true)
            setCounter(30);
        }).catch(err => Swal.fire({ icon: 'error', text: err.message }))
        setCurrentLoading(false)
    }

    const handleContinue = () => {
        clearInterval(intervalCounter)
        setCounter(0)
        if (typeof onCode == 'function') onCode(email);
    }

    useEffect(() => {
        if (counter == 30) handleTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter])

    return (
        <>
            <FormGroup>
                <Label className="col-form-label">{t('auth.formResetPassword.email')}</Label>
                <Input className={`form-control block input-hero`} 
                    type="email"
                    name="email"
                    value={`${email || ''}`}
                    onChange={(e) => handleInput(e.target)}
                    placeholder="example@gmail.com"
                    disabled={current_loading}
                />
                <label>{errors?.email?.[0] || ''}</label>
            </FormGroup>

            <Show condicion={send_code}>
                <div className="form-group mb-2">
                    <div className="checkbox ml-3"></div>
                    <Show condicion={counter}
                        predeterminado={
                            <a href="#" onClick={!current_loading ? handleSendCode : null} className="link">
                                <u>{t('auth.formResetPassword.send_code')}</u>
                            </a>
                        }
                    >
                        <a href="#" onClick={(e) => e.preventDefault()} 
                            className="link text-muted cursor-not-allowed"
                        >
                            {displayCounter}
                        </a>
                    </Show>
                </div>
            </Show>

            <div className="form-group mb-0">
                <Show condicion={!send_code}
                    predeterminado={
                        <Button color="mt-5" 
                            className="btn-block btn-hero"
                            disabled={!canContinue || current_loading}
                            onClick={handleContinue}
                        >
                            {current_loading ? <Loader/> : t('auth.formResetPassword.continue')} 
                        </Button>
                    }
                >
                    <Button 
                        className="btn-block btn-hero"
                        disabled={!canContinue || current_loading}
                        onClick={handleSendCode}
                    >
                        {current_loading ? <Loader/> : t('auth.formResetPassword.send_code')} 
                    </Button>
                </Show>
            </div>

            <div className="form-group mb-0">
                <div className="checkbox ml-3"></div>
                <Link href="/login">
                    <a className="link link-hero">{t('auth.formResetPassword.back')}</a>
                </Link>
            </div>
        </>
    )
}

export default translate(StepSendCode)