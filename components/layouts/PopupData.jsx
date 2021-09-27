
export default function PopupData({type, data}) {
    console.log(type)
    return (
        <div className='flex justify-center items-center w-1/2 mx-auto bg-white rounded-md py-10'>
            <h1 className={type === 'success' ? 'text-green-700' : 'text-red-700'}>{data}</h1>
        </div>
    )
}
