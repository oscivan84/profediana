import React, { useState, useMemo } from 'react';
import { TabContent, TabPane, Label, FormGroup, Form, Input, Button } from 'reactstrap';
import { Eye, EyeOff } from 'react-feather'
import { translate } from 'react-switch-lang'
import LoginRequest from '../../request/auth/loginRequest'
import { setCookie } from 'nookies'
import { useRouter } from 'next/router'
import { Loader } from 'react-feather'
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux'

const RegisterForm = ({ t }) => {

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

    const canSubmit = useMemo(() => { 
      return true
    }, []);

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
        <div className={`login-main ${mode == 'xs' ? 'block' : 'col-md-8 col-ms-10'}`}> 
            <TabContent activeTab={"jwt"} className="content-login">
                <TabPane  className="fade show" tabId={"jwt"}>
                    <Form className="theme-form" onSubmit={handleLogin}>
                        <h4>Formulario de Regístro</h4>
                        <p>Complete los campos necesarios</p>

                        <div className='row justify-content-center'>
                          <FormGroup className="mb-0 col-md-6 col-12">
                            <Label className="col-form-label">Nombres</Label>
                            <Input className={`form-control block input-hero`} 
                                type="text"
                                name="name"
                                value={`${form?.name || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                disabled={current_loading}
                            />
                            <label>{errors?.name?.[0] || ''}</label>
                          </FormGroup>

                          <FormGroup className="mb-0 col-md-6 col-12">
                            <Label className="col-form-label">Apellidos</Label>
                            <Input className={`form-control block input-hero`} 
                                type="text"
                                name="lastname"
                                value={`${form?.lastname || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                disabled={current_loading}
                            />
                            <label>{errors?.lastname?.[0] || ''}</label>
                          </FormGroup>

                          <FormGroup className="mb-0 col-md-6 col-12">
                            <Label className="col-form-label">Tipo Documento Identidad</Label>
                            <Input className={`form-control block input-hero`} 
                                type="text"
                                name="documentTypeId"
                                value={`${form?.documentTypeId || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                disabled={current_loading}
                            />
                            <label>{errors?.documentTypeId?.[0] || ''}</label>
                          </FormGroup>

                          <FormGroup className="mb-0 col-md-6 col-12">
                            <Label className="col-form-label">Numero de Documento</Label>
                            <Input className={`form-control block input-hero`} 
                                type="text"
                                name="documentNumber"
                                value={`${form?.documentNumber || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                disabled={current_loading}
                            />
                            <label>{errors?.documentNumber?.[0] || ''}</label>
                          </FormGroup>

                          <FormGroup className="mb-0 col-md-6 col-12">
                            <Label className="col-form-label">Fecha de Nacimiento</Label>
                            <Input className={`form-control block input-hero`} 
                                type="date"
                                name="dateOfBirth"
                                value={`${form?.dateOfBirth || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                disabled={current_loading}
                            />
                            <label>{errors?.dateOfBirth?.[0] || ''}</label>
                          </FormGroup>

                          <FormGroup className="mb-0 col-md-6 col-12">
                            <Label className="col-form-label">Lugar de Nacimiento</Label>
                            <Input className={`form-control block input-hero`} 
                                type="text"
                                name="dateOfBirth"
                                value={`${form?.dateOfBirth || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                disabled={current_loading}
                            />
                            <label>{errors?.dateOfBirth?.[0] || ''}</label>
                          </FormGroup>

                          <FormGroup className="mb-0 col-md-6 col-12">
                            <Label className="col-form-label">Dirección de Recidencia</Label>
                            <Input className={`form-control block input-hero`} 
                                type="text"
                                name="address"
                                value={`${form?.address || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                disabled={current_loading}
                            />
                            <label>{errors?.address?.[0] || ''}</label>
                          </FormGroup>

                          <FormGroup className="mb-0 col-md-6 col-12">
                            <Label className="col-form-label">Barrio</Label>
                            <Input className={`form-control block input-hero`} 
                                type="text"
                                name="neighborhood"
                                value={`${form?.neighborhood || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                disabled={current_loading}
                            />
                            <label>{errors?.neighborhood?.[0] || ''}</label>
                          </FormGroup>

                          <FormGroup className="mb-0 col-md-6 col-12">
                            <Label className="col-form-label">Teléfono Fijo</Label>
                            <Input className={`form-control block input-hero`} 
                                type="text"
                                name="landline"
                                value={`${form?.landline || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                disabled={current_loading}
                            />
                            <label>{errors?.landline?.[0] || ''}</label>
                          </FormGroup>

                          <FormGroup className="mb-0 col-md-6 col-12">
                            <Label className="col-form-label">Teléfono Movil</Label>
                            <Input className={`form-control block input-hero`} 
                                type="text"
                                name="phone"
                                value={`${form?.phone || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                disabled={current_loading}
                            />
                            <label>{errors?.phone?.[0] || ''}</label>
                          </FormGroup>

                          <FormGroup className="mb-0 col-md-6 col-12">
                            <Label className="col-form-label">Correo Electrónico</Label>
                            <Input className={`form-control block input-hero`} 
                                type="text"
                                name="email"
                                value={`${form?.email || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                disabled={current_loading}
                            />
                            <label>{errors?.email?.[0] || ''}</label>
                          </FormGroup>

                          <FormGroup className="mb-0 col-md-6 col-12">
                            <Label className="col-form-label">Nivel Académico</Label>
                            <Input className={`form-control block input-hero`} 
                                type="text"
                                name="degreeId"
                                value={`${form?.degreeId || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                disabled={current_loading}
                            />
                            <label>{errors?.degreeId?.[0] || ''}</label>
                          </FormGroup>

                          <FormGroup className="mb-0 col-md-6 col-12">
                            <Label className="col-form-label">Estado Civil</Label>
                            <Input className={`form-control block input-hero`} 
                                type="text"
                                name="maritalStatusId"
                                value={`${form?.maritalStatusId || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                disabled={current_loading}
                            />
                            <label>{errors?.maritalStatusId?.[0] || ''}</label>
                          </FormGroup>

                          <FormGroup className="mb-0 col-md-6 col-12">
                            <Label className="col-form-label">Con quién vive</Label>
                            <Input className={`form-control block input-hero`} 
                                type="text"
                                name="contact"
                                value={`${form?.contact || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                disabled={current_loading}
                            />
                            <label>{errors?.contact?.[0] || ''}</label>
                          </FormGroup>

                          <FormGroup className="mb-0 col-md-6 col-12">
                            <Label className="col-form-label">Eps</Label>
                            <Input className={`form-control block input-hero`} 
                                type="text"
                                name="eps"
                                value={`${form?.eps || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                disabled={current_loading}
                            />
                            <label>{errors?.eps?.[0] || ''}</label>
                          </FormGroup>

                          <FormGroup className="mb-0 col-md-6 col-12">
                            <Label className="col-form-label">Tipo de Afiliación</Label>
                            <Input className={`form-control block input-hero`} 
                                type="text"
                                name="affiliationId"
                                value={`${form?.affiliationId || ''}`}
                                onChange={(e) => handleInput(e.target)}
                                disabled={current_loading}
                            />
                            <label>{errors?.affiliationId?.[0] || ''}</label>
                          </FormGroup>

                          {/* <div className="form-group mb-0">
                              <div className="checkbox ml-3"></div>
                              <Link href="/resetPassword">
                                  <a className="link link-hero">{t('auth.formLogin.forget_password')}</a>
                              </Link>
                          </div> */}

                          <FormGroup className="mb-0 col-12 text-center">
                            <input type='checkbox'/> Acepto el manejo de la mis datos personales
                          </FormGroup>

                          <div className="form-group mb-0 mt-5 col-md-4 col-10">
                              <Button
                                  className="btn-block btn-hero"
                                  disabled={!canSubmit || current_loading}
                              >
                                  {current_loading ? <Loader/> : "Enviar Formulario" }
                              </Button>
                          </div>
                        </div>
                    </Form>
                </TabPane>
            </TabContent>
        </div>
    )
}

export default translate(RegisterForm);