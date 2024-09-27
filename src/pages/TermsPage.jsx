import pages from "../data/pages"
const TermsPage = () => {
    return (
        <div className="flex mx-auto flex-col w-3/4 my-5 p-2">
            <h1 className='mx-auto text-3xl font-semibold text-white my-5'>{pages[1].heading}</h1>
            <div
                className="text-white text-lg"
                dangerouslySetInnerHTML={{ __html: pages[1].content }}
            />
        </div>
    )
}

export default TermsPage
