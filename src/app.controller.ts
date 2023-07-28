import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { ReportType } from './data';
import { ReportDto } from './report.dto';
import { AppService } from './app.service';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllReports(@Param('type') type: string) {
    return this.appService.getAllReports(type as ReportType);
  }

  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    return this.appService.getReportById(type as ReportType, id);
  }

  @Post()
  createReport(@Param('type') type: string, @Body() body: ReportDto) {
    return this.appService.createReport(type as ReportType, body);
  }

  @Put(':id')
  updateReport(
    @Param('type') type: string,
    @Param('id') id: string,
    @Body() body: ReportDto,
  ) {
    return this.appService.updateReport(type as ReportType, id, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('type') type: string, @Param('id') id: string) {
    this.appService.deleteReport(type as ReportType, id);
    return;
  }
}
