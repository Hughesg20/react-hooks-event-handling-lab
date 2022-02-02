// Code Keypad Component Here



function enteringPassword(){
    console.log('Entering password...')
}



function Keypad(){
    return(
    <input onChange={enteringPassword}type="password" />
    )
}

export default Keypad;