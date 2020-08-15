import React from 'react';

const SearchForm = (props) => {
    return (
        <form onSubmit={ props.getUser }>
            <h1>Search GitHub Usernames</h1>
            <p>Enter your/a friend's username:</p>
            <input type="text" name="username"/>
            <button id="button">Submit</button>
        </form>
    );
}

export default SearchForm;