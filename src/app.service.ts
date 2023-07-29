import { ReportType, data } from './data';
import { Injectable } from '@nestjs/common';
import { CreateReportDto, UpdateReportDto } from './dtos/report.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AppService {
  getAllReports(type: ReportType) {
    return data.report.filter((report) => report.type === type);
  }

  getReportById(type: ReportType, id: string) {
    return data.report.find(
      (report) => report.type === type && report.id === id,
    );
  }

  createReport(type: ReportType, body: CreateReportDto) {
    const newReport = {
      ...body,
      created_at: new Date(),
      updated_at: new Date(),
      type: type,
      id: uuid(),
    };
    data.report.push(newReport);
    return newReport;
  }

  updateReport(type: ReportType, id: string, body: UpdateReportDto) {
    const idx = data.report.findIndex(
      (report) => report.type === type && report.id === id,
    );
    if (idx === -1) {
      return {
        message: 'report not found',
      };
    }

    let report = data.report[idx];
    report = {
      ...report,
      ...body,
      updated_at: new Date(),
    };
    data.report.splice(idx, 1, report);
    return report;
  }

  deleteReport(type: ReportType, id: string) {
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

    if (idx === -1) {
      return {
        message: 'report not found',
      };
    }

    data.report.splice(idx, 1);
  }
}

// function divideArray<T extends {}[]>(
//   arr: T,
//   key: keyof T[0],
//   values: string[],
// ) {
//   const m: Record<string, T[0][]> = {};
//   values.forEach((v) => {
//     m[v] = [];
//   });
//   for (let i = 0; i < arr.length; i++) {
//     values.forEach((v) => {
//       if (arr[i][key as string] === v) {
//         m[v].push(arr[i]);
//       }
//     });
//   }

//   return m;
// }
