import { useState } from 'react';
import { InputSearchForm, ButtonSearchForm } from 'components/SearchForm/SearchForm.styled';

const SearchForm = ({ setSearchParams }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        setSearchParams({ query });
        
    };

    const handleSearchParams = ({ target: { value } }) => {
        setQuery(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputSearchForm
                type="text"
                autocomplete="off"
                autoFocus
                placeholder="Search movies..."
                value={query}
                onChange={handleSearchParams}
            />
            <ButtonSearchForm
                type="submit"
                disabled={!query}>
                Search
            </ButtonSearchForm>
        </form>
    )
};

export default SearchForm;