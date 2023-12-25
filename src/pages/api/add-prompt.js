export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Get the form data from the request body
        const { prompt, category, description, expected } = req.body

        try {
            // Insert the data into the database
            // TODO: Add database logic here:
            // await database.insert({ prompt, category, description, expected })

            // Send a success response
            res.status(200).json({ success: true })
        } catch (error) {
            // If there's an error, send an error response
            res.status(500).json({ success: false, message: error.message })
        }
    } else {
        // If the method isn't POST, return an error
        res.status(405).json({ message: 'Method not allowed' })
    }
}