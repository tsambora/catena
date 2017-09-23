import React, { Component } from 'react'
import { Link } from 'react-router'
import Section from 'grommet/components/Section'

import Catalog from './Catalog'
import Cart from './Cart'
import PaymentModal from './PaymentModal'
import CatenaInitModal from './CatenaInitModal'
import CatenaSuccessModal from './CatenaSuccessModal'
import CatenaFailedModal from './CatenaFailedModal'

import { catalog } from './merchantData'

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            showPaymentModal: false,
            showCatenaInitModal: false,
            showCatenaSuccessModal: false,
            showCatenaFailedModal: false,
            balance_before: null,
            balance_after: null,
        }

        this.togglePaymentModal = this.togglePaymentModal.bind(this)
        this.toggleCatenaInitModal = this.toggleCatenaInitModal.bind(this)
        this.toggleCatenaSuccessModal = this.toggleCatenaSuccessModal.bind(this)
        this.toggleCatenaFailedModal = this.toggleCatenaFailedModal.bind(this)
    }

    togglePaymentModal() {
        this.setState({ showPaymentModal: !this.state.showPaymentModal })
    }

    toggleCatenaInitModal() {
        this.setState({ showCatenaInitModal: !this.state.showCatenaInitModal })
    }

    toggleCatenaSuccessModal() {
        this.setState({ showCatenaSuccessModal: !this.state.showCatenaSuccessModal })
    }

    setBalance(balance_before, balance_after) {
        this.setState({ balance_before, balance_after })
    }

    toggleCatenaFailedModal() {
        this.setState({ showCatenaFailedModal: !this.state.showCatenaFailedModal })
    }

    render() {
        return (
            <Section
                direction='row'
                pad='small'
                colorIndex='light-2'>
                <Catalog />
                <Cart togglePaymentModal={this.togglePaymentModal} />
                {
                    this.state.showPaymentModal ?
                        <PaymentModal
                            togglePaymentModal={this.togglePaymentModal}
                            toggleCatenaInitModal={this.toggleCatenaInitModal} />
                        : null
                }
                {
                    this.state.showCatenaInitModal ?
                        <CatenaInitModal
                            toggleCatenaInitModal={this.toggleCatenaInitModal}
                            toggleCatenaSuccessModal={this.toggleCatenaSuccessModal}
                            setBalance={(balance_before, balance_after) => { this.setBalance(balance_before, balance_after) }}
                            toggleCatenaFailedModal={this.toggleCatenaFailedModal} />                            
                        : null
                }
                {
                    this.state.showCatenaSuccessModal ?
                        <CatenaSuccessModal
                            balance_before={this.state.balance_before}
                            balance_after={this.state.balance_after}
                            toggleCatenaSuccessModal={this.toggleCatenaSuccessModal} />
                        : null
                }
                {
                    this.state.showCatenaFailedModal ?
                        <CatenaFailedModal
                            toggleCatenaFailedModal={this.toggleCatenaFailedModal} />
                        : null
                }
            </Section>
        )
    }
}
