const server = require('./src/app');
const { port } = require('./src/lib/config');

try {
    server.listen(port, () => {
        console.log(`server running on port ${port}`);
    })
} catch (error) {
    console.log(error)
}
