
export const BuyerForm = (buyer,setBuyer, handleChange) => {
    // const handleBuyerChange = (e) => {
    //     setBuyer({...buyer, [e.target.name]: e.target.value  })
    // }
    const inputs = [
        {
            label: "nombre",
            name: "nombre",
        },
        {
            label: "telefono",
            name: "telefono",
        },
        {
            label: "email",
            name: "email",
        }
    ];


    // function handleChange(evt) {
    //     setBuyer({ ...buyer, [evt.target.name]: evt.target.value });
    //     console.log(buyer);
    //     console.log(setBuyer);
    // }
    console.log(buyer);
    console.log(setBuyer);

    return (
        <div>
            {inputs.map((input) => (
            <div key={input.name}>
                    <label>{input.label}</label>
                    <input
                        value={buyer[input.name]}
                        name={input.name}
                        type="text"
                        onChange={handleChange}
                    />
            </div>))}
        </div>
    );
}

export default BuyerForm