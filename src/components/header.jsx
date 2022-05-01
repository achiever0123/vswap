export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className=''>
            <div className='row intro-main'>
              <div className='col-md-4 col-md-offset-4 col-xs-8 col-xs-offset-2 intro-text'>
                {/* <div className="intro-logo">

                </div> */}
                <img src="img/vswap/Profile.jpg" alt="" className="intro-logo"/>
                {/* <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1> */}
                {/* <p>{props.data ? props.data.paragraph : 'Loading'}</p> */}
                {/* <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
