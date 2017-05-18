import Link from 'next/link'

export default () => (
  <div className='menu'>
    <Link href="/"><a>Home</a></Link>
    <Link href="/about"><a>About</a></Link>
    <style jsx>{`
      .menu a{
        color: red;
      }
    `}</style>
  </div>
)
