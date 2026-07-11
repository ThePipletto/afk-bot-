const logs = [];

function addLog(message) {
  const timestamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  const logEntry = `[${timestamp}] ${message}`;
  logs.push(logEntry);
  console.log(logEntry);
  if (logs.length > 100) logs.shift(); // Son 100 logu tutar
}

function getLogs() {
  return logs;
}

module.exports = { addLog, getLogs };
