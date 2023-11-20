import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { ServiciosService } from 'src/app/service/servicios.service';

@Component({
  selector: 'app-reporte01',
  templateUrl: './reporte01.component.html',
  styleUrls: ['./reporte01.component.css']
})
export class Reporte01Component implements OnInit{

  barCharOptions: ChartOptions = {
    responsive: true
  };
  barChartLabel: string[] = []
  barChartType: ChartType = 'bar'
  barCharLegend = true
  barChartData: ChartDataset[] = []
  barChartData2: ChartDataset[] = []
  constructor(private eS:ServiciosService){}

  ngOnInit(): void {
    // Etiquetas estáticas
    const staticLabels = ['Cantidad Disponible', 'Cantidad No Disponible'];
  
    this.eS.getSuma().subscribe((data) => {
      const availableData = data.map(item => item.quanttiyByServiceDisp);
      const notAvailableData = data.map(item=>item.quanttiyByServiceNoDisp);
  
      this.barChartLabel = staticLabels;
      this.barChartData = [
        {
          data: availableData,
          label: 'Cantidad Disponible',
          backgroundColor: 'rgba(255, 0, 0, 0.7)'
        },
        {
          data: notAvailableData,
          label: 'Cantidad No Disponible',
          backgroundColor: 'rgba(0, 255, 0, 0.7)'
        }
      ];
    });
  }  
  
}
