import logger from 'logging-starter'
import type { MqttClient as MqttClientType } from 'mqtt'
import { Config } from './config/config'
import { apiConfig } from './config/apiConfig'
import mqtt from 'mqtt'
import type { MqttPacket, Widget } from './typing/widget'

const createTopic = (widget: Widget, topic: string): string => {
  const topicName = topic ? `/${topic}` : ''
  return `project/${widget.projectId}${topicName}`
}

export class MqttClient {
  private static readonly client: MqttClient = new MqttClient()
  private readonly mqttClient: MqttClientType

  private constructor() {
    this.mqttClient = mqtt.connect(apiConfig.mqttUrl, {
      clientId: 'cloud-bff',
      clean: true,
      username: Config.mqttUsername,
      password: Config.mqttPassword,
      connectTimeout: 4000,
      reconnectPeriod: 1000
    })
    this.init()
  }

  init(): void {
    this.mqttClient.on('connect', () => {
      logger.info({ message: 'Successfully connected with mqtt' })
    })

    this.mqttClient.on('disconnect', () => {
      logger.error({ errorMessage: 'Disconnected with mqtt' })
    })
  }

  publish(topic: string, message: Record<string, unknown> = {}): Promise<MqttPacket> {
    return this.mqttClient
      .publishAsync(topic, JSON.stringify(message), { qos: 1 })
      .logOnSuccess({ message: 'Successfully published topic', data: { topic, message } })
      .logOnError({ errorMessage: 'Successfully published topic', data: { topic, message } })
  }

  updateWidget(widget: Widget): Promise<MqttPacket> {
    const topicName = createTopic(widget, 'UPDATE_WIDGET')
    return this.publish(topicName, widget)
  }

  static getInstance(): MqttClient {
    return this.client
  }
}
