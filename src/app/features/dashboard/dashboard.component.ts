import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ForecastItem } from '@http-access/fbs.mock';
import { PredictionPoint } from '@http-access/fbt.mock';
import { ForecastService } from '@http-access/forecast.service';
import { HttpStatus } from '@models/http-status.model';
import { TuiAlertService } from '@taiga-ui/core';
import { LineChart, TreemapChart } from 'echarts/charts';
import {
  GridComponent, LegendComponent, MarkAreaComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { ECElementEvent, EChartsCoreOption } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import { interval, startWith, switchMap, tap } from 'rxjs';

echarts.use([
  CanvasRenderer,
  LineChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  TreemapChart,
  ToolboxComponent,
  VisualMapComponent,
  LegendComponent,
  MarkAreaComponent
]);


@Component({
  selector: 'app-dashboard',
  imports: [
    NgxEchartsDirective
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [
    provideEchartsCore({ echarts }),
  ]
})
export class DashboardComponent implements OnInit {
  readonly HttpStatus = HttpStatus;

  private forecastService = inject(ForecastService);
  private router = inject(Router);
  private alertService = inject(TuiAlertService);

  loadFbtStatus = signal(HttpStatus.IDLE);
  fbtChartOption = signal<EChartsCoreOption>({});

  loadFbsStatus = signal(HttpStatus.IDLE);
  fbsChartOption = signal<EChartsCoreOption>({});

  ngOnInit() {
    this.getForecastByTime();
    this.getForecastByServices();
  }

  getForecastByServices() {
    this.loadFbsStatus.set(HttpStatus.LOADING);
    this.forecastService.getForecastDataByServices().subscribe({
      next: (forecastData) => {
        this.fbsChartOption.set({
          tooltip: {
            formatter: function (info: { value: any; treePathInfo: any; }) {
              const value = info.value;
              const treePathInfo = info.treePathInfo;
              if (treePathInfo[1]?.name) {
                return `${treePathInfo[1]?.name}: ${value}%`;
              }
              return;
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          series: [
            {
              name: 'Khả năng xảy ra sự cố',
              type: 'treemap',
              visibleMin: 300,
              roam: false,        // Vô hiệu hóa tính năng panning và zooming
              drillDownIcon: '',  // Ẩn biểu tượng drill-down
              breadcrumb: {       // Vô hiệu hóa breadcrumb nếu có
                show: false
              },
              label: {
                show: true,
                formatter: '{b}'
              },
              itemStyle: {
                borderColor: '#fff'
              },
              levels: this.getLevelOption(),
              data: forecastData,
              // Thêm colorMappingBy để chỉ định rằng màu dựa trên giá trị value
              colorMappingBy: 'value'
            }
          ]
        });
        this.loadFbsStatus.set(HttpStatus.SUCCESS);
      },
      error: (err) => {
        this.loadFbsStatus.set(HttpStatus.ERROR);
        console.error('getForecastByServices Error@@', err);
        this.alertService.open('', {
          label: 'Có lỗi xảy ra, vui lòng thử lại sau',
          appearance: 'warning',
          autoClose: 3000,
        }).subscribe();
      }
    })
  }

  getForecastByTime() {
    interval(5*60*1000).pipe(
      startWith(''),
      tap(() => {
        this.loadFbtStatus.set(HttpStatus.LOADING);
      }),
      switchMap(() => {
        return this.forecastService
          .getForecastDataByTime();
      })
    ).subscribe({
        next: (res) => {
          const forecastData = res as PredictionPoint[];
          this.fbtChartOption.set({
            tooltip: {
              trigger: 'axis',
              formatter: function (params: any) {
                const value = params[0].value[1];
                return `
                  <div style="max-width: 250px;">
                    <div>Thời gian: ${params[0].value[0]}<div>
                    <div>Xác suất: ${value}%<div>
                  </div>
                `;
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
            },
            yAxis: {
              type: 'value',
              axisLabel: {
                formatter: '{value}%'
              },
              axisPointer: {
                snap: true
              }
            },
            visualMap: {
              show: false,
              dimension: 1,
              pieces: [
                {
                  gt: 0,
                  lt: 80,
                  color: 'green'
                },
                {
                  gte: 80,
                  lte: 100,
                  color: 'red'
                }
              ]
            },
            series: [
              {
                name: 'Xác suất',
                type: 'line',
                smooth: true,
                encode: {
                  x: 0,
                  y: 1
                },
                data: forecastData.map((ele) => [ele.time, ele.probability]),
                markArea: {
                  silent: false,
                  itemStyle: {
                    color: 'rgba(255, 173, 177, 0.4)'
                  },
                  data: [
                    [
                      {
                        name: 'Vùng dự báo',
                        xAxis: forecastData[forecastData.length-7].time
                      },
                      { xAxis: forecastData[forecastData.length-1].time }
                    ]
                  ]
                }
              }
            ]
          });
          this.loadFbtStatus.set(HttpStatus.SUCCESS);
        },
        error: (err) => {
          this.loadFbtStatus.set(HttpStatus.ERROR);
          console.error('getForecastByTime Error@@', err);
          this.alertService.open('', {
            label: 'Có lỗi xảy ra, vui lòng thử lại sau',
            appearance: 'warning',
            autoClose: 3000,
          }).subscribe();
        }
      })
  }

  getLevelOption() {
    return [
      {
        itemStyle: {
          borderWidth: 0,
          gapWidth: 1
        }
      },
      {
        itemStyle: {
          gapWidth: 1
        }
      },
      {
        colorSaturation: [0.35, 0.5],
        itemStyle: {
          gapWidth: 1,
          borderColorSaturation: 0.6
        }
      }
    ];
  }

  onFbsChartClick(e: ECElementEvent) {
    const data = e.data as unknown as ForecastItem;
    void this.router.navigate(['/services', data.path]);
  }

  onFbtChartClick(e: ECElementEvent) {
    if (e.componentType === 'series') {
      void this.router.navigate(['/prediction', e.dataIndex]);
    }
  }
}
