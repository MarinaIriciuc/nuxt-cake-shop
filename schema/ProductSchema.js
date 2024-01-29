import {zfd} from "zod-form-data";
import {z} from "zod"


export const productSchema = zfd.formData({
    categoryID: zfd.numeric(),
    title: zfd.text(z.string().min(3, "Title must have at least 3 characters").max(30, "Title must have at most 30 characters")),
    image: zfd.file().refine(file => {
        console.log(file.type)
        return file.type.startsWith("image/")
    }, "The file must be an image").optional(),
    slug: zfd.text(z.string().min(3)),
    quantity: zfd.numeric(z.number().min(1, "Add a quantity")),
    price: zfd.numeric(z.number().min(1, "Add a price")),
    description: zfd.text(z.string().min(3, "Description must have at least 3 characters").max(300, "Description must have at most 300 characters."))
})

