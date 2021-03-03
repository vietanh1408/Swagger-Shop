import { Box, Grid } from '@material-ui/core'
import React from 'react'
import decoMenuItem from '../../../../../contants/NavBarMenuItem'

function DecoMenu({ isScreenMobile }) {
    return (
        <Box>
            <Grid container>
                <Grid item lg={2}>
                    {!isScreenMobile
                        ? (
                            <>
                                <h6 className="mb-3">Decorations</h6>
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
                        :
                        (
                            <h6 className="mb-3">Decorations</h6>
                        )}
                </Grid>
                <Grid item lg={2}>
                    {!isScreenMobile
                        ?
                        (
                            <>
                                <h6 className="mb-3">Textiles and rugs</h6>
                                <ul>
                                    {decoMenuItem.TEXTILESANDRUGS?.map((item, index) => {
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
                        :
                        (
                            <h6 className="mb-3">Textiles and rugs</h6>
                        )}
                </Grid>
                <Grid item lg={2}>
                    {!isScreenMobile
                        ?
                        (
                            <>
                                <h6 className="mb-3">Art and prints</h6>
                                <ul className="rounded">
                                    {decoMenuItem.ARTANDPRINTS?.map((item, index) => {
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
                        :
                        (
                            <h6 className="mb-3">Art and prints</h6>
                        )
                    }
                </Grid>
                <Grid item lg={6}>
                    <div>
                        <img className="w-100" src="http://demo.posthemes.com/pos_ecolife_decoration/decoration3/img/cms/banner-menu.jpg" alt="deco-image" />
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DecoMenu
