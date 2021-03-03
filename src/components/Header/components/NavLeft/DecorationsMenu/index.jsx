import React from 'react'
import decoMenuItem from '../../../../../contants/NavBarMenuItem'

function DecorationsMenu() {
    return (
        <>
            <ul>
                {decoMenuItem.DECORATIONS?.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <li>
                                {item}
                            </li>
                        </React.Fragment>
                    )
                })}
            </ul>
        </>
    )
}

export default DecorationsMenu
