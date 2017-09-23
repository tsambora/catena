import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from 'grommet/components/Header'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import CartIcon from 'grommet/components/icons/base/Cart'

export default class AppHeader extends Component {
    render() {
        return (
            <Header
                direction='row'
                full='horizontal'
                colorIndex='ok'>
                <Box
                    basis='1'
                    pad='small'>
                    <Link
                        to='/'
                        style={{ color: '#f5f5f5' }}>
                        <Heading
                            size='small'
                            tag='h2'
                            strong
                            margin='none'>
                            <CartIcon size='medium' colorIndex='light-1' />  KASIR TOKO SEMBAKO FAKHRI
                        </Heading>
                    </Link>
                </Box>
            </Header>
        )
    }
}
