import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export default function Search(){
    return(
        <>
        <form action="" className="hidden rounded-full md:flex items-center justify-between gap-2">
            <input type="text" className="w-96 p-2 px-3 focus:outline-[orangered] rounded-full border border-gray-300   text-gray-600 font-sans" placeholder="Search food..."/>
            <button className="w-18 p-2 h-10 cursor-pointer rounded-full flex items-center justify-center bg-[orangered] text-white">
                <SearchRoundedIcon className='text-[28px]!'/>
            </button>
        </form>
        </>
    )
}