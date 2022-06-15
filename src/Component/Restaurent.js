import React, { useState } from 'react';
// import './style.css';
import Menu from './menuApi.js';
import MenuCard from './MenuCard.js';
import Navbar from './Navbar';

const uniqueList = [
    ... new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];
console.log(uniqueList);

const Restaurent = () => {
    const [menuData, setMenudata] = useState(Menu);
    // console.log(menuData);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {

        if(category === 'All'){
            setMenudata(Menu);
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenudata(updatedList);
    };
    return (
        <>
            {/* <Navbar/> */}
            <Navbar filterItem={filterItem} menuList={menuList}/>
            <MenuCard menuData={menuData} />
            <img src='' alt='' />
        </>
    );
};

export default Restaurent;