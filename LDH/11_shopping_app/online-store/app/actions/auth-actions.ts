'use server'
import  prisma  from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import {z} from 'zod'

const signUpSchema = z.object({
    name: z.string().optional(),
    email: z.email('Invalid email address'),
    password: z.string().min(8)
})

export async function signUp(prevState: unknown, formData: FormData) {
    const validated = signUpSchema.safeParse(Object.fromEntries(formData))

    if (!validated.success) {
        const fieldErrors = z.flattenError(validated.error).fieldErrors
        return {
            success: false,
            errors: fieldErrors
        }
    }

    const {name, email, password} = validated.data

    const existingUser = await prisma.user.findUnique({
        where: {email}
    })
    if (existingUser) {
        return {
            errors: "Email already in use"
        }
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    try {
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: 'user'
            }
        })
        return {
            success: true,
            message: 'User created successfully',
        }
    } catch (error) {
        return {
            message: 'User registration failed',
        }
    }
}