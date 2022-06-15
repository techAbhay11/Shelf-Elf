import React from "react"
import { Box, Card, Heading, Text, Button, Image } from 'rebass';
import { connect } from 'react-redux';
import items from './components/items';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { searchBook } from '../reduxStore/actions/searchActions';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            suggestion: [],
            text: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target
        let suggestion = []
        // if (value.length > 0) {
        //
        //   const regex = new RegExp(`^${value}`, 'i')
        //   suggestion = items.sort().filter(v => regex.test(v))
        // }
        this.setState({ suggestion, [name]: value })
    }

    selectSuggestion(value) {
        this.setState({
            text: value,
            suggestion: []
        })
    }

    renderSuggestion() {
        if (this.state.suggestion.length === 0) {
            return null
        } else {
            return (
                <div className="list-container">
                  {this.state.suggestion.map((item, id) => <Text key={id} onClick={() => this.selectSuggestion(item)}>{item}</Text>)}
                </div>
            )
        }
    }

    render() {
        const books = this.props.books
        const bookList = books.length ? (
          books.map(book => {
            return (
              <Card
                sx={{
                  p: 2,
                  borderRadius: 2,
                  boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                }} my={3} key={book.id}>
                {
                  book.volumeInfo.imageLinks ? (
                      <Image
                        src={book.volumeInfo.imageLinks.thumbnail.replace("http", "https")}
                        sx={{
                          borderRadius: 8,
                        }}
                      />
                  ) : null
                }
                <Heading as='h1' fontSize={5} my={3}>
                  {book.volumeInfo.title}
                </Heading>
                <Text fontSize={3} my={3}>
                  Description: {book.volumeInfo.description}
                </Text>
                  {
                    book.volumeInfo.authors ? (
                      <Text fontSize={3} my={3}>
                        Author: {
                          book.volumeInfo.authors.map(author => author + ' ')
                        }
                      </Text>
                    ) : null
                  }
                  {
                    book.volumeInfo.canonicalVolumeLink ? (
                        <Text fontSize={3} my={3}>
                          <a href={book.volumeInfo.canonicalVolumeLink} target="_blank">Google Books Link</a>
                        </Text>
                    ) : null
                  }
                <Button bg='green' p={2} my={2} style={{cursor: "pointer"}} onClick={() => console.log(book.id)}>
                  Discuss
                </Button>
              </Card>
            )
          })
        ) : null

        return (
            <React.Fragment>
              <Box width={1/2} px={2} my={3} mx='auto'>
                <Heading as='h1' fontSize={4}>
                  Search your favorite Books!
                </Heading>
              </Box>
              <Box width={1/2} px={2} mx='auto'>
                <input type="text" name="text" value={this.state.text} onChange={this.handleChange} autoComplete="off" />
                <Button variant='primary' px={2} ml={4} onClick={() => {this.props.searchBook(this.state.text)}}>
                  Search
                </Button>
                {/* this.renderSuggestion() */}
              </Box>
              <Box width={2/3} px={2} mx='auto' py={2}>
                { bookList }
              </Box>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    books: state.search.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchBook: (query) => {
      dispatch(searchBook(query));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
