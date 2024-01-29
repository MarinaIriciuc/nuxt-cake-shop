import {z} from 'zod'
import {zfd} from "zod-form-data";

export const chefSchema = zfd.formData({
    image: zfd.file().refine(file => {
        console.log(file.type)

        return file.type.startsWith("image/")
    }, "The file must be an image").optional(),
    name: zfd.text(z.string().min(3, "Name must have at least 3 characters.").max(30, "Name must have at most 30 characters.")),
    description: zfd.text(z.string().min(30, "Description must have at least 30 characters.").max(50, "Description must have at most 50 characters.")),
})
