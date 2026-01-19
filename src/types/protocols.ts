export interface IAssignedProgramModel {
  id: string;
  program_id: string;
  assigned_by_user_id: string;
  assigned_to_user_id: string;
  start_date: string;
  finish_date: string | null;
  frequency: "Daily" | "Weekly" | "Monthly";
  assigned_days: string[] | null;
  notes: string | null;
  send_reminder: boolean;
  status: "Active" | "Completed" | "Archived";
  created_at: string;
  updated_at: string;
}

export interface IAssignedProtocolModel {
  id: string;
  protocol_id: string;
  assigned_by_user_id: string;
  assigned_to_user_id: string;
  assigned_by_program_id: string | null;
  start_date: string;
  finish_date: string | null;
  frequency: "Daily" | "Weekly" | "Monthly";
  assigned_days: string[] | null;
  user_note: string | null;
  send_reminder: boolean;
  status: "Active" | "Completed" | "Archived";
  created_at: string;
  updated_at: string;
}

export interface ICompletedProtocolModel {
  id: string;
  assigned_protocol_id: string;
  completed_at: string;
  level_of_effort: number;
  user_note: string | null;
  completed_by: string | null;
  source: string;
  created_at: string;
  updated_at: string;
}

export interface ICustomProgramTagModel {
  id: string;
  program_id: string;
  created_by_user_id: string;
  created_at: string;
}
export interface ICustomProtocolTagModel {
  id: string;
  protocol_id: string;
  created_by_user_id: string;
  created_at: string;
}

export interface IProgramModel {
  id: string;
  name: string;
  type_id: number;
  description: string | null;
  created_by_user_id: string;
  created_by_group_id: string;
  created_by_organization_id: string;
  visibility: boolean;
  show_custom_tags: boolean;
  active: boolean;
  parent_id: string | null;
  version: number;
  created_at: string;
  updated_at: string;
}

export interface IProgramToProtocolModel {
  program_id: string;
  protocol_id: string;
  position: number;
}

export interface IProtocolModel {
  id: string;
  name: string;
  type_id: number;
  description: string | null;
  created_by_user_id: string;
  created_by_group_id: string;
  created_by_organization_id: string;
  visibility: boolean;
  show_custom_tags: boolean;
  active: boolean;
  parent_id: string | null;
  version: number;
  difficulty_level: "Beginner" | "Intermediate" | "Advanced" | "All";
  created_at: string;
  updated_at: string;
}

export type ExerciseType = "Sets/Reps" | "Time" | "Distance";

export interface IProtocolToExerciseModel {
  protocol_id: string;
  exercise_id: string;
  position: number;
  exercise_type: ExerciseType;
  exercise_units: string;
}

export interface ITypeModel {
  id: number;
  name: string;
}

export interface IProtocolExerciseModel {
  id: string;
  name: string;
  thumbnail_url: string;
  video_url: string;
  instructions?: string;
  library_source_id: number;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  exercise_equipment?: IProtocolExerciseEquipmentModel[];
  exercise_focus_areas?: IProtocolExerciseFocusAreaModel[];
  exercise_library_source?: IProtocolExerciseLibrarySourceModel;
}

export interface IProtocolExerciseEquipmentModel {
  id: number;
  name: string;
}

export interface IProtocolExerciseQuery {
  search: string;
  focusAreaIds: number[];
  equipmentIds: number[];
}

export interface IProtocolExerciseToFocusAreaModel {
  exercise_id: string;
  focus_area_id: number;
}

export interface IProtocolExerciseFocusAreaModel {
  id: number;
  name: string;
}

export interface IProtocolExerciseToEquipmentModel {
  exercise_id: string;
  equipment_id: number;
}

export interface IProtocolExerciseLibrarySourceModel {
  id: number;
  name: string;
}
