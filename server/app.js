import express from 'express';

const app = express()
app.use(express.static('../client/build'))


const start = async () => {
    try {
        app.listen(3001, () => {
            console.log(`Server started on port 3001`)
        })
    } catch (error) {
    }
}


start()

