
export default function Filter({tag, settag, categories}) {
    return (
        <div className='px-7 md:px-24 mt-5 md:mt-9'>
            <div className='px-4 md:px-24 py-2 border-2 border-pink-dark rounded-lg flex justify-center items-center flex-wrap space-x-4 md:justify-between md:space-x-0'>
                <button className={tag === 'All' ? 'text-pink-dark' : ''} onClick={() => settag('All')}>All</button>
                {categories.map((cat, index) => (
                    <button key={index} className={tag === cat._id ? 'text-pink-dark' : ''} onClick={() => settag(cat._id)}>{cat._id}</button>
                ))}
            </div>
        </div>
    )
}
