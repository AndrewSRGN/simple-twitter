import React from 'react';
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";

const PostFilter = ({filter, setFilter}) => {

    const { searchQuery, selectedSort } = filter;
    const { setSearchQuery, setSelectedSort } = setFilter;
    
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSelect = (e) => {
        setSelectedSort(e.target.value);
    };

    return (
        <div>
            <Input
                value={searchQuery}
                onChange={handleSearch}
                type="text"
                placeholder="Search..."
            />

            <Select
                value={selectedSort}
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