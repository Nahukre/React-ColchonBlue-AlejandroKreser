
export const BuyerForm = ({buyer, handleChange}) => {
    
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