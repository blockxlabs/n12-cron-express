module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('notifications', [
      {
        uuid: '6247e0e5-0e64-4d95-a113-20330be75251',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'totalDAISupply',
        short_description: 'totaly supply for Dai ',
        long_description: 'Dai is a stable, decentralized and unbiased currency.',
        d_app_uuid: '0d4d4c2c-f403-4046-b07e-606a60af9f7f'
      },
      {
        uuid: 'c2f1ea80-f43b-4eff-a0c6-7fef36896ce4',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> 0XBTC',
        short_description: 'WETH per 0XBTC',
        long_description: 'WETH <> 0XBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '74b543cb-c2cf-48ab-9493-4dd6204e4359',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> AMN',
        short_description: 'WETH per AMN',
        long_description: 'WETH <> AMN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '45b25c73-0dc0-4cc3-b9bc-764621b1beed',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> AMPL',
        short_description: 'WETH per AMPL',
        long_description: 'WETH <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '363be8ab-7224-4cdc-8c64-a663150172c7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> ANJ',
        short_description: 'WETH per ANJ',
        long_description: 'WETH <> ANJ rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '58a96d6a-6ef6-4fc9-90d6-c5f855645234',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> ANT',
        short_description: 'WETH per ANT',
        long_description: 'WETH <> ANT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '477afa60-df11-41ab-a113-26435a7afec5',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> AST',
        short_description: 'WETH per AST',
        long_description: 'WETH <> AST rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '971172cf-c57c-4ef8-ab35-35bc77a1b9b0',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> BAL',
        short_description: 'WETH per BAL',
        long_description: 'WETH <> BAL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '7c6418a7-2dd1-4f46-aac4-fb40a641094e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> BAND',
        short_description: 'WETH per BAND',
        long_description: 'WETH <> BAND rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0c2a5729-5f38-4f17-95fa-a27c1037733d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> BAT',
        short_description: 'WETH per BAT',
        long_description: 'WETH <> BAT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'eb190ee2-6797-4206-b927-ff5024d6fda0',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> BLT',
        short_description: 'WETH per BLT',
        long_description: 'WETH <> BLT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '74e71b6b-bd1f-4a4d-964f-313a7e25ad62',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> BNT',
        short_description: 'WETH per BNT',
        long_description: 'WETH <> BNT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'eb74d376-282b-46eb-b7c8-63d59fe368d2',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> BTC++',
        short_description: 'WETH per BTC++',
        long_description: 'WETH <> BTC++ rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5fd7f42c-c7e9-43f3-b246-58c35dab4cff',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> BZRX',
        short_description: 'WETH per BZRX',
        long_description: 'WETH <> BZRX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c5e9f062-4521-4e10-a121-a9a711109cde',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> CEL',
        short_description: 'WETH per CEL',
        long_description: 'WETH <> CEL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c0c1d6f8-c650-4e57-8d8a-354f29ffc091',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> CELR',
        short_description: 'WETH per CELR',
        long_description: 'WETH <> CELR rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6c5bafd2-26c4-471d-9f8c-577e52d169df',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> CHAI',
        short_description: 'WETH per CHAI',
        long_description: 'WETH <> CHAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2f9dd33f-a642-4357-9f12-8ae211b217d7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> COMP',
        short_description: 'WETH per COMP',
        long_description: 'WETH <> COMP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e01016da-9459-44c0-b2bf-617826ad9629',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> DAI',
        short_description: 'WETH per DAI',
        long_description: 'WETH <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'fffc4df6-d568-4608-817a-605dda084882',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> DATA',
        short_description: 'WETH per DATA',
        long_description: 'WETH <> DATA rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '8f66b34f-f9bc-47e7-b6be-63b32e9c8370',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> DGD',
        short_description: 'WETH per DGD',
        long_description: 'WETH <> DGD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9c69669e-5f21-4e83-bca9-9766225c8d34',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> DGX',
        short_description: 'WETH per DGX',
        long_description: 'WETH <> DGX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '20fae7a6-9ad0-4366-85b6-3e7001d15ddf',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> DIP',
        short_description: 'WETH per DIP',
        long_description: 'WETH <> DIP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1dd6d9d5-d9ae-4ed7-a17a-5cb68e1c19ea',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> DONUT',
        short_description: 'WETH per DONUT',
        long_description: 'WETH <> DONUT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '537663bd-c610-45a4-b90d-b99c36e6abaa',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> EBASE',
        short_description: 'WETH per EBASE',
        long_description: 'WETH <> EBASE rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '7ea6111a-02b7-4a4b-9ff8-132a96e9423e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> ENJ',
        short_description: 'WETH per ENJ',
        long_description: 'WETH <> ENJ rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '821b71da-5500-46ae-b747-f76d2356789b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> FOAM',
        short_description: 'WETH per FOAM',
        long_description: 'WETH <> FOAM rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5b75ea52-1dc1-423f-9815-a8799efb1140',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> FUN',
        short_description: 'WETH per FUN',
        long_description: 'WETH <> FUN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9745d6df-1136-4140-af67-e8cb9abcfb7e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> FXC',
        short_description: 'WETH per FXC',
        long_description: 'WETH <> FXC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '188042ae-ea40-49e7-9c47-8a7588431a1d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> GEN',
        short_description: 'WETH per GEN',
        long_description: 'WETH <> GEN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a1c1617e-2b0d-42e2-82b9-3593393fc69f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> GNO',
        short_description: 'WETH per GNO',
        long_description: 'WETH <> GNO rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '3dd8d5ca-0ba1-4add-a5b7-36456e2d349b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> GRID',
        short_description: 'WETH per GRID',
        long_description: 'WETH <> GRID rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f0d1fa65-c29d-4479-ad89-da5437914d8e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> GST2',
        short_description: 'WETH per GST2',
        long_description: 'WETH <> GST2 rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '19f2e20f-8cff-433a-9dae-e9cdc79e56f4',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> HOT',
        short_description: 'WETH per HOT',
        long_description: 'WETH <> HOT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9c421917-5540-4fd2-95b4-7458e1248c7b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> IOTX',
        short_description: 'WETH per IOTX',
        long_description: 'WETH <> IOTX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '155050c6-2ff8-4e0c-a4d8-6c64acc1c830',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> KEY',
        short_description: 'WETH per KEY',
        long_description: 'WETH <> KEY rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a6b9aa47-d936-4e7b-9791-cc4ab16bba99',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> KNC',
        short_description: 'WETH per KNC',
        long_description: 'WETH <> KNC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '27a39a38-58a3-4667-b41e-71427c734302',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> LEND',
        short_description: 'WETH per LEND',
        long_description: 'WETH <> LEND rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f9bdca61-95f0-424d-9560-96bef544bd8c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> LINK',
        short_description: 'WETH per LINK',
        long_description: 'WETH <> LINK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0f7535f3-af81-43d2-931b-17cc563619e9',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> LOOM',
        short_description: 'WETH per LOOM',
        long_description: 'WETH <> LOOM rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c6ecf3af-5ebf-4d57-b0b3-88deda1c1d78',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> LPT',
        short_description: 'WETH per LPT',
        long_description: 'WETH <> LPT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6fadda6e-93d4-4d41-b4ec-e5ba52735c16',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> LQD',
        short_description: 'WETH per LQD',
        long_description: 'WETH <> LQD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9fd980b3-033f-45a3-ae0d-3f89216c0e75',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> LRC',
        short_description: 'WETH per LRC',
        long_description: 'WETH <> LRC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6145fba5-dbf0-4c2a-9ffc-06c708f3d825',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> MANA',
        short_description: 'WETH per MANA',
        long_description: 'WETH <> MANA rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '738d72ed-9424-48ad-bef6-241a9ce63543',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> MATIC',
        short_description: 'WETH per MATIC',
        long_description: 'WETH <> MATIC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '3fae3a1d-f728-46a1-b942-202b804cbd94',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> MBC',
        short_description: 'WETH per MBC',
        long_description: 'WETH <> MBC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '7d796c23-cdd0-4b75-aeb1-8698d4419190',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> MCX',
        short_description: 'WETH per MCX',
        long_description: 'WETH <> MCX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6c205acb-6320-4217-8870-69bc342d8c46',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> MET',
        short_description: 'WETH per MET',
        long_description: 'WETH <> MET rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f06dcebc-cfd3-452a-9c11-63e16521bca7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> MKR',
        short_description: 'WETH per MKR',
        long_description: 'WETH <> MKR rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1a16bfdd-de01-4026-a693-907e510a2d13',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> MLN',
        short_description: 'WETH per MLN',
        long_description: 'WETH <> MLN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '7479282c-7084-4bb5-ba67-5d0d1ed0425a',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> NEXO',
        short_description: 'WETH per NEXO',
        long_description: 'WETH <> NEXO rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '679e2272-3df1-42f0-9164-a0577d368cd7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> NMR',
        short_description: 'WETH per NMR',
        long_description: 'WETH <> NMR rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '33c84560-6734-4fc3-8c46-2d396de53f16',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> OCEAN',
        short_description: 'WETH per OCEAN',
        long_description: 'WETH <> OCEAN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9812b3e3-f3a1-4e68-a5ab-a1c17cf01c73',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> OXT',
        short_description: 'WETH per OXT',
        long_description: 'WETH <> OXT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1c3825ac-c6a8-4108-991f-bb9e902b6d13',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> PAN',
        short_description: 'WETH per PAN',
        long_description: 'WETH <> PAN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2177dfd6-f650-492c-bab9-be6f9be0baae',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> PAX',
        short_description: 'WETH per PAX',
        long_description: 'WETH <> PAX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '72da25cb-ee7f-4bcd-8442-3d31a1925fab',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> PAXG',
        short_description: 'WETH per PAXG',
        long_description: 'WETH <> PAXG rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '85f9c60b-04dd-489e-83ae-aa9891e421b2',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> PNK',
        short_description: 'WETH per PNK',
        long_description: 'WETH <> PNK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f3b66a04-bb58-4790-9d18-fd3bba951b9e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> QNT',
        short_description: 'WETH per QNT',
        long_description: 'WETH <> QNT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5f16de56-1185-4636-8fb6-16cf3e46cbc6',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> QSP',
        short_description: 'WETH per QSP',
        long_description: 'WETH <> QSP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a68eb772-721c-4dd2-93bd-775286f6c1cd',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> RCN',
        short_description: 'WETH per RCN',
        long_description: 'WETH <> RCN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'fb0507e8-528c-471e-84ba-d7ef671dbfd8',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> RDN',
        short_description: 'WETH per RDN',
        long_description: 'WETH <> RDN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9087773c-0673-42a4-b3d1-391782f406d3',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> REN',
        short_description: 'WETH per REN',
        long_description: 'WETH <> REN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '8eb3e90c-ea8e-4ec6-9a56-7fec8d017155',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> REP',
        short_description: 'WETH per REP',
        long_description: 'WETH <> REP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b1834015-940b-4a0f-9025-4bafd016e623',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> REPV2',
        short_description: 'WETH per REPV2',
        long_description: 'WETH <> REPV2 rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '457c9567-1041-4548-9fee-d6e90aa210d4',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> RING',
        short_description: 'WETH per RING',
        long_description: 'WETH <> RING rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1437c9f1-9791-41d2-872f-cab7e4616f26',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> RLC',
        short_description: 'WETH per RLC',
        long_description: 'WETH <> RLC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5e75005e-7b07-41e6-afd2-2b75c05c2c84',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> RPL',
        short_description: 'WETH per RPL',
        long_description: 'WETH <> RPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1e9938a3-2688-4eb5-8f26-fd365a3038c7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> SAI',
        short_description: 'WETH per SAI',
        long_description: 'WETH <> SAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'eb27d90c-0c60-4b8a-b7b1-00acf7fb47a4',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> SALT',
        short_description: 'WETH per SALT',
        long_description: 'WETH <> SALT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9ed5d7e6-6c46-4936-a3e8-37cea5eef260',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> SAN',
        short_description: 'WETH per SAN',
        long_description: 'WETH <> SAN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'eba2a44d-77d0-4400-92d3-727106dff491',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> SHUF',
        short_description: 'WETH per SHUF',
        long_description: 'WETH <> SHUF rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '20346d37-cdd5-4b3e-99c6-8e09e38a0e99',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> SNT',
        short_description: 'WETH per SNT',
        long_description: 'WETH <> SNT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9612ff23-2556-48f8-82da-bb85a28ef665',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> SNX',
        short_description: 'WETH per SNX',
        long_description: 'WETH <> SNX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2192f529-8049-455e-86e4-c2adacce4a1c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> SOCKS',
        short_description: 'WETH per SOCKS',
        long_description: 'WETH <> SOCKS rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'ab3c3d64-da95-4f63-9747-92158681c91b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> SPANK',
        short_description: 'WETH per SPANK',
        long_description: 'WETH <> SPANK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f687be41-fa52-4bff-bd13-b4b7f56fb338',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> STAKE',
        short_description: 'WETH per STAKE',
        long_description: 'WETH <> STAKE rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1ca15c6f-a159-4d8d-9986-38c7ad6da464',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> STORJ',
        short_description: 'WETH per STORJ',
        long_description: 'WETH <> STORJ rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5297aff1-354b-4f65-aab5-5141b8d95c99',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> SXP',
        short_description: 'WETH per SXP',
        long_description: 'WETH <> SXP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b08b45f9-9a9e-4a28-a4d7-f806d8405a08',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> TKN',
        short_description: 'WETH per TKN',
        long_description: 'WETH <> TKN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4f80b787-238a-4db1-b527-3dab06646a79',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> TRB',
        short_description: 'WETH per TRB',
        long_description: 'WETH <> TRB rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a95a1402-f0c9-435b-8e96-e3a83167337d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> TRST',
        short_description: 'WETH per TRST',
        long_description: 'WETH <> TRST rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f2f44612-97f7-42ab-ab55-16637aff4c7c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> TRYB',
        short_description: 'WETH per TRYB',
        long_description: 'WETH <> TRYB rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6b06966c-1be7-4de5-9f4d-c6338b98c970',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> TUSD',
        short_description: 'WETH per TUSD',
        long_description: 'WETH <> TUSD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a506542c-ca90-4009-be81-b06832095345',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> UBT',
        short_description: 'WETH per UBT',
        long_description: 'WETH <> UBT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'cffb2664-f7ae-4f98-b32a-8cb440b5221d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> UMA',
        short_description: 'WETH per UMA',
        long_description: 'WETH <> UMA rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6577a153-29df-4ca8-bed6-db2aafb1c61e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> USDC',
        short_description: 'WETH per USDC',
        long_description: 'WETH <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f38cb0ca-7903-408e-96ff-b4a4f9cad01f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> USDT',
        short_description: 'WETH per USDT',
        long_description: 'WETH <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'bb5e08c7-4537-44ef-9cb6-2ad3a04a114f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> VERI',
        short_description: 'WETH per VERI',
        long_description: 'WETH <> VERI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '051e7392-4a80-4e9a-8933-65c879717b91',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> WBTC',
        short_description: 'WETH per WBTC',
        long_description: 'WETH <> WBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '611b5dc9-50a1-4cbb-baa8-54542b49ac2a',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> WCK',
        short_description: 'WETH per WCK',
        long_description: 'WETH <> WCK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e436a855-7e5c-4888-9595-fef669df7c1c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> XCHF',
        short_description: 'WETH per XCHF',
        long_description: 'WETH <> XCHF rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'dfedd205-7326-470a-935a-e704d01afb1f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> XIO',
        short_description: 'WETH per XIO',
        long_description: 'WETH <> XIO rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'aa93e8f5-a73f-488a-b087-ca84b7e4b9d2',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> ZRX',
        short_description: 'WETH per ZRX',
        long_description: 'WETH <> ZRX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '931948e7-7c02-4496-9869-948841d2856c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> ADAI',
        short_description: 'WETH per ADAI',
        long_description: 'WETH <> ADAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e36cea3a-cd81-44bf-aacd-a0b68810ec41',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> CDAI',
        short_description: 'WETH per CDAI',
        long_description: 'WETH <> CDAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '94998060-21ad-46f6-8bfa-6f2f087b505b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> CSAI',
        short_description: 'WETH per CSAI',
        long_description: 'WETH <> CSAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4c28f193-6067-4475-ba7f-a70021604cbc',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> CUSDC',
        short_description: 'WETH per CUSDC',
        long_description: 'WETH <> CUSDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '7cd34e47-4a1a-4db1-9ca2-1eadcbd7baca',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> ISAI',
        short_description: 'WETH per ISAI',
        long_description: 'WETH <> ISAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '46a90fe0-492d-4643-b514-eafc5c175a54',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> MUSD',
        short_description: 'WETH per MUSD',
        long_description: 'WETH <> MUSD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5c7e2082-0e80-496d-88a8-5aa6d31656dc',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> RENBCH',
        short_description: 'WETH per RENBCH',
        long_description: 'WETH <> RENBCH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6ca8f27b-64d1-41d1-8d87-898a3a7b30c1',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> RENBTC',
        short_description: 'WETH per RENBTC',
        long_description: 'WETH <> RENBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'cd814dea-98f6-4619-a759-837a4430bdfc',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> RENZEC',
        short_description: 'WETH per RENZEC',
        long_description: 'WETH <> RENZEC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2311ad12-a3bf-4344-9ae0-5145ad6b5b55',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> SETH',
        short_description: 'WETH per SETH',
        long_description: 'WETH <> SETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a6523cfc-1c5f-4e64-b2a8-14ef58416eda',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> SUSD',
        short_description: 'WETH per SUSD',
        long_description: 'WETH <> SUSD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'ff063b24-9dfe-473f-86f8-6c118bdf36cf',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WETH <> SXAU',
        short_description: 'WETH per SXAU',
        long_description: 'WETH <> SXAU rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '8dad32ef-f622-4e0a-aed1-8951dfd382b9',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ADAI <> DAI',
        short_description: 'ADAI per DAI',
        long_description: 'ADAI <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '433a289d-53bc-45f0-967b-6ea72e25efe7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ADAI <> WETH',
        short_description: 'ADAI per WETH',
        long_description: 'ADAI <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '788c11f1-17ac-438b-bf8f-11beb5fd14b8',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMN <> WETH',
        short_description: 'AMN per WETH',
        long_description: 'AMN <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4dddacc6-71b2-439c-8271-4153b6067266',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> ANT',
        short_description: 'AMPL per ANT',
        long_description: 'AMPL <> ANT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'bac0587c-220a-4e5f-95b4-a296e593179d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> BAT',
        short_description: 'AMPL per BAT',
        long_description: 'AMPL <> BAT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'da39ddbc-3b7f-4bf2-b664-46d363f81e8f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> BNT',
        short_description: 'AMPL per BNT',
        long_description: 'AMPL <> BNT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f498e905-775d-429a-bbca-5ac3d17b78e6',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> COMP',
        short_description: 'AMPL per COMP',
        long_description: 'AMPL <> COMP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4b315082-8bad-4bdb-b33c-526b781c9dae',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> DAI',
        short_description: 'AMPL per DAI',
        long_description: 'AMPL <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b97469be-3b26-4086-9fb8-5f9db8cc345a',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> DATA',
        short_description: 'AMPL per DATA',
        long_description: 'AMPL <> DATA rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e614ae68-e746-4655-ace4-faf39c6e3d4d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> ENJ',
        short_description: 'AMPL per ENJ',
        long_description: 'AMPL <> ENJ rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'ab075d3c-46d0-464c-9ca0-5c71533babaa',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> KNC',
        short_description: 'AMPL per KNC',
        long_description: 'AMPL <> KNC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '7cea6a6e-fe29-4c9d-a7a3-358e7244be99',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> LEND',
        short_description: 'AMPL per LEND',
        long_description: 'AMPL <> LEND rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '3fe714fe-6c31-43b8-a9c4-81affd2be9eb',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> LINK',
        short_description: 'AMPL per LINK',
        long_description: 'AMPL <> LINK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b94fe421-4f72-4a4d-ac58-eeb0b11773b9',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> LPT',
        short_description: 'AMPL per LPT',
        long_description: 'AMPL <> LPT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '68a6eea7-dc65-43d2-85d6-6fdb612606b7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> MKR',
        short_description: 'AMPL per MKR',
        long_description: 'AMPL <> MKR rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2f469633-cf46-4338-9a0b-79409cc3ad1b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> PAXG',
        short_description: 'AMPL per PAXG',
        long_description: 'AMPL <> PAXG rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'dcbb12f4-8a76-439e-8e56-ab8322c062fe',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> QNT',
        short_description: 'AMPL per QNT',
        long_description: 'AMPL <> QNT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'bd570ba7-c9fe-4310-9088-97dffc4dadfa',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> REN',
        short_description: 'AMPL per REN',
        long_description: 'AMPL <> REN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5bdcdcf1-c4c6-4796-a965-dc3f7e129602',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> REP',
        short_description: 'AMPL per REP',
        long_description: 'AMPL <> REP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '57fd31e3-2011-437e-a207-096a26c94bed',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> SNX',
        short_description: 'AMPL per SNX',
        long_description: 'AMPL <> SNX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2ee801d6-2ac1-4438-ac8b-5fdcf8af9aa5',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> TRB',
        short_description: 'AMPL per TRB',
        long_description: 'AMPL <> TRB rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '08d988b8-648f-46e0-a354-c02618b72fad',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> TRYB',
        short_description: 'AMPL per TRYB',
        long_description: 'AMPL <> TRYB rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'ba18ebdb-5dd5-4581-9d34-bfe1399b88ed',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> TUSD',
        short_description: 'AMPL per TUSD',
        long_description: 'AMPL <> TUSD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '472ce777-55e3-49c1-85c7-82716f214a07',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> UMA',
        short_description: 'AMPL per UMA',
        long_description: 'AMPL <> UMA rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'ea4de621-6724-4a50-857c-beab7f2e108e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> USDC',
        short_description: 'AMPL per USDC',
        long_description: 'AMPL <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd562f13f-4cee-4848-a1d7-a83b24c409b7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> USDT',
        short_description: 'AMPL per USDT',
        long_description: 'AMPL <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '229c750b-d6d3-4e7d-b491-c4554e07fcbe',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> WBTC',
        short_description: 'AMPL per WBTC',
        long_description: 'AMPL <> WBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '29617e98-1c61-4c1d-a593-848e1395c4bb',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> WETH',
        short_description: 'AMPL per WETH',
        long_description: 'AMPL <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '72b2c297-c5b0-4049-96fc-297f77046661',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> ZRX',
        short_description: 'AMPL per ZRX',
        long_description: 'AMPL <> ZRX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd5d7ea93-1b6a-4eee-aca5-16e1c5a70bd7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AMPL <> RENBTC',
        short_description: 'AMPL per RENBTC',
        long_description: 'AMPL <> RENBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2d88a834-a2f8-476b-9b00-e70928ca9ee3',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ANJ <> ANT',
        short_description: 'ANJ per ANT',
        long_description: 'ANJ <> ANT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e182a561-580b-4cfb-8b5e-2a9dd81fbe2a',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ANJ <> WETH',
        short_description: 'ANJ per WETH',
        long_description: 'ANJ <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1ef9eee5-f424-4fc5-9cc5-72f9b9041a7e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ANT <> AMPL',
        short_description: 'ANT per AMPL',
        long_description: 'ANT <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b5934a9d-9b5f-4b9f-b5ed-ce737bb691ce',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ANT <> ANJ',
        short_description: 'ANT per ANJ',
        long_description: 'ANT <> ANJ rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '030f3cb2-a009-41da-a3df-4a86a5da3a4b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ANT <> DAI',
        short_description: 'ANT per DAI',
        long_description: 'ANT <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'ab592060-7932-4924-83b9-b124b3b44343',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ANT <> USDC',
        short_description: 'ANT per USDC',
        long_description: 'ANT <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5707c4be-b37a-491e-b0e1-d41798b4d478',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ANT <> WETH',
        short_description: 'ANT per WETH',
        long_description: 'ANT <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2fa54c9a-ad15-4ef3-ad57-7621c066809d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'AST <> WETH',
        short_description: 'AST per WETH',
        long_description: 'AST <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '356f2cb6-c1de-453c-bc9a-ffe591906f59',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BAL <> DAI',
        short_description: 'BAL per DAI',
        long_description: 'BAL <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd22a0941-f8a9-463d-a8ad-3464926fc3a6',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BAL <> GST2',
        short_description: 'BAL per GST2',
        long_description: 'BAL <> GST2 rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2e2fcfcf-eb51-44ad-be03-dfd8080bebab',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BAL <> SNX',
        short_description: 'BAL per SNX',
        long_description: 'BAL <> SNX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b00cf0bd-9be4-4367-bdca-ba77f8a20678',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BAL <> USDC',
        short_description: 'BAL per USDC',
        long_description: 'BAL <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '25ca0a6d-2a37-49a0-a5eb-96a0de44b34f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BAL <> USDT',
        short_description: 'BAL per USDT',
        long_description: 'BAL <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '80b537be-9d65-4061-98ff-b6762241b6ee',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BAL <> WETH',
        short_description: 'BAL per WETH',
        long_description: 'BAL <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '3785eb9a-e724-4b97-b68c-73c3e6a01084',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BAND <> BAT',
        short_description: 'BAND per BAT',
        long_description: 'BAND <> BAT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4ce15638-1704-413a-b13c-0c3f1cfe1397',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BAND <> USDC',
        short_description: 'BAND per USDC',
        long_description: 'BAND <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '319c2636-57b8-48c6-8896-2735ec27ade8',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BAND <> WETH',
        short_description: 'BAND per WETH',
        long_description: 'BAND <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '32ec9109-06f2-4837-bfba-db81b4e90c52',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BAT <> AMPL',
        short_description: 'BAT per AMPL',
        long_description: 'BAT <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a78671e3-b40c-4a53-8029-9cb4e407c055',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BAT <> BAND',
        short_description: 'BAT per BAND',
        long_description: 'BAT <> BAND rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0e6c3282-ae8f-4fd0-acbb-ca3f9aec743e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BAT <> COMP',
        short_description: 'BAT per COMP',
        long_description: 'BAT <> COMP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1d1d9263-79c4-4848-a18f-54aea0a42239',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BAT <> DAI',
        short_description: 'BAT per DAI',
        long_description: 'BAT <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9f51a99a-9128-4792-8f74-eca62b187559',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BAT <> LINK',
        short_description: 'BAT per LINK',
        long_description: 'BAT <> LINK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1599f2ad-4989-4a4b-a388-d29f225282c0',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BAT <> OCEAN',
        short_description: 'BAT per OCEAN',
        long_description: 'BAT <> OCEAN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '778e97f1-98b0-46c2-a0e1-4cfae1a41bef',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BAT <> USDC',
        short_description: 'BAT per USDC',
        long_description: 'BAT <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f070e8ff-4126-4437-8a3b-de6105291437',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BAT <> USDT',
        short_description: 'BAT per USDT',
        long_description: 'BAT <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '8f1b018a-53a3-4515-a68b-21dd6030295a',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BAT <> WETH',
        short_description: 'BAT per WETH',
        long_description: 'BAT <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6adcf631-db0f-4ad0-a730-c26d88bae4d6',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BLT <> WETH',
        short_description: 'BLT per WETH',
        long_description: 'BLT <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '8135d2e7-03af-419a-8f63-05fde1a2b469',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BNT <> AMPL',
        short_description: 'BNT per AMPL',
        long_description: 'BNT <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5cd9b0cc-9767-415d-ba19-915f9904f70e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BNT <> DAI',
        short_description: 'BNT per DAI',
        long_description: 'BNT <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2ef65de2-482d-480d-88c6-eaba949d9e75',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BNT <> USDC',
        short_description: 'BNT per USDC',
        long_description: 'BNT <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '34cf1e6d-18c9-4d1d-ac87-a5579f2181a8',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BNT <> USDT',
        short_description: 'BNT per USDT',
        long_description: 'BNT <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'da9cd909-4b03-49c4-87e4-858933a99695',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BNT <> WETH',
        short_description: 'BNT per WETH',
        long_description: 'BNT <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '36c75eed-f3db-49a5-82aa-efa33a2e72fd',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BTC++ <> WETH',
        short_description: 'BTC++ per WETH',
        long_description: 'BTC++ <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '66f517b3-3086-4ca0-aef1-57b04f6ea306',
        created_at: new Date(),
        updated_at: new Date(),
        name: '0XBTC <> DAI',
        short_description: '0XBTC per DAI',
        long_description: '0XBTC <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '60a23724-f9b3-4ca7-9c40-92df82ddce38',
        created_at: new Date(),
        updated_at: new Date(),
        name: '0XBTC <> LINK',
        short_description: '0XBTC per LINK',
        long_description: '0XBTC <> LINK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '62dfcef2-6764-4aa5-846e-45f8f04f7af2',
        created_at: new Date(),
        updated_at: new Date(),
        name: '0XBTC <> MKR',
        short_description: '0XBTC per MKR',
        long_description: '0XBTC <> MKR rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6a6828da-d29a-41f9-859f-f2763f352202',
        created_at: new Date(),
        updated_at: new Date(),
        name: '0XBTC <> SHUF',
        short_description: '0XBTC per SHUF',
        long_description: '0XBTC <> SHUF rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1f6d64ba-ea4c-4882-b231-69d1399a764b',
        created_at: new Date(),
        updated_at: new Date(),
        name: '0XBTC <> USDC',
        short_description: '0XBTC per USDC',
        long_description: '0XBTC <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b25ff59e-deef-4ef6-b653-e76f484ec51e',
        created_at: new Date(),
        updated_at: new Date(),
        name: '0XBTC <> USDT',
        short_description: '0XBTC per USDT',
        long_description: '0XBTC <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f5bc1135-6a25-45e6-ad93-6c50d1f5d20d',
        created_at: new Date(),
        updated_at: new Date(),
        name: '0XBTC <> WETH',
        short_description: '0XBTC per WETH',
        long_description: '0XBTC <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a8ee9c7a-ba8e-4c49-8344-83d9bbb32562',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BZRX <> KNC',
        short_description: 'BZRX per KNC',
        long_description: 'BZRX <> KNC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '063e611c-b65a-4dc2-8a79-bdf29161daac',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BZRX <> SNX',
        short_description: 'BZRX per SNX',
        long_description: 'BZRX <> SNX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c790f37f-a87a-4a7c-a4ca-a5185b77ac75',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BZRX <> USDT',
        short_description: 'BZRX per USDT',
        long_description: 'BZRX <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9d28301d-7248-43ff-ba12-5907adc7a1a2',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BZRX <> WETH',
        short_description: 'BZRX per WETH',
        long_description: 'BZRX <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'bcf33716-6c80-470d-8cb1-e87547c4e93e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'BZRX <> ZRX',
        short_description: 'BZRX per ZRX',
        long_description: 'BZRX <> ZRX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '25f15f37-8d07-43f3-ab10-3abf7c695514',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'CDAI <> COMP',
        short_description: 'CDAI per COMP',
        long_description: 'CDAI <> COMP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b827fc11-6fd4-4198-84f9-09bb5bd84b9f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'CDAI <> DAI',
        short_description: 'CDAI per DAI',
        long_description: 'CDAI <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '539df80a-048a-417e-ab13-bc95cf5e0aec',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'CDAI <> WETH',
        short_description: 'CDAI per WETH',
        long_description: 'CDAI <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd4efdbe4-1a6a-442a-8932-612870dc5250',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'CDAI <> CUSDC',
        short_description: 'CDAI per CUSDC',
        long_description: 'CDAI <> CUSDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4264f386-f208-4fdb-b399-30e47e5a794d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'CEL <> USDC',
        short_description: 'CEL per USDC',
        long_description: 'CEL <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b4877e31-6796-4bb9-ae0a-43570b7c6af8',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'CEL <> WETH',
        short_description: 'CEL per WETH',
        long_description: 'CEL <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '06fd138c-3c75-4886-a6e9-793ca01bd4e3',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'CELR <> WETH',
        short_description: 'CELR per WETH',
        long_description: 'CELR <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '311c5766-4e45-4bde-a4e2-291bb25f068d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'CHAI <> DAI',
        short_description: 'CHAI per DAI',
        long_description: 'CHAI <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'be5310e0-15a7-469b-83dd-8004e0602228',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'CHAI <> WETH',
        short_description: 'CHAI per WETH',
        long_description: 'CHAI <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '737e6481-4a09-47a5-be7b-132f841e4c7c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'COMP <> AMPL',
        short_description: 'COMP per AMPL',
        long_description: 'COMP <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '3010f094-655b-4b50-b3a6-c087c29b51f9',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'COMP <> BAT',
        short_description: 'COMP per BAT',
        long_description: 'COMP <> BAT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f05de63d-3028-439f-8642-ec7e8c01e847',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'COMP <> DAI',
        short_description: 'COMP per DAI',
        long_description: 'COMP <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'fe463b4f-03ee-499c-bf74-47be5c4adb90',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'COMP <> FXC',
        short_description: 'COMP per FXC',
        long_description: 'COMP <> FXC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5d0b0150-32fe-4697-b443-f1001cec221a',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'COMP <> GST2',
        short_description: 'COMP per GST2',
        long_description: 'COMP <> GST2 rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '488ceeb3-d295-4b6d-aaa1-ae5a1f24e2cb',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'COMP <> LEND',
        short_description: 'COMP per LEND',
        long_description: 'COMP <> LEND rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b572cb9d-ef64-4f6e-924d-d71cdb939961',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'COMP <> LINK',
        short_description: 'COMP per LINK',
        long_description: 'COMP <> LINK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1647ca56-18e1-48dc-a3c0-ae5ac6949a04',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'COMP <> MKR',
        short_description: 'COMP per MKR',
        long_description: 'COMP <> MKR rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'df3af3c0-2bd9-4157-90f2-6dd84e38baf1',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'COMP <> SNX',
        short_description: 'COMP per SNX',
        long_description: 'COMP <> SNX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5e9c3804-d4bc-4b77-875c-39ba0739ebbf',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'COMP <> USDC',
        short_description: 'COMP per USDC',
        long_description: 'COMP <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '868d9dfb-cb8e-41c8-8b9a-1a869cccfb52',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'COMP <> USDT',
        short_description: 'COMP per USDT',
        long_description: 'COMP <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '08b26012-51a6-4a0a-8d4b-f5e7aa07f847',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'COMP <> WETH',
        short_description: 'COMP per WETH',
        long_description: 'COMP <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '27fbcd36-51b7-4c36-aded-10feb8fd3361',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'COMP <> CDAI',
        short_description: 'COMP per CDAI',
        long_description: 'COMP <> CDAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'fe12a0a1-dd8f-4432-8830-2749014f256f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'CSAI <> ENJ',
        short_description: 'CSAI per ENJ',
        long_description: 'CSAI <> ENJ rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '464f2fa6-0ee5-4437-8e06-aca603c68f9d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'CSAI <> WETH',
        short_description: 'CSAI per WETH',
        long_description: 'CSAI <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0c5689b9-f420-4340-8833-6074d47d6054',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'CUSDC <> USDC',
        short_description: 'CUSDC per USDC',
        long_description: 'CUSDC <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b6691f48-0307-43e9-901e-e78255202f7e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'CUSDC <> WETH',
        short_description: 'CUSDC per WETH',
        long_description: 'CUSDC <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '272e9ff4-318b-4984-bf80-a720cee83a56',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'CUSDC <> CDAI',
        short_description: 'CUSDC per CDAI',
        long_description: 'CUSDC <> CDAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b00ec08a-3821-4953-a447-23cc84bdbdd9',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> 0XBTC',
        short_description: 'DAI per 0XBTC',
        long_description: 'DAI <> 0XBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '001a28f2-9501-4397-b267-b4f43672e4fe',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> AMPL',
        short_description: 'DAI per AMPL',
        long_description: 'DAI <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '3cecaa67-4e4c-48de-a493-93eb3befb729',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> ANT',
        short_description: 'DAI per ANT',
        long_description: 'DAI <> ANT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e29fdd88-4d9c-4a1a-b3e5-e6ade5daa85a',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> BAL',
        short_description: 'DAI per BAL',
        long_description: 'DAI <> BAL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '441e6219-eb25-4a95-a695-1e225657bb9f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> BAT',
        short_description: 'DAI per BAT',
        long_description: 'DAI <> BAT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '052549b8-5fda-4327-bafe-c7dc1e5dcf17',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> BNT',
        short_description: 'DAI per BNT',
        long_description: 'DAI <> BNT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '565ffad1-4f1b-4f44-a3c8-fbfe93493847',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> CHAI',
        short_description: 'DAI per CHAI',
        long_description: 'DAI <> CHAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'ca819c10-4457-4382-bed8-d3a4ed145dae',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> COMP',
        short_description: 'DAI per COMP',
        long_description: 'DAI <> COMP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1b33bcd2-91d3-4894-a673-09648e92706f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> DONUT',
        short_description: 'DAI per DONUT',
        long_description: 'DAI <> DONUT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4cac2e21-ab5e-4a06-baad-ca0edec180fe',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> EBASE',
        short_description: 'DAI per EBASE',
        long_description: 'DAI <> EBASE rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '3029b960-9895-45d4-96ca-de55c66bfe41',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> ENJ',
        short_description: 'DAI per ENJ',
        long_description: 'DAI <> ENJ rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '798aaab9-e949-42d0-9c4a-f8828337e3b1',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> FUN',
        short_description: 'DAI per FUN',
        long_description: 'DAI <> FUN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'bb00d0d6-1552-4a1f-8ccf-85dd43516a4b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> GST2',
        short_description: 'DAI per GST2',
        long_description: 'DAI <> GST2 rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd4d7b43a-c091-4df1-aa5d-2f5c92e7e5d3',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> KNC',
        short_description: 'DAI per KNC',
        long_description: 'DAI <> KNC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f892b9ed-b15b-47c0-882f-84427418ceb5',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> LEND',
        short_description: 'DAI per LEND',
        long_description: 'DAI <> LEND rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '3f6b66df-0015-40bb-b802-1e90fe5e6742',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> LINK',
        short_description: 'DAI per LINK',
        long_description: 'DAI <> LINK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a54a1a06-4191-4aed-acad-1cc8676a0b72',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> LPT',
        short_description: 'DAI per LPT',
        long_description: 'DAI <> LPT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a52725b0-7504-4851-aa43-e0c4fc41cf63',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> MANA',
        short_description: 'DAI per MANA',
        long_description: 'DAI <> MANA rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'cae5f900-d692-4c6a-8b3a-3677b9d01d41',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> MKR',
        short_description: 'DAI per MKR',
        long_description: 'DAI <> MKR rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c63c1089-c0c1-49f6-90c9-010586e36f46',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> NMR',
        short_description: 'DAI per NMR',
        long_description: 'DAI <> NMR rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6300775e-0cd7-46df-8452-5579689ecbfa',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> PAXG',
        short_description: 'DAI per PAXG',
        long_description: 'DAI <> PAXG rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4a1bf30f-3e3c-4cee-b6bc-468ab596f10a',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> QCH',
        short_description: 'DAI per QCH',
        long_description: 'DAI <> QCH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2498c126-64d5-47e0-91b5-0488f551f5b2',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> RDN',
        short_description: 'DAI per RDN',
        long_description: 'DAI <> RDN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '50f3c88c-d03e-47ce-aa4b-fe4d95a553d7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> REN',
        short_description: 'DAI per REN',
        long_description: 'DAI <> REN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c86d6d43-6879-4a56-ad7a-b9667e4f143b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> REPV2',
        short_description: 'DAI per REPV2',
        long_description: 'DAI <> REPV2 rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'fb0fecdb-e650-40de-ab0e-318766765690',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> RING',
        short_description: 'DAI per RING',
        long_description: 'DAI <> RING rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b37d9813-76c6-4537-9a9d-89d69da59e19',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> RLC',
        short_description: 'DAI per RLC',
        long_description: 'DAI <> RLC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c314e655-ea8c-4928-86fa-79ff9fc8186f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> RPL',
        short_description: 'DAI per RPL',
        long_description: 'DAI <> RPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'ba648236-49d7-460e-9d06-03a8c0f2f2c8',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> SNT',
        short_description: 'DAI per SNT',
        long_description: 'DAI <> SNT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '525f4fd5-ed30-48bf-8ee6-041a90deb069',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> SNX',
        short_description: 'DAI per SNX',
        long_description: 'DAI <> SNX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '202bb2dc-bf38-4069-845f-fc86722f39ed',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> SOCKS',
        short_description: 'DAI per SOCKS',
        long_description: 'DAI <> SOCKS rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'af050eeb-a2c6-4e57-b9e2-9e38708adf3e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> SPANK',
        short_description: 'DAI per SPANK',
        long_description: 'DAI <> SPANK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e0470954-729b-4fb1-a97c-8b61dca0bdb7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> STAKE',
        short_description: 'DAI per STAKE',
        long_description: 'DAI <> STAKE rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '758bbc01-fbc8-4449-931d-1ba1793cf44e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> STORJ',
        short_description: 'DAI per STORJ',
        long_description: 'DAI <> STORJ rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e8572030-db02-4a8d-9386-84816a45a7f8',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> SXP',
        short_description: 'DAI per SXP',
        long_description: 'DAI <> SXP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '8fa2d40f-9f2a-41af-b98b-dae45d20af90',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> TRB',
        short_description: 'DAI per TRB',
        long_description: 'DAI <> TRB rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '3ffc09bc-afa4-4c99-a480-e0eed13db885',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> UBT',
        short_description: 'DAI per UBT',
        long_description: 'DAI <> UBT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '65729448-9f0e-462b-b2ac-bb5b2129a8a4',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> USD++',
        short_description: 'DAI per USD++',
        long_description: 'DAI <> USD++ rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e763ceb3-cef1-4da9-af2d-fbfeef64c72b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> USDC',
        short_description: 'DAI per USDC',
        long_description: 'DAI <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '66ce76b8-04ea-4109-8591-8173dc5901ad',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> USDT',
        short_description: 'DAI per USDT',
        long_description: 'DAI <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0e750ccc-a292-429c-8640-7d89e6b1f05c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> WBTC',
        short_description: 'DAI per WBTC',
        long_description: 'DAI <> WBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '8aebdd64-1b94-448c-9519-0660ed1efc0b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> WCK',
        short_description: 'DAI per WCK',
        long_description: 'DAI <> WCK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '40d87c61-8e40-4b2d-973f-75de2ba01eaf',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> WETH',
        short_description: 'DAI per WETH',
        long_description: 'DAI <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '8124bc30-f2f3-4386-b9c8-cddf5bf5bd6e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> XIO',
        short_description: 'DAI per XIO',
        long_description: 'DAI <> XIO rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6c2dbe35-1533-41f5-be36-a6c0e6c26db4',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> ZRX',
        short_description: 'DAI per ZRX',
        long_description: 'DAI <> ZRX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'fd0047b2-ffce-4787-bbe0-3f4cd6489fa8',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> ADAI',
        short_description: 'DAI per ADAI',
        long_description: 'DAI <> ADAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a50fe1ee-6c49-43cb-82ef-02004c5141bf',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> CDAI',
        short_description: 'DAI per CDAI',
        long_description: 'DAI <> CDAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6e57f224-6ac6-4796-a7bf-4ee3e5197ce3',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> MUSD',
        short_description: 'DAI per MUSD',
        long_description: 'DAI <> MUSD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '30c4bc79-dfb4-4b50-a8b3-6127d3e6a0a9',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> RENBCH',
        short_description: 'DAI per RENBCH',
        long_description: 'DAI <> RENBCH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '3bec9a6a-996d-4247-897c-6b12659adcd5',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> RENBTC',
        short_description: 'DAI per RENBTC',
        long_description: 'DAI <> RENBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '775bcf64-fa38-4e2a-a80d-9e2de729ac33',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> RENZEC',
        short_description: 'DAI per RENZEC',
        long_description: 'DAI <> RENZEC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c2b9cc86-32fc-4e9c-9d52-04daa80fcac4',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DAI <> SUSD',
        short_description: 'DAI per SUSD',
        long_description: 'DAI <> SUSD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e5be4070-afc6-4a4f-8fc7-0356fc0708ad',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DATA <> AMPL',
        short_description: 'DATA per AMPL',
        long_description: 'DATA <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'ec0b024b-0fce-4184-be81-02ae2ee11a7a',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DATA <> USDC',
        short_description: 'DATA per USDC',
        long_description: 'DATA <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '097787fb-e18e-4d0e-a1f4-9572b7e39f8b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DATA <> WETH',
        short_description: 'DATA per WETH',
        long_description: 'DATA <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f8323555-dca3-4483-bf8e-837cbca4b6c4',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DGD <> USDC',
        short_description: 'DGD per USDC',
        long_description: 'DGD <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '8af74e79-ab7c-4d46-b722-7feafbd76dea',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DGD <> WETH',
        short_description: 'DGD per WETH',
        long_description: 'DGD <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '37ad8c04-061a-48af-b812-77adae431220',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DGX <> PAXG',
        short_description: 'DGX per PAXG',
        long_description: 'DGX <> PAXG rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '428d5dc4-12fd-470d-ac3c-4ed402d5e1af',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DGX <> USDC',
        short_description: 'DGX per USDC',
        long_description: 'DGX <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '643e59d8-9095-47d5-ac91-57765a47e9e0',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DGX <> WETH',
        short_description: 'DGX per WETH',
        long_description: 'DGX <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a3bb7b57-b156-45cb-8292-69cc5f294bac',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DIP <> WETH',
        short_description: 'DIP per WETH',
        long_description: 'DIP <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'bd1b02a2-3a58-4dea-a229-5f0325488b23',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DONUT <> DAI',
        short_description: 'DONUT per DAI',
        long_description: 'DONUT <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c67dd6c1-f736-4867-a67e-aa80131ed466',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'DONUT <> WETH',
        short_description: 'DONUT per WETH',
        long_description: 'DONUT <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f7a576de-381a-46c9-9839-46ea2fd09f46',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'EBASE <> DAI',
        short_description: 'EBASE per DAI',
        long_description: 'EBASE <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2a9661ec-bcbd-465e-bbc8-3920509e164c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'EBASE <> USDC',
        short_description: 'EBASE per USDC',
        long_description: 'EBASE <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '748744c0-fe38-4cff-92dc-3eeaf804515c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'EBASE <> USDT',
        short_description: 'EBASE per USDT',
        long_description: 'EBASE <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '081b4934-fad8-4342-8194-cd79664d3d6d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'EBASE <> WETH',
        short_description: 'EBASE per WETH',
        long_description: 'EBASE <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '8a0a5747-f7aa-4bdf-8335-de0a5e7a0d40',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ENJ <> AMPL',
        short_description: 'ENJ per AMPL',
        long_description: 'ENJ <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '29c9b0c5-ad89-4008-be8d-2cdce14a549d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ENJ <> DAI',
        short_description: 'ENJ per DAI',
        long_description: 'ENJ <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9d99e6b9-df30-4c4a-b818-b8a086dbce90',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ENJ <> FUN',
        short_description: 'ENJ per FUN',
        long_description: 'ENJ <> FUN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'cda703d2-7fb8-46bb-bdf1-4e30a92af04a',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ENJ <> WETH',
        short_description: 'ENJ per WETH',
        long_description: 'ENJ <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '7c54c6c6-cc49-4291-9b26-5060695fc559',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ENJ <> CSAI',
        short_description: 'ENJ per CSAI',
        long_description: 'ENJ <> CSAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'caee4a13-bf57-4ec0-bb2b-4b34edbdb057',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'FOAM <> WETH',
        short_description: 'FOAM per WETH',
        long_description: 'FOAM <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b8c09cda-20be-4653-9e21-ca1a857e1f04',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'FUN <> DAI',
        short_description: 'FUN per DAI',
        long_description: 'FUN <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f61e1927-00d8-4fa3-8510-f5446205ff76',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'FUN <> ENJ',
        short_description: 'FUN per ENJ',
        long_description: 'FUN <> ENJ rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '76830eb4-1e9a-4178-842f-55d432bc88e7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'FUN <> USDC',
        short_description: 'FUN per USDC',
        long_description: 'FUN <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '50c0dbac-8bda-47da-a143-d6896f3a3c58',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'FUN <> WETH',
        short_description: 'FUN per WETH',
        long_description: 'FUN <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd1010e79-1f84-4b4a-8dab-e11d2d3a9e68',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'FXC <> COMP',
        short_description: 'FXC per COMP',
        long_description: 'FXC <> COMP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'fe9b74f1-cc5a-4c9f-b6b9-a71e31865642',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'FXC <> USDC',
        short_description: 'FXC per USDC',
        long_description: 'FXC <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '705028d2-f85a-475b-9e82-2aac32540653',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'FXC <> WETH',
        short_description: 'FXC per WETH',
        long_description: 'FXC <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6b381c1e-8e85-47fb-8da2-0b30a15ac9e7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'GEN <> USDT',
        short_description: 'GEN per USDT',
        long_description: 'GEN <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5745de38-c898-423b-8f6c-a3293c8a5ee4',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'GEN <> WETH',
        short_description: 'GEN per WETH',
        long_description: 'GEN <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b1b166bd-398e-461a-b208-a41aadc8e710',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'GNO <> WETH',
        short_description: 'GNO per WETH',
        long_description: 'GNO <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6cccdbf4-4be2-4c8c-a4c8-5ad864f4593c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'GRID <> WETH',
        short_description: 'GRID per WETH',
        long_description: 'GRID <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a461168a-a6f0-45df-adeb-6a642d279827',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'GST2 <> BAL',
        short_description: 'GST2 per BAL',
        long_description: 'GST2 <> BAL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4bb9532d-16d2-494f-93e2-575b141539c3',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'GST2 <> COMP',
        short_description: 'GST2 per COMP',
        long_description: 'GST2 <> COMP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e4bd0ae3-ee72-4ee3-a617-d8c70d61b669',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'GST2 <> DAI',
        short_description: 'GST2 per DAI',
        long_description: 'GST2 <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f3d9bc89-82c3-42cf-9f39-38c2652ff6d9',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'GST2 <> LEND',
        short_description: 'GST2 per LEND',
        long_description: 'GST2 <> LEND rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd3d8d2db-335a-48b5-bd73-cd3db75556de',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'GST2 <> WETH',
        short_description: 'GST2 per WETH',
        long_description: 'GST2 <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5dcca2b9-6ad1-4ca4-bdff-4f60d5c3cd20',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'HOT <> WETH',
        short_description: 'HOT per WETH',
        long_description: 'HOT <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4a0c8795-02d6-4bfd-b6d0-a66064af0d28',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'IOTX <> WETH',
        short_description: 'IOTX per WETH',
        long_description: 'IOTX <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '8c7e1768-011d-4bd0-b9fd-3afadbfc7c7b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ISAI <> WETH',
        short_description: 'ISAI per WETH',
        long_description: 'ISAI <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2ca0b81e-f41f-4c68-b4f4-2fa0ee4ee582',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'KEY <> WETH',
        short_description: 'KEY per WETH',
        long_description: 'KEY <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'bed1dfa7-7e65-42b3-a623-f5201b1ea02e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'KNC <> AMPL',
        short_description: 'KNC per AMPL',
        long_description: 'KNC <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c16bddfa-ce95-4493-b25c-0311e90a50d0',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'KNC <> BZRX',
        short_description: 'KNC per BZRX',
        long_description: 'KNC <> BZRX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'fccc95e2-969c-4318-b37d-becb06069d46',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'KNC <> DAI',
        short_description: 'KNC per DAI',
        long_description: 'KNC <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd47a2518-0290-48c3-a27a-721c20e2cab7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'KNC <> MKR',
        short_description: 'KNC per MKR',
        long_description: 'KNC <> MKR rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'cca6d94a-d942-4a2b-bda9-50560400e9c1',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'KNC <> MLN',
        short_description: 'KNC per MLN',
        long_description: 'KNC <> MLN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '34d748e1-6a3f-4e9f-9d56-55a989dfad69',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'KNC <> RLC',
        short_description: 'KNC per RLC',
        long_description: 'KNC <> RLC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '74f1364a-d0dc-42b0-b293-cc0fb33c0c50',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'KNC <> SNX',
        short_description: 'KNC per SNX',
        long_description: 'KNC <> SNX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b03df693-76c5-4b43-94a3-da17c2afd408',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'KNC <> USDC',
        short_description: 'KNC per USDC',
        long_description: 'KNC <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '938b27b1-24bc-4a58-96cf-9e2cc1289c54',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'KNC <> USDT',
        short_description: 'KNC per USDT',
        long_description: 'KNC <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e155fb9c-719d-4d20-896c-b0d8693da7a5',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'KNC <> WETH',
        short_description: 'KNC per WETH',
        long_description: 'KNC <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '19f01efe-6877-456a-88a5-83987f88338b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'KNC <> ZRX',
        short_description: 'KNC per ZRX',
        long_description: 'KNC <> ZRX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c861891b-49b0-416c-bb85-f7a116068bb4',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LEND <> AMPL',
        short_description: 'LEND per AMPL',
        long_description: 'LEND <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6712fee2-ecb1-4acf-9470-681307463b73',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LEND <> COMP',
        short_description: 'LEND per COMP',
        long_description: 'LEND <> COMP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '68061c28-adbf-43d1-850d-c565c5aac28f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LEND <> DAI',
        short_description: 'LEND per DAI',
        long_description: 'LEND <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0ddd4175-39e3-4e37-a061-34ef761bbdeb',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LEND <> GST2',
        short_description: 'LEND per GST2',
        long_description: 'LEND <> GST2 rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '7e41e275-6db1-477f-ba1c-9d78178ae77b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LEND <> SNX',
        short_description: 'LEND per SNX',
        long_description: 'LEND <> SNX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '8739803a-d099-4eb5-938b-a10949d9f285',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LEND <> TKN',
        short_description: 'LEND per TKN',
        long_description: 'LEND <> TKN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '8d721625-3792-4b1f-bb03-f9d2b9da59a1',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LEND <> USDC',
        short_description: 'LEND per USDC',
        long_description: 'LEND <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '70ddae9a-1f91-4d2c-9e85-289df72be2dc',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LEND <> USDT',
        short_description: 'LEND per USDT',
        long_description: 'LEND <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'ab451abd-8def-4bc3-b8e2-edb18e2e6bdd',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LEND <> WETH',
        short_description: 'LEND per WETH',
        long_description: 'LEND <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '7a8f7ca5-a621-437c-99e7-8e51af9bf341',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LEND <> ZRX',
        short_description: 'LEND per ZRX',
        long_description: 'LEND <> ZRX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'dca12772-8703-4fb1-ba0b-3521bfc34c3b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LINK <> 0XBTC',
        short_description: 'LINK per 0XBTC',
        long_description: 'LINK <> 0XBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '7923c2a0-13bf-4324-991b-e725c4f10ee2',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LINK <> AMPL',
        short_description: 'LINK per AMPL',
        long_description: 'LINK <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4a21eaf9-894f-4e7b-9904-577418412698',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LINK <> BAT',
        short_description: 'LINK per BAT',
        long_description: 'LINK <> BAT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2abbfede-b396-49cf-b73e-af14358f2d40',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LINK <> COMP',
        short_description: 'LINK per COMP',
        long_description: 'LINK <> COMP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '79e8dcd9-4534-459f-9d21-865833bd2548',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LINK <> DAI',
        short_description: 'LINK per DAI',
        long_description: 'LINK <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4eaff6cd-f86a-4071-b177-57d3ea61a230',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LINK <> OCEAN',
        short_description: 'LINK per OCEAN',
        long_description: 'LINK <> OCEAN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '333a162c-ba2d-455b-a4ad-e6f6c69dc3d9',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LINK <> QNT',
        short_description: 'LINK per QNT',
        long_description: 'LINK <> QNT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '07e10b41-f441-4b6b-8e29-0a0c8f7a3aea',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LINK <> REN',
        short_description: 'LINK per REN',
        long_description: 'LINK <> REN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e500b1c4-96f0-44bd-8e86-44c551b52c0d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LINK <> RLC',
        short_description: 'LINK per RLC',
        long_description: 'LINK <> RLC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '38ead1e2-94b1-41fb-8980-5a3a7744a351',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LINK <> SHUF',
        short_description: 'LINK per SHUF',
        long_description: 'LINK <> SHUF rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b92df1ba-f328-4cfb-af33-75dd182c8e72',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LINK <> SNX',
        short_description: 'LINK per SNX',
        long_description: 'LINK <> SNX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2a7d0dd8-1cd1-4efb-867d-d97f5b540291',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LINK <> TRYB',
        short_description: 'LINK per TRYB',
        long_description: 'LINK <> TRYB rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '865f3f02-021d-45fc-b85b-6600db33f509',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LINK <> UBT',
        short_description: 'LINK per UBT',
        long_description: 'LINK <> UBT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '54c21f51-3ebe-4843-a008-f9a0bfe4ec26',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LINK <> USDC',
        short_description: 'LINK per USDC',
        long_description: 'LINK <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '752f1b39-9519-4e3b-9c99-9e20b5b14ca9',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LINK <> USDT',
        short_description: 'LINK per USDT',
        long_description: 'LINK <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9411711b-389d-4d72-acf3-800a95d81b74',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LINK <> WBTC',
        short_description: 'LINK per WBTC',
        long_description: 'LINK <> WBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6f84ea18-e396-4ae3-9176-50cb510edb7c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LINK <> WETH',
        short_description: 'LINK per WETH',
        long_description: 'LINK <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '988f153e-d325-46cb-903f-cf5418025a4d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LINK <> RENBCH',
        short_description: 'LINK per RENBCH',
        long_description: 'LINK <> RENBCH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '3e7d1a56-596e-427f-b05c-1c3b50f5172a',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LOOM <> WETH',
        short_description: 'LOOM per WETH',
        long_description: 'LOOM <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b5b1b6ed-0823-4aee-a76f-c032ee5482e1',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LPT <> AMPL',
        short_description: 'LPT per AMPL',
        long_description: 'LPT <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b04d2c9b-0a39-4683-8a05-1f2facc51ba1',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LPT <> DAI',
        short_description: 'LPT per DAI',
        long_description: 'LPT <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '7142b24b-1f8d-4dcd-9f4e-5a0a10d9a6e9',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LPT <> WETH',
        short_description: 'LPT per WETH',
        long_description: 'LPT <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '02929e64-f395-4b9d-b15e-47fc5c77a407',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LQD <> WETH',
        short_description: 'LQD per WETH',
        long_description: 'LQD <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1890fc30-f4d3-471d-8d2a-c6f30f22d43f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LRC <> USDT',
        short_description: 'LRC per USDT',
        long_description: 'LRC <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '789864d6-ada7-4596-a91c-9864a84c4508',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'LRC <> WETH',
        short_description: 'LRC per WETH',
        long_description: 'LRC <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5b344184-1dfa-47e8-b13a-6a98ce29e447',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MANA <> DAI',
        short_description: 'MANA per DAI',
        long_description: 'MANA <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '59a19087-2826-4edb-9a32-2e2de030c658',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MANA <> MLN',
        short_description: 'MANA per MLN',
        long_description: 'MANA <> MLN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2628c61e-ad21-46ba-b1c6-fc37b56abcf0',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MANA <> WETH',
        short_description: 'MANA per WETH',
        long_description: 'MANA <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'bc013069-bd62-4d36-a8ad-69b74343ea5c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MATIC <> WETH',
        short_description: 'MATIC per WETH',
        long_description: 'MATIC <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2992a8bc-2ba8-48ba-8be2-0b70c0fb0df3',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MBC <> WETH',
        short_description: 'MBC per WETH',
        long_description: 'MBC <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5224b480-f9a3-4f7d-bdad-5b79e2229d08',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MCX <> WETH',
        short_description: 'MCX per WETH',
        long_description: 'MCX <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'fd331ecc-cf05-47cd-b1aa-7fa588b07ed5',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MET <> WETH',
        short_description: 'MET per WETH',
        long_description: 'MET <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5d011fed-414e-408c-b4a5-033b52604402',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MKR <> 0XBTC',
        short_description: 'MKR per 0XBTC',
        long_description: 'MKR <> 0XBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '427033e0-d154-48a2-b039-043b221952df',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MKR <> AMPL',
        short_description: 'MKR per AMPL',
        long_description: 'MKR <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f31bc828-4f71-4a15-b6df-ccd3a5e08f3e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MKR <> COMP',
        short_description: 'MKR per COMP',
        long_description: 'MKR <> COMP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '39027d5f-2b1c-4eed-b340-8e096a1dba97',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MKR <> DAI',
        short_description: 'MKR per DAI',
        long_description: 'MKR <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd17995f8-5c9f-4405-b5bf-0e3ae4c8b29b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MKR <> KNC',
        short_description: 'MKR per KNC',
        long_description: 'MKR <> KNC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1424e168-8dd0-4645-86ce-d0c521d59bfb',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MKR <> MLN',
        short_description: 'MKR per MLN',
        long_description: 'MKR <> MLN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '89ba9dbb-8b41-4d82-adeb-24e1768cef5e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MKR <> USDC',
        short_description: 'MKR per USDC',
        long_description: 'MKR <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0db94693-16fe-438b-bdc4-034881703835',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MKR <> USDT',
        short_description: 'MKR per USDT',
        long_description: 'MKR <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b40b770e-55a6-4d85-b432-e81f963f38da',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MKR <> WETH',
        short_description: 'MKR per WETH',
        long_description: 'MKR <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'fa917df6-bf12-4304-9d1b-9d84b6cf9a24',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MKR <> SUSD',
        short_description: 'MKR per SUSD',
        long_description: 'MKR <> SUSD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9f2eda35-e4a0-4531-943c-75f86c726a6c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MLN <> KNC',
        short_description: 'MLN per KNC',
        long_description: 'MLN <> KNC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '73f57b3b-b065-4bd4-8fc5-722ff5661bf7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MLN <> MANA',
        short_description: 'MLN per MANA',
        long_description: 'MLN <> MANA rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '7915d9a1-0994-47cb-bb05-d811ddee3c1b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MLN <> MKR',
        short_description: 'MLN per MKR',
        long_description: 'MLN <> MKR rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e1f6a287-380f-47a5-b558-bd01c5708a5b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MLN <> TRB',
        short_description: 'MLN per TRB',
        long_description: 'MLN <> TRB rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0607a3fd-a9a4-490f-b708-de62ee8e817b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MLN <> WETH',
        short_description: 'MLN per WETH',
        long_description: 'MLN <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'cd7a1d4f-9e08-4955-a837-03ca6f03c8cd',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MOD <> USDT',
        short_description: 'MOD per USDT',
        long_description: 'MOD <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '107ae7c7-72fa-4c64-8d83-bd6292f813e9',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MUSD <> DAI',
        short_description: 'MUSD per DAI',
        long_description: 'MUSD <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9cb80183-b68c-4300-b484-3e12a2ed640e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MUSD <> USDC',
        short_description: 'MUSD per USDC',
        long_description: 'MUSD <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '3bef46cb-3dcb-44d6-b59b-109df3d027cd',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MUSD <> USDT',
        short_description: 'MUSD per USDT',
        long_description: 'MUSD <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd018539f-8464-4209-891c-dca6188a0b94',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'MUSD <> WETH',
        short_description: 'MUSD per WETH',
        long_description: 'MUSD <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5fc29468-8d21-4d9d-bcdc-c9e7d023afbf',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'NEXO <> WETH',
        short_description: 'NEXO per WETH',
        long_description: 'NEXO <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2fcc3fa8-1d06-4e06-b85c-92bcaba3a0aa',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'NMR <> DAI',
        short_description: 'NMR per DAI',
        long_description: 'NMR <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1d30e385-38a4-4ced-83d8-4b76a74923a7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'NMR <> STORJ',
        short_description: 'NMR per STORJ',
        long_description: 'NMR <> STORJ rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'da25e498-04cf-46dc-aae8-57644a6dd768',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'NMR <> USDC',
        short_description: 'NMR per USDC',
        long_description: 'NMR <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1dd697dc-0f45-4587-a57f-f689b2ba2397',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'NMR <> WETH',
        short_description: 'NMR per WETH',
        long_description: 'NMR <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '8cce5b87-19fc-42de-bb82-7f7a97344323',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'OCEAN <> BAT',
        short_description: 'OCEAN per BAT',
        long_description: 'OCEAN <> BAT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '3c28fc65-fc42-45fd-a71e-05adfb338185',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'OCEAN <> LINK',
        short_description: 'OCEAN per LINK',
        long_description: 'OCEAN <> LINK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a63fe251-f9a2-4c05-b15a-673cb7af6b13',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'OCEAN <> WETH',
        short_description: 'OCEAN per WETH',
        long_description: 'OCEAN <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f2cc9d0f-4da0-4114-998a-2935a175b3e2',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'OXT <> SNX',
        short_description: 'OXT per SNX',
        long_description: 'OXT <> SNX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c191a2d7-b320-45eb-93f2-53a81611fce4',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'OXT <> WETH',
        short_description: 'OXT per WETH',
        long_description: 'OXT <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'de54b22c-df7a-4027-98c3-58a051ff342e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'PAN <> WETH',
        short_description: 'PAN per WETH',
        long_description: 'PAN <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a9d6554f-a682-4ef7-9bc5-d55a2404e418',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'PAX <> REN',
        short_description: 'PAX per REN',
        long_description: 'PAX <> REN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9bbdaccd-3d52-4965-8c26-adc3e9b202ac',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'PAX <> TUSD',
        short_description: 'PAX per TUSD',
        long_description: 'PAX <> TUSD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '7fbc5cc7-8725-48c9-adfd-38fc7dce4ac7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'PAX <> USDC',
        short_description: 'PAX per USDC',
        long_description: 'PAX <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '77b608c8-0c18-4257-a4a3-82b6e4283c7f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'PAX <> USDT',
        short_description: 'PAX per USDT',
        long_description: 'PAX <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2317f139-3038-4819-b0f2-b5c92893ba9c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'PAX <> WETH',
        short_description: 'PAX per WETH',
        long_description: 'PAX <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'ad3428e3-1c14-4d6d-a743-fb6d02fa00f5',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'PAXG <> AMPL',
        short_description: 'PAXG per AMPL',
        long_description: 'PAXG <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '3652e490-8ad6-419b-8503-c842e54c2acc',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'PAXG <> DAI',
        short_description: 'PAXG per DAI',
        long_description: 'PAXG <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '771a7206-c158-48bb-a46d-5121c7d13edc',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'PAXG <> DGX',
        short_description: 'PAXG per DGX',
        long_description: 'PAXG <> DGX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6e1af8bb-e3ca-4251-a9ef-b5aa9130892c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'PAXG <> USDC',
        short_description: 'PAXG per USDC',
        long_description: 'PAXG <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '698ea1e0-ee0a-4174-ae5d-aa1d27ed5339',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'PAXG <> USDT',
        short_description: 'PAXG per USDT',
        long_description: 'PAXG <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '58dce577-09d5-4717-ad5e-24194fb0ad26',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'PAXG <> WBTC',
        short_description: 'PAXG per WBTC',
        long_description: 'PAXG <> WBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9b5ed60a-563f-4ea6-a58a-276da7015f73',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'PAXG <> WETH',
        short_description: 'PAXG per WETH',
        long_description: 'PAXG <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '45a26c98-f1c9-42d0-a618-775493e335e0',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'PNK <> USDC',
        short_description: 'PNK per USDC',
        long_description: 'PNK <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b55a1db9-18da-4176-8080-970d784fe9b4',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'PNK <> WETH',
        short_description: 'PNK per WETH',
        long_description: 'PNK <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd85d341a-7847-4b65-ac23-18abeac13e37',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'QCH <> DAI',
        short_description: 'QCH per DAI',
        long_description: 'QCH <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'ad8d0a76-896c-4bbe-93a7-49c5caa70f85',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'QCH <> TUSD',
        short_description: 'QCH per TUSD',
        long_description: 'QCH <> TUSD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '252110e1-2223-4af4-a3a3-65a95274a8e4',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'QCH <> USDC',
        short_description: 'QCH per USDC',
        long_description: 'QCH <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '550ac112-fb8c-4973-ae14-74418e4b4ed0',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'QCH <> USDT',
        short_description: 'QCH per USDT',
        long_description: 'QCH <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'bfe00207-70dc-4a60-b14e-7a9a75ee5a00',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'QNT <> AMPL',
        short_description: 'QNT per AMPL',
        long_description: 'QNT <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '7b4a7c6e-ba72-4ec0-9e29-3772756679c3',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'QNT <> LINK',
        short_description: 'QNT per LINK',
        long_description: 'QNT <> LINK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'fb12e1f8-9903-4f8f-8c99-0d3eddc8910d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'QNT <> WETH',
        short_description: 'QNT per WETH',
        long_description: 'QNT <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '560fc32a-505f-4ecd-a2c6-0f523b285c73',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'QSP <> WETH',
        short_description: 'QSP per WETH',
        long_description: 'QSP <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '11470eb4-7df5-4807-9824-b10852c27e24',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RCN <> WETH',
        short_description: 'RCN per WETH',
        long_description: 'RCN <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a9c8001c-3355-4ec7-bf43-053120956bcf',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RDN <> DAI',
        short_description: 'RDN per DAI',
        long_description: 'RDN <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd9c1455d-921d-4981-9b30-61529949e50f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RDN <> WETH',
        short_description: 'RDN per WETH',
        long_description: 'RDN <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '65b33c88-c96d-4b2a-865a-686b7b26e28e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'REN <> AMPL',
        short_description: 'REN per AMPL',
        long_description: 'REN <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '7eca8850-0e5b-4c4b-8de7-509eeff30284',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'REN <> DAI',
        short_description: 'REN per DAI',
        long_description: 'REN <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '085beb60-17c3-4ba2-ba0b-d903c53efbe6',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'REN <> LINK',
        short_description: 'REN per LINK',
        long_description: 'REN <> LINK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'bd9a916b-fe63-415d-bf07-4409aefdaecd',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'REN <> PAX',
        short_description: 'REN per PAX',
        long_description: 'REN <> PAX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f800ffd2-3cf2-43d1-ad5e-c45f16803022',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'REN <> USDC',
        short_description: 'REN per USDC',
        long_description: 'REN <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e056aa3f-9637-4148-b42e-3305c774f3fd',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'REN <> WETH',
        short_description: 'REN per WETH',
        long_description: 'REN <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'fe2cd89b-f1f3-4789-881c-56ad43b13c07',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RENBCH <> DAI',
        short_description: 'RENBCH per DAI',
        long_description: 'RENBCH <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '58051fdd-db98-4c84-ba22-bda76f40adf1',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RENBCH <> LINK',
        short_description: 'RENBCH per LINK',
        long_description: 'RENBCH <> LINK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'da38aba7-1e11-45f9-b74f-eaa570f9513b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RENBCH <> WETH',
        short_description: 'RENBCH per WETH',
        long_description: 'RENBCH <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4afdc4af-1d73-41b3-8e3c-8a0fb583596d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RENBCH <> RENBTC',
        short_description: 'RENBCH per RENBTC',
        long_description: 'RENBCH <> RENBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2a3051ef-48aa-4cdd-aa18-ca8a98e004e9',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RENBTC <> AMPL',
        short_description: 'RENBTC per AMPL',
        long_description: 'RENBTC <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1a58f53b-d3a9-4e4e-9a32-378347315ffb',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RENBTC <> DAI',
        short_description: 'RENBTC per DAI',
        long_description: 'RENBTC <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '217a708e-40a4-4c7c-a8d4-fa6fe5c38ad0',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RENBTC <> USDC',
        short_description: 'RENBTC per USDC',
        long_description: 'RENBTC <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f9f35816-a9da-45c4-81a6-446de1105577',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RENBTC <> WBTC',
        short_description: 'RENBTC per WBTC',
        long_description: 'RENBTC <> WBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f0ca8180-8345-4870-b9c4-767f3c5b031e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RENBTC <> WETH',
        short_description: 'RENBTC per WETH',
        long_description: 'RENBTC <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '8fc08487-cf9b-46e0-be15-f3399593d60a',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RENBTC <> RENBCH',
        short_description: 'RENBTC per RENBCH',
        long_description: 'RENBTC <> RENBCH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0282d4bb-9e52-41f2-b0c9-75babf9a6785',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RENBTC <> RENZEC',
        short_description: 'RENBTC per RENZEC',
        long_description: 'RENBTC <> RENZEC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd2a81acc-d99a-4eb8-93c1-88afdb8a84ee',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RENZEC <> DAI',
        short_description: 'RENZEC per DAI',
        long_description: 'RENZEC <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'fc32849c-b985-4e62-b5ab-fc0f07f199e8',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RENZEC <> WETH',
        short_description: 'RENZEC per WETH',
        long_description: 'RENZEC <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd64c660e-67c3-4a25-8a32-b88fae1b2731',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RENZEC <> RENBTC',
        short_description: 'RENZEC per RENBTC',
        long_description: 'RENZEC <> RENBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '487c56fc-4720-49c0-8d68-4094afdd7a24',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'REP <> AMPL',
        short_description: 'REP per AMPL',
        long_description: 'REP <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b5a2e112-0b3f-4c31-8112-99d8e6ba02eb',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'REP <> WETH',
        short_description: 'REP per WETH',
        long_description: 'REP <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '52808a78-920b-4b1a-b578-db05612cff54',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'REPV2 <> DAI',
        short_description: 'REPV2 per DAI',
        long_description: 'REPV2 <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c6ac91b4-1dc0-4bae-8a87-0c719849597b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'REPV2 <> WETH',
        short_description: 'REPV2 per WETH',
        long_description: 'REPV2 <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd9ee1c2e-c9b6-4b84-9791-8cf27358b323',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RING <> DAI',
        short_description: 'RING per DAI',
        long_description: 'RING <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '26c784ad-4aac-423b-9c72-11edce8f1622',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RING <> WETH',
        short_description: 'RING per WETH',
        long_description: 'RING <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a9ba934d-0df7-461f-bae7-65d83f54b9f0',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RLC <> DAI',
        short_description: 'RLC per DAI',
        long_description: 'RLC <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e05aac9a-7831-45e7-ae5c-f0b8eb1d25cf',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RLC <> KNC',
        short_description: 'RLC per KNC',
        long_description: 'RLC <> KNC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c1764323-24d1-462d-be0f-68fec00cf80c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RLC <> LINK',
        short_description: 'RLC per LINK',
        long_description: 'RLC <> LINK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4269ff09-8739-4c37-8e68-afa3cba64d9f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RLC <> USDC',
        short_description: 'RLC per USDC',
        long_description: 'RLC <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '20586ced-284a-4366-8e45-9e6cf6353bca',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RLC <> WETH',
        short_description: 'RLC per WETH',
        long_description: 'RLC <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0ba62434-8901-41c3-ab4f-3c2b199d7880',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RPL <> DAI',
        short_description: 'RPL per DAI',
        long_description: 'RPL <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f8bb92e1-fce3-47ef-aa33-035b1c5bc111',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RPL <> TRB',
        short_description: 'RPL per TRB',
        long_description: 'RPL <> TRB rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0cc6355e-4546-4f57-af36-eaae7f42081e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RPL <> UBT',
        short_description: 'RPL per UBT',
        long_description: 'RPL <> UBT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c11209ad-2bde-4874-ae29-46b5ab38db42',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RPL <> USDC',
        short_description: 'RPL per USDC',
        long_description: 'RPL <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '58e4b517-b4b8-4f93-80dc-ffe34c81ec0c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'RPL <> WETH',
        short_description: 'RPL per WETH',
        long_description: 'RPL <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1148ca03-e320-4f38-92b2-5f6f880fc925',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SAI <> WETH',
        short_description: 'SAI per WETH',
        long_description: 'SAI <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b5514a53-fbcc-444c-89e2-dd6635cc11f9',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SALT <> USDC',
        short_description: 'SALT per USDC',
        long_description: 'SALT <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '99a1df25-7f62-4caa-a95d-f1d9fa06a085',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SALT <> WETH',
        short_description: 'SALT per WETH',
        long_description: 'SALT <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'eaa500ae-5240-4a3d-8bb6-70893e26137e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SAN <> WETH',
        short_description: 'SAN per WETH',
        long_description: 'SAN <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b2e3d98f-ab97-4397-99f1-5219d1faa74f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SETH <> WETH',
        short_description: 'SETH per WETH',
        long_description: 'SETH <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f274ea60-53f4-4f95-8237-988a5a772c20',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SHUF <> 0XBTC',
        short_description: 'SHUF per 0XBTC',
        long_description: 'SHUF <> 0XBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'acc9ca01-6f08-425b-9255-8dbeed97fb5a',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SHUF <> LINK',
        short_description: 'SHUF per LINK',
        long_description: 'SHUF <> LINK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a4f26137-32e5-4662-aedb-39f270e7d7fd',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SHUF <> WETH',
        short_description: 'SHUF per WETH',
        long_description: 'SHUF <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '97f7ec43-da56-41c3-8dfa-f54c02b1eb46',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SNT <> DAI',
        short_description: 'SNT per DAI',
        long_description: 'SNT <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '10c9ceb3-60b8-408d-a07c-0a3f13b05f3a',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SNT <> WETH',
        short_description: 'SNT per WETH',
        long_description: 'SNT <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '49f05c58-a63d-40f9-b06b-4ca1d8e917e7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SNX <> AMPL',
        short_description: 'SNX per AMPL',
        long_description: 'SNX <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'eae0f8a3-dcfd-4860-9228-4c6f3cb4b06c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SNX <> BAL',
        short_description: 'SNX per BAL',
        long_description: 'SNX <> BAL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b8b4bc93-1bb8-431c-a373-57465cdad952',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SNX <> BZRX',
        short_description: 'SNX per BZRX',
        long_description: 'SNX <> BZRX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6208181f-cdb1-47cd-82dc-0befe35520f3',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SNX <> COMP',
        short_description: 'SNX per COMP',
        long_description: 'SNX <> COMP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '3238a922-42f8-4d9d-b153-5cc7e4d9885f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SNX <> DAI',
        short_description: 'SNX per DAI',
        long_description: 'SNX <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'ee2be45c-5ea2-4fd9-8511-335c6d8047ed',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SNX <> KNC',
        short_description: 'SNX per KNC',
        long_description: 'SNX <> KNC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9c6715b9-98dc-4c8c-9824-4856394e7a94',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SNX <> LEND',
        short_description: 'SNX per LEND',
        long_description: 'SNX <> LEND rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd0137eed-0d1f-4f3c-933d-7dce5fea9bae',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SNX <> LINK',
        short_description: 'SNX per LINK',
        long_description: 'SNX <> LINK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1e54f294-b424-44f9-8ae2-092e8fa30f22',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SNX <> OXT',
        short_description: 'SNX per OXT',
        long_description: 'SNX <> OXT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0ded9617-36b8-4cf7-93cf-6d1de8721cff',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SNX <> USDC',
        short_description: 'SNX per USDC',
        long_description: 'SNX <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c5bc1a9b-32b3-4835-8799-162354e8075c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SNX <> USDT',
        short_description: 'SNX per USDT',
        long_description: 'SNX <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '15ebefa0-d09d-4441-9421-efe79cfdbed6',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SNX <> WETH',
        short_description: 'SNX per WETH',
        long_description: 'SNX <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '57b99b65-d79f-4728-8809-b2cb9bd5e91d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SOCKS <> DAI',
        short_description: 'SOCKS per DAI',
        long_description: 'SOCKS <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '84b93cf9-e06f-4f22-9c23-46d71c1b318d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SOCKS <> USDC',
        short_description: 'SOCKS per USDC',
        long_description: 'SOCKS <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'df96b90d-7d1f-4d4b-97e7-890e551bc0c3',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SOCKS <> WETH',
        short_description: 'SOCKS per WETH',
        long_description: 'SOCKS <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6583c033-2742-45ae-a010-63737e151032',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SPANK <> DAI',
        short_description: 'SPANK per DAI',
        long_description: 'SPANK <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9178ba48-d52c-4977-81f4-f2b14a1fe32b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SPANK <> WETH',
        short_description: 'SPANK per WETH',
        long_description: 'SPANK <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0d2fb1a7-3e3f-4f6c-93c4-210287dc6e10',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'STAKE <> DAI',
        short_description: 'STAKE per DAI',
        long_description: 'STAKE <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '61433913-0ae0-4717-9e4c-934f2266d2c6',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'STAKE <> WETH',
        short_description: 'STAKE per WETH',
        long_description: 'STAKE <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4067ad30-81ec-480c-a83e-f868a00ae101',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'STORJ <> DAI',
        short_description: 'STORJ per DAI',
        long_description: 'STORJ <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '677fb034-05fe-4b7c-90c5-f65f99c14c7c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'STORJ <> NMR',
        short_description: 'STORJ per NMR',
        long_description: 'STORJ <> NMR rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd3098c1e-06a3-4c44-878d-d9dcd81cfd3b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'STORJ <> WETH',
        short_description: 'STORJ per WETH',
        long_description: 'STORJ <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'fa809177-29b7-4ca5-8d07-911f702093b7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SUSD <> DAI',
        short_description: 'SUSD per DAI',
        long_description: 'SUSD <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '876e1e8a-b148-4fa7-bbb6-f68fec3db042',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SUSD <> MKR',
        short_description: 'SUSD per MKR',
        long_description: 'SUSD <> MKR rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e7329ba1-aee0-46c3-a216-f031dca6c5fc',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SUSD <> USDC',
        short_description: 'SUSD per USDC',
        long_description: 'SUSD <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'ec31c341-f286-4208-ad08-ed72dd1d861b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SUSD <> USDT',
        short_description: 'SUSD per USDT',
        long_description: 'SUSD <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '7adcebe2-47af-433b-aee9-e68970d6c160',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SUSD <> WETH',
        short_description: 'SUSD per WETH',
        long_description: 'SUSD <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e0c32aa1-7d5a-4bb4-90f2-b9ecc3bfde21',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SUSD <> SXAU',
        short_description: 'SUSD per SXAU',
        long_description: 'SUSD <> SXAU rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '92d9f7e7-2443-4ffc-a343-c3daa0504c7e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SXAU <> USDC',
        short_description: 'SXAU per USDC',
        long_description: 'SXAU <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '706dc8d4-01f5-45cb-bcf2-cb275812364c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SXAU <> WETH',
        short_description: 'SXAU per WETH',
        long_description: 'SXAU <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'df40bb20-b64c-4c1c-8ddd-3248077f222b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SXAU <> SUSD',
        short_description: 'SXAU per SUSD',
        long_description: 'SXAU <> SUSD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2a155252-9043-4486-9f52-fbfbdf701c76',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SXP <> DAI',
        short_description: 'SXP per DAI',
        long_description: 'SXP <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9ba5f6fa-d699-4b29-833c-a8db5c445169',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SXP <> USDT',
        short_description: 'SXP per USDT',
        long_description: 'SXP <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b84f57a6-f6fc-4c64-8239-1be0b8e40fb0',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'SXP <> WETH',
        short_description: 'SXP per WETH',
        long_description: 'SXP <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2619210f-7737-456d-b28d-865d4ef63d37',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TGBP <> USDC',
        short_description: 'TGBP per USDC',
        long_description: 'TGBP <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '735b52b0-7301-4d12-818d-b95401b10e70',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TKN <> LEND',
        short_description: 'TKN per LEND',
        long_description: 'TKN <> LEND rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '918133e9-84a8-4e5a-adee-fcdb1d30c89d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TKN <> WETH',
        short_description: 'TKN per WETH',
        long_description: 'TKN <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2959b7de-2387-4851-a903-e882a339ccea',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TRB <> AMPL',
        short_description: 'TRB per AMPL',
        long_description: 'TRB <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '44d23248-4e7c-4bb2-8d7b-36c5e1c8112b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TRB <> DAI',
        short_description: 'TRB per DAI',
        long_description: 'TRB <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6992f4ae-e41a-4830-830b-dc52abb80e92',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TRB <> MLN',
        short_description: 'TRB per MLN',
        long_description: 'TRB <> MLN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '42c975c2-6fba-4daa-ba7b-b213f7c91594',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TRB <> RPL',
        short_description: 'TRB per RPL',
        long_description: 'TRB <> RPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '15b08242-dd33-49e7-ade8-b09ab953df2f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TRB <> WETH',
        short_description: 'TRB per WETH',
        long_description: 'TRB <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '03d78c66-c9fb-470d-9a5c-c48edf6755f2',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TRST <> WETH',
        short_description: 'TRST per WETH',
        long_description: 'TRST <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a02d4013-48f9-4cc8-9bd9-0d4f29fd20b7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TRYB <> AMPL',
        short_description: 'TRYB per AMPL',
        long_description: 'TRYB <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f4a200a5-8db0-4c85-b6c2-0c405a91bcfe',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TRYB <> LINK',
        short_description: 'TRYB per LINK',
        long_description: 'TRYB <> LINK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '938c539c-cffa-45fd-abb0-cacfdcfe79b4',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TRYB <> USDT',
        short_description: 'TRYB per USDT',
        long_description: 'TRYB <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'fbf63604-5aa7-4fda-ab63-5596e3155d2d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TRYB <> WETH',
        short_description: 'TRYB per WETH',
        long_description: 'TRYB <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1580f4b3-7a9d-4ea7-99e8-2c24882c681b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TUSD <> AMPL',
        short_description: 'TUSD per AMPL',
        long_description: 'TUSD <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '789d74ec-bd40-4487-bd90-101d1cb62ed4',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TUSD <> PAX',
        short_description: 'TUSD per PAX',
        long_description: 'TUSD <> PAX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '95964233-6835-4a03-89e8-44e12539cf4f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TUSD <> QCH',
        short_description: 'TUSD per QCH',
        long_description: 'TUSD <> QCH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5821a3e2-f11d-48c2-81dc-b8084549b9c8',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TUSD <> USDC',
        short_description: 'TUSD per USDC',
        long_description: 'TUSD <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '7763c7b2-4ebe-4cba-8d28-b260b2eb1c24',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TUSD <> USDT',
        short_description: 'TUSD per USDT',
        long_description: 'TUSD <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '908946a1-85eb-4aa4-8b1c-c426dcd6fec7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'TUSD <> WETH',
        short_description: 'TUSD per WETH',
        long_description: 'TUSD <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1c369433-7724-4049-9f1c-4e22deb8f9f1',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'UBT <> DAI',
        short_description: 'UBT per DAI',
        long_description: 'UBT <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2fab037f-a262-400b-a035-e18b8d53aa33',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'UBT <> LINK',
        short_description: 'UBT per LINK',
        long_description: 'UBT <> LINK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '7b080e80-72ed-4da5-9a7b-143c7300fc7d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'UBT <> RPL',
        short_description: 'UBT per RPL',
        long_description: 'UBT <> RPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b01d2eef-d89d-4510-b1b5-8e51e588a7e1',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'UBT <> USDC',
        short_description: 'UBT per USDC',
        long_description: 'UBT <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'eb1b0f10-7306-4749-b02d-68f37829408f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'UBT <> WETH',
        short_description: 'UBT per WETH',
        long_description: 'UBT <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '29636ba5-7673-4a7f-b9d7-0465a758eb78',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'UMA <> AMPL',
        short_description: 'UMA per AMPL',
        long_description: 'UMA <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9dccdaeb-0905-4ad0-9653-b36095db2b09',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'UMA <> USDC',
        short_description: 'UMA per USDC',
        long_description: 'UMA <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '28e771a8-c238-463a-a08a-44c497315124',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'UMA <> WETH',
        short_description: 'UMA per WETH',
        long_description: 'UMA <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b9ff059e-917b-457e-8655-d08b119b2666',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USD++ <> DAI',
        short_description: 'USD++ per DAI',
        long_description: 'USD++ <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2cfd4518-80c8-4ab1-b3b5-47255bcbd99e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> 0XBTC',
        short_description: 'USDC per 0XBTC',
        long_description: 'USDC <> 0XBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c3d11d07-79c0-4d85-8d8c-494c75952843',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> AMPL',
        short_description: 'USDC per AMPL',
        long_description: 'USDC <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '71e4f964-ce42-4758-9d30-8b1425920dd8',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> ANT',
        short_description: 'USDC per ANT',
        long_description: 'USDC <> ANT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd7e0ebea-daec-4964-aefa-6260ce42b5be',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> BAL',
        short_description: 'USDC per BAL',
        long_description: 'USDC <> BAL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4239de94-94a9-4391-9cab-8c2c9a2a2304',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> BAND',
        short_description: 'USDC per BAND',
        long_description: 'USDC <> BAND rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '523cb603-8931-4c09-b89e-077c39f43f40',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> BAT',
        short_description: 'USDC per BAT',
        long_description: 'USDC <> BAT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '73f1c02c-7fc9-45e1-a310-00eef5d4c7f9',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> BNT',
        short_description: 'USDC per BNT',
        long_description: 'USDC <> BNT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5e14575e-c4cb-434f-ab6b-ab36f9f2982c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> CEL',
        short_description: 'USDC per CEL',
        long_description: 'USDC <> CEL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1b1af6fb-3751-43bf-a02c-7dd9cdbe8c0c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> COMP',
        short_description: 'USDC per COMP',
        long_description: 'USDC <> COMP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '5de77e47-abf3-4f8d-a510-a8feca140bad',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> DAI',
        short_description: 'USDC per DAI',
        long_description: 'USDC <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '831f800a-fc29-4337-8fe3-80160d50179a',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> DATA',
        short_description: 'USDC per DATA',
        long_description: 'USDC <> DATA rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2d6bdf66-41d9-4765-a90d-2aef7b9858f2',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> DGD',
        short_description: 'USDC per DGD',
        long_description: 'USDC <> DGD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'fae33962-c5f6-4474-a2f6-81ab68864399',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> DGX',
        short_description: 'USDC per DGX',
        long_description: 'USDC <> DGX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1bb1f0d8-ac53-4c5f-b4cd-8087881c58f7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> EBASE',
        short_description: 'USDC per EBASE',
        long_description: 'USDC <> EBASE rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '208868e9-c945-4819-b549-392da390e639',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> FUN',
        short_description: 'USDC per FUN',
        long_description: 'USDC <> FUN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c25feba7-dfc8-4cfe-ae41-70484bfeb2d1',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> FXC',
        short_description: 'USDC per FXC',
        long_description: 'USDC <> FXC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0e8bd6b3-647c-47b7-9230-b63c6bf44e76',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> KNC',
        short_description: 'USDC per KNC',
        long_description: 'USDC <> KNC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '63447b94-3100-4e44-ac5d-9e94b479b900',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> LEND',
        short_description: 'USDC per LEND',
        long_description: 'USDC <> LEND rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '3c7a14cb-f88b-4003-af1a-9bcc8bce1729',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> LINK',
        short_description: 'USDC per LINK',
        long_description: 'USDC <> LINK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e6f3a135-a03f-42df-a288-24f5100a0b18',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> MKR',
        short_description: 'USDC per MKR',
        long_description: 'USDC <> MKR rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0b33eb2e-2dcf-481f-bdf4-b885c7f33c63',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> NMR',
        short_description: 'USDC per NMR',
        long_description: 'USDC <> NMR rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2f8ab828-8cc8-41c7-ae64-de0d781cfa81',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> PAX',
        short_description: 'USDC per PAX',
        long_description: 'USDC <> PAX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b1fb891f-8bc8-45de-b6d9-1f98d1804135',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> PAXG',
        short_description: 'USDC per PAXG',
        long_description: 'USDC <> PAXG rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f5e79b82-29eb-4ef5-ad75-5476144cfc15',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> PNK',
        short_description: 'USDC per PNK',
        long_description: 'USDC <> PNK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'aabba7e4-5252-40a8-a7e1-cb0871b9c028',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> QCH',
        short_description: 'USDC per QCH',
        long_description: 'USDC <> QCH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '34431236-b5f6-495a-9061-1b364b4637aa',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> REN',
        short_description: 'USDC per REN',
        long_description: 'USDC <> REN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '73db319d-0c6c-4508-8835-9a2529154017',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> RLC',
        short_description: 'USDC per RLC',
        long_description: 'USDC <> RLC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4c62d5ff-ec7f-4216-af46-81cca01bb3e4',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> RPL',
        short_description: 'USDC per RPL',
        long_description: 'USDC <> RPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '838f2022-d0c2-46be-a309-c5bc5496234e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> SALT',
        short_description: 'USDC per SALT',
        long_description: 'USDC <> SALT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'ce3472ae-225e-4c6d-90e3-422bb385b8c6',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> SNX',
        short_description: 'USDC per SNX',
        long_description: 'USDC <> SNX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '20f73614-0324-4107-a7da-0ad9c5d6c21b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> SOCKS',
        short_description: 'USDC per SOCKS',
        long_description: 'USDC <> SOCKS rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e485302a-f271-445c-9f88-25b54f83026d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> TGBP',
        short_description: 'USDC per TGBP',
        long_description: 'USDC <> TGBP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e0deffb1-4637-40ba-bc22-d813b8c8c9aa',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> TUSD',
        short_description: 'USDC per TUSD',
        long_description: 'USDC <> TUSD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '552fd931-c2b5-4ffd-9b64-ec4c87ca6791',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> UBT',
        short_description: 'USDC per UBT',
        long_description: 'USDC <> UBT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'cbdc4687-c542-4eb5-980c-cf1bc7fba21b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> UMA',
        short_description: 'USDC per UMA',
        long_description: 'USDC <> UMA rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9e309c06-4b53-41ab-81dc-1bcfa3bef90d',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> USDT',
        short_description: 'USDC per USDT',
        long_description: 'USDC <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '48ff4943-040c-4979-9e21-f47eae78f251',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> USDX',
        short_description: 'USDC per USDX',
        long_description: 'USDC <> USDX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '14299d71-eade-41ee-9836-51a156efe1b6',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> WBTC',
        short_description: 'USDC per WBTC',
        long_description: 'USDC <> WBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '37020c37-8084-44f3-8083-97d61fd8f917',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> WETH',
        short_description: 'USDC per WETH',
        long_description: 'USDC <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '145d3122-03d6-4818-8feb-3b40f8e40716',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> XIO',
        short_description: 'USDC per XIO',
        long_description: 'USDC <> XIO rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'df7f5e9c-a6bf-487a-8629-d0089a98cf17',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> ZRX',
        short_description: 'USDC per ZRX',
        long_description: 'USDC <> ZRX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '16e26cd8-1df8-49de-b3c8-57788f248bec',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> CUSDC',
        short_description: 'USDC per CUSDC',
        long_description: 'USDC <> CUSDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '33b2aa6e-4fc4-4f28-9862-3c99c2a3b883',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> MUSD',
        short_description: 'USDC per MUSD',
        long_description: 'USDC <> MUSD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'ce695598-01ff-493e-a46a-3acd9e1a39b3',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> RENBTC',
        short_description: 'USDC per RENBTC',
        long_description: 'USDC <> RENBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0d98c77c-4b7c-4c2a-b682-c706fa3d7ca9',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> SUSD',
        short_description: 'USDC per SUSD',
        long_description: 'USDC <> SUSD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2eb7a46d-c3cc-4df6-a988-c6e7d1305c25',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDC <> SXAU',
        short_description: 'USDC per SXAU',
        long_description: 'USDC <> SXAU rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '3e9e2d86-ee88-4f03-b3c9-d80310ee8cf8',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> 0XBTC',
        short_description: 'USDT per 0XBTC',
        long_description: 'USDT <> 0XBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '500d1a70-5f5e-4024-b085-b495b85dbfec',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> AMPL',
        short_description: 'USDT per AMPL',
        long_description: 'USDT <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '27f0ccec-13c4-41d6-8459-a0f8a1306037',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> BAL',
        short_description: 'USDT per BAL',
        long_description: 'USDT <> BAL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0dcadaad-9d61-48f1-a406-eff338a42021',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> BAT',
        short_description: 'USDT per BAT',
        long_description: 'USDT <> BAT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'b94c2a9c-06e9-4330-aab4-825c6ef59525',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> BNT',
        short_description: 'USDT per BNT',
        long_description: 'USDT <> BNT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0a28a912-2fe9-435d-8b85-e0ac3f566d54',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> BZRX',
        short_description: 'USDT per BZRX',
        long_description: 'USDT <> BZRX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e14e33a9-7bed-4bfd-bc35-ce38bb53da41',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> COMP',
        short_description: 'USDT per COMP',
        long_description: 'USDT <> COMP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '10191973-6370-4144-8654-062afaad9476',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> DAI',
        short_description: 'USDT per DAI',
        long_description: 'USDT <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0015798a-4383-4f31-a7cd-c0c3bdf71118',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> EBASE',
        short_description: 'USDT per EBASE',
        long_description: 'USDT <> EBASE rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '00ef5e56-090e-4cf2-87a2-8560c7a1957a',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> GEN',
        short_description: 'USDT per GEN',
        long_description: 'USDT <> GEN rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '604f43cd-86df-44cd-aa07-2dac1bba7f97',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> KNC',
        short_description: 'USDT per KNC',
        long_description: 'USDT <> KNC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'bc6965fd-db2a-43f9-abd9-9f96335953c7',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> LEND',
        short_description: 'USDT per LEND',
        long_description: 'USDT <> LEND rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '471c53b8-1005-4c36-bc30-fae577907e7e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> LINK',
        short_description: 'USDT per LINK',
        long_description: 'USDT <> LINK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '222d96eb-5920-4ace-bb2f-703f96a80bb9',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> LRC',
        short_description: 'USDT per LRC',
        long_description: 'USDT <> LRC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '93558cde-91ed-4261-9d77-e4e2aaaae30a',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> MKR',
        short_description: 'USDT per MKR',
        long_description: 'USDT <> MKR rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'eff55870-7b17-49df-aa99-a8da8dcc2116',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> MOD',
        short_description: 'USDT per MOD',
        long_description: 'USDT <> MOD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6d9052b9-d758-4031-8fb2-5f7ea51b280e',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> PAX',
        short_description: 'USDT per PAX',
        long_description: 'USDT <> PAX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '23eacfd8-aedd-4cf9-8c10-dbec66f5330c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> PAXG',
        short_description: 'USDT per PAXG',
        long_description: 'USDT <> PAXG rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'c624ac40-72f2-43fa-b240-f74d4c4c663f',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> QCH',
        short_description: 'USDT per QCH',
        long_description: 'USDT <> QCH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'bc9bb06a-5dac-4110-b86c-52438455f9b5',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> SNX',
        short_description: 'USDT per SNX',
        long_description: 'USDT <> SNX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6c59b511-32ad-40fd-b83a-4b637864101c',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> SXP',
        short_description: 'USDT per SXP',
        long_description: 'USDT <> SXP rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '259c46bd-9b05-4cd7-8793-a1a6c45c9280',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> TRYB',
        short_description: 'USDT per TRYB',
        long_description: 'USDT <> TRYB rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9160cdcc-a3c6-495a-b8a9-a24dbc8f3f41',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> TUSD',
        short_description: 'USDT per TUSD',
        long_description: 'USDT <> TUSD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '19d4f591-5106-4728-bbfd-04f962f8ac37',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> USDC',
        short_description: 'USDT per USDC',
        long_description: 'USDT <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2613bf7e-0ce0-4c2c-9477-2cf65e647595',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> WBTC',
        short_description: 'USDT per WBTC',
        long_description: 'USDT <> WBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '14f542e4-adfd-45b1-a42c-14c2ce54c4dc',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> WETH',
        short_description: 'USDT per WETH',
        long_description: 'USDT <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f4ed7efb-fff1-43d1-bcd3-5f6090012d18',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> XIO',
        short_description: 'USDT per XIO',
        long_description: 'USDT <> XIO rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e7624f48-cdae-4b01-bcf8-c29c1a062918',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> ZRX',
        short_description: 'USDT per ZRX',
        long_description: 'USDT <> ZRX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a469fac0-1f86-49b0-9cf1-abd0b0d323c6',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> MUSD',
        short_description: 'USDT per MUSD',
        long_description: 'USDT <> MUSD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4818b15a-f8c2-43cf-8bed-b6c554c3a8ed',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDT <> SUSD',
        short_description: 'USDT per SUSD',
        long_description: 'USDT <> SUSD rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'e731ca68-cadf-4cec-8054-5c2aee1b258b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'USDX <> USDC',
        short_description: 'USDX per USDC',
        long_description: 'USDX <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '2e65f2f0-08bb-459d-86ce-c9e97de3c783',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'VERI <> WETH',
        short_description: 'VERI per WETH',
        long_description: 'VERI <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '19ed8134-ad88-45f9-a051-8f65a33488ee',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WBTC <> AMPL',
        short_description: 'WBTC per AMPL',
        long_description: 'WBTC <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '070fc5ba-903b-4b44-a1b3-62db561964dc',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WBTC <> DAI',
        short_description: 'WBTC per DAI',
        long_description: 'WBTC <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4f0dce9a-7a8e-4d33-b30b-09c37144a06a',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WBTC <> LINK',
        short_description: 'WBTC per LINK',
        long_description: 'WBTC <> LINK rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '6fce40fd-4cc1-4d6d-9e48-95626db16113',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WBTC <> PAXG',
        short_description: 'WBTC per PAXG',
        long_description: 'WBTC <> PAXG rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '1bafb08b-65f1-492c-a737-7fb81803a2fa',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WBTC <> USDC',
        short_description: 'WBTC per USDC',
        long_description: 'WBTC <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'afcdaaaf-ad70-4cc7-90da-6a75429293c1',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WBTC <> USDT',
        short_description: 'WBTC per USDT',
        long_description: 'WBTC <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '862308d9-d58f-4da6-8011-2d4711be5215',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WBTC <> WETH',
        short_description: 'WBTC per WETH',
        long_description: 'WBTC <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '44fcdb28-f243-4505-8ebe-580a1022b882',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WBTC <> RENBTC',
        short_description: 'WBTC per RENBTC',
        long_description: 'WBTC <> RENBTC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '0f09e4b3-065c-4585-87a1-f392bdcf88bb',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WCK <> DAI',
        short_description: 'WCK per DAI',
        long_description: 'WCK <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '55be9c9f-820a-4673-9ca6-a651c69662af',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'WCK <> WETH',
        short_description: 'WCK per WETH',
        long_description: 'WCK <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd372af4b-b979-4dd3-b05c-fcb13bb48f8b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'XCHF <> WETH',
        short_description: 'XCHF per WETH',
        long_description: 'XCHF <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'd0f2d70d-e9fe-4106-ba62-43b085a1e5fb',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'XIO <> DAI',
        short_description: 'XIO per DAI',
        long_description: 'XIO <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a7f7a120-250b-46b5-bb1e-59ad504ccbfe',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'XIO <> USDC',
        short_description: 'XIO per USDC',
        long_description: 'XIO <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'cc37c4ed-a0ee-4d31-8557-eeeffef1bc6b',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'XIO <> USDT',
        short_description: 'XIO per USDT',
        long_description: 'XIO <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '49d6c2b6-a707-41f2-84c2-b5c4dac09589',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'XIO <> WETH',
        short_description: 'XIO per WETH',
        long_description: 'XIO <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '9076b320-2695-4abc-adf4-778e02bca349',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ZRX <> AMPL',
        short_description: 'ZRX per AMPL',
        long_description: 'ZRX <> AMPL rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '21f37ede-90c0-41c5-9134-41acab6f64e9',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ZRX <> BZRX',
        short_description: 'ZRX per BZRX',
        long_description: 'ZRX <> BZRX rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '94c3b39f-c3e6-47c0-980b-e6773cd0b883',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ZRX <> DAI',
        short_description: 'ZRX per DAI',
        long_description: 'ZRX <> DAI rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '4f52620c-82cd-4268-ba65-82bae482f168',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ZRX <> KNC',
        short_description: 'ZRX per KNC',
        long_description: 'ZRX <> KNC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'f9f3f9bf-0392-4792-b2ea-75503ea5c1aa',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ZRX <> LEND',
        short_description: 'ZRX per LEND',
        long_description: 'ZRX <> LEND rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: 'a8464c76-2fc4-4b41-99d6-bc7a376d43f3',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ZRX <> USDC',
        short_description: 'ZRX per USDC',
        long_description: 'ZRX <> USDC rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '3d29b1cc-aa24-4dc7-a0f9-36b17245e4ed',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ZRX <> USDT',
        short_description: 'ZRX per USDT',
        long_description: 'ZRX <> USDT rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },{
        uuid: '48c075fd-4144-4bcd-9ba8-7916999a6f92',
        created_at: new Date(),
        updated_at: new Date(),
        name: 'ZRX <> WETH',
        short_description: 'ZRX per WETH',
        long_description: 'ZRX <> WETH rate for Uniswap\'s exchange',
        d_app_uuid: '4c4c510c-f12c-4c62-b824-c511490f3a80'
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('notifications', null, {});
  }
};