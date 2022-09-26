const BOTS_USER_AGENTS = [
  'googlebot',
  'google-structured-data-testing-tool',
  'bingbot',
  'linkedinbot',
  'mediapartners-google',
  'yandexbot'
]

const checkUserAgent = (userAgent: string): boolean => {
  const isBot = BOTS_USER_AGENTS.some(bot =>
    userAgent.toLowerCase().includes(bot)
  )
  if (isBot) {
    return true
  }
  return false
}

export default checkUserAgent
