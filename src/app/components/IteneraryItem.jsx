import Image from "next/image"

const IteneraryItem = () => {
    return (
        <li>
            <div>
                <Image src="" />
                <div>
                    <h2>Restaurant</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book.
                    </p>
                </div>
            </div>
            <div>
                <span>$1,00</span>
                <div>
                    <date>27 / 08 / 23 - 12:00pm </date>
                    <date>28 / 08 / 23 - 2:00pm </date>
                </div>
            </div>
        </li>
    )
}

export { IteneraryItem }