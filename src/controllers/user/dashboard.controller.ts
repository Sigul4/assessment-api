import { Controller, Get, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { DashboardService } from 'src/services/dashboard/dashboard.service';
import { AuthGuard } from '../guards/auth.guard';
import { AssessmentDto } from './dto/assessment.dto';

@Controller('api/userassessments')
export class DashboardController {
  private dashboardService: DashboardService;

  constructor() {
    this.dashboardService = new DashboardService();
  }

  @Get()
  @UseGuards(AuthGuard)
  getUserAssessments() {
    return this.dashboardService.getUserAssessments();
  }

  @Get('/graph')
  @UseGuards(AuthGuard)
  getAssessmentGraph(@Query(new ValidationPipe()) assessmentDto: AssessmentDto) {
    return this.dashboardService.getAssessmentGraph(assessmentDto.id);
  }
}
