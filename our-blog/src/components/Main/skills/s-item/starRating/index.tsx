import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

interface IPropStar{
    selected?: boolean
    onSelect(f: React.MouseEvent | void): React.MouseEvent | void
}

const Star:React.FC<IPropStar> = ({selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default function StarRating({ totalStars = 5,select=1 })  {
    const [selectedStars, setSelectedStars ] = useState(select)
    
    const CreateArray = (length: number) => [...Array(length)]

    return(
        <>
            {CreateArray(totalStars).map((n,i) => (
            <Star
                key={i}
                selected={ selectedStars > i }
                onSelect={() => setSelectedStars(i + 1)}
            />
            ))}
            {/* <p>
                {selectedStars} of {totalStars}
            </p> */}
        
        </>
    ) 
    
}