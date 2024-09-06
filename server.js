const WebSocket = require('ws');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);

        const gasLevel = parseInt(message, 10);
        if (gasLevel > 270 && gasLevel < 1000) {
            // Notificar via WebSocket
            ws.send(JSON.stringify({
                type: 'alert',
                message: 'ATENÇÃO: Nível de Gás ALTO!'
            }));
        }

        // Envia a mensagem para todos os clientes conectados
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.on('error', (error) => {
        console.error(`WebSocket error: ${error.message}`);
    });
});

server.listen(process.env.PORT || 8080, () => {
    console.log('Server is running');
});
