import React from 'react';

const SearchForm = (props) => {
    return (
        <form onSubmit={ props.getUser }>
            <h1>Search GitHub repos!</h1>
            <p>Enter a usernmae:</p>
            <input type="text" name="username"/>
            <button>Submit</button>
        </form>
    );
}

export default SearchForm;