# CATENA SDK Specification

This is CATENA SDK specification and guide for merchant's integration.

This spec will guide you through implementing CATENA in your online store site. The image shown below is the example of CATENA payment prompt that is already integrated to a merchant's website.

![](https://i.imgur.com/McmE7vt.png)
![](https://i.imgur.com/mcPowhb.png)

## Overview
There are two ways to integrate CATENA payment prompt to your site:

1. Use CATENA as a JS class
2. Use CATENA as a React Component

Before integrating CATENA SDK, you have to first download CATENA blockchain ledger. The SDK will not be usable unless the merchant has the current state of the blockchain.

## CATENA usage as a JS class
You can integrate CATENA by importing CATENA SDK and make a function call somewhere in your payment code.

Import CATENA SDK by adding this script tag in your HTML head.
```
<script type="text/javascript" src="cdn.catena.com/merchant/catenaSdkV1.js"></script>
```

After the script is imported, you can call `Catena.init()` function to call the CATENA payment prompt. This function takes two parameters:
```
Catena.init(blockChainDir, merchantId);
```
`blockChainDir` is the directory of the blockchain in your computer.
`merchantId` is your CATENA merchant id.

Calling `Catena.init()` will trigger the catena payment prompt to appear.
![](https://i.imgur.com/McmE7vt.png)

The rest part of the payment is as described in our demo. The CATENA SDK will process the user input and cross check it with the blockchain.

## CATENA usage as a react component
If your merchant app is a react app. You can integrate CATENA by using CATENA react component.

Import CATENA SDK by adding this script tag in your HTML head.
```
<script type="text/javascript" src="cdn.catena.com/merchant/catenaSdkV1.js"></script>
```

In your payment page, import CATENA react component
```
import CatenaInitModal from `Catena`;
```

then add it to your component's render function, along with the logic of when it should appear. For example:
```
{
    this.state.showCatenaInitModal ?
        <CatenaInitModal
            blockChainDir="foo"
            merchantId="bar"
        : null
}
```

Adding `<CatenaInitModal />` to your page's render function will trigger the catena payment prompt to appear.
![](https://i.imgur.com/McmE7vt.png)

The rest part of the payment is as described in our demo. The CATENA SDK will process the user input and cross check it with the blockchain.
