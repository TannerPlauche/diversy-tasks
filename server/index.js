const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 8080
const app = express();
TaskRouter = require('./controllers/task-controller');

app.use(cors());
app.use(bodyParser.json());
app.use('/api/tasks', TaskRouter);
app.use('/home', (req, res) => res.sendFile(path.resolve('./build/index.html')))
app.use('/', express.static((path.resolve('./build'))));



app.listen(port, () => console.log(`Listening on port ${port}`));

