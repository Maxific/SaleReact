import React, {useState, useEffect, createElement} from "react";
import styles from './index.module.css'


export const Toggle = () => {
    const [toggle, setToggle] = useState(true);
    const [border, borderSale] = useState(true);

    const triggerToggle = () => {
        setToggle(!toggle);
    };

    const triggerBorder = () => {
        borderSale(!border);
    };

    useEffect(() => {

    }, [])

    
    console.log(toggle);



    return (
        <div  className={styles.wrapper}>
            <div className={styles.border}>{toggle && <p>Sale</p>}</div>
            <button onClick={triggerToggle} className={styles.toggle}>toggle</button>
            <button onClick={triggerBorder} className={styles.border}>border</button>
        </div>
    )

}