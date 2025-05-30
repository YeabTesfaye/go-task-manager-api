import {  Task } from '@/types'

// Initial tasks for demo
export const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Complete project proposal',
    description: 'Draft the initial project proposal for client review',
    priority: 'High',
    status: 'In Progress',
    dueDate: new Date(Date.now() + 86400000 * 2), // 2 days from now
    createdAt: new Date(),
    tags: ['1', '3'],
  },
  {
    id: '2',
    title: 'Schedule dentist appointment',
    description: 'Call dentist office to schedule annual checkup',
    priority: 'Medium',
    status: 'Pending',
    dueDate: new Date(Date.now() + 86400000 * 7), // 7 days from now
    createdAt: new Date(),
    tags: ['2', '5'],
  },
  {
    id: '3',
    title: 'Learn Next.js 14',
    description: 'Complete the tutorial on the official website',
    priority: 'Low',
    status: 'Pending',
    dueDate: new Date(Date.now() + 86400000 * 14), // 14 days from now
    createdAt: new Date(),
    tags: ['4'],
  },
];
