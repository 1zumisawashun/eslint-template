import { Option } from '@/functions/types/Common'

export const useSlack = () => {
  const url = import.meta.env.VITE_SLACK_INCOMING_WEBHOOK_URL

  const getSlackContent = (options: Option[]) => {
    const blocks = options.map((option) => {
      return {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*${option.label}*\n${option.value}`
        }
      }
    })
    return { blocks }
  }

  const postSlackNotification = (options: Option[]) => {
    if (!url) return

    const res = getSlackContent(options)

    fetch(url, {
      method: 'POST',
      headers: undefined,
      body: JSON.stringify(res)
    })
  }

  return { postSlackNotification }
}
