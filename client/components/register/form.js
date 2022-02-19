import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Label,
  FormGroup,
  Form,
  Input,
  Container,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import { translate } from "react-switch-lang";
import StudentRequest from "../../request/student";
import {
  documentTypes,
  cities,
  degrees,
  affiliations,
  maritalStatus,
} from "./data.json";
import { Calendar, CreditCard, Loader, MapPin, Map, Phone, User, MessageCircle, AtSign  } from "react-feather";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { SelectDefault } from "../common/select";
import DragAndDrop from "../DragAndDrop";
import { Col, Row } from "react-bootstrap";
import Divider from "./divider";

const RegisterForm = ({ t }) => {
  const { mode } = useSelector((state) => state.screen);
  //variables para el video

  const studentRequest = new StudentRequest({ translate: t });

  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});
  const [current_loading, setCurrentLoading] = useState(false);

  const _userIcon = <User />;
  const _idCard = <CreditCard />;
  const _placePin = <MapPin/>;
  const _map = <Map/>;
  const _phone = <Phone/>
  const _message = <MessageCircle/>
  const _mail = <AtSign/>

  const handleInput = ({ name, value }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: [] }));
    console.log([name]);
  };

  const canSubmit = useMemo(() => {
    return form?.access;
  }, [form]);

  const handleSave = async (e) => {
    e.preventDefault();
    setCurrentLoading(true);
    await studentRequest
      .store(form)
      .then(() => {
        Swal.fire({
          icon: "success",
          text: `Los datos se guardaron correctamente!`,
        });
        setForm({});
        setErrors({});
        setCurrentLoading(false);
      })
      .catch((err) => {
        Swal.fire({ icon: "warning", text: err.message });
        setCurrentLoading(false);
        setErrors(err.errors);
      });
  };

  return (
    <Container fluid>
      <Row className="my-3">
        <Col xs={12} className="mb-4">
          <h4>Formulario de registro</h4>
          <p>
            Complete los datos requeridos<span className="text-danger">*</span>
          </p>
        </Col>
      </Row>
      <Form>
        <Divider title="Datos Personales" />
        <Row className="my-3">
          <Col xs={12} md={6}>
            <FormGroup>
              <Label>Nombres *</Label>
              <InputGroup>
                <InputGroupText className="bg-white">
                  {_userIcon}
                </InputGroupText>
                <Input
                className={`form-control block input-hero`}
                  required
                  type="text"
                  name="name"
                  value={`${form?.name || ""}`}
                  placeholder="Ingresar nombres"
                  onChange={(e) => handleInput(e.target)}
                  disabled={current_loading}
                />
              </InputGroup>
            </FormGroup>
          </Col>

          <Col xs={12} md={6}>
            <FormGroup>
              <Label>Apellidos *</Label>
              <InputGroup>
                <InputGroupText className="bg-white">
                  {_userIcon}
                </InputGroupText>
                <Input
                className={`form-control block input-hero`}
                  required
                  type="text"
                  name="lastname"
                  value={`${form?.lastname || ""}`}
                  placeholder="Ingresar apellidos"
                  onChange={(e) => handleInput(e.target)}
                  disabled={current_loading}
                  invalid={errors?.lastname?.[0]}
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col md={6} xs={12}>
            <FormGroup>
              <Label>
                Tipo Documento Identidad <b className="text-danger">*</b>
              </Label>
                <SelectDefault
                  options={documentTypes}
                  onChange={(obj, meta) => handleInput({ ...meta, ...obj })}
                  type="text"
                  name="documentTypeId"
                  disabled={current_loading}
                />
            </FormGroup>
          </Col>
          <Col xs={12} md={6}>
            <FormGroup>
              <Label>Número de documento de identidad *</Label>
              <InputGroup>
                <InputGroupText className="bg-white">
                  {_idCard}
                </InputGroupText>
                <Input
                className={`form-control block input-hero`}
                  required
                  type="text"
                  name="documentNumber"
                  value={`${form?.lastname || ""}`}
                  placeholder="Ingresar número de documento de indentidad"
                  onChange={(e) => handleInput(e.target)}
                  disabled={current_loading}
                  invalid={errors?.lastname?.[0]}
                />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xs={12} md={6}>
            <FormGroup>
              <Label >
                Fecha de Nacimiento <b className="text-danger">*</b>
              </Label>
              <Input
                className={`form-control block input-hero`}
                type="date"
                name="dateOfBirth"
                value={`${form?.dateOfBirth || ""}`}
                onChange={(e) => handleInput(e.target)}
                disabled={current_loading}
              />
            </FormGroup>
          </Col>
          <Col md={6} xs={12}>
                 <FormGroup>
                   <Label >
                     Lugar de Nacimiento <b className="text-danger">*</b>
                   </Label>
                   <SelectDefault
                     options={cities}
                     onChange={(obj, meta) => handleInput({ ...meta, ...obj })}
                     type="text"
                     name="cityId"
                     required
                     disabled={current_loading}
                   />
                   <label>{errors?.cityId?.[0] || ""}</label>
                 </FormGroup>
               </Col>
               <Col md={6} xs={12}>
                 <FormGroup>
                   <Label>
                     Dirección de Recidencia <b className="text-danger">*</b>
                   </Label>
                   <InputGroup>
                   <InputGroupText className="bg-white">
                   {_placePin}
                   </InputGroupText>
                   <Input
                   className={`form-control block input-hero`}
                     required
                     type="text"
                     name="address"
                     value={`${form?.address || ""}`}
                    onChange={(e) => handleInput(e.target)}
                     disabled={current_loading}
                     placeholder="Ingresar dirección de residencia"
                   />
                   </InputGroup>        
                 </FormGroup>
               </Col>
               <Col md={6} xs={12}>
                 <FormGroup >
                   <Label>
                     Barrio <b className="text-danger">*</b>
                   </Label>
                   <InputGroup>
                   <InputGroupText className="bg-white">
                   {_map}
                   </InputGroupText>
                   <Input
                   className={`form-control block input-hero`}
                     required
                     type="text"
                     name="neighborhood"
                     value={`${form?.neighborhood || ""}`}
                     onChange={(e) => handleInput(e.target)}
                     disabled={current_loading}
                     placeholder="Ingresar nombre de barrio"
                   />
                   </InputGroup>
                 </FormGroup>
               </Col>
        </Row>
        <Divider title="Datos de Contacto" />
        <Row>
        <Col md={6} xs={12}>
                 <FormGroup>
                   <Label>Teléfono Fijo</Label>
                   <InputGroup>
                   <InputGroupText className="bg-white">
                   {_phone}
                   </InputGroupText>
                   <Input
                   className={`form-control block input-hero`}
                     type="text"
                     name="landline"
                     value={`${form?.landline || ""}`}
                     onChange={(e) => handleInput(e.target)}
                     disabled={current_loading}
                     placeholder="Ingresar número de teléfono"
                   />
                   </InputGroup>
                 </FormGroup>
               </Col>
               <Col md={6} xs={12}>
                 <FormGroup >
                   <Label >
                     WhatsApp <b className="text-danger">*</b>
                   </Label>
                   <InputGroup>
                   <InputGroupText className="bg-white">
                   {_message}
                   </InputGroupText>
                   <Input
                     className={`form-control block input-hero`}
                     required
                     type="text"
                     name="phone"
                     value={`${form?.phone || ""}`}
                     onChange={(e) => handleInput(e.target)}
                     disabled={current_loading}
                     placeholder="Ingresar número de Whatsapp"
                   />
                   </InputGroup>
                 </FormGroup>
               </Col>
               <Col md={6} xs={12}>
                 <FormGroup >
                   <Label>
                     Correo Electrónico <b className="text-danger">*</b>
                   </Label>
                   <InputGroup>
                   <InputGroupText className="bg-white">
                   {_mail}
                   </InputGroupText>
                   <Input
                     className={`form-control block input-hero`}
                     required
                     type="email"
                     name="email"
                     value={`${form?.email || ""}`}
                     onChange={(e) => handleInput(e.target)}
                     disabled={current_loading}
                     valid={!!form?.errors }
                     placeholder="Ingresar dirección de correo electónico"
                   />
                   </InputGroup>
                 </FormGroup>
               </Col>
        </Row>
        <Divider title="Datos Generales" />
        <Row className="my-3">

        </Row>
      </Form>
    </Container>
    // <Col md={12} className='login-main'>
    //   <TabContent activeTab={"jwt"} className="content-login">
    //     <TabPane className="fade show" tabId={"jwt"}>
    //       <Form className="theme-form" onSubmit={handleSave}>
    //         <h4>Formulario de Regístro</h4>
    //         <p>
    //           Complete los datos requeridos (<b className="text-danger">*</b>)
    //         </p>

    //         <Row className="justify-content-center">
    //           <Col md={6} xs={12}>
    //             <FormGroup className="mb-0">
    //               <Label className="col-form-label">
    //                 Nombres <b className="text-danger">*</b>
    //               </Label>
    //               <Input
    //                 className={`form-control block input-hero`}
    //                 type="text"
    //                 name="name"
    //                 value={`${form?.name || ""}`}
    //                 onChange={(e) => handleInput(e.target)}
    //                 disabled={current_loading}
    //               />
    //               <label>{errors?.name?.[0] || ""}</label>
    //             </FormGroup>

    //           </Col>
    //           <Col md={6} xs={12}>
    //             <FormGroup className="mb-0">
    //               <Label className="col-form-label">
    //                 Apellidos <b className="text-danger">*</b>
    //               </Label>
    //               <Input
    //                 className={`form-control block input-hero`}
    //                 type="text"
    //                 name="lastname"
    //                 value={`${form?.lastname || ""}`}
    //                 onChange={(e) => handleInput(e.target)}
    //                 disabled={current_loading}
    //               />
    //               <label>{errors?.lastname?.[0] || ""}</label>
    //             </FormGroup>

    //           </Col>
    //           <Col md={6} xs={12}>
    //             <FormGroup className="mb-0">
    //               <Label className="col-form-label">
    //                 Tipo Documento Identidad <b className="text-danger">*</b>
    //               </Label>
    //               <SelectDefault
    //                 options={documentTypes}
    //                 onChange={(obj, meta) => handleInput({ ...meta, ...obj })}
    //                 type="text"
    //                 name="documentTypeId"
    //                 disabled={current_loading}
    //               />
    //               <label>{errors?.documentTypeId?.[0] || ""}</label>
    //             </FormGroup>

    //           </Col>
    //           <Col md={6} xs={12}>
    //             <FormGroup className="mb-0">
    //               <Label className="col-form-label">
    //                 Numero de Documento <b className="text-danger">*</b>
    //               </Label>
    //               <Input
    //                 className={`form-control block input-hero`}
    //                 type="text"
    //                 name="documentNumber"
    //                 value={`${form?.documentNumber || ""}`}
    //                 onChange={(e) => handleInput(e.target)}
    //                 disabled={current_loading}
    //               />
    //               <label>{errors?.documentNumber?.[0] || ""}</label>
    //             </FormGroup>

    //           </Col>
    //           <Col md={6} xs={12}>
    //             <FormGroup className="mb-0">
    //               <Label className="col-form-label">
    //                 Fecha de Nacimiento <b className="text-danger">*</b>
    //               </Label>
    //               <Input
    //                 className={`form-control block input-hero`}
    //                 type="date"
    //                 name="dateOfBirth"
    //                 value={`${form?.dateOfBirth || ""}`}
    //                 onChange={(e) => handleInput(e.target)}
    //                 disabled={current_loading}
    //               />
    //               <label>{errors?.dateOfBirth?.[0] || ""}</label>
    //             </FormGroup>

    //           </Col>
    //           <Col md={6} xs={12}>
    //             <FormGroup className="mb-0">
    //               <Label className="col-form-label">
    //                 Lugar de Nacimiento <b className="text-danger">*</b>
    //               </Label>
    //               <SelectDefault
    //                 options={cities}
    //                 onChange={(obj, meta) => handleInput({ ...meta, ...obj })}
    //                 type="text"
    //                 name="cityId"
    //                 disabled={current_loading}
    //               />
    //               <label>{errors?.cityId?.[0] || ""}</label>
    //             </FormGroup>

    //           </Col>
    //           <Col md={6} xs={12}>
    //             <FormGroup className="mb-0">
    //               <Label className="col-form-label">
    //                 Dirección de Recidencia <b className="text-danger">*</b>
    //               </Label>
    //               <Input
    //                 className={`form-control block input-hero`}
    //                 type="text"
    //                 name="address"
    //                 value={`${form?.address || ""}`}
    //                 onChange={(e) => handleInput(e.target)}
    //                 disabled={current_loading}
    //               />
    //               <label>{errors?.address?.[0] || ""}</label>
    //             </FormGroup>

    //           </Col>
    //           <Col md={6} xs={12}>
    //             <FormGroup className="mb-0">
    //               <Label className="col-form-label">
    //                 Barrio <b className="text-danger">*</b>
    //               </Label>
    //               <Input
    //                 className={`form-control block input-hero`}
    //                 type="text"
    //                 name="neighborhood"
    //                 value={`${form?.neighborhood || ""}`}
    //                 onChange={(e) => handleInput(e.target)}
    //                 disabled={current_loading}
    //               />
    //               <label>{errors?.neighborhood?.[0] || ""}</label>
    //             </FormGroup>

    //           </Col>
    //           <Col md={6} xs={12}>
    //             <FormGroup className="mb-0">
    //               <Label className="col-form-label">Teléfono Fijo</Label>
    //               <Input
    //                 className={`form-control block input-hero`}
    //                 type="text"
    //                 name="landline"
    //                 value={`${form?.landline || ""}`}
    //                 onChange={(e) => handleInput(e.target)}
    //                 disabled={current_loading}
    //               />
    //               <label>{errors?.landline?.[0] || ""}</label>
    //             </FormGroup>

    //           </Col>
    //           <Col md={6} xs={12}>
    //             <FormGroup className="mb-0">
    //               <Label className="col-form-label">
    //                 WhatsApp <b className="text-danger">*</b>
    //               </Label>
    //               <Input
    //                 className={`form-control block input-hero`}
    //                 type="text"
    //                 name="phone"
    //                 value={`${form?.phone || ""}`}
    //                 onChange={(e) => handleInput(e.target)}
    //                 disabled={current_loading}
    //               />
    //               <label>{errors?.phone?.[0] || ""}</label>
    //             </FormGroup>

    //           </Col>
    //           <Col md={6} xs={12}>
    //             <FormGroup className="mb-0">
    //               <Label className="col-form-label">
    //                 Correo Electrónico <b className="text-danger">*</b>
    //               </Label>
    //               <Input
    //                 className={`form-control block input-hero`}
    //                 type="text"
    //                 name="email"
    //                 value={`${form?.email || ""}`}
    //                 onChange={(e) => handleInput(e.target)}
    //                 disabled={current_loading}
    //               />
    //               <label>{errors?.email?.[0] || ""}</label>
    //             </FormGroup>

    //           </Col>
    //           <Col md={6} xs={12}>
    //             <FormGroup className="mb-0">
    //               <Label className="col-form-label">
    //                 Nivel Académico <b className="text-danger">*</b>
    //               </Label>
    //               <SelectDefault
    //                 options={degrees}
    //                 onChange={(obj, meta) => handleInput({ ...meta, ...obj })}
    //                 type="text"
    //                 name="degreeId"
    //                 disabled={current_loading}
    //               />
    //               <label>{errors?.degreeId?.[0] || ""}</label>
    //             </FormGroup>

    //           </Col>
    //           <Col md={6} xs={12}>
    //             <FormGroup className="mb-0">
    //               <Label className="col-form-label">
    //                 Estado Civil <b className="text-danger">*</b>
    //               </Label>
    //               <SelectDefault
    //                 options={maritalStatus}
    //                 onChange={(obj, meta) => handleInput({ ...meta, ...obj })}
    //                 type="text"
    //                 name="maritalStatusId"
    //                 disabled={current_loading}
    //               />
    //               <label>{errors?.maritalStatusId?.[0] || ""}</label>
    //             </FormGroup>

    //           </Col>
    //           <Col md={6} xs={12}>
    //             <FormGroup className="mb-0">
    //               <Label className="col-form-label">Con quién vive</Label>
    //               <Input
    //                 className={`form-control block input-hero`}
    //                 type="text"
    //                 name="contact"
    //                 value={`${form?.contact || ""}`}
    //                 onChange={(e) => handleInput(e.target)}
    //                 disabled={current_loading}
    //               />
    //               <label>{errors?.contact?.[0] || ""}</label>
    //             </FormGroup>

    //           </Col>
    //           <Col md={6} xs={12}>
    //             <FormGroup className="mb-0">
    //               <Label className="col-form-label">
    //                 Eps <b className="text-danger">*</b>
    //               </Label>
    //               <Input
    //                 className={`form-control block input-hero`}
    //                 type="text"
    //                 name="eps"
    //                 value={`${form?.eps || ""}`}
    //                 onChange={(e) => handleInput(e.target)}
    //                 disabled={current_loading}
    //               />
    //               <label>{errors?.eps?.[0] || ""}</label>
    //             </FormGroup>

    //           </Col>
    //           <Col md={6} xs={12}>
    //             <FormGroup className="mb-0">
    //               <Label className="col-form-label">
    //                 Tipo de Afiliación <b className="text-danger">*</b>
    //               </Label>
    //               <SelectDefault
    //                 options={affiliations}
    //                 onChange={(obj, meta) => handleInput({ ...meta, ...obj })}
    //                 type="text"
    //                 name="affiliationId"
    //                 disabled={current_loading}
    //               />
    //               <label>{errors?.affiliationId?.[0] || ""}</label>
    //             </FormGroup>
    //           </Col>

    //           <Col xs={12}>
    //             <FormGroup className="mb-0 text-center mt-4">
    //               <input
    //                 type="checkbox"
    //                 id="access"
    //                 name="access"
    //                 checked={form?.access}
    //                 onChange={({ target }) =>
    //                   handleInput({ name: target.name, value: target.checked })
    //                 }
    //               />{" "}
    //               <label htmlFor="access" className="text-muted">
    //                 Acepto el manejo de la mis datos personales
    //               </label>
    //             </FormGroup>

    //           </Col>

    //           <Col md={4} xd={10} className="form-group mb-0 mt-5">
    //             <Button
    //               className="btn-block btn-hero"
    //               disabled={!canSubmit || current_loading}
    //             >
    //               {current_loading ? <Loader /> : "Enviar Formulario"}
    //             </Button>
    //           </Col>
    //         </Row>
    //       </Form>
    //     </TabPane>
    //   </TabContent>
    // </Col >
  );
};

export default translate(RegisterForm);
