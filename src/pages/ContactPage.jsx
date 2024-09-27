import pages from '../data/pages'
const ContactPage = () => {
  return (
    <div className="flex mx-auto flex-col w-3/4 my-5 p-2">
    <h1 className='mx-auto text-3xl font-semibold text-white my-5'>{pages[2].heading}</h1>
    <div 
      className="text-white text-lg"
      dangerouslySetInnerHTML={{ __html: pages[2].content }} 
    />
  </div>
  )
}

export default ContactPage
