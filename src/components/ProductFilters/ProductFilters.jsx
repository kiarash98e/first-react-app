import React from 'react'

export default function ProductFilters({filters={price:null,size:null},setFilters,resualtCount=0}) {
    const handleChange = (e)=>{
        setFilters({
            ...filters,
            [e.target.name]:e.target.value,
        })
    }
    return (
        <div className="filters-container">
            <div>
                {resualtCount} products
            </div>
            <div>
                <label htmlFor={"price"}>price</label>
                <select onChange={handleChange} value={filters.price} name={'price'} id="price">
                    <option value={'0'}>latest</option>
                    <option value={'-1'}>lowest</option>
                    <option value={'1'}>highest</option>
                </select>
            </div>
            <div>
                <label htmlFor={"size"}>size</label>
                <select onChange={handleChange} value={filters.size} name={'size'} id="size">
                    <option value={''}>all</option>
                    <option value={'xs'}>xs</option>
                    <option value={'s'}>s</option>
                    <option value={'m'}>m</option>
                    <option value={'l'}>l</option>
                    <option value={'xl'}>xl</option>
                    <option value={'xxl'}>xxl</option>
                </select>
            </div>
        </div>

    )
}
