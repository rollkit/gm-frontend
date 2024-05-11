export const assetlist = {
    "$schema": "../../assetlist.schema.json",
    "chain_name": "gm-rollup",
    "chain-id": "gm",
    "assets": [
      {
        "description": "The native token of the gm rollup chain.",
        "denom_units": [
          {
            "denom": "stake",
            "exponent": 6
          }
        ],
        "base": "stake",
        "name": "gm rollup token",
        "display": "stake",
        "symbol": "STAKE",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/jcstein/gm-portal/b030ce3fe548d188fbacb6b932d7e51dc7afd65e/frontend/public/gm.svg"
        }
      }
    ]
  }
