import { NextApiRequest, NextApiResponse } from "next";



export async function GET (req: NextApiRequest, res: NextApiResponse) {
    res.json({
        message: "Heloo"
    })
}


export async function POST (req: NextApiRequest, res: NextApiResponse) {
    res.json({
        message: "hahah"
    })
}

module.exports = {
    GET, POST
}