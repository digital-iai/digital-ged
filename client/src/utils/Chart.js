import React, { Component } from 'react';

import { Bar } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const bar = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const options = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false
  }

class Charts extends Component {

    render() {
        return (
            <div className="animated fadeIn">
                <Card>
                    <CardHeader>
                    Bar Chart
                    <div className="card-header-actions">
                        <a href="http://www.chartjs.org" className="card-header-action">
                        <small className="text-muted">docs</small>
                        </a>
                    </div>
                    </CardHeader>
                    <CardBody>
                    <div className="chart-wrapper">
                        <Bar data={bar} options={options} />
                    </div>
                    </CardBody>
                </Card>
            </div>
        );
}
}

export default Charts;