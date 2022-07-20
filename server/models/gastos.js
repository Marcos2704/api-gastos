const prisma = require("../utils/client");

const create = async (newArticle,newPrice, category) => {
  try {
    const newGasto = await prisma.gastos.create({
      data: {
        article: newArticle,
        price: newPrice,
        category:{
          connect: category,
        },
      },
      include: {
        category: true,
      },
    });
    return newGasto;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

const findByArticle = async (searchArticle) => {
  try {
    const gastos = await prisma.gastos.findMany({
      where: {
        article: searchArticle,
      },
      include: {
        category: true,
        
      },

    });
    return gastos;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const findByPrice = async (searchPrice) => {
  try {
    const gastos = await prisma.gastos.findMany({
      where: {
        price: searchPrice,
      },
      include: {
        category: true,
        
      },

    });
    return gastos;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const findAll = async () => {
  try {
    const gastos = await prisma.gastos.findMany();
    return gastos;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = { create, findByArticle,findByPrice ,findAll };