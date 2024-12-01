import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { onlyFavoriteChange } from '../../redux/contacts/slices';
import { searchContact } from '../../redux/contacts/slices';
import './SearchContactStyle.css';

function Search() {
    const dispatch = useDispatch();

    const handleSearch = (search) => {
        dispatch(searchContact(search))
    }

    const onlyFavorite = useSelector((state) => {
        return state.contacts.onlyFavorite;
    })

    const handleOnlyFavorite = () => {
        dispatch(onlyFavoriteChange())
    }

    return(
        <div className="search">
            <h1>Сontact search</h1>
            <input type="text" placeholder='Enter Name or Surname' onChange={(e) => {
                handleSearch(e.target.value);
            }}/>
            <label>
                <input type="checkbox" onChange={handleOnlyFavorite} checked={onlyFavorite}/>
                Only Favorite
            </label>
        </div>
    )
}

export default Search;