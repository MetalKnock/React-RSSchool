import React from 'react';

interface SearchBarProps {}

interface SearchBarState {}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
  }
  render() {
    return <div>SearchBar</div>;
  }
}

export default SearchBar;
