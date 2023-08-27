import Image from "next/image"

const IteneraryItem = ({
    iconImage,
    title,
    description,
    price,
    startTime,
    endTime,
    index
}) => {
    const indexes = {
        1: "after:content-['1']",
        2: "after:content-['2']",
        3: "after:content-['3']",
    }
    return (
        <li className={`bg-white rounded-md p-4 shadow-lg relative after:w-10 after:h-10 ${indexes[index]} after:bg-[#5e0e8b] after:rounded-full after:absolute after:-top-4 after:-right-4 after:text-white after:font-bold after:flex after:justify-center after:items-center after:text-xl after:shadow-md`}>
            <div className="flex justify-start items-start gap-x-5 mb-4 border-b-2 border-b-slate-200 pb-4">
                <Image 
                    src={iconImage}
                    alt={`Icono de ${title}`}
                    title={`Icono de ${title}`}
                    width={60} 
                    height={60} 
                />
                <div>
                    <h3 className="text-3xl font-bold mb-2">{title}</h3>
                    <p className="text-lg leading-7">{description}</p>
                </div>
            </div>
            <div className="flex justify-start items-center gap-x-5">
                <span className="text-2xl font-bold text-[#229171]">{price}</span>
                <div>
                    <date className="text-sm">{`${startTime} - `}</date>
                    <date className="text-sm">{`${endTime}`}</date>
                </div>
            </div>
        </li>
    )
}

export { IteneraryItem }