import React, { Component } from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Layer from 'grommet/components/Layer'
import CloseIcon from 'grommet/components/icons/base/Close'

export default class CatenaFailedModal extends Component {
    render() {
        return (
            <Layer onClose={() => {
                this.props.toggleCatenaFailedModal()
            }}>
                <Box
                    align='center'
                    pad='small'>
                    <Box
                        align='center'
                        pad='medium'>
                        <Heading
                            tag='h3'
                            align='center'
                            margin='none'>
                            Pembayaran Gagal
                        </Heading>
                    </Box>
                    <Box
                        align='center'
                        pad='medium'>
                        <CloseIcon size='large' />
                    </Box>
                    <Box
                        align='center'
                        pad='medium'>
                        <Heading
                            tag='h4'
                            align='center'
                            margin='none'>
                            error: Autentikasi Gagal
                        </Heading>
                    </Box>
                </Box>
            </Layer>
        )
    }
}