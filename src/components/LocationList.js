import React from 'react';

export default class L extends React.Component {


async componentDidMount() {
// eslint-disable-next-line 
const artistUrl = `https://api.songkick.com/api/3.0/search/locations.json?query=Los_Angeles&apikey=${process.env.REACT_APP_SONGKICK_API_KEY}
`;  
    
// eslint-disable-next-line
const response = await fetch(artistUrl);
// eslint-disable-next-line
const data = await response.json();
    console.log(artistUrl)
    console.log(response)
    console.log(data.resultsPage.results.location)
    
}
 
render() {
    return (
        <form className='form-horizontal'>
        <input placeholder='Search By Artist Name' type='text' name='searchString' required />
        <button type='submit'>Go!</button>    
        </form>           
  )  
}

}
