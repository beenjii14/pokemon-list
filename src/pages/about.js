import Link from 'next/link'
import { MainLayout } from 'components/layouts/MainLayout'
import { DarkLayout } from 'components/layouts/DarkLayout'

export default function AboutPage() {
  return (
    <>
      <h1 className={'title'}>
        Ir a <Link href="/">About</Link>
      </h1>

      <p className={'description'}>
        Get started by editing <code className={'code'}>pages/index.js</code>
      </p>
    </>
  )
}

AboutPage.getLayout = (page) => (
  <MainLayout>
    <DarkLayout>{page}</DarkLayout>
  </MainLayout>
)
