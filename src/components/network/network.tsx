import React from "react";
import Image from "next/image";
import { Interface } from "readline";
interface INetwork {
    img: string;
    title: string;
    link: string;
}
function Network(props: INetwork)
{
    return(
        <div>
            <a href={props.link} className="m-auto block w-fit" target="_blank">
                <Image width={100} height={100} src={props.img} alt={props.title} />
            </a>
        </div>
    )
}

export default Network