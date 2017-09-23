import React, { Component } from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Layer from 'grommet/components/Layer'
import CheckmarkIcon from 'grommet/components/icons/base/Checkmark'

export default class CatenaSuccessModal extends Component {
    render() {
        return (
            <Layer onClose={() => {
                this.props.toggleCatenaSuccessModal()
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
                            Pembayaran Berhasil
                        </Heading>
                    </Box>
                    <Box
                        align='center'
                        pad='medium'>
                        <CheckmarkIcon size='large' />
                    </Box>
                    <Box
                        align='center'
                        pad='medium'>
                        <Heading
                            tag='h4'
                            align='center'
                            margin='none'>
                            (kami menunjukan saldo pelanggan hanya untuk keperluan demo, untuk menunjukkan bahwa smart contract telah berjalan)
                        </Heading>
                        <Heading
                            tag='h4'
                            align='center'
                            margin='none'>
                            {`Saldo pelanggan (sebelum): Rp ${this.props.balance_before}`}
                        </Heading>
                        <Heading
                            tag='h4'
                            align='center'
                            margin='none'>
                            {`Saldo pelanggan (setelah): Rp ${this.props.balance_after}`}
                        </Heading>
                    </Box>
                </Box>
            </Layer>
        )
    }
}