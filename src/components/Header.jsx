
const day_array = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
var date = day_array[new Date().getDay()] +' , '+ new Date().getFullYear()

const Header = () => {
  return (
    <header>
        <h1 className="Logo">Weather App</h1>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contacts</a></li>
            <li><p className="date">{date}</p></li>
        </ul>
    </header>
  )
}

export default Header