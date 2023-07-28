import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { ReportType, data } from './data';
import { ReportDto } from './report.dto';
import { v4 as uuid } from 'uuid';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: string) {
    return data.report.filter((report) => report.type === type);
  }

  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    return data.report.find(
      (report) => report.type === type && report.id === id,
    );
  }

  @Post()
  createReport(@Param('type') type: string, @Body() body: ReportDto) {
    const newReport = {
      ...body,
      created_at: new Date(),
      updated_at: new Date(),
      type: type as ReportType,
      id: uuid(),
    };
    data.report.push(newReport);
    return newReport;
  }

  @Put(':id')
  updateReport(
    @Param('type') type: string,
    @Param('id') id: string,
    @Body() body: ReportDto,
  ) {
    const idx = data.report.findIndex(
      (report) => report.type === type && report.id === id,
    );
    let report = data.report[idx];
    report = {
      ...report,
      ...body,
      updated_at: new Date(),
    };
    data.report.splice(idx, 1, report);
    return report;
  }

  @Delete(':id')
  deleteReport(@Param('type') type: string, @Param('id') id: string) {
    // let [income, expense] = divideArray(data.report, 'type', [
    //   'income',
    //   'expense',
    // ]);

    // if (type === 'income') {
    //   income = income.filter((report) => report.id !== id);
    // } else if (type === 'expense') {
    //   expense = expense.filter((report) => report.id !== id);
    // }

    // data.report = [...income, ...expense];

    const idx = data.report.findIndex(
      (report) => report.type === type && report.id === id,
    );
    const removedReport = data.report.splice(idx, 1);
    return removedReport;
  }
}

function divideArray<T extends {}[]>(
  arr: T,
  key: keyof T[0],
  values: string[],
) {
  const m: Record<string, T[0][]> = {};
  values.forEach((v) => {
    m[v] = [];
  });
  for (let i = 0; i < arr.length; i++) {
    values.forEach((v) => {
      if (arr[i][key as string] === v) {
        m[v].push(arr[i]);
      }
    });
  }

  return m;
}
