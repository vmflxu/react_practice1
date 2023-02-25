const User = ({ key, item, remove }) => {
    return (
        <div key={item.id} className='component-style'>
            {item.age} - {item.name}&nbsp;<br />
            <span className="erase" onClick={() => remove(item.id)}>🗑</span>
        </div>
    )
}


export default User;