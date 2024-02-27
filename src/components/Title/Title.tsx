import { ReactElement, ReactNode } from "react";
import './Title.css';
function Title(props: {children: ReactNode}): ReactElement {
    return(
        <h2 className="Title">{props.children}</h2>
    )
}

export default Title;