import React, { useEffect, useMemo, useState } from 'react';
import SizingTable from '../../tables/sizingTable'
import PeopleRequest from '../../../request/auth/peopleRequest';
import { translate } from 'react-switch-lang'
import { setPeople, addPeople, setPerson } from '../../../redux/thunks/peopleThunk'
import { useDispatch, useSelector } from 'react-redux';
import ObjectId from 'bson-objectid'
import { HeaderList } from '../../utils/headers'
import PersonEdit from './personEdit'
import { FloatButton } from '../../utils/buttons'
import { Plus } from 'react-feather'
import PersonCreate from './personCreate'
import PersonItem from './personItem'
import useRequest from '../../../hook/useRequest'

const options = {
    CREATE: "CREATE",
    EDIT: "EDIT",
}

const PersonList = ({ t }) => {

    // redux
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.people)
    
    // states
    const [option, setOption] = useState(options.LIST);

    // request
    const peopleRequest = new PeopleRequest({ translate: t })

    // hooks
    const request = useRequest({ handle: peopleRequest.index }, (data, add) => {
        let result = add ? addPeople : setPeople;
        dispatch(result(data));
    });

    const handleQuerySearch = (target) => {
        request.setQuerySearch(target?.value)
    }

    const handleSearch = () => {
        request.setIsRefresh(true);
    }

    const handleEdit = (person = {}) => {
        setOption(options.EDIT)
        dispatch(setPerson(person))
    }

    const toggle = () => {
        setOption("")
    }

    return (
        <>
            <SizingTable isLoading={request.loading}
                disabled={!request.canNext}
                isData={data.length}
                title={
                    <HeaderList start={data.length}
                        total={request.total}
                        disabled={request.loading}
                        querySearch={request.query_search}
                        onChange={handleQuerySearch}
                        onClick={handleSearch}
                    />
                }
                headers={["#", "Apellidos y Nombres", "Documento", "Edad", "Sexo", "Fecha de Nacimiento", "Acciones"]}
                onDown={() => setPage(prev => prev + 1)}
            >
                {data.map((d, index) => 
                    <PersonItem key={`list-item-${new ObjectId().toHexString()}`}
                        onEdit={handleEdit}
                        person={d}
                        index={index}
                    />
                )}
            </SizingTable>
            {/* create person */}
            <FloatButton 
                icon={<Plus/>}
                color="success"
                onClick={() => setOption(options.CREATE)}
            />
            <PersonCreate isOpen={option == options.CREATE} 
                toggle={toggle}
            />
            {/* edit */}
            <PersonEdit isOpen={option == options.EDIT}
                toggle={toggle}
            />
        </>
    )
}

export default translate(PersonList);