import Link from 'next/link'
import stylesheet from 'styles/index.scss'

export default () => (
  <section className='home-header'>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <div className='wrapper'>
      <h1 className='reveal-text'>Martim</h1>
      <p className='reveal-text-fade'>We create high quality websites and applications. We enjoy developing beautiful, usable and unique interfaces for both you and its visitors.</p>
    </div>
  </section>
)
