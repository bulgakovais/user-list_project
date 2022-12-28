import styles from './Header.module.css'
import classNames from 'classnames'
import { MyButton } from '../UI/MyButton/MyButton'
import { useEffect, useState } from 'react';
import exit from '../../img/Vector.png'

export const Header = ({ text, children }) => {
    console.log(text);
    console.log(children);



    return (<div className={styles.container}>
        <div className={styles.main_header}>
            <div className={styles.btn_container}>

                {/* <MyButton props={props}></MyButton> */}

                <MyButton className={styles.my_btn} props={text} />
                <img className={styles.imgExit} src={exit} />



            </div>
            {children}

        </div>
    </div>
    )
}