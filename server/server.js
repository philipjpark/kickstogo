import express from 'express'
import cors from 'cors'
import sneakersRoutes from './routes/sneakers.js'



// create express app
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">👟 Kicks To Go API</h1>')
})

app.use('/api/sneakers', sneakersRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
})