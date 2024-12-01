import { BsBookmark } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/slices";
import { isFavoriteToggle } from "../../redux/contacts/slices";

import './ListContactStyle.css';

function List() {

    const contacts = useSelector((state) => {
        return state.contacts.contactList;
    });
    
    const searchContact = useSelector((state) => {
        return state.contacts.search;
    });

    const onlyFavorite = useSelector((state) => {
        return state.contacts.onlyFavorite;
    });

    // const filterContacts = contacts.filter((item) => {
    //     const filterContact = item.name.toLowerCase().includes(searchContact.toLowerCase());
    //     return filterContact
    // })

    const highlighting = (text, reg) => {
        const regexp = new RegExp(`(${reg})`, 'gi');
            return text.split(regexp).map((item, i) => {
                if(item.toLowerCase() === reg.toLowerCase() ){
                    return (
                        <span key={i} className="highlight">
                        {item}
                    </span>
                    )
                };
                return item
            })
    }

    const filterContactsName = contacts.filter((item) => {
        const filterContact = item.name.toLowerCase().includes(searchContact.toLowerCase());
        return filterContact;
    });

    const filterContactsSurname = contacts.filter((item) => {
        const filterContact = item.surname.toLowerCase().includes(searchContact.toLowerCase());
        return filterContact;
    });

    const filterContactsAll = () => {
        const nameSurnameFilter = Array.from(new Set(filterContactsName.concat(filterContactsSurname)));
        return nameSurnameFilter;
    }

    const dispatch = useDispatch();

    const handleDeleteItem = (id) => {
        const confirm = window.confirm('Вы уверены, что хотите удалить контакт?');
        if(confirm) {
            dispatch(deleteContact(id));
        }
    }

    const handleFavoriteToggle = (id) => {
       dispatch(isFavoriteToggle(id))
    }

    return (
        <div className="list">
            <h1>Сontact list</h1>
            {filterContactsAll().length === 0 ? <h2>Contact list is empty...</h2> : (onlyFavorite ? filterContactsAll().filter(item => item.isFavorite === true) : filterContactsAll()).map((item) => <div className="list-item" key={item.id}>
                    <div className="list-item__favorite">
                        {item.isFavorite === false ? <BsBookmark className="favorite-icon" onClick={() => {
                            handleFavoriteToggle(item.id)
                        }}/> : <BsBookmarkFill className="favorite-icon favorite-icon_active" onClick={() => {
                            handleFavoriteToggle(item.id)
                        }}/>}
                    </div>
                    <div className="list-item__name">
                        Name: {highlighting(item.name, searchContact)};
                    </div>
                    <div className="list-item__surname">
                        Surname: {highlighting(item.surname, searchContact)};
                    </div>
                    <div className="list-item__tel">
                        Tel: {item.tel};
                    </div>
                    <div className="list-item__address">
                        Address: {item.address};
                    </div>
                    <div className="list-item__delete" onClick={() => {handleDeleteItem(item.id)}}>
                        <BsFillTrashFill className="delete-icon"/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default List;



