export interface UserAssessmentData {
  id: number;
  user_id: number;
  assessment_id: number;
  agreeableness: number;
  drive: number;
  luck: number;
  openness: number;
  created_at: Date;
  updated_at: Date;
}
