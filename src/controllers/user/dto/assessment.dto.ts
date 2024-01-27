import { IsNotEmpty, IsInt } from 'class-validator';

export class AssessmentDto {
  @IsNotEmpty({ message: 'ID is required' })
  id: number;
}
