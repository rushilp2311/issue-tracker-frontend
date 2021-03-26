import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import { selectAllMembers } from '../../app/memberSlice';

function AutoSuggest(props) {
  const memberlist = useSelector(selectAllMembers);
  const [name, setName] = useState(props.value);
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    const { handleAdminChange } = props;
    if (newValue instanceof Object) {
      setName(newValue.name);
    } else {
      setName(newValue);
    }
    handleAdminChange(newValue.id, newValue.name);
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : memberlist.filter(
          (obj) => obj.name.toLowerCase().slice(0, inputLength) === inputValue
        ).length < 1
      ? [{ name: 'No member Found' }]
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
    <>
      {memberlist.length >= 1 ? (
        <div>
          {suggestion.id} {suggestion.name}
        </div>
      ) : (
        <div>{suggestion.name}</div>
      )}
    </>
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
