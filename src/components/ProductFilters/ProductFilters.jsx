import React from 'react'

export default function ProductFilters() {
    return (
        <div className="filters-container">
            <div>
                6 products
            </div>
            <div>
                <label htmlFor="order">order</label>
                <select name="select-order" id="order">
                    <option >latest</option>
                    <option >lowest</option>
                    <option >highest</option>
                </select>
            </div>
            <div>
                <label htmlFor={"filter"}>filter</label>
                <select name="select-filter" id="filter">
                    <option >all</option>
                    <option >xs</option>
                    <option >s</option>
                    <option >m</option>
                    <option >l</option>
                    <option >xl</option>
                    <option >xxl</option>
                </select>
            </div>
        </div>

    )
}
