import './Nav.css'

const Nav = () => {
  const navigation = ['Join/Sign In', 'Home', 'Profile', 'Search', 'The Beat', 'Log Out'];
  return (
    <>
      <ul className="nav-bar" id="nav-bar">

        {/* <li>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTttVyCpYFMxCJ52VbotDCJAFJr7oB3PeqNOw&usqp=CAU" alt="makeup-brush-img" width="30" height="24"/>
        </li> */}

        {navigation.map((nav, index) => {
          return <li className='li-items' key={index}><a className='links' href="">{nav}</a></li>
        })}
      </ul>
    </>
  )
}
export default Nav

// don't think the nav bar should be mapped?
// look up how to add separate links if stays mapped
// look up how to navigate to separate components links
