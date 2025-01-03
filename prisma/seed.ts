import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

const prisma = new PrismaClient()

export async function main() {
  const password = await hash("testUser1!", 12)
  const user = await prisma.user.create({
    data: {
      id: "999",
      display_name: "TestUser",
      username: "testuser",
      first_name: "Test",
      last_name: "User",
      email: "test@famlam.ca",
      isEmailVerified: true,
      password,
    },
  })

  console.log({ user })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    await prisma.$disconnect()
    process.exit(1)
  })
