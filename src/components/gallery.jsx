import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>

      <div className='overlay'>
        <div className='gallery-back'>
          <div className='row'>
            <div className='col-md-2 col-md-offset-5 col-xs-4 col-xs-offset-4 intro-text'>
              <img src="img/vswap/logo.png" alt="" className="intro-logo" />
            </div>
          </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center"><h3>Contact Information</h3></div>
        </div>
        </div>
      </div>
    </div>
  )
}
