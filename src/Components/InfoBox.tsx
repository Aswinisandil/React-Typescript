import { ReactNode } from "react";

type hintBoxProps = {
    mode: 'hint';
    children: ReactNode;
}
type WarningBoxProps = {
     mode: 'warning';
     severity: 'low' | 'medium' | 'high';
     children: ReactNode;  
}

type InfoBoxProps = hintBoxProps | WarningBoxProps;

export default function Infobox(props: InfoBoxProps){
   const {mode, children} = props;
   if(mode === 'hint'){
    return(
        <aside className="infobox infobox-hint">
         <p>{children}</p>
        </aside>
    )
   }

   const { severity } = props;

    return(
        <aside className={`infobox infobox-hint infobox-warning warning--${severity}`}>
        <h3>Warning</h3>
         <p>{children}</p>
        </aside>
    )
}