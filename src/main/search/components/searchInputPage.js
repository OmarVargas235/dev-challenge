import React from 'react';
import { FcSearch } from "react-icons/fc";

import TextField from '../../../layaut/textField/textField';

const SearchInputPage = ({ handleChange }) => (
    <TextField
        icon={<FcSearch fontSize={30} />}
        edge="start"
        label="Some random text"
        classes='input'
        handleChange={handleChange}
    />
)

export default SearchInputPage;