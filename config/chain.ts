export const chain = {
    "$schema": "../../chain.schema.json",
    "chain_name": "gm-rollup",
    "chain_id": "gm",
    "pretty_name": "gm-world rollup",
    "status": "live",
    "network_type": "testnet",
    "bech32_prefix": "gm",
    "daemon_name": "gmd",
    "node_home": "$HOME/.gm",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "stake",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "http://163.172.162.109:26657",
          "provider": "JCS"
        }
      ],
      "rest": [
        {
          "address": "http://localhost:1317",
          "provider": "JCS"
        }
      ]
    },
    "beta": true,
  }
