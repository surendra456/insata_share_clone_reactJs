import React from 'react'

const SearchContext = React.createContext({
  SearchInput: '',
  click: false,
  searchPostView: false,
  searchValue: false,
  k: false,
  button: false,
  onChangeLikeIcon: () => {},
  onChangeUnLikeIcon: () => {},
  changeSearchValue: () => {},
  onEmptyInput: () => {},
  setSearchInput: () => {},
  onMoreOptionsState: () => {},
  searchBox: () => {},
})

export default SearchContext
