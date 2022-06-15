import React from 'react'


const MenuCard = ({ menuData }) => {
    // console.log(menuData);
    return (
        <>
        <section className='main-card-container '>
            {menuData.map((curElem, index) => {

                const { id, name, category, image, description } = curElem;

                return (
                    <>
                        <div className='card-container' key={id}>
                            <div className='card'>
                                <div className='card-body'>
                                    <span className='card-number card-circle subtle'>
                                    {id}
                                    </span>
                                    <span className='card-author subtle'>{name}</span>
                                    <h2 className='card-title'>{name}</h2>
                                    <span className='card-description subtle'>
                                        It is a long established fact that a reader will be distracted by the readable content of a page
                                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                        distribution of letters, as opposed to using 'Content here, content here', making it look like readable
                                        English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                                        text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                                        have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                    </span>
                                    <div className='card-read'>Read</div>
                                </div>
                                <img src='{image}' alt='images' className='card-media' />
                                <span className='card-tag subtle'>Order Now</span>
                            </div>
                        </div>
                    </>
                );
            })}
        </section>
        </>
    )
}


export default MenuCard;