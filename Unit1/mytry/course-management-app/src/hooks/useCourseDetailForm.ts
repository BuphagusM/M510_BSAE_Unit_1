import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {SelectChangeEvent} from '@mui/material'
import {CourseDTO} from '../model/course-dto'
import {useCourses} from './useCourses'

type NotificationSeverity = 'success' | 'error' | 'info' | 'warning'

type NotificationCallback = (message: string, severity?: NotificationSeverity) => void

export const useCourseDetailForm = (
    course: CourseDTO | undefined,
    onNotification?: NotificationCallback,
) => {
    const navigate = useNavigate()
    const {deleteCourse, updateCourse, createCourse} = useCourses()

    const [formData, setFormData] = useState({
        id: course?.id ?? 0,
        title: course?.title ?? '',
        date: course?.date ?? '',
        status: course?.status ?? 'active',
        description: course?.description ?? '',
        instructor: course?.instructor ?? '',
        capacity: course?.capacity ?? 0,
        participantsList: course?.participantsList ?? []
    })

    // formData aktualisieren sobald course geladen wurde
    React.useEffect(() => {
        if (course) {
            setFormData({
                id: course.id,
                title: course.title,
                date: course.date,
                status: course.status,
                description: course.description,
                instructor: course.instructor,
                capacity: course.capacity,
                participantsList: course.participantsList
            })
        }
    }, [course?.id])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSelectChange = (e: SelectChangeEvent) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!course) return

        try {
            const message = await updateCourse({...course, ...formData, capacity: Number(formData.capacity)})
            onNotification?.(message, 'success')
            setTimeout(() => navigate('/courses'), 1000)
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error)
            onNotification?.(message, 'error')
        }
    }

    const handleDelete = async () => {
        if (!course) return

        try {
            const message = await deleteCourse(course.id)
            onNotification?.(message, 'success')
            setTimeout(() => navigate('/courses'), 1000)
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error)
            onNotification?.(message, 'error')
        }
    }

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const message = await createCourse(formData)
            onNotification?.(message, 'success')
            setTimeout(() => navigate('/courses'), 1000)
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error)
            onNotification?.(message, 'error')
        }
    }

    return {formData, handleChange, handleSelectChange, handleSubmit, handleDelete, handleCreate}
}

