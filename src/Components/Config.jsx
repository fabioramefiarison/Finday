import React from 'react'

function Config(props) {
  return (
    <div className='config'>
        <div>
            <div><strong><i className={props.iclass1}></i></strong></div>
            <div>{props.textConfig1}</div>
        </div>
        <div>
            <div><strong><i className={props.iclass2}></i></strong></div>
            <div>{props.textConfig2}</div>
        </div>
        <div>
            <div><strong>{props.textConfig3}</strong></div>
            <div>{props.textConfig3Value}</div>
        </div>
        <div>
            <div><strong>{props.textConfig4}</strong></div>
            <div>{props.textConfig4Value}</div>
        </div>
        <div>
            <div><strong>{props.textConfig5}</strong></div>
            <div>{props.textConfig5Value}</div>
        </div>
        <div>
            <div><strong>{props.textConfig6}</strong></div>
            <div>{props.textConfig6Value}</div>
        </div>
    </div>
  )
}

export default Config