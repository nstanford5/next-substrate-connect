import { WellKnownChain, createScClient } from '@substrate/connect';

export async function testConnect() {
    console.log(`Entered test connect`);
    const client = createScClient();
    const chain = await client.addWellKnownChain(WellKnownChain.polkadot, function jsonRpcCallback(response) {
        console.log('respose', response);
    });

    // this is a legacy json-rpc API
    chain.sendJsonRpc('{"jsonrpc":"2.0","id":"1","method":"rpc_methods","params":[]}');
};
