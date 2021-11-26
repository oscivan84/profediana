import React from 'react'
import { connect } from 'react-redux'
import { authorize } from '../../helpers/authServerSideProps'
import { LayoutCuba } from '../../components/common/layout'
import Breadcrumb from '../../components/layout/breadcrumb'
import { Container } from 'reactstrap'
import UserList from '../../components/auth/users/userList'
import { translate } from 'react-switch-lang'

const UsersPage = ({ t }) => (
    <LayoutCuba>
        <Breadcrumb parent={t('pages.auth.users.title')} title={t('pages.auth.users.description')} />
        <Container fluid>
            <UserList/>
        </Container>
    </LayoutCuba>
)

export const getServerSideProps = authorize("Users");

export default connect(state => state)(translate(UsersPage));