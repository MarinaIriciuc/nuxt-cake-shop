export default defineEventHandler(async function (event) {
  const body = await readBody(event);
  const chef = await prisma.chef.create({
    data: {
      // image: body.image,
      name: body.name,
      description: body.description
    }
  })
  return {
    success: true,
    statusCode: 200,
    chef: chef
  }
})
