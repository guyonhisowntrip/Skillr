export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}

export interface AIResponse {
  text: string;
  sources: { title: string; url: string }[];
}

export enum PhaseState {
  LOCKED = 'LOCKED',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED'
}