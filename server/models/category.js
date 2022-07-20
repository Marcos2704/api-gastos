
const prisma = require("../utils/client");

const create = async (newName) => {
  const newCategory = await prisma.category.create({
    data: {
      name: newName,
    },
  });
  return newCategory
};

const findByName = async (searchName) =>{
    try {
        const category = await prisma.category.findMany({
          where: {
            name: searchName,
          },
          include: {
            gastos: true,
          },
        });
        return category;
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
}

const findAll = async () => {
  try {
    const category = await prisma.category.findMany();
    return category;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = { create, findAll, findByName };