import React from 'react';
import { Pie } from 'react-chartjs-2';
import axios from "axios";
import { useState,useEffect } from 'react';
import { FormGroup,Label,Input ,Button,Container,Row, Col} from 'reactstrap'



const GraphicStores = () => {
  
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
    }
    const opciones={
        maintainAspectRatio:false,
        responsive: true
    };

    const peticionApi =async()=>{
        await axios.get("https://pokeapi.co/api/v2/ability/4")
        .then(response=>{
            console.log(response.data)
        })

        useEffect(() => {
            console.log("hh")
           peticionApi();
        },[])
    }
    return (
        <Container style={{display: 'flex', flexDirection: 'column'}} className="p-4">
            <Row xs = "2">
                <Col>
            <FormGroup>
    <Label for="exampleDate">
      Fecha Inicial
    </Label>
    <Input
      id="exampleDate"
      name="date"
      placeholder="date placeholder"
      type="date"
    />
  </FormGroup>
                </Col>
                <Col>
  <FormGroup>
    <Label for="exampleDate">
      Fecha Final
    </Label>
    <Input
      id="exampleDate"
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
             <Pie data={data} option={opciones} style={{width: '50%' ,height: '50%'}}/>;
        </Container>
    )
}

export default GraphicStores








// import React from 'react';
// //import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';

// //ChartJS.register(ArcElement, Tooltip, Legend);



// export function GraphicStores() {
//     export const data = {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [
//           {
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)',
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)',
//             ],
//             borderWidth: 1,
//           },
//         ],
//       };
//   return <Pie data={data} />;
// }

