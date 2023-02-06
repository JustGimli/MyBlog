import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

interface IPropStar{
    selected?: boolean
    onSelect(f: React.MouseEvent | void): React.MouseEvent | void
}

const Star:React.FC<IPropStar> = ({selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default function StarRating({ style = {},totalStars = 5, ...props })  {
    const [selectedStars, setSelectedStars ] = useState(0)
    
    const CreateArray = (length: number) => [...Array(length)]

    return(
        <>
        <div style={{ padding: "5px", ...style }} {...props}>
            {CreateArray(totalStars).map((n,i) => (
            <Star
                key={i}
                selected={ selectedStars > i }
                onSelect={() => setSelectedStars(i + 1)}
            />
            ))}
            <p>
                {selectedStars} of {totalStars}
            </p>
        </div>
        
        </>
    ) 
    
}