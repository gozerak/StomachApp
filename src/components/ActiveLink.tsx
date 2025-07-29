"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
 
export default function ActiveLink({ children, href }) {
  const pathname = usePathname()
  const router = useRouter();
 
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
 
  return (
    <Link href={href} onClick={handleClick} className={`p-4 pb-3 pt-6 outline-none hover:bg-gray-200 ${pathname === href? 'border-b-blue-500 border-b-4' : ''}`}>
      {children}
    </Link>
  )
}