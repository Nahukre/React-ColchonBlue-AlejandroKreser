import Loader from "react-loader-spinner";

export const Loading = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Loader type="Bars" color="greenyellow" height={500} width={500} />
        </div> 
    );
};
export default Loading;