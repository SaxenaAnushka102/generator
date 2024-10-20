import { File } from '@asyncapi/generator-react-sdk';

// notice that now the template not only gets the instance of parsed AsyncAPI document but also the parameters
export default function ({ asyncapi, params }) {
 
  return (
    <File name="client.py">
      {`import paho.mqtt.client as mqtt

mqttBroker = "${asyncapi.servers().get(params.server).url()}"

class TemperatureServiceClient:
    def __init__(self):
        self.client = mqtt.Client()
        self.client.connect(mqttBroker)


    def sendTemperatureChange(self, id):
        topic = "temperature/changed"
        self.client.publish(topic, id)`}
    </File>
  )
}