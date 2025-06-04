import { ReactNode } from "react";

type Headerprops = {
    image: {
        src: string;
        alt: string;
    };
    children: ReactNode;
}

export default function Header(props: Headerprops){
    return(
        <header>
            <img {...props.image}/>
            {props.children}
        </header>
    )
}