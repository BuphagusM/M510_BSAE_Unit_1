import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {SelectChangeEvent} from '@mui/material'
import {CourseDTO} from '../model/course-dto'
import {useCourses} from './useCourses'

export const useCourseDetailForm = (course: CourseDTO | undefined) => {
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!course) return
        updateCourse({...course, ...formData, capacity: Number(formData.capacity)})
            .then(() => navigate('/courses'))
            .catch(err => console.error(err))
    }

    const handleDelete = () => {
        if (!course) return
        deleteCourse(course.id)
            .then(() => navigate('/courses'))
            .catch(err => console.error(err))
    }

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault()
        createCourse(formData)
            .then(() => navigate('/courses'))
            .catch(err => console.error(err))
    }

    return {formData, handleChange, handleSelectChange, handleSubmit, handleDelete, handleCreate}
}

