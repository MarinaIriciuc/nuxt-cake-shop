import {z} from 'zod'


export const categorySchema = z.object({
    name: z.string().min(3, "Category must have at least 3 characters.").max(30, "Category must have at most 30 characters.")
})
