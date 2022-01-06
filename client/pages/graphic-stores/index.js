import React from 'react';
import { Pie } from 'react-chartjs-2';
import axios from "axios";
import { useState,useEffect } from 'react';
import { FormGroup,Label,Input ,Button,Container,Row, Col} from 'reactstrap'

const data = {
  labels: ['Cede1', 'Cede2', 'Cede3', 'Cede4', 'Cede5', 'Cede6'],
  datasets:[{
      label: 'Total ventas por cedes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 2
  }]
};

const opciones={
  maintainAspectRatio:false,
  responsive: true
};
const GraphicStores = () => {
  const dataSales=[
    {id:1, name:"cede1",sales:200},
    {id:2, name:"cede2",sales:250},
    {id:3 ,name:"cede3",sales:300},
    {id:4, name:"cede4",sales:500},
    {id:5, name:"cede5",sales:600},
    {id:6, name:"cede6",sales:521}
  ]


const [sales,setSales] = useState (null)
  useEffect(() => {
    setSales(dataSales)
    console.log(sales)
   peticionApi();
},[])


    const peticionApi =async()=>{
       const dataAPI = await fetch("https://pokeapi.co/api/v2/ability/4")
       const dataRes = await dataAPI.json()
        console.log(dataRes)
    }
    return (
        <Container style={{display: 'flex', flexDirection: 'column'}} className="p-4">
            <Row xs = "2">
                <Col>
            <FormGroup>
    <Label for="fechaInicial">
      Fecha Inicial
    </Label>
    <Input
      id="fechaInicial"
      name="date"
      placeholder="date placeholder"
      type="date"
    />
  </FormGroup>
                </Col>
                <Col>
  <FormGroup>
    <Label for="fechaFinal">
      Fecha Final
    </Label>
    <Input
      id="fechaFinal"
      name="date"
      placeholder="date placeholder"
      type="date"
    />
  </FormGroup>
                </Col>

  </Row>
  <Button
    color="primary"
  >
    Click Me
  </Button>
             <Pie data={data} option={opciones} style={{width: '50%' ,height: '50%'}} onClick={peticionApi}/>;
        </Container>
    )
}

export default GraphicStores
