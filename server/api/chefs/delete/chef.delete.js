import prisma from "~/utils/prisma.js";
import {getServerSession} from "#auth";

export default defineEventHandler(async function (event) {
    const body = await readBody(event);
    const session = await getServerSession(event);

    const existingChef = await prisma.chef.findUnique({
        where: {
            id: body.chefID
        }
    });

    if (!existingChef) {
        return {
            success: false,
            error: "Chef doesn't exist."
        }
    }

    if (session.user.role !== "ADMIN") {
        return {
            success: false,
            message: "You can't delete chef, because you are not ADMIN."
        }
    }


    const deletedChef = await prisma.chef.delete({
        where: {
            id: body.chefID
        },
    })

    return {
        success: true,
        statusCode: 200,
        deletedChef: deletedChef
    }

})
