import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {SelectChangeEvent} from '@mui/material'
import { ParticipantDTO } from '../model/participant-dto'
import { useParticipants } from './useParticipants'

export const useParticipantDetailForm = (participant: ParticipantDTO | undefined) => {
    const navigate = useNavigate()
    const {deleteParticipant, updateParticipant, createParticipant} = useParticipants()

    const [formData, setFormData] = useState({
        id: participant?.id ?? 0,
        name: participant?.name ?? '',
        email: participant?.email ?? '',
        coursesDetails: participant?.coursesDetails ?? [],
        status: participant?.status ?? 'active',
        enrollmentDate: participant?.enrollmentDate ?? ''
    })

    // formData aktualisieren sobald course geladen wurde
    React.useEffect(() => {
        if (participant) {
            setFormData({
                id: participant.id,
                name: participant.name,
                email: participant.email,
                coursesDetails: participant.coursesDetails,
                status: participant.status,
                enrollmentDate: participant.enrollmentDate
            })
        }
    }, [participant?.id])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSelectChange = (e: SelectChangeEvent) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!participant) return
        updateParticipant({...participant, ...formData})
            .then(() => navigate('/participants'))
            .catch(err => console.error(err))
    }

    const handleDelete = () => {
        if (!participant) return
        deleteParticipant(participant.id)
            .then(() => navigate('/participants'))
            .catch(err => console.error(err))
    }

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault()
        createParticipant(formData)
            .then(() => navigate('/participants'))
            .catch(err => console.error(err))
    }

    return {formData, handleChange, handleSelectChange, handleDelete, handleCreate, handleSubmit}
}

