import Gangnam from "../../public/gangnam-style.svg"

const Index = () => {
    return (
        <>
        <div className="container">
            <Gangnam className="svgStyle" />
            <p className="textStyle">Welcome to Next Style ...</p>
        </div>
        <style global jsx>{`
            .svgStyle {
                height: 300px;
            }
            .container {
                text-align: center;
                margin-top: 20px;
            }
            .textStyle {
                font-size: 25px;
                font-weight: bold;
            }
        `}</style>
        </>
    )
}

export default Index;