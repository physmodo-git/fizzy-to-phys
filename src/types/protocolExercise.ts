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
  protocolExerciseEquipment?: IProtocolExerciseEquipmentModel[];
  protocolExerciseFocusAreas?: IProtocolExerciseToFocusAreaModel[];
  protocolExerciseLibrarySource?: IProtocolExerciseLibrarySourceModel;
}

export interface IProtocolExerciseEquipmentModel {
  id: number;
  name: string;
}

export interface IExerciseQuery {
  search: string;
  focusAreaIds: number[];
  equipmentIds: number[];
}

export interface IProtocolExerciseToFocusAreaModel {
  exercise_id: string;
  focus_area_id: number;
}

export interface IProtocolExerciseLibrarySourceModel {
  id: number;
  name: string;
}
