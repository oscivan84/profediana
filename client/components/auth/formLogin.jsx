import React, { useState, useMemo } from 'react';
import { TabContent, TabPane, Label, FormGroup, Form, Input, Button } from 'reactstrap';
import { Eye, EyeOff } from 'react-feather'
import { translate } from 'react-switch-lang'
import LoginRequest from '../../request/auth/loginRequest'
import { setCookie } from 'nookies'
import { useRouter } from 'next/router'
import { Loader } from 'react-feather'
import Swal from 'sweetalert2';
import Link from 'next/link'
import { useSelector } from 'react-redux'

const FormLogin = ({ t }) => {

    const router = useRouter();

    const { mode } = useSelector(state => state.screen);

    const loginRequest = new LoginRequest({ translate: t });

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
        let required = ['username', 'password'];
        for (let attr of required) {
            let value = form[attr]
            if (!value) return false;
        }
        return true
    }, [form]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setCurrentLoading(true)
        await loginRequest.login(form)
        .then(res => {
            let { access_token } = res.data;
            setCookie(null, 'access_token', access_token);
            router.push('/');
        })
        .catch(err => {
            Swal.fire({ icon: 'warning', text: err.message })
            setCurrentLoading(false)
            setErrors(err.errors);
        })
    }

    return (
        <div className={`login-main ${mode == 'xs' ? 'block' : ''}`}> 
            <TabContent activeTab={"jwt"} className="content-login">
                <TabPane  className="fade show" tabId={"jwt"}>
                    <Form className="theme-form" onSubmit={handleLogin}>
                        <h4>{t('auth.formLogin.title')}</h4>
                        <p>{t('auth.formLogin.description')}</p>

                        <FormGroup className="mb-0">
                            <Label className="col-form-label">Username</Label>
                            <Input className={`form-control block input-hero`} 
                                type="text"
                                name="username"
                                value={`${form?.username || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                placeholder="exmaple"
                                disabled={current_loading}
                            />
                            <label>{errors?.username?.[0] || ''}</label>
                        </FormGroup>

                        <FormGroup className="mb-0">
                            <Label className="col-form-label">{t('auth.formLogin.password')}</Label>
                            <Input className={`form-control block input-hero`}
                                name="password"
                                type={show_password ? 'text' : 'password'}
                                value={`${form?.password || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                placeholder="*********"
                                disabled={current_loading}
                            />
                            
                            <div className="show-hide pt-2 block">
                                {componentTooglePassword}
                            </div>

                            <label>{errors?.password?.[0] || ''}</label>
                        </FormGroup>

                        <div className="form-group mb-0">
                            <div className="checkbox ml-3"></div>
                            <Link href="/resetPassword">
                                <a className="link link-hero">{t('auth.formLogin.forget_password')}</a>
                            </Link>
                        </div>

                        <div className="form-group mb-0 mt-5">
                            <Button
                                className="btn-block btn-hero"
                                disabled={!canSubmit || current_loading}
                            >
                                {current_loading ? <Loader/> : t('auth.formLogin.button')} 
                            </Button>
                        </div>
                    </Form>
                </TabPane>
            </TabContent>
        </div>
    )
}

export default translate(FormLogin);