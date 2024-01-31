import { Injectable } from '@nestjs/common';
import { knexInstance } from 'db';

import { ASSESSMENTS_TABLE_NAME, USER_ASSESSMENTS_TABLE_NAME } from 'src/database/constants/tables.constant';
import { FAILED_GET_ASSESSMENT, FAILED_GET_USER_ASSESSMENT } from 'src/shared/constants/response.errors.constant';
import { AssessmentData } from 'src/shared/interfaces/assessment.interface';
import { UserAssessmentData } from 'src/shared/interfaces/user-assessment.interface';
import { handleErrors } from 'src/utils/error-heandlers/db.request.error.handler';

@Injectable()
export class DashboardService {  
  async getUserAssessments() {
    const userAssessments = await handleErrors(
        knexInstance<AssessmentData>(ASSESSMENTS_TABLE_NAME).select('*'),
        FAILED_GET_USER_ASSESSMENT
    );
    return userAssessments;
  }
  
  async getAssessmentGraph(assessmentId: number) {
    const assessmentData = await handleErrors(
        knexInstance<UserAssessmentData>(USER_ASSESSMENTS_TABLE_NAME).select('*').where('assessment_id', assessmentId).first(),
        FAILED_GET_ASSESSMENT
    );

    return {
      data: {
        Agreeableness: assessmentData.agreeableness || 0,
        Drive: assessmentData.drive || 0,
        Luck: assessmentData.luck || 0,
        Openness: assessmentData.openness || 0,
      },
      type: 'bar',
    };
  }
}
