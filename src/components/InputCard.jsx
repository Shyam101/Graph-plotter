
const InputCard = (props) => {
    const {item, index, handleChange, handleClose} = props;
    return (
        <div className="input-card">
            {/* <button className="card-close" onClick={() => handleClose(index)}>X</button> */}
            <input type="button" id="close-btn" onClick={() => handleClose(index)} value="X"/>
            {/* <label className="label">
                    name */}
                    <input type="text" name="name"
                        placeholder = "Enter label"
                        value={
                            item.name
                        }
                        onChange={
                            (event) => handleChange(event.target.name, event.target.value, index)
                        }/>
                {/* </label>
                <label>
                    value */}
                    <input type="number" name="value"
                        placeholder = "Enter Value"
                        value={
                            item.value
                        }
                        onChange={
                            (event) => handleChange(event.target.name, +event.target.value, index)
                        }/>
                {/* </label> */}
        </div>
    )
}

export default InputCard;