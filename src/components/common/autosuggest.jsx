import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import { selectAllMembers } from '../../app/memberSlice';

function AutoSuggest(props) {
  const memberlist = useSelector(selectAllMembers);
  const [name, setName] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    const { handleAdminChange } = props;
    if (newValue instanceof Object) {
      setName(newValue.name);
      handleAdminChange(newValue.id);
    } else {
      setName(newValue);
    }
  };

  const getSuggestions = (v) => {
    const inputValue = v.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : memberlist.filter(
          (obj) => obj.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestionValue = (suggestion) => {
    return {
      name: suggestion.name,
      id: suggestion.member_id,
    };
  };

  const renderSuggestion = (suggestion) => (
    <div>
      {suggestion.id} {suggestion.name}
    </div>
  );

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };
  const inputProps = {
    placeholder: 'Enter Project Admin Name',
    value: name,
    onChange: onChange,
  };

  return (
    <>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </>
  );
}

export default AutoSuggest;
