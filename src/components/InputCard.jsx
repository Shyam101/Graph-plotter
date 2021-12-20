
const InputCard = (props) => {
    const {item, index, handleChange, handleClose} = props;
    return (
        <div className="input-card">
            <input type="button" id="close-btn" onClick={() => handleClose(index)} value="X"/>
                <input type="text" name="name"
                    placeholder = "Enter label"
                    value={
                        item.name
                    }
                    onChange={
                        (event) => handleChange(event.target.name, event.target.value, index)
                    }/>
                <input type="number" name="value"
                    placeholder = "Enter Value"
                    value={
                        item.value
                    }
                    onChange={
                        (event) => handleChange(event.target.name, +event.target.value, index)
                    }/>
                <input type="color" name="color" id="colButton"
                    value={item.color} 
                    onChange={(event) => handleChange(event.target.name, event.target.value, index)}    
                />
                {/* </label> */}
        </div>
    )
}

export default InputCard;