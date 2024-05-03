import React, { useState, useRef } from 'react'

export function Tabs ({children}) {
    const childrenArray = React.Children.toArray(children)  
    const [childCurrent, setchildCurrent] = useState(childrenArray[0].key ) 
    const newChildren = childrenArray.map(child => {
         return React.cloneElement(child, {selected: child.key === childCurrent})
})

    const [scrollX, setScrollX] = useState(0)
    const scrollRef = useRef(null)

    const handleScrollTop = ()=> {
        setScrollX(scrollX - 5)
    }
    const handleScrollBottom = ()=> {
        setScrollX(scrollX + 5)
    }

    const style = {
        transform: 'translateY(${scrollX}px)'
    }

    return (
        <div className='Tabs'>
            <nav ref={scrollRef} style={style}>
                {childrenArray.map(child => (
                    <button onClick={() => setchildCurrent(child.key)} 
                             key={child.key}>
                            {child.props.title}
                    </button>
                ))}
            </nav>
            <div>
                <button onClick={handleScrollTop}
                 style={{display: 'none'}}>
                    <i className='fas fa-angle-up'></i>
                </button>
                <button onClick={handleScrollBottom}
                 style={{display: 'none'}}>
                    <i className='fas fa-angle-down'></i>
                </button>
            </div>
            <section>
                {newChildren}
            </section>
        </div>
  )
}

export function Tab ({children, selected}) {
    
    return ( 
            <div hidden={!selected} className="tab">
                {children}
            </div>
    )
  }
