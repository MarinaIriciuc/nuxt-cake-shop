import {z} from 'zod'



export const couponSchema = z.object({
    code: z.string().min(3, "Code must have at least 3 characters.").max(15, "Category must have at most 15 characters."),
    discount: z.number().min(1, "The discount field can't be empty."),
    // validUntil: z.date().refine((date) => {
    //     const currentDate = new Date();
    //     return date > currentDate || "ValidUntil must be a date in the future or present.";
    // }),
})
