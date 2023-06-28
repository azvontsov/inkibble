import Image from "next/image"
import Link from "next/link"
import { NavLinks } from "@/constants"
import AuthProviders from "./AuthProviders"
import { getSession } from "next-auth/react"
import { getCurrentUser } from "@/lib/session"



const Navbar = async () => {
    const session = await getCurrentUser();
    
  return (
    <nav>
        <div className="flexBetween navbar">
            <div className="flex-1 flexStart gap-10">
                <Link href="/">
                    <Image src="/logo.svg" alt="Inkibble" width={115} height={40} />
                </Link>
                <ul className="lg:flex hidden text-small gap-7">
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="flex-center gap-4">
                        {session?.user ? (
                            <>
                            {session?.user?.image && (
                            <Image 
                                src={session.user.image}
                                alt="user"
                                width={40}
                                height={40}
                                className="rounded-full"

                            />)    
                            }

                            <Link href="/create-project">
                               Share Work
                            </Link>
                            </>
                        ) : (
                            <AuthProviders />
                        )}
            </div>
        </div>
    </nav>
  )
}

export default Navbar