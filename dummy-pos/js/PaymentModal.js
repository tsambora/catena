import React, { Component } from 'react'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'
import Layer from 'grommet/components/Layer'

export default class PaymentModal extends Component {
    render() {
        return (
            <Layer onClose={this.props.togglePaymentModal}>
                <Box pad='small'>
                    <Heading
                        tag='h3'
                        strong
                        margin='none'>
                        Pilih metode pembayaran:
                    </Heading>
                    <Box pad='small'>
                        <Button
                            label='CATENA'
                            onClick={() => {
                                this.props.togglePaymentModal()
                                this.props.toggleCatenaInitModal()
                            }}
                            primary={true} />
                    </Box>
                    <Box pad='small'>
                        <Button
                            label='CREDIT CARD'
                            onClick={() => { alert('CREDIT CARD') }}
                            primary={true} />
                    </Box>
                    <Box pad='small'>
                        <Button
                            label='CASH'
                            onClick={() => { alert('CASH') }}
                            primary={true} />
                    </Box>
                </Box>
            </Layer>
        )
    }
}