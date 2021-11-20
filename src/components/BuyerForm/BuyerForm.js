
export const BuyerForm = ({buyer,setBuyer, handleChange}) => {
    
    const inputs = [
        {
            label: "nombre",
            name: "nombre",
            value: buyer.nombre,
        },
        {
            label: "telefono",
            name: "telefono",
            value: buyer.telefono,
        },
        {
            label: "email",
            name: "email",
            value: buyer.email
        }
    ];


    // function handleChange(evt) {
    //     setBuyer({ ...buyer, [evt.target.name]: evt.target.value });
    //     console.log(buyer);
    //     console.log(setBuyer);
    // }
    console.log(buyer);

    return (
        <div>
            {inputs.map((input) => (
            <div key={input.name}>
                    <label>{input.label}</label>
                    <input
                        value={buyer[input.value]}
                        name={input.name}
                        type="text"
                        onChange={handleChange}
                    />
            </div>))}
        </div>
    );
}

export default BuyerForm