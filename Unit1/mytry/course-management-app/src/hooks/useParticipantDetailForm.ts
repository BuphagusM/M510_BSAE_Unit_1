import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {SelectChangeEvent} from '@mui/material'
import { ParticipantDTO } from '../model/participant-dto'
import { useParticipants } from './useParticipants'

type NotificationSeverity = 'success' | 'error' | 'info' | 'warning'

type NotificationCallback = (message: string, severity?: NotificationSeverity) => void

export const useParticipantDetailForm = (
    participant: ParticipantDTO | undefined,
    onNotification?: NotificationCallback,
) => {
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!participant) return

        try {
            const message = await updateParticipant({...participant, ...formData})
            onNotification?.(message, 'success')
            setTimeout(() => navigate('/participants'), 1000)
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error)
            onNotification?.(message, 'error')
        }
    }

    const handleDelete = async () => {
        if (!participant) return

        try {
            const message = await deleteParticipant(participant.id)
            onNotification?.(message, 'success')
            setTimeout(() => navigate('/participants'), 1000)
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error)
            onNotification?.(message, 'error')
        }
    }

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const message = await createParticipant(formData)
            onNotification?.(message, 'success')
            setTimeout(() => navigate('/participants'), 1000)
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error)
            onNotification?.(message, 'error')
        }
    }

    return {formData, handleChange, handleSelectChange, handleDelete, handleCreate, handleSubmit}
}

