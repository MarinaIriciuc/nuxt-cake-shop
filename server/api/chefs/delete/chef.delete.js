
export default defineEventHandler(async function(event){
  const body = await readBody(event);


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
