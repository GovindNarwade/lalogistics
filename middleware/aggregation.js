const{ users,group} = require("../model")
    export default async (req, res) => {
        try {
          const pipeline = [
            {
              '$lookup' : {
                  'from' : 'groups',
                  'localField' : 'GroupId',
                  'foreignField' : 'GroupName',
                  'as' : 'groups'
              }
            }
          ]
      
          const { db } = await connectToDatabase()
          const posts = await db.collection('admins').aggregate(pipeline).toArray();
          return res.json({ ...posts })
        } catch (error) {
          return res.json({ error })
        }
    }