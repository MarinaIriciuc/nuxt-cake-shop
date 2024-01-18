import {NuxtAuthHandler} from '#auth'
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import RegisterProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@next-auth/prisma-adapter";

const prismaAdapter = PrismaAdapter(prisma);

const runtimeConfig = useRuntimeConfig()
export default NuxtAuthHandler({
    providers: [
        GithubProvider.default({
            clientId: runtimeConfig.GITHUB_CLIENT_ID,
            clientSecret: runtimeConfig.GITHUB_CLIENT_SECRET
        }),

        RegisterProvider.default({
            id: "register",
            credentials: {
                email: {label: "Email", type: 'text', placeholder: 'Email'},
                password: {label: "Password", type: 'password', placeholder: 'password'},
            },

            async authorize(credentials) {
                try {
                    const res = await fetch('http://localhost:8000/register.php', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        mode: 'no-cors',
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password
                        })
                    })


                    const data = await res.json()

                    console.log(data)

                    if (data.success) {
                        return data.user
                    }
                } catch {
                    return null;
                }
            }
        })
        // GoogleProvider.default({
        //   clientId: process.env.GOOGLE_CLIENT_ID,
        //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
        // }),

        // CredentialsProvider.default({
        //     name: "Credentials",
        //     async authorize(credentials) {
        //         const user = await prisma.user.findFirst({
        //             where: {
        //                 email: credentials.email,
        //                 password: credentials.password
        //             }
        //         })
        //         if (user) {
        //             return user;
        //         }
        //         return null;
        //     }
        // })

    ],
    secret: runtimeConfig.AUTH_SECRET,
    adapter: prismaAdapter,
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: 'database'
    },
    callbacks: {
        async session({session, user}) {

            if (session?.user) {
                session.user.id = user.id
                //   // session.user.isAdmin = user.isAdmin
            }
            return session
        }
    },
    // events: {
    //   async createUser({user}) {
    //     await prisma.cart.create({
    //       data: {
    //         userId: user.id
    //       }
    //     })
    //   }
    // }
})


