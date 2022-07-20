const prisma = require("../utils/client");

const createUser = async (email, name, password, role) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: password,
        role: role,
      },
    });
    return newUser;
  } catch (error) {
    throw new Error("Error creating user");
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createUser, findUserByEmail };