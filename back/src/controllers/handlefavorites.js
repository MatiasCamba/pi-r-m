let myFavorites = [];


const postFav = (req,res) => {
    myFavorites.push(req.body)

    return res.status(201).json(myFavorites);
}

const deleteFav = (req,res) =>{
    const {id} = req.params

    myFavorites.filter((favorite)=> favorite.id !== id)

   return  res.json(myFavorites);
}


module.exports= {postFav,deleteFav}