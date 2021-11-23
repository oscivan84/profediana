import React from 'react'
import { connect } from 'react-redux'
import { authorize } from '../../helpers/authServerSideProps'
import Layout from '../../components/layout'
import Breadcrumb from '../../components/layout/breadcrumb'
import { Container } from 'reactstrap'
import RoleList from '../../components/auth/roles/roleList'
import { translate } from 'react-switch-lang'

const RolesPage = ({ t }) => (
    <Layout>
        <Breadcrumb parent={t('pages.auth.roles.title')} title={t('pages.auth.roles.description')} />
        <Container fluid>
            <RoleList/>
        </Container>
    </Layout>
)

export const getServerSideProps = authorize("Roles");

export default connect(state => state)(translate(RolesPage));