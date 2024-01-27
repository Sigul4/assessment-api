export interface AssessmentData {
  id: number;
  name: string;
  users_resolved: number;
  active: boolean;
  image_url?: string;
  created_at: Date;
  updated_at: Date;
}
