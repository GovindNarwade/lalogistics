const DRS = require("../model/menifest_model")
exports.drviers = async (req,res)=>{
    const driver  = await DRS.aggregate([
        { "$lookup": {
          "from": "customers",
          "let": { "CustomerName": "$CustomerName" },
          "pipeline": [
            { "$facet": {
              "totaldues": [
                { "$match": {
                  "$expr": {

                    "$and": [
                      { "$eq": ["$CustomerName", "$$CustomerName"] },
                     
                    ]
                  }
                }},
                
               
              ],
            
            }}
          ],
          "as": "Customer"
        }
      }
      ])
}
[
  { "$match": { "clinic_id": "2", "status": { "$eq": true }}},
  { "$lookup": {
    "from": "notifications",
    "let": { "patient": "$patientId", "clinic_id": "$clinic_id" },
    "pipeline": [
      { "$match": {
        "$expr": {
          "$and": [
            { "$eq": ["$patientId", "$$patientId"] },
            { "$eq": ["$branchId", "$$clinic_id"] }
          ]
        },
        "acknowleged": false
      }}
    ],
    "as": "notif"
  }}
]
[
  {
    '$search': {
      'index': 'string', 
      'text': {
        'query': 'string', 
        'path': 'string'
      }
    }
  }
]