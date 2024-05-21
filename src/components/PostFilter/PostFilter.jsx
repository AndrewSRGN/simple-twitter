import React from 'react';
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";

const PostFilter = ({filter, setFilter}) => {
    
    const handleSearch = (e) => {
        setFilter({...filter, query: e.target.value});
    };

    const handleSelect = (e) => {
        setFilter({...filter, sortBy: e.target.value});
    };

    return (
        <div>
            <Input
                value={filter.query}
                onChange={handleSearch}
                type="text"
                placeholder="Search..."
            />

            <Select
                value={filter.sortBy}
                onChange={handleSelect}
                defaultValue={"Sort"}
                options={[
                    { value: "title", name: "By Title" },
                    { value: "body", name: "By Body" },
                ]}
            />
        </div>
    );
};

export default PostFilter;