import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from 'styles/components/navbar/navbar.module.scss'

const style = {
  color: '#0070f3',
  textDecoration: 'underline',
}

export const ActiveLink = ({ text, href }) => {
  const router = useRouter()
  const isActive = router.pathname === href
  
  return (
    <Link href={href}>
      <a style={isActive ? style : null}>{text}</a>
    </Link>
  )
}
