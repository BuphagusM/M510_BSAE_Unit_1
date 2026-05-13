// participant-service.ts
import * as participantRepository from '../repositories/participant-repository';
import { ParticipantEntity } from '../models/participant-entity';

export const getAllParticipants = (): ParticipantEntity[] => {
  return participantRepository.getAllParticipantsEntity();
};

export const getParticipantById = (id: number): ParticipantEntity | undefined => {
  return participantRepository.getParticipantByIdEntity(id);
};
