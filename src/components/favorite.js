import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Grid, Row, Col} from 'react-bootstrap'
import "../dogitem.css"

class Favorite extends Component {
  render() {
    const getFavNames =()=> {
      let columnArray=[]
      let threeArray=[]
      for (let i=0; i<this.props.favorite.length; i+=3){
        let displayThree=this.props.favorite.slice(i, i+3).map(fav => {
          return <Link to = {`/animals/${fav.id}`}><img className="img" alt={fav.name} src={fav.image}/></Link>;
        });
        columnArray.push(<Col xs={4} md={4}> <Row> {displayThree} </Row> </Col>)
        console.log(displayThree)
      }
      console.log('columnnnsss',columnArray)
      return columnArray
    }
    return (
      <div>
        <Grid>
           {getFavNames()}
        </Grid>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    favorite: state.favorite,
    user: state.user
  }
}


// export default Favorite;
export default connect(mapStateToProps)(Favorite)
