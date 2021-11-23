import React, { useState } from 'react';
import { TabContent, TabPane, Form } from 'reactstrap';
import { translate } from 'react-switch-lang'
import Show from '../../utils/show'
import StepSendCode from './stepSendCode'
import StepChangePassword from './stepChangePassword';

const FormResetPassword = ({ t }) => {

    const [is_code, setIsCode] = useState(false)
    const [current_email, setCurrentEmail] = useState()

    const onContinue = (email) => {
        setCurrentEmail(email)
        setIsCode(true)
    }

    return (
        <div className="login-main"> 
            <TabContent activeTab={"jwt"} className="content-login">
                <TabPane  className="fade show" tabId={"jwt"}>
                    <Form className="theme-form" onSubmit={(e) => e.preventDefault()}>
                        <h4>{t('auth.formResetPassword.title')}</h4>
                        <p>{t('auth.formResetPassword.description')}</p>
                        <Show condicion={!is_code}
                            predeterminado={<StepChangePassword email={current_email}/>}
                        >
                           {<StepSendCode onCode={onContinue}/>}
                        </Show>
                    </Form>
                </TabPane>
            </TabContent>
        </div>
    )
}

export default translate(FormResetPassword);