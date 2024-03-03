export default function logInfo(message) {
    console.log('%c INFO: %c', 'color: #ffffff ; font-weight: bold ; background-color: red ', message);
    console.info(message);
  }