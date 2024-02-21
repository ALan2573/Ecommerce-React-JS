import cart from './assets/cart.svg'

const CardWidget = () => {

    return (
        <div>
            
           <img src={cart} alt="CartWidget"   className="CartWidget"/>
           <span className="CartWidgetSpan">0</span>
           <div>
  
    </div>
          
        </div>
    )
}

export default CardWidget