import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import axios from "axios";
import { LayoutCuba } from '../../components/common/layout';
import Breadcrumb from '../../components/common/layout/breadcrumb';
import { useState, useEffect } from 'react';
import { FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap'
import { AvForm, AvField, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';


const today = new Date();
const GraphicStores = () => {

  const [toDate, setToDate] = useState(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
  const [fromDate, setFromDate] = useState(new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate() - 1));
  const [sells, setSells] = useState({
    sedeA: [12, 15, 20, 10, 5, 2, 5],
    sedeB: [2, 10, 5, 20, 5, 12, 5],
    total: [12, 15, 11, 10, 5, 2, 5]
  });


  const opciones = {
    maintainAspectRatio: false,
    responsive: true
  };

  const _calculateDate = () => {
    let dates = [];
    const copyDate = new Date(fromDate);
    while (copyDate <= toDate) {
      dates.push(copyDate.getDate());
      copyDate.setDate(copyDate.getDate() + 1);
    }
    return dates;
  }

  const data = {
    labels: _calculateDate(),
    datasets: [{
      label: 'Total ventas',
      data: sells.total,
      tension: 0.5,
      borderWidth: 2
    },
    {
      label: 'Sede A',
      data: sells.sedeA,
      tension: 0.5,
      borderWidth: 2,
      backgroundColor: 'rgba(255, 99, 132, 0.2)'
    },
    {
      label: 'Sede B',
      data: sells.sedeB,
      tension: 0.5,
      borderWidth: 2,
      backgroundColor: 'rgba(54, 162, 235, 0.2)'
    },
    ]
  }
  const _onValidSubmit = (e, values) => {
    console.log(new Date(values.from));
    setToDate(new Date(values.to));
    setFromDate(new Date(values.from));
    console.log(values);
  }

  const peticionApi = async () => {
    await axios.get("https://pokeapi.co/api/v2/ability/4")
      .then(response => {
        console.log(response.data)
      })

    useEffect(() => {
      console.log("hh")
      peticionApi();
    }, [])
  }
  return (
    <LayoutCuba>
      <Breadcrumb parent="seller" title="Ventas" />
      <Container>
        <Row>
          <Col sm={12} md={3} className='custom-card card'>
            <AvForm onValidSubmit={_onValidSubmit}>
              <AvField name="from" label="Desde:" placeholder="Desde:" type="date" defaultValue={fromDate.toISOString().split('T')[0]}
                validate={{
                  max: {
                    value: new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate()),
                    errorMessage: "La fecha no puede ser mayor a la actual"
                  }
                }}
              />
              <AvField name="to" label="Hasta:" placeholder="Hasta:" type="date" defaultValue={toDate.toISOString().split('T')[0]} validate={{
                min: {
                  value: new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate()),
                  errorMessage: "La fecha debe ser mayor o igual a la fecha de inicio"
                },
                max: {
                  value: new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate() + 1),
                  errorMessage: "La fecha no puede ser mayor a la actual"
                }
              }} />
              <AvCheckboxGroup inline name="places" label="Sedes"
                defaultValue={['sedeA', 'sedeB']}
                validate={{
                  required: {
                    value: true,
                    errorMessage: "Debe seleccionar al menos una sede"
                  },
                  min: { value: 1, errorMessage: 'Se debe seleccionar al menos uno' },
                }}>
                <AvCheckbox label="Sede A" value="sedeA" />
                <AvCheckbox label="Sede B" value="sedeB" />
              </AvCheckboxGroup>
              <Button color="primary" type='submit'>Buscar</Button>
            </AvForm>
          </Col>
          <Col sm={12} md={9}>
            <div className='custom-card card'>
              <Line data={data} option={opciones} />;
            </div>
          </Col>
        </Row>
      </Container>
    </LayoutCuba>
  )
}

export default GraphicStores