export default function Home() { 
    
    const [menustate, setMenuState] = useState(false);

    var left = 10;
    if(menustate === true){
        left = 50;
    }
    const HandleClick = () =>{
        setMenuState(true);
    }
    console.log("menustate", menustate);
    return <HomeCont>
        <head>
            <title>Home Page</title>
        </head>
        <div className="header">home page</div>
        <div className="botton">
            <div className="left">
                <Button text="Home" routeTo="/" />
                <Button text= "About" bgcolor="#FAD" routeTo="/about"/>
                <button onClick={HandleClick}>Move Card</button>
            </div>
            <div className ="right">
                <Card
                left={left}
                subtext="Welcome to my app"
                bigtext="In here you can't do much, but you can be who you are"
                />
            </div>
        </div>
    </HomeCont>
}