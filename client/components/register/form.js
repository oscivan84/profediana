import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Label,
  FormGroup,
  Container,
  InputGroup,
  InputGroupText,
  Button,
  Spinner,
  TabContent,
  TabPane
} from "reactstrap";
import { translate } from "react-switch-lang";
import StudentRequest from "../../request/student";
import {
  documentTypes,
  cities,
  degrees,
  affiliations,
  maritalStatus,
} from "./data";
import {
  CreditCard,
  MapPin,
  Map,
  Phone,
  User,
  MessageCircle,
  AtSign,
  Users,
  FileText,
} from "react-feather";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { SelectDefault } from "../common/select";
import DragAndDrop from "../DragAndDrop";
import { Col, Row } from "react-bootstrap";
import Divider from "./divider";
import { useForm, Controller } from "react-hook-form";

const RegisterForm = ({ t }) => {
  // const { mode } = useSelector((state) => state.screen);
  //variables para el video

  const studentRequest = new StudentRequest({ translate: t });

  // const [inputSuccess, setIputSuccess] = useState(false);
  const [canSend, setCanSend] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handlerCheckAccess = (e) => {
    const accessTerms = e.target.checked;
    if (accessTerms) {
      setCanSend(true);
    } else {
      setCanSend(false);
    }
  };

  const _userIcon = <User />;
  const _idCard = <CreditCard />;
  const _placePin = <MapPin />;
  const _map = <Map />;
  const _phone = <Phone />;
  const _message = <MessageCircle />;
  const _mail = <AtSign />;
  const _married = <Users />;
  const _file = <FileText />;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    await studentRequest
      .store(data)
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "¡Datos guardados correctamente!",
        });
        reset();
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          icon: "warning",
          text: `${error.message}`,
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    const subscription = watch((data) => {
      console.log(data)
    })
    return () => {
      subscription.unsubscribe();
    }
  }, [watch])

  // const handleInput = ({ name, value }) => {
  //   setForm((prev) => ({ ...prev, [name]: value }));
  //   setErrors((prev) => ({ ...prev, [name]: [] }));
  //   if(inputRegex.test(value)){
  //     setIputSuccess(true);
  //   }else{
  //     setIputSuccess(false)
  //   }
  // };

  // const canSubmit = useMemo(() => {
  //   return form?.access;
  // }, [form]);

  // const handleSave = async (e) => {
  //   e.preventDefault();
  //   setCurrentLoading(true);
  //   await studentRequest
  //     .store(form)
  //     .then(() => {
  //       Swal.fire({
  //         icon: "success",
  //         text: `Los datos se guardaron correctamente!`,
  //       });
  //       setForm({});
  //       setErrors({});
  //       setCurrentLoading(false);
  //     })
  //     .catch((err) => {
  //       Swal.fire({ icon: "warning", text: err.message });
  //       setCurrentLoading(false);
  //       setErrors(err.errors);
  //     });
  // };

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
      <Row>
        <Col>
        <TabContent activeTab={"jwt"} className="content-login">
        <TabPane className="fade show" tabId={"jwt"}>
        <form onSubmit={handleSubmit(onSubmit)}>
        {/* Datos Personales */}
        <Divider title="Datos Personales" />
        <Row className="my-4">
          <Col xs={12} md={4}>
            <FormGroup>
              <Label>
                Nombres <b className="text-danger">*</b>
              </Label>
              <InputGroup>
                <InputGroupText className="bg-white">
                  {_userIcon}
                </InputGroupText>
                <input
                  className={`form-control block input-hero ${
                    errors?.name ? "invalid-control" : ""
                  }`}
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Ingresar nombres"
                />
              </InputGroup>
              {errors?.name ? (
                <span className="text-danger">* Campo requerido</span>
              ) : null}
            </FormGroup>
          </Col>

          <Col xs={12} md={4}>
            <FormGroup>
              <Label>
                Apellidos <b className="text-danger">*</b>
              </Label>
              <InputGroup>
                <InputGroupText className="bg-white">
                  {_userIcon}
                </InputGroupText>
                <input
                  className={`form-control block input-hero ${
                    errors?.name ? "invalid-control" : ""
                  }`}
                  {...register("lastname", { required: true })}
                  type="text"
                  placeholder="Ingresar apellidos"
                />
              </InputGroup>
              {errors?.lastname ? (
                <span className="text-danger">* Campo requerido</span>
              ) : null}
            </FormGroup>
          </Col>
          <Col md={4} xs={12}>
            <FormGroup>
              <Label>
                Tipo Documento Identidad <b className="text-danger">*</b>
              </Label>
              <Controller
                control={control}
                name="documentTypeId"
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <SelectDefault
                    value={documentTypes.find(d => d.value === value)}
                    options={documentTypes}
                    onChange={val => onChange(val.value)}
                    type="text"
                  />
                )}
              />
            </FormGroup>
            {errors?.documentTypeId ? (
              <span className="text-danger">* Campo requerido</span>
            ) : null}
          </Col>
          <Col xs={12} md={4}>
            <FormGroup>
              <Label>
                Número de documento de identidad{" "}
                <b className="text-danger">*</b>
              </Label>
              <InputGroup>
                <InputGroupText className="bg-white">{_idCard}</InputGroupText>
                <input
                  className={`form-control block input-hero`}
                  {...register("documentNumber", { required: true , maxLength: 12})}
                  type="text"
                  placeholder="Ingresar número de doc. de indentidad"
                />
              </InputGroup>
            </FormGroup>
            {errors?.documentNumber ? (
              <span className="text-danger">* Campo requerido</span>
            ) : null}
          </Col>
          <Col xs={12} md={4}>
            <FormGroup>
              <Label>
                Fecha de Nacimiento <b className="text-danger">*</b>
              </Label>
              <input
                className={`form-control block input-hero ${
                  errors?.name ? "invalid-control" : ""
                }`}
                type="date"
                {...register("dateOfBirth", { required: true })}
              />
            </FormGroup>
            {errors?.dateOfBirth ? (
              <span className="text-danger">* Campo requerido</span>
            ) : null}
          </Col>
          <Col md={4} xs={12}>
            <FormGroup>
              <Label>
                Lugar de Nacimiento <b className="text-danger">*</b>
              </Label>
              <Controller
                name="cityId"
                rules={{ required: true }}
                control={control}
                render={({ field: { value, onChange } }) => (
                  <SelectDefault
                    value={cities.find((d) => d.value === value)}
                    options={cities}
                    onChange={val => onChange(val.value)}
                    type="text"
                  />
                )}
              />
            </FormGroup>
            {errors?.citId ? (
              <span className="text-danger">* Campo requerido</span>
            ) : null}
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
                <input
                  {...register("address", { required: true })}
                  className={`form-control block input-hero ${
                    errors?.name ? "invalid-control" : ""
                  }`}
                  type="text"
                  placeholder="Ingresar dirección de residencia"
                />
              </InputGroup>
            </FormGroup>
            {errors?.address ? (
              <span className="text-danger">* Campo requerido</span>
            ) : null}
          </Col>
          <Col md={6} xs={12}>
            <FormGroup>
              <Label>
                Barrio <b className="text-danger">*</b>
              </Label>
              <InputGroup>
                <InputGroupText className="bg-white">{_map}</InputGroupText>
                <input
                  className={`form-control block input-hero ${
                    errors?.name ? "invalid-control" : ""
                  }`}
                  {...register("neighborhood", { required: true })}
                  type="text"
                  placeholder="Ingresar nombre de barrio"
                />
              </InputGroup>
            </FormGroup>
            {errors?.neighborhood ? (
              <span className="text-danger">* Campo requerido</span>
            ) : null}
          </Col>
        </Row>
        {/* Datos de contacto */}
        <Divider title="Datos de Contacto" />
        <Row>
          <Col md={6} xs={12}>
            <FormGroup>
              <Label>Teléfono Fijo</Label>
              <InputGroup>
                <InputGroupText className="bg-white">{_phone}</InputGroupText>
                <input
                  className={`form-control block input-hero ${
                    errors?.name ? "invalid-control" : ""
                  }`}
                  {...register("landline", { required: true })}
                  type="text"
                  placeholder="Ingresar número de teléfono"
                />
              </InputGroup>
            </FormGroup>
            {errors?.landline ? (
              <span className="text-danger">* Campo requerido</span>
            ) : null}
          </Col>
          <Col md={6} xs={12}>
            <FormGroup>
              <Label>
                WhatsApp <b className="text-danger">*</b>
              </Label>
              <InputGroup>
                <InputGroupText className="bg-white">{_message}</InputGroupText>
                <input
                  className={`form-control block input-hero ${
                    errors?.name ? "invalid-control" : ""
                  }`}
                  {...register("phone", { required: true })}
                  type="text"
                  placeholder="Ingresar número de Whatsapp"
                />
              </InputGroup>
            </FormGroup>
            {errors?.phone ? (
              <span className="text-danger">* Campo requerido</span>
            ) : null}
          </Col>
          <Col md={6} xs={12}>
            <FormGroup>
              <Label>
                Correo Electrónico <b className="text-danger">*</b>
              </Label>
              <InputGroup>
                <InputGroupText className="bg-white">{_mail}</InputGroupText>
                <input
                  className={`form-control block input-hero ${
                    errors?.name ? "invalid-control" : ""
                  }`}
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Ingresar dirección de correo electónico"
                />
              </InputGroup>
            </FormGroup>
            {errors?.email ? (
              <span className="text-danger">* Campo requerido</span>
            ) : null}
          </Col>
        </Row>
        {/* Datos Generales */}
        <Divider title="Datos Generales" />
        <Row className="my-4">
          <Col md={4} xs={12}>
            <FormGroup>
              <Label>
                Nivel Académico <b className="text-danger">*</b>
              </Label>
              <Controller
                control={control}
                name="degreeId"
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <SelectDefault
                    value={degrees.find((d) => d.value === value)}
                    options={degrees}
                    onChange={val => onChange(val.value)}
                    type="text"
                  />
                )}
              />
            </FormGroup>
            {errors?.degreeId ? (
              <span className="text-danger">* Campo requerido</span>
            ) : null}
          </Col>
          <Col md={4} xs={12}>
            <FormGroup>
              <Label>
                Estado Civil <b className="text-danger">*</b>
              </Label>
              <Controller
                control={control}
                name="maritalStatusId"
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <SelectDefault
                    value={maritalStatus.find((d) => d.value === value)}
                    options={maritalStatus}
                    onChange={val => onChange(val.value)}
                    type="text"
                  />
                )}
              />
            </FormGroup>
            {errors?.maritalStatusId ? (
              <span className="text-danger">* Campo requerido</span>
            ) : null}
          </Col>
          <Col md={4} xs={12}>
            <FormGroup>
              <Label>¿Con quién vive?</Label>
              <InputGroup>
                <InputGroupText className="bg-white">{_married}</InputGroupText>
                <input
                  className={`form-control block input-hero ${
                    errors?.name ? "invalid-control" : ""
                  }`}
                  {...register("contact", { required: true })}
                  type="text"
                />
              </InputGroup>
            </FormGroup>
            {errors?.contact ? (
              <span className="text-danger">* Campo requerido</span>
            ) : null}
          </Col>
          <Col md={4} xs={12}>
            <FormGroup>
              <Label>
                Eps <b className="text-danger">*</b>
              </Label>
              <InputGroup>
                <InputGroupText className="bg-white">{_file}</InputGroupText>
                <input
                  className={`form-control block input-hero ${
                    errors?.name ? "invalid-control" : ""
                  }`}
                  {...register("eps", { required: true })}
                  type="text"
                />
              </InputGroup>
            </FormGroup>
            {errors?.eps ? (
              <span className="text-danger">* Campo requerido</span>
            ) : null}
          </Col>
          <Col md={4} xs={12}>
            <FormGroup>
              <Label>
                Tipo de Afiliación <b className="text-danger">*</b>
              </Label>
              <Controller
                control={control}
                name="affiliationId"
                rules={{ required: true }}
                defaultValue=""
                render={({ field: { value, onChange } }) => (
                  <SelectDefault
                    value={affiliations.find((d) => d.value === value)}
                    options={affiliations}
                    onChange={val => onChange(val.value)}
                    type="text"
                  />
                )}
              />
            </FormGroup>
            {errors?.eps ? (
              <span className="text-danger">* Campo requerido</span>
            ) : null}
          </Col>
        </Row>
        <Row>
          <hr />
          <Col xs={12} md={4}>
            <FormGroup className="form-check">
              <input
                id="acces"
                className="form-check-input"
                type="checkbox"
                onChange={handlerCheckAccess}
              />
              <Label className="form-check-label" for="acces">
                Acepto el manejo de mis datos personales
              </Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4} xd={10} className="form-group mb-0 mt-5">
            <Button
              type="submit"
              className="btn-block "
              disabled={!canSend || loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span>&nbsp;Enviando Formulario...</span>
                </>
              ) : (
                <span>Enviar Formulario</span>
              )}
            </Button>
          </Col>
        </Row>
      </form>
        </TabPane>
        </TabContent>
        </Col>
      </Row>

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
