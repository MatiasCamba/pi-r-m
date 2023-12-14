import { connect } from 'react-redux'
import { Card } from '../Card/Card'

export const Favorites = (state) => {
    console.log(state)
    return (
        <div>

            {state.myFavorites?.map((favorite) => (
                <Card
                    character={favorite}
                    key={favorite.id}
                />
            )
            )}
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        myFavorite: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);