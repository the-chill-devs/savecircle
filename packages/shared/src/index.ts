// Shared types
export interface User {
    id: string;
    email: string;
    name: string;
    createdAt: Date;
}

export interface ApiResponse<T> {
    data: T;
    message?: string;
    status: 'success' | 'error';
}

// Shared validation schemas (using Zod)
import { z } from 'zod';

export const UserSchema = z.object({
    id: z.string(),
    email: z.string().email(),
    name: z.string().min(1),
    createdAt: z.date(),
});

export const CreateUserSchema = z.object({
    email: z.string().email(),
    name: z.string().min(1),
});

// Shared utilities
export const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date);
};

export const apiEndpoints = {
    users: '/api/users',
    auth: '/api/auth',
} as const;