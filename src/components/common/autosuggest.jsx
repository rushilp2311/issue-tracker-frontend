import React from 'react';
import Autosuggest from 'react-autosuggest';

class AutoSuggest extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    console.log(newValue);
    const { handleAdminChange } = this.props;
    if (newValue instanceof Object) {
      this.setState({
        value: newValue.name,
      });
      handleAdminChange(newValue.id);
    } else {
      this.setState({
        value: newValue,
      });
    }
  };

  getSuggestions = (value) => {
    const { memberlist } = this.props;
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : memberlist.filter(
          (obj) => obj.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  getSuggestionValue = (suggestion) => {
    return {
      name: suggestion.name,
      id: suggestion.member_id,
    };
  };

  renderSuggestion = (suggestion) => (
    <div>
      {suggestion.id} {suggestion.name}
    </div>
  );

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Enter Project Admin Name',
      value,
      onChange: this.onChange,
    };

    return (
      <>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </>
    );
  }
}
export default AutoSuggest;
