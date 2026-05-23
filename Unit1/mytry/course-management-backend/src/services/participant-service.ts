// participant-service.ts
import * as participantRepository from '../repositories/participant-repository';
import {ParticipantEntity} from '../models/participant-entity';
import {ParticipantDTO} from "../models/participant-dto";

export const getAllParticipants = (): ParticipantEntity[] => {
    return participantRepository.getAllParticipantsEntity();
};

export const getParticipantById = (id: number): ParticipantEntity | undefined => {
    return participantRepository.getParticipantByIdEntity(id);
};

export const getParticipantCountByStatus = (status: 'active' | 'inactive' | 'completed' | 'all'): number => {
    if (status === 'all') {
        return participantRepository.getAllParticipantsEntity().length;
    }
    return participantRepository.getParticipantsCountByStatusEntity(status);
}

export const getRemoveParticipantById = (id: number): void => {
    participantRepository.removeParticipantByIdEntity(id);
}

export const getUpdateParticipantById = (id: number, participantDTO: ParticipantDTO): void => {
    participantRepository.updateParticipantByIdEntity(id, participantDTO);
}

export const getCreateParticipant = (participantDTO: ParticipantDTO) => {
    return  participantRepository.createParticipantEntity(participantDTO);
}