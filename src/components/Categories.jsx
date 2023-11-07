import React from 'react'

function Categories({category,onChangeCategory}) {
 const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
  return (
    <div className="categories">
        <ul>
            {categories.map((item,index)=>{
                return <li onClick={()=>onChangeCategory(index)} className={category===index?"active":""} key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default Categories