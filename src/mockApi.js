export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const mockApi = {
  async getNumberOfPros(dayOfMonth) {
    await delay(500)
    return dayOfMonth % 5
  }
}

export default mockApi